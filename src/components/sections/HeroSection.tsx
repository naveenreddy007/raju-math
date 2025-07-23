'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Play, BookOpen, Calculator, Target } from 'lucide-react';
import { MathButton, MathSymbol, MathEquation, FloatingMath } from '@/components/math';
import { Button } from '@/components/ui/button';
import { mathEquations } from '@/lib/math-theme';

const typewriterTexts = [
  'Banking & SSC Preparation',
  'CSAT & IPMAT Training',
  'Quantitative Aptitude',
  'Logical Reasoning',
];

function TypewriterText() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = typewriterTexts[currentTextIndex];
      
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % typewriterTexts.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex]);

  return (
    <span className="text-accent">
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="ml-1"
      >
        |
      </motion.span>
    </span>
  );
}

function AnimatedEquation() {
  const [currentEquation, setCurrentEquation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEquation((prev) => (prev + 1) % mathEquations.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      key={currentEquation}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <MathEquation
        equation={mathEquations[currentEquation]}
        display="block"
        className="text-lg md:text-xl text-primary/80"
      />
    </motion.div>
  );
}

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <FloatingMath density="medium" />
      </div>

      {/* Animated Background Shapes */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border-2 border-primary rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 border-2 border-accent"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute top-1/2 left-10 w-16 h-16 bg-primary/20 rounded-full"
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Mathematical Symbols Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center items-center space-x-4 mb-6"
          >
            <MathSymbol symbol="∑" size="xl" animation="float" delay={0} />
            <MathSymbol symbol="∫" size="lg" animation="pulse" delay={0.2} />
            <MathSymbol symbol="π" size="xl" animation="rotate" delay={0.4} />
            <MathSymbol symbol="∞" size="lg" animation="wave" delay={0.6} />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6"
          >
            Master Quantitative Aptitude with{' '}
            <span className="text-primary">K. Raja</span>
          </motion.h1>

          {/* Typewriter Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 h-12"
          >
            Expert in <TypewriterText />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            9+ years of dedicated training experience in Banking, SSC, CSAT, and IPMAT preparation. 
            Transform your competitive exam journey with structured learning and proven strategies.
          </motion.p>

          {/* Animated Equation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-8"
          >
            <AnimatedEquation />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <MathButton
              variant="mathematical"
              size="lg"
              glowing
              onClick={() => scrollToSection('#contact')}
              className="text-lg px-8 py-3"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Start Learning Today
            </MathButton>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('#demos')}
              className="text-lg px-8 py-3 border-primary/30 hover:border-primary hover:bg-primary/10"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">1000+</div>
              <div className="text-muted-foreground">Students Trained</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">9+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">5+</div>
              <div className="text-muted-foreground">Exam Categories</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={() => scrollToSection('#about')}
          className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <ChevronDown className="w-6 h-6" />
        </motion.button>
      </motion.div>

      {/* Mathematical Decorations */}
      <div className="absolute top-10 left-10 opacity-20">
        <MathSymbol symbol="∂" size="lg" animation="float" />
      </div>
      <div className="absolute top-20 right-10 opacity-20">
        <MathSymbol symbol="∇" size="lg" animation="rotate" />
      </div>
      <div className="absolute bottom-20 left-20 opacity-20">
        <MathSymbol symbol="∆" size="lg" animation="pulse" />
      </div>
      <div className="absolute bottom-10 right-20 opacity-20">
        <MathSymbol symbol="θ" size="lg" animation="wave" />
      </div>
    </section>
  );
}

export default HeroSection;