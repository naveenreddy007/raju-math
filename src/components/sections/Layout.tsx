'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Header } from './Header';
import { Footer } from './Footer';
import { FloatingMath } from '@/components/math';

interface LayoutProps {
  children: ReactNode;
  showFloatingMath?: boolean;
}

export function Layout({ children, showFloatingMath = true }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      {/* Floating Mathematical Background */}
      {showFloatingMath && (
        <div className="fixed inset-0 pointer-events-none z-0">
          <FloatingMath density="low" />
        </div>
      )}

      {/* Header */}
      <Header />

      {/* Main Content */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-10 pt-16"
      >
        {children}
      </motion.main>

      {/* Footer */}
      <Footer />

      {/* Background Gradient */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>
    </div>
  );
}

export default Layout;