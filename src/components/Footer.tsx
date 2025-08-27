import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/30 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © 2025 Kundum Pravallika. Made with{' '}
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            and passion for technology.
          </p>
          <div className="mt-4 text-sm text-muted-foreground/70">
            <span className="aurora-glow bg-clip-text text-transparent font-medium">
              "Exploring the cosmos of code, one project at a time" ✨
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;