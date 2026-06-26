"use client";

import { useRef, useState } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  primary?: boolean;
  className?: string;
}

export function MagneticButton({
  children,
  primary = true,
  className,
  ...props
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current!.getBoundingClientRect();
    const center = { x: left + width / 2, y: top + height / 2 };
    
    setPosition({
      x: (clientX - center.x) * 0.25,
      y: (clientY - center.y) * 0.25,
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "relative px-8 py-4 rounded-full font-medium tracking-wide transition-all overflow-hidden group",
        primary
          ? "bg-text-main text-bg-base"
          : "glass text-text-main border border-border-glass",
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {primary && (
        <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
      )}
    </motion.button>
  );
}
