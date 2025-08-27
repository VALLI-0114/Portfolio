import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const ContactSection = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/VALLI-0114",
      color: "hover:text-gray-400"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/kundum-pravallika-4a1249296",
      color: "hover:text-blue-400"
    },
    {
      name: "LeetCode",
      icon: "🧩",
      url: "https://leetcode.com/u/pravalli01/",
      color: "hover:text-yellow-400"
    },
    {
      name: "HackerRank",
      icon: "🏆",
      url: "https://www.hackerrank.com/profile/pravallikakundu1",
      color: "hover:text-green-400"
    },
    {
      name: "CodeChef",
      icon: "👨‍💻",
      url: "https://www.codechef.com/users/valli_0114",
      color: "hover:text-orange-400"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4 text-white">
            Contact Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="space-card">
              <CardHeader>
                <CardTitle className="text-2xl font-display">Get In Touch</CardTitle>
                <p className="text-muted-foreground">
                  I'm always open to discussing new opportunities, interesting projects, or just having a friendly conversation about technology.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-space-primary/20 to-cosmic-blue/20">
                    <Mail className="h-6 w-6 text-cosmic-blue" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:pravallikakundum18@gmail.com" className="text-cosmic-blue hover:text-space-primary transition-colors">
                      pravallikakundum18@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-space-primary/20 to-cosmic-blue/20">
                    <MapPin className="h-6 w-6 text-cosmic-blue" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">Vizianagaram, India</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="space-card">
              <CardHeader>
                <CardTitle className="text-xl font-display">Connect With Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex flex-col items-center p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-all duration-300 hover:scale-105 ${link.color} group`}
                    >
                      {typeof link.icon === 'string' ? (
                        <span className="text-2xl mb-2">{link.icon}</span>
                      ) : (
                        <link.icon className="h-8 w-8 mb-2 group-hover:scale-110 transition-transform" />
                      )}
                      <span className="text-sm font-medium">{link.name}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="space-card">
            <CardHeader>
              <CardTitle className="text-2xl font-display">Send Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input 
                      id="name" 
                      placeholder="Your Name" 
                      className="bg-background/50 border-border/50 focus:border-cosmic-blue" 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your.email@example.com" 
                      className="bg-background/50 border-border/50 focus:border-cosmic-blue" 
                      required 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input 
                    id="subject" 
                    placeholder="What's this about?" 
                    className="bg-background/50 border-border/50 focus:border-cosmic-blue" 
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Your message here..." 
                    className="bg-background/50 border-border/50 focus:border-cosmic-blue min-h-[120px]" 
                    required 
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-space-primary to-cosmic-blue hover:from-space-primary/80 hover:to-cosmic-blue/80 text-white border-0"
                  size="lg"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;