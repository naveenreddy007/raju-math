'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { MathSymbol, MathEquation } from '@/components/math';
import { Button } from '@/components/ui/button';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 98765 43210',
    href: 'tel:+919876543210',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'raja.math@example.com',
    href: 'mailto:raja.math@example.com',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Bangalore, Karnataka',
    href: '#',
  },
  {
    icon: Clock,
    label: 'Available',
    value: 'Mon-Sat, 9AM-8PM',
    href: '#',
  },
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

const quickLinks = [
  { name: 'About Raja', href: '#about' },
  { name: 'Teaching Levels', href: '#teaching' },
  { name: 'Math Demos', href: '#demos' },
  { name: 'Success Stories', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-card/30 border-t border-border/50 overflow-hidden">
      {/* Mathematical Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10">
          <MathSymbol symbol="∫" size="xl" animation="float" />
        </div>
        <div className="absolute top-20 right-20">
          <MathSymbol symbol="∑" size="lg" animation="rotate" />
        </div>
        <div className="absolute bottom-10 left-1/4">
          <MathEquation equation="E = mc²" className="text-lg" />
        </div>
        <div className="absolute bottom-20 right-1/3">
          <MathSymbol symbol="π" size="xl" animation="pulse" />
        </div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <MathSymbol symbol="∑" size="lg" animation="pulse" className="text-primary" />
                <MathSymbol 
                  symbol="π" 
                  size="sm" 
                  animation="rotate" 
                  className="absolute -top-1 -right-1 text-accent" 
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Raja</h3>
                <p className="text-sm text-muted-foreground">Mathematics Educator</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Transforming mathematical learning from LKG to IIT JEE with passion, 
              expertise, and innovative teaching methods.
            </p>
            <div className="flex space-x-2">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={social.label}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    asChild
                  >
                    <a href={social.href} aria-label={social.label}>
                      <social.icon className="w-4 h-4" />
                    </a>
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-foreground mb-4">Contact Info</h4>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => (
                <motion.li
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <info.icon className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground">{info.label}</p>
                    {info.href !== '#' ? (
                      <a
                        href={info.href}
                        className="text-sm text-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm text-foreground">{info.value}</p>
                    )}
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Mathematical Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-foreground mb-4">Mathematical Wisdom</h4>
            <blockquote className="text-sm text-muted-foreground italic mb-4">
              "Mathematics is not about numbers, equations, computations, or algorithms: 
              it is about understanding."
            </blockquote>
            <div className="space-y-2">
              <MathEquation equation="∫ knowledge dx = wisdom + C" className="text-xs" />
              <MathEquation equation="lim(practice → ∞) skill = mastery" className="text-xs" />
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-border/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-sm text-muted-foreground">
            © {currentYear} Raja Mathematics Education. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <MathSymbol symbol="∞" animation="rotate" className="text-primary" />
            <span className="text-xs text-muted-foreground">
              Infinite possibilities through mathematics
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;