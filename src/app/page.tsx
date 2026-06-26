"use client";

import { motion } from "framer-motion";
import { LiquidGlassCard } from "@/components/ui/LiquidGlassCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { DynamicNavbar } from "@/components/layout/DynamicNavbar";
import { Sparkles, Layers, Zap, ArrowRight, ShieldCheck, Cpu } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen pt-20">
      <DynamicNavbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden py-20">
        {/* Animated Background Orbs */}
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-purple/20 rounded-full blur-[120px] animate-float-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[150px]" />

        <div className="container relative z-10 px-6 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/20 mb-8 shadow-lg shadow-primary/10">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium tracking-wide">Introducing LiquidOS</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 max-w-5xl mx-auto leading-tight">
              Design the future with <br className="hidden md:block" />
              <span className="text-gradient">Liquid Glass</span>
            </h1>
            
            <p className="text-xl text-text-muted mb-12 max-w-2xl mx-auto font-light">
              Experience a natively fluid interface. Soft depth, physics-based interactions, and premium materials designed for the modern web.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <MagneticButton className="w-full sm:w-auto px-8 py-4">
                Get Started
              </MagneticButton>
              <MagneticButton primary={false} className="w-full sm:w-auto px-8 py-4 flex items-center justify-center gap-2">
                View Documentation <ArrowRight className="w-4 h-4" />
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Grid */}
      <section id="features" className="py-32 relative z-10">
        <div className="container mx-auto px-6">
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Fluid by Design</h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">Every component is engineered to feel responsive, organic, and perfectly weighted.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Layers className="w-6 h-6 text-purple" />}
              title="Deep Blur Materials"
              description="Native-feeling backdrop blurs with carefully calibrated translucency that adapts to underlying content."
              delay={0}
            />
            <FeatureCard 
              icon={<Zap className="w-6 h-6 text-orange" />}
              title="Physics Animations"
              description="Spring-based motion that feels natural, heavy, and responsive to every micro-interaction."
              delay={0.1}
            />
            <FeatureCard 
              icon={<ShieldCheck className="w-6 h-6 text-green" />}
              title="Accessible First"
              description="High contrast ratios, reduced motion support, and robust keyboard navigation built right in."
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* Showcase Area */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6 max-w-5xl">
          <LiquidGlassCard glow className="aspect-4/3 md:aspect-21/9 flex items-center justify-center text-center">
            <div className="space-y-6 max-w-lg mx-auto">
              <div className="w-16 h-16 rounded-3xl bg-linear-to-tr from-primary to-purple mx-auto flex items-center justify-center shadow-lg shadow-primary/30">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold">Hardware Accelerated</h3>
              <p className="text-text-muted">Optimized to run at a buttery smooth 60fps even on mobile devices. No jank, just liquid motion.</p>
            </div>
          </LiquidGlassCard>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border-glass mt-20 relative z-10">
        <div className="container mx-auto px-6 text-center text-text-muted">
          <p>© {new Date().getFullYear()} LiquidOS. Crafted with Next.js & Framer Motion.</p>
        </div>
      </footer>
    </main>
  );
}

function FeatureCard({ icon, title, description, delay }: { icon: React.ReactNode, title: string, description: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className="h-full"
    >
      <LiquidGlassCard className="h-full hover:-translate-y-2 transition-transform duration-500">
        <div className="w-12 h-12 rounded-2xl bg-surface flex items-center justify-center mb-6 ring-1 ring-border-glass shadow-sm">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-text-muted leading-relaxed">{description}</p>
      </LiquidGlassCard>
    </motion.div>
  );
}
