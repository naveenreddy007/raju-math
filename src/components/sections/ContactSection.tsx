'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { MathCard } from '@/components/math/MathCard';
import { MathButton } from '@/components/math/MathButton';
import { useIntersectionObserver } from '@/hooks/useMathAnimation';
import { useState } from 'react';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    value: '+91 98765 43210',
    href: 'tel:+919876543210',
    color: 'text-primary'
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'raja.math@email.com',
    href: 'mailto:raja.math@email.com',
    color: 'text-accent'
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Your City, State',
    href: '#',
    color: 'text-secondary'
  },
  {
    icon: Clock,
    title: 'Available',
    value: 'Mon-Sat, 9AM-8PM',
    href: '#',
    color: 'text-primary'
  }
];

export const ContactSection = () => {
  const { ref, isIntersecting } = useIntersectionObserver(0.2);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    level: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your mathematical journey? Contact me for a demo class or consultation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((info, index) => (
                  <MathCard
                    key={info.title}
                    title={info.title}
                    delay={index * 0.1}
                    className="text-center"
                  >
                    <div className="space-y-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                        <info.icon className={`w-6 h-6 ${info.color}`} />
                      </div>
                      <a
                        href={info.href}
                        className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                      >
                        {info.value}
                      </a>
                    </div>
                  </MathCard>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-foreground">Why Choose Me?</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  8+ years of proven teaching experience
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  95% success rate in competitive exams
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  Personalized attention for every student
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Flexible timing and affordable fees
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <MathCard title="Book a Demo Class" glowing>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Student Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                      placeholder="Enter student name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                      placeholder="Enter email address"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                      placeholder="Enter phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Class Level *
                    </label>
                    <select
                      name="level"
                      value={formData.level}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                    >
                      <option value="">Select level</option>
                      <option value="lkg-ukg">LKG - UKG</option>
                      <option value="primary">Primary (1st-5th)</option>
                      <option value="middle">Middle (6th-8th)</option>
                      <option value="high">High School (9th-12th)</option>
                      <option value="iit-jee">IIT JEE Preparation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground resize-none"
                    placeholder="Tell me about your learning goals or any specific requirements..."
                  />
                </div>

                <MathButton
                  type="submit"
                  glowing
                  className="w-full"
                >
                  <Send className="w-4 h-4" />
                  Book Demo Class
                </MathButton>
              </form>
            </MathCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;