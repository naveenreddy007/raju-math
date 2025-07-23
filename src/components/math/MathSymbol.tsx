'use client';

import { motion } from 'framer-motion';
import { mathAnimations } from '@/lib/math-theme';
import { cn } from '@/lib/utils';

interface MathSymbolProps {
  symbol: string;
  className?: string;
  animation?: 'float' | 'rotate' | 'pulse' | 'wave' | 'none';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  delay?: number;
}

const sizeClasses = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
};

export function MathSymbol({ 
  symbol, 
  className, 
  animation = 'float', 
  size = 'md',
  delay = 0 
}: MathSymbolProps) {
  const animationVariant = animation !== 'none' ? {
    ...mathAnimations[animation],
    transition: {
      ...mathAnimations[animation].transition,
      delay,
    }
  } : {};

  return (
    <motion.span
      className={cn(
        'inline-block text-primary font-mono select-none',
        sizeClasses[size],
        className
      )}
      animate={animationVariant}
      initial={animation !== 'none' ? { opacity: 0 } : {}}
      whileInView={animation !== 'none' ? { opacity: 1 } : {}}
      viewport={{ once: true }}
    >
      {symbol}
    </motion.span>
  );
}

export default MathSymbol;