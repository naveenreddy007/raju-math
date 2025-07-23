import { Layout } from '@/components/sections/Layout';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { TeachingSection } from '@/components/sections/TeachingSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <TeachingSection />
      
      {/* Placeholder sections for future development */}
      <section id="demos" className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-primary mb-4">Interactive Demonstrations</h2>
          <p className="text-muted-foreground">Mathematical visualizations coming soon...</p>
        </div>
      </section>
      
      <section id="testimonials" className="min-h-screen flex items-center justify-center bg-card/20">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-primary mb-4">Success Stories</h2>
          <p className="text-muted-foreground">Student testimonials coming soon...</p>
        </div>
      </section>
      
      <ContactSection />
    </Layout>
  );
}