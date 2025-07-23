'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface MathCardProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  glowing?: boolean;
  delay?: number;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export function MathCard({ 
  title, 
  description, 
  children, 
  className, 
  glowing = false,
  delay = 0,
  icon,
  onClick
}: MathCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      onClick={onClick}
      className={cn(
        'group',
        onClick && 'cursor-pointer',
        glowing && 'hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]',
        className
      )}
    >
      <Card className={cn(
        'border-border/50 bg-card/50 backdrop-blur-sm',
        'transition-all duration-300',
        'hover:border-primary/30 hover:bg-card/70',
        glowing && 'hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]'
      )}>
        <CardHeader className="space-y-2">
          <div className="flex items-center gap-3">
            {icon && (
              <div className="text-primary text-xl">
                {icon}
              </div>
            )}
            <CardTitle className="text-foreground group-hover:text-primary transition-colors">
              {title}
            </CardTitle>
          </div>
          {description && (
            <CardDescription className="text-muted-foreground">
              {description}
            </CardDescription>
          )}
        </CardHeader>
        <CardContent>
          {children}
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default MathCard;