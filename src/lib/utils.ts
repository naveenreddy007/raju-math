import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Mathematical utility functions
export const mathUtils = {
  // Generate random mathematical symbols
  getRandomMathSymbol: () => {
    const symbols = ['∑', '∫', '∂', '∆', '∇', '∞', 'π', 'θ', 'α', 'β', 'γ', 'λ', '√', '∴', '∵', '≈', '≠', '≤', '≥', '±', '×', '÷']
    return symbols[Math.floor(Math.random() * symbols.length)]
  },

  // Generate random mathematical equations
  getRandomEquation: () => {
    const equations = [
      'E = mc²',
      'a² + b² = c²',
      'f(x) = ax² + bx + c',
      '∫₀^∞ e^(-x²) dx = √π/2',
      'lim(x→0) sin(x)/x = 1',
      'e^(iπ) + 1 = 0',
      '∑(n=1 to ∞) 1/n² = π²/6',
      'F = ma',
      'PV = nRT',
      'sin²θ + cos²θ = 1'
    ]
    return equations[Math.floor(Math.random() * equations.length)]
  },

  // Generate floating animation delay
  getFloatingDelay: (index: number) => `${index * 0.5}s`,

  // Mathematical easing functions
  easing: {
    easeInQuad: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    easeOutQuad: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
    easeInOutQuad: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
    easeInSine: 'cubic-bezier(0.47, 0, 0.745, 0.715)',
    easeOutSine: 'cubic-bezier(0.39, 0.575, 0.565, 1)',
    easeInOutSine: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)'
  }
}

// Animation variants for Framer Motion
export const animationVariants = {
  fadeIn: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  },
  slideInRight: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }
}

// Mathematical constants and formulas
export const mathConstants = {
  PI: Math.PI,
  E: Math.E,
  GOLDEN_RATIO: (1 + Math.sqrt(5)) / 2,
  EULER_MASCHERONI: 0.5772156649015329
}

// Color utilities for mathematical themes
export const colorUtils = {
  mathBlue: 'hsl(217, 91%, 60%)',
  mathLightBlue: 'hsl(217, 91%, 70%)',
  mathAccent: 'hsl(188, 100%, 44%)',
  mathBackground: 'hsl(220, 27%, 6%)',
  mathCard: 'hsl(220, 27%, 12%)',
  
  // Generate gradient strings
  getGradient: (color1: string, color2: string, direction = 'to right') => 
    `linear-gradient(${direction}, ${color1}, ${color2})`,
  
  // Generate glow effect
  getGlow: (color: string, intensity = 10) => 
    `0 0 ${intensity}px ${color}, 0 0 ${intensity * 2}px ${color}40`
}