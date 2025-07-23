import { Layout } from '@/components/sections/Layout';
import { HeroSection } from '@/components/sections/HeroSection';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      
      {/* Placeholder sections for now */}
      <section id="about" className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-primary mb-4">About Raja</h2>
          <p className="text-muted-foreground">Coming soon...</p>
        </div>
      </section>
      
      <section id="teaching" className="min-h-screen flex items-center justify-center bg-card/20">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-primary mb-4">Teaching Expertise</h2>
          <p className="text-muted-foreground">Coming soon...</p>
        </div>
      </section>
      
      <section id="demos" className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-primary mb-4">Interactive Demonstrations</h2>
          <p className="text-muted-foreground">Coming soon...</p>
        </div>
      </section>
      
      <section id="testimonials" className="min-h-screen flex items-center justify-center bg-card/20">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-primary mb-4">Success Stories</h2>
          <p className="text-muted-foreground">Coming soon...</p>
        </div>
      </section>
      
      <section id="contact" className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-primary mb-4">Contact</h2>
          <p className="text-muted-foreground">Coming soon...</p>
        </div>
      </section>
    </Layout>
  );
}