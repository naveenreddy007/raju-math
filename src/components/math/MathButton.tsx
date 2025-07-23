'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface MathButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'secondary' | 'outline' | 'ghost' | 'mathematical';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  glowing?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export function MathButton({ 
  children, 
  className, 
  variant = 'default',
  size = 'default',
  glowing = false,
  onClick,
  disabled = false,
  type = 'button'
}: MathButtonProps) {
  const mathematicalVariant = variant === 'mathematical';

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      <Button
        variant={mathematicalVariant ? 'default' : variant}
        size={size}
        onClick={onClick}
        disabled={disabled}
        type={type}
        className={cn(
          'relative overflow-hidden transition-all duration-300',
          mathematicalVariant && [
            'bg-gradient-to-r from-primary to-accent',
            'hover:from-primary/90 hover:to-accent/90',
            'text-primary-foreground font-medium',
            'border-0 shadow-lg',
            'hover:shadow-xl hover:shadow-primary/25'
          ],
          glowing && [
            'shadow-[0_0_20px_rgba(59,130,246,0.3)]',
            'hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]'
          ],
          className
        )}
      >
        {mathematicalVariant && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ x: '-100%' }}
            whileHover={{ x: '100%' }}
            transition={{ duration: 0.6 }}
          />
        )}
        <span className="relative z-10">{children}</span>
      </Button>
    </motion.div>
  );
}

export default MathButton;