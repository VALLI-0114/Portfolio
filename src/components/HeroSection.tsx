import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TypingAnimation from './TypingAnimation';
import heroImage from '@/assets/hero-bg.jpg';
import prav from '@/assets/prav.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Space background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/60"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
        
          {/* Left side - Photo (Wrapped correctly) */}
         {/* Left side - Photo (Wrapped correctly) */}
<div className="flex justify-center lg:justify-center"> {/* Changed from lg:justify-end to lg:justify-start */}
  <div className="relative">
    {/* Image Frame */}
    <div className="w-80 h-80 octagonal-frame bg-gradient-to-br from-space-primary to-space-secondary p-1">
      <div className="w-full h-full octagonal-frame bg-muted flex items-center justify-center overflow-hidden">
        <img
          src={prav}
          alt="Kundum Pravallika"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 octagonal-frame bg-gradient-to-br from-cosmic-blue/20 to-space-primary/20"></div>
      </div>
    </div>
    {/* Glow Effect */}
    <div className="absolute -inset-4 bg-gradient-to-r from-space-primary/20 to-cosmic-blue/20 blur-xl rounded-full"></div>
  </div>
</div>

          {/* Right side - Content */}
          <div className="text-center lg:text-left space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-display font-bold text-white">
                <TypingAnimation 
                  text="Kundum Pravallika" 
                  className="text-white"
                />
              </h1>
              
              <h2 className="text-xl lg:text-2xl text-muted-foreground">
                A passionate Full Stack Developer & AI and Machine Learning Enthusiast
              </h2>
            </div>

            {/* Download Resume Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-gradient-to-r from-space-primary to-cosmic-blue hover:from-space-primary/80 hover:to-cosmic-blue/80 text-white border-0">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center lg:justify-start">
              <a 
                href="https://github.com/VALLI-0114" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-all duration-300 hover:scale-110"
              >
                <Github className="h-6 w-6 text-cosmic-blue group-hover:text-space-primary transition-colors" />
              </a>
              
              <a 
                href="https://www.linkedin.com/in/kundum-pravallika-4a1249296/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-6 w-6 text-cosmic-blue group-hover:text-space-primary transition-colors" />
              </a>
              
              <a 
                href="mailto:pravallikakundum18@gmail.com"
                className="group p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-all duration-300 hover:scale-110"
              >
                <Mail className="h-6 w-6 text-cosmic-blue group-hover:text-space-primary transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
