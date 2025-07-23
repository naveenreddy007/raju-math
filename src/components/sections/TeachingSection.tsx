'use client';

import { motion } from 'framer-motion';
import { Baby, BookOpen, Calculator, GraduationCap, Target, ChevronRight } from 'lucide-react';
import { MathCard } from '@/components/math/MathCard';
import { MathButton } from '@/components/math/MathButton';
import { useIntersectionObserver } from '@/hooks/useMathAnimation';
import { useState } from 'react';

const teachingLevels = [
  {
    id: 'lkg-ukg',
    icon: Baby,
    title: 'LKG - UKG',
    subtitle: 'Foundation Building',
    description: 'Building strong mathematical foundations with fun and interactive learning',
    topics: ['Numbers 1-100', 'Basic Shapes', 'Counting & Recognition', 'Simple Addition/Subtraction'],
    color: 'from-green-500 to-emerald-500',
    difficulty: 1
  },
  {
    id: 'primary',
    icon: BookOpen,
    title: 'Primary (1st - 5th)',
    subtitle: 'Core Concepts',
    description: 'Developing core mathematical skills and problem-solving abilities',
    topics: ['Arithmetic Operations', 'Fractions & Decimals', 'Basic Geometry', 'Word Problems'],
    color: 'from-blue-500 to-cyan-500',
    difficulty: 2
  },
  {
    id: 'middle',
    icon: Calculator,
    title: 'Middle School (6th - 8th)',
    subtitle: 'Advanced Learning',
    description: 'Introduction to advanced concepts in algebra and geometry',
    topics: ['Algebra Basics', 'Geometry & Mensuration', 'Ratios & Proportions', 'Statistics'],
    color: 'from-purple-500 to-violet-500',
    difficulty: 3
  },
  {
    id: 'high',
    icon: GraduationCap,
    title: 'High School (9th - 12th)',
    subtitle: 'Board Preparation',
    description: 'Comprehensive mathematics preparation for board examinations',
    topics: ['Advanced Algebra', 'Trigonometry', 'Coordinate Geometry', 'Calculus Basics'],
    color: 'from-orange-500 to-red-500',
    difficulty: 4
  },
  {
    id: 'iit-jee',
    icon: Target,
    title: 'IIT JEE Preparation',
    subtitle: 'Competitive Excellence',
    description: 'Intensive training for IIT JEE and other competitive examinations',
    topics: ['Complex Numbers', 'Differential Equations', 'Vector Calculus', 'Advanced Probability'],
    color: 'from-pink-500 to-rose-500',
    difficulty: 5
  }
];

export const TeachingSection = () => {
  const { ref, isIntersecting } = useIntersectionObserver(0.2);
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);

  return (
    <section id="teaching" className="py-20 bg-card/20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Teaching <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive mathematics education from foundational learning to competitive exam preparation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {teachingLevels.map((level, index) => (
            <motion.div
              key={level.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <MathCard
                title={level.title}
                description={level.description}
                glowing={selectedLevel === level.id}
                className="h-full cursor-pointer transition-all duration-300 hover:scale-105"
                onClick={() => setSelectedLevel(selectedLevel === level.id ? null : level.id)}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${level.color} flex items-center justify-center`}>
                      <level.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full mx-0.5 ${
                            i < level.difficulty ? 'bg-primary' : 'bg-muted'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{level.subtitle}</h4>
                    <p className="text-sm text-muted-foreground mb-4">{level.description}</p>
                  </div>

                  {selectedLevel === level.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-3"
                    >
                      <h5 className="font-medium text-foreground">Key Topics:</h5>
                      <ul className="space-y-2">
                        {level.topics.map((topic, topicIndex) => (
                          <motion.li
                            key={topic}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: topicIndex * 0.1 }}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <ChevronRight className="w-3 h-3 text-primary" />
                            {topic}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}

                  <MathButton
                    variant="outline"
                    size="sm"
                    className="w-full mt-4"
                    onClick={() => setSelectedLevel(selectedLevel === level.id ? null : level.id)}
                  >
                    {selectedLevel === level.id ? 'Show Less' : 'Learn More'}
                  </MathButton>
                </div>
              </MathCard>
            </motion.div>
          ))}
        </div>

        {/* Teaching Approach */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-foreground mb-6">My Teaching Approach</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="font-semibold text-foreground">Personalized Learning</h4>
              <p className="text-sm text-muted-foreground">
                Tailored teaching methods based on individual learning styles and pace
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🧮</span>
              </div>
              <h4 className="font-semibold text-foreground">Interactive Methods</h4>
              <p className="text-sm text-muted-foreground">
                Engaging activities and real-world applications to make math enjoyable
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">📈</span>
              </div>
              <h4 className="font-semibold text-foreground">Progress Tracking</h4>
              <p className="text-sm text-muted-foreground">
                Regular assessments and feedback to ensure continuous improvement
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeachingSection;