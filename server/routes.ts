import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import nodemailer from "nodemailer";

const mailTransport = process.env.MAIL_HOST
  ? nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT || 587),
      secure: process.env.MAIL_SECURE === "true",
      auth: process.env.MAIL_USER
        ? {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS,
          }
        : undefined,
    })
  : null;

async function sendFeedbackEmail(payload: { name: string; email: string; message: string }) {
  if (!mailTransport) {
    return;
  }

  const to = process.env.MAIL_TO || "info@mailguard.live";
  const from = process.env.MAIL_FROM || "info@mailguard.live";

  await mailTransport.sendMail({
    from,
    to,
    subject: `Mail Guard feedback from ${payload.name}`,
    text: `Name: ${payload.name}\nEmail: ${payload.email}\n\n${payload.message}`,
  });
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post(api.messages.create.path, async (req, res) => {
    try {
      const input = api.messages.create.input.parse(req.body);
      const message = await storage.createMessage(input);
      try {
        await sendFeedbackEmail(input);
      } catch (emailError) {
        console.warn("Feedback email failed:", emailError);
      }
      res.status(201).json(message);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
        });
      }
      throw err;
    }
  });

  return httpServer;
}
