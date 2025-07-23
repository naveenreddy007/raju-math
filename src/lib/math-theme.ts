// Mathematical Theme Configuration
export interface MathTheme {
  colors: {
    background: string;
    primary: string;
    secondary: string;
    accent: string;
    text: string;
    muted: string;
    card: string;
    border: string;
  };
  animations: {
    duration: {
      fast: number;
      normal: number;
      slow: number;
    };
    easing: {
      default: string;
      bounce: string;
      elastic: string;
    };
  };
  spacing: {
    section: string;
    component: string;
    element: string;
  };
  typography: {
    heading: string;
    body: string;
    math: string;
  };
}

export const mathTheme: MathTheme = {
  colors: {
    background: 'hsl(220, 27%, 6%)',      // Deep dark blue #0a0e1a
    primary: 'hsl(217, 91%, 60%)',        // Bright blue #3b82f6
    secondary: 'hsl(217, 91%, 70%)',      // Light blue #60a5fa
    accent: 'hsl(188, 100%, 44%)',        // Electric blue #06b6d4
    text: 'hsl(210, 40%, 95%)',           // Light gray #f1f5f9
    muted: 'hsl(215, 25%, 27%)',          // Dark gray #64748b
    card: 'hsl(220, 27%, 12%)',           // Slate blue #1e293b
    border: 'hsl(215, 25%, 27%)',         // Border color
  },
  animations: {
    duration: {
      fast: 200,
      normal: 300,
      slow: 600,
    },
    easing: {
      default: 'cubic-bezier(0.4, 0, 0.2, 1)',
      bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      elastic: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    },
  },
  spacing: {
    section: '6rem',
    component: '2rem',
    element: '1rem',
  },
  typography: {
    heading: 'var(--font-geist-sans)',
    body: 'var(--font-geist-sans)',
    math: 'var(--font-geist-mono)',
  },
};

// Mathematical symbols and equations for animations
export const mathSymbols = [
  '∑', '∫', '∂', '∆', '∇', '∞', 'π', 'θ', 'α', 'β', 'γ', 'λ', 'μ', 'σ', 'φ', 'ψ', 'ω',
  '√', '∛', '∴', '∵', '≈', '≠', '≤', '≥', '±', '×', '÷', '∈', '∉', '⊂', '⊃', '∪', '∩',
  '→', '←', '↑', '↓', '↔', '⇒', '⇐', '⇔', '∀', '∃', '∄', '⊕', '⊗', '⊙', '∝', '∼', '≅'
];

export const mathEquations = [
  'E = mc²',
  'a² + b² = c²',
  'f(x) = ax² + bx + c',
  '∫₀^∞ e^(-x²) dx = √π/2',
  'lim(x→0) sin(x)/x = 1',
  'e^(iπ) + 1 = 0',
  '∑(n=1 to ∞) 1/n² = π²/6',
  'F = ma',
  'PV = nRT',
  'sin²θ + cos²θ = 1',
  'log(xy) = log(x) + log(y)',
  'd/dx[sin(x)] = cos(x)',
  '∫ 1/x dx = ln|x| + C',
  'A = πr²',
  'V = 4/3πr³',
  'x = (-b ± √(b²-4ac))/2a',
  'P(A∩B) = P(A)P(B|A)',
  'σ² = E[(X-μ)²]',
  'f\'(x) = lim(h→0) [f(x+h)-f(x)]/h',
  '∇²φ = ∂²φ/∂x² + ∂²φ/∂y² + ∂²φ/∂z²'
];

// Mathematical constants
export const mathConstants = {
  PI: Math.PI,
  E: Math.E,
  GOLDEN_RATIO: (1 + Math.sqrt(5)) / 2,
  EULER_MASCHERONI: 0.5772156649015329,
  SQRT_2: Math.sqrt(2),
  SQRT_3: Math.sqrt(3),
  LN_2: Math.LN2,
  LN_10: Math.LN10,
};

// Teaching levels configuration
export const teachingLevels = [
  {
    id: 'lkg-ukg',
    name: 'LKG - UKG',
    description: 'Foundation building with numbers, shapes, and basic concepts',
    color: 'hsl(120, 70%, 50%)', // Green
    topics: ['Numbers 1-100', 'Basic Shapes', 'Counting', 'Simple Addition/Subtraction'],
    icon: '🔢',
    difficulty: 1,
  },
  {
    id: 'primary',
    name: 'Primary (1st - 5th)',
    description: 'Core mathematical concepts and problem-solving skills',
    color: 'hsl(60, 70%, 50%)', // Yellow
    topics: ['Arithmetic Operations', 'Fractions', 'Geometry Basics', 'Word Problems'],
    icon: '📐',
    difficulty: 2,
  },
  {
    id: 'middle',
    name: 'Middle School (6th - 8th)',
    description: 'Advanced concepts in algebra and geometry',
    color: 'hsl(30, 70%, 50%)', // Orange
    topics: ['Algebra Basics', 'Geometry', 'Ratios & Proportions', 'Statistics'],
    icon: '📊',
    difficulty: 3,
  },
  {
    id: 'high',
    name: 'High School (9th - 12th)',
    description: 'Comprehensive mathematics for board exams',
    color: 'hsl(217, 91%, 60%)', // Blue
    topics: ['Advanced Algebra', 'Trigonometry', 'Calculus', 'Coordinate Geometry'],
    icon: '📈',
    difficulty: 4,
  },
  {
    id: 'iit-jee',
    name: 'IIT JEE Preparation',
    description: 'Intensive training for competitive examinations',
    color: 'hsl(270, 70%, 50%)', // Purple
    topics: ['Complex Numbers', 'Differential Equations', 'Vector Calculus', 'Probability'],
    icon: '🎯',
    difficulty: 5,
  },
];

// Animation presets for mathematical elements
export const mathAnimations = {
  float: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
  rotate: {
    rotate: [0, 360],
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: 'linear',
    },
  },
  pulse: {
    scale: [1, 1.1, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
  wave: {
    y: [0, -5, 0, 5, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
  glow: {
    boxShadow: [
      '0 0 5px hsl(217, 91%, 60%, 0.5)',
      '0 0 20px hsl(217, 91%, 60%, 0.8), 0 0 30px hsl(188, 100%, 44%, 0.6)',
      '0 0 5px hsl(217, 91%, 60%, 0.5)',
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export default mathTheme;