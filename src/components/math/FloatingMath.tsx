'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { mathSymbols, mathEquations } from '@/lib/math-theme';
import { MathSymbol } from './MathSymbol';
import { MathEquation } from './MathEquation';

interface FloatingMathProps {
  density?: 'low' | 'medium' | 'high';
  className?: string;
}

interface FloatingElement {
  id: string;
  content: string;
  type: 'symbol' | 'equation';
  x: number;
  y: number;
  delay: number;
  size: 'sm' | 'md' | 'lg';
}

export function FloatingMath({ density = 'medium', className }: FloatingMathProps) {
  const [elements, setElements] = useState<FloatingElement[]>([]);

  useEffect(() => {
    const densityMap = {
      low: 15,
      medium: 25,
      high: 40,
    };

    const count = densityMap[density];
    const newElements: FloatingElement[] = [];

    for (let i = 0; i < count; i++) {
      const isSymbol = Math.random() > 0.3; // 70% symbols, 30% equations
      
      newElements.push({
        id: `math-${i}`,
        content: isSymbol 
          ? mathSymbols[Math.floor(Math.random() * mathSymbols.length)]
          : mathEquations[Math.floor(Math.random() * mathEquations.length)],
        type: isSymbol ? 'symbol' : 'equation',
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 2,
        size: ['sm', 'md', 'lg'][Math.floor(Math.random() * 3)] as 'sm' | 'md' | 'lg',
      });
    }

    setElements(newElements);
  }, [density]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: element.delay, duration: 1 }}
        >
          {element.type === 'symbol' ? (
            <MathSymbol
              symbol={element.content}
              size={element.size}
              animation="float"
              delay={element.delay}
              className="text-muted-foreground/20"
            />
          ) : (
            <MathEquation
              equation={element.content}
              animate={true}
              delay={element.delay}
              className="text-muted-foreground/10 text-xs"
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}

export default FloatingMath;