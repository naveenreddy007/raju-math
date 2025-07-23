'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MathSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function MathSpinner({ size = 'md', className }: MathSpinnerProps) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  const symbols = ['π', '∑', '∫', '∞'];

  return (
    <div className={cn('relative', sizeClasses[size], className)}>
      {symbols.map((symbol, index) => (
        <motion.div
          key={symbol}
          className="absolute inset-0 flex items-center justify-center text-primary font-mono font-bold"
          animate={{
            rotate: 360,
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.5,
            ease: 'linear',
          }}
        >
          {symbol}
        </motion.div>
      ))}
      
      {/* Outer ring */}
      <motion.div
        className="absolute inset-0 border-2 border-primary/20 rounded-full"
        animate={{ rotate: 360 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      
      {/* Inner ring */}
      <motion.div
        className="absolute inset-1 border-2 border-accent/30 rounded-full border-t-accent"
        animate={{ rotate: -360 }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  );
}

export default MathSpinner;