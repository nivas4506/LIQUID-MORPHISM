"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface LiquidGlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  glow?: boolean;
  className?: string;
}

export function LiquidGlassCard({
  children,
  glow = false,
  className,
  ...props
}: LiquidGlassCardProps) {
  return (
    <motion.div
      className={cn(
        "relative rounded-[32px] overflow-hidden glass p-8 transition-colors duration-500",
        glow && "before:absolute before:inset-0 before:rounded-[32px] before:bg-linear-to-b before:from-white/10 before:to-transparent before:pointer-events-none",
        className
      )}
      {...props}
    >
      {glow && (
        <div className="absolute inset-0 rounded-[32px] ring-1 ring-inset ring-white/20 pointer-events-none" />
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
