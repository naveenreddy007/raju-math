'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MathEquationProps {
  equation: string;
  className?: string;
  display?: 'inline' | 'block';
  animate?: boolean;
  delay?: number;
}

export function MathEquation({ 
  equation, 
  className, 
  display = 'inline',
  animate = true,
  delay = 0 
}: MathEquationProps) {
  const Component = animate ? motion.div : 'div';
  
  const animationProps = animate ? {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay },
    viewport: { once: true }
  } : {};

  return (
    <Component
      className={cn(
        'font-mono text-primary',
        display === 'block' ? 'block text-center my-4' : 'inline',
        display === 'block' ? 'text-lg' : 'text-base',
        className
      )}
      {...animationProps}
    >
      <span className="math-formula">{equation}</span>
    </Component>
  );
}

export default MathEquation;