'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Award, Users, Clock, BookOpen, Target } from 'lucide-react';
import { MathCard } from '@/components/math/MathCard';
import { useIntersectionObserver } from '@/hooks/useMathAnimation';

const achievements = [
  {
    icon: GraduationCap,
    title: 'M.Sc Mathematics',
    description: 'Advanced degree in Pure Mathematics',
    color: 'text-primary'
  },
  {
    icon: Award,
    title: '8+ Years Experience',
    description: 'Teaching mathematics at all levels',
    color: 'text-accent'
  },
  {
    icon: Users,
    title: '500+ Students',
    description: 'Successfully guided to excellence',
    color: 'text-secondary'
  },
  {
    icon: Target,
    title: '95% Success Rate',
    description: 'In competitive examinations',
    color: 'text-primary'
  }
];

const skills = [
  { name: 'Algebra & Geometry', level: 95 },
  { name: 'Calculus & Analysis', level: 92 },
  { name: 'IIT JEE Preparation', level: 90 },
  { name: 'Board Exam Coaching', level: 98 },
  { name: 'Problem Solving', level: 94 },
  { name: 'Student Mentoring', level: 96 }
];

export const AboutSection = () => {
  const { ref, isIntersecting } = useIntersectionObserver(0.2);

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About <span className="text-primary">Raja</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate mathematics educator dedicated to making complex concepts simple and accessible for every student
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">
                Transforming Mathematical Learning
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                With over 8 years of dedicated teaching experience, I specialize in making mathematics 
                accessible and enjoyable for students from LKG to IIT JEE level. My approach combines 
                traditional teaching methods with modern interactive techniques.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe every student has the potential to excel in mathematics. Through personalized 
                attention, innovative problem-solving techniques, and continuous encouragement, I help 
                students build confidence and achieve their academic goals.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Teaching Philosophy</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Make complex concepts simple and understandable
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  Build strong mathematical foundations
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  Encourage problem-solving and critical thinking
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Provide personalized attention to each student
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Skills Progress */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h4 className="text-xl font-semibold text-foreground mb-6">Expertise Areas</h4>
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-foreground font-medium">{skill.name}</span>
                  <span className="text-primary font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-muted/30 rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-primary to-accent h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={isIntersecting ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Achievements Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {achievements.map((achievement, index) => (
            <MathCard
              key={achievement.title}
              title={achievement.title}
              description={achievement.description}
              delay={index * 0.1}
              glowing
              className="text-center"
            >
              <div className="flex flex-col items-center space-y-3">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <achievement.icon className={`w-8 h-8 ${achievement.color}`} />
                </div>
              </div>
            </MathCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;