import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export function SectionHeading({ 
  title, 
  subtitle, 
  centered = false, 
  light = false,
  className 
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12", centered && "text-center", className)}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={cn(
          "text-3xl md:text-4xl font-bold mb-4",
          light ? "text-white" : "text-secondary"
        )}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={cn(
            "w-20 h-1 mb-6 rounded-full",
            centered ? "mx-auto" : "",
            light ? "bg-white/30" : "bg-primary"
          )}
        />
      )}
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={cn(
            "text-lg max-w-2xl",
            centered ? "mx-auto" : "",
            light ? "text-white/80" : "text-muted-foreground"
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
