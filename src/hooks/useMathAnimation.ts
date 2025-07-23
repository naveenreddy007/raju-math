'use client';

import { useEffect, useState, useRef } from 'react';
import { mathSymbols, mathEquations } from '@/lib/math-theme';

// Hook for managing floating mathematical symbols
export const useMathAnimation = () => {
  const [symbols, setSymbols] = useState<Array<{
    id: string;
    symbol: string;
    x: number;
    y: number;
    delay: number;
    duration: number;
  }>>([]);

  useEffect(() => {
    const generateSymbols = () => {
      const newSymbols = Array.from({ length: 20 }, (_, i) => ({
        id: `symbol-${i}`,
        symbol: mathSymbols[Math.floor(Math.random() * mathSymbols.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 4,
      }));
      setSymbols(newSymbols);
    };

    generateSymbols();
  }, []);

  return { symbols };
};

// Hook for typewriter effect
export const useTypewriter = (text: string, speed: number = 100) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!text) return;

    let index = 0;
    setDisplayText('');
    setIsComplete(false);

    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayText(text.slice(0, index + 1));
        index++;
      } else {
        setIsComplete(true);
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return { displayText, isComplete };
};

// Hook for mathematical equation cycling
export const useMathEquations = (interval: number = 3000) => {
  const [currentEquation, setCurrentEquation] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentEquation((prev) => (prev + 1) % mathEquations.length);
        setIsVisible(true);
      }, 300);
    }, interval);

    return () => clearInterval(timer);
  }, [interval]);

  return { 
    equation: mathEquations[currentEquation], 
    isVisible,
    currentIndex: currentEquation 
  };
};

// Hook for scroll-based animations
export const useScrollAnimation = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsScrolling(true);

      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return { scrollY, isScrolling };
};

// Hook for mouse position tracking
export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return mousePosition;
};

// Hook for intersection observer
export const useIntersectionObserver = (
  threshold: number = 0.1,
  rootMargin: string = '0px'
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, rootMargin]);

  return { ref, isIntersecting };
};