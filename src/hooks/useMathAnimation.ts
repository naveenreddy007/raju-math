'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'framer-motion';
import { mathAnimations } from '@/lib/math-theme';

export function useMathAnimation(
  ref: React.RefObject<Element>,
  animationType: keyof typeof mathAnimations = 'float'
) {
  const isInView = useInView(ref, { once: true });
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (isInView) {
      setShouldAnimate(true);
    }
  }, [isInView]);

  return {
    isInView,
    shouldAnimate,
    animation: mathAnimations[animationType],
  };
}

export function useRandomMathSymbol() {
  const [symbol, setSymbol] = useState('π');
  
  useEffect(() => {
    const symbols = ['∑', '∫', '∂', '∆', '∇', '∞', 'π', 'θ', 'α', 'β', 'γ', 'λ'];
    const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
    setSymbol(randomSymbol);
  }, []);

  const getNewSymbol = () => {
    const symbols = ['∑', '∫', '∂', '∆', '∇', '∞', 'π', 'θ', 'α', 'β', 'γ', 'λ'];
    const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
    setSymbol(randomSymbol);
  };

  return { symbol, getNewSymbol };
}

export function useFloatingElements(count: number = 20) {
  const [elements, setElements] = useState<Array<{
    id: string;
    x: number;
    y: number;
    symbol: string;
    delay: number;
    duration: number;
  }>>([]);

  useEffect(() => {
    const symbols = ['∑', '∫', '∂', '∆', '∇', '∞', 'π', 'θ', 'α', 'β', 'γ', 'λ', '√', '±'];
    const newElements = Array.from({ length: count }, (_, i) => ({
      id: `floating-${i}`,
      x: Math.random() * 100,
      y: Math.random() * 100,
      symbol: symbols[Math.floor(Math.random() * symbols.length)],
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 2,
    }));
    
    setElements(newElements);
  }, [count]);

  return elements;
}

export function useMathTheme() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return {
    isDark,
    toggleTheme,
    theme: {
      primary: 'hsl(217, 91%, 60%)',
      secondary: 'hsl(217, 91%, 70%)',
      accent: 'hsl(188, 100%, 44%)',
      background: 'hsl(220, 27%, 6%)',
      foreground: 'hsl(210, 40%, 95%)',
    },
  };
}

export default useMathAnimation;