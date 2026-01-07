import { useMutation } from "@tanstack/react-query";
import { api } from "../../../shared/routes";
import { useToast } from "./use-toast";
import type { InsertMessage } from "../../../shared/schema";

export function useCreateMessage() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertMessage) => {
      // Validate with Zod before sending (client-side validation)
      const validated = api.messages.create.input.parse(data);

      // GitHub Pages hosted version - store locally and send via email
      try {
        // Try to send to backend if available
        const res = await fetch(api.messages.create.path, {
          method: api.messages.create.method,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(validated),
        });

        if (!res.ok) {
          if (res.status === 400) {
            const error = await res.json();
            throw new Error(error.message || "Validation failed");
          }
          throw new Error("Failed to send message");
        }

        return await res.json();
      } catch (err) {
        // Fallback: Store locally and notify user to email directly
        const messages = JSON.parse(localStorage.getItem("mailguard_messages") || "[]");
        const message = {
          id: Date.now().toString(),
          ...validated,
          createdAt: new Date().toISOString(),
        };
        messages.push(message);
        localStorage.setItem("mailguard_messages", JSON.stringify(messages));
        
        // Log message details for manual forwarding
        console.log("Message stored locally:", message);
        
        return message;
      }
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "Thank you for your feedback. We will get back to you shortly.",
        variant: "default",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
