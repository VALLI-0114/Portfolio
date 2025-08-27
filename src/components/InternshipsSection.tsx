import { Briefcase, Calendar, MapPin, ExternalLink, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Import your logos
import youngbotLogo from '@/assets/Youngobt.jpg'; // Adjust path as needed
import codecLogo from '@/assets/codec.jpeg';   // Adjust path as needed
import edunetLogo from '@/assets/edunet.png'; // Adjust path as needed


interface Internship {
  company: string;
  role: string;
  duration: string;
  location: string;
  status: string;
  type: string;
  offerLetterLink: string;
  logo?: string; // Add an optional logo field
}

const InternshipsSection = () => {
  const internships: Internship[] = [
    {
      company: "Youngbot Academy",
      role: "Web Developer Intern",
      duration: "12th October to 12th November 2024",
      location: "Hyderabad",
      status: "Completed",
      type: "Remote",
      offerLetterLink: "https://www.linkedin.com/posts/kundum-pravallika-4a1249296_youngbotacademy-activity-7259182801470578688-82cL",
      logo: youngbotLogo, // Assign the imported logo
    },
    {
      company: "Youngbot Academy",
      role: "Python Developer Intern",
      duration: "20th November to 20th December 2024",
      location: "Hyderabad",
      status: "Completed",
      type: "Remote",
      offerLetterLink: "https://www.linkedin.com/posts/kundum-pravallika-4a1249296_pythonprogramming-internshipjourney-youngbotacademy-activity-7264850322882199552-1Z6l",
      logo: youngbotLogo, // Assign the imported logo
    },
    {
      company: "CODEC TECHNOLOGIES (Google Partner)",
      role: "Python Developer Intern",
      duration: "16th March to 16th April 2025",
      location: "Remote",
      status: "Completed",
      type: "Remote",
      offerLetterLink: "https://www.linkedin.com/posts/kundum-pravallika-4a1249296_internship-pythondeveloper-codectechnologies-activity-7308029672406011904-jUWj",
      logo: codecLogo, // Assign the imported logo
    },
    {
      company: "Edunet Foundation-AICTE",
      role: "AI & Data Analytics Intern",
      duration: "18th June to 30th July 2025",
      location: "Remote",
      status: "Completed",
      type: "Remote",
      offerLetterLink: "https://www.linkedin.com/posts/kundum-pravallika-4a1249296_edunet-with-ai-and-ml-activity-7345375530596093955-knwc",
      logo: edunetLogo, // Assign the imported logo
    }
  ];

  return (
    <section id="internships" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4 text-white">
            Internships
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-space-primary via-cosmic-blue to-space-secondary hidden md:block"></div>

            <div className="space-y-8">
              {internships.map((internship, index) => (
                <Card key={index} className="space-card relative ml-0 md:ml-20 group hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                  {/* Timeline dot */}
                  <div className="absolute -left-[4.5rem] top-8 w-4 h-4 bg-gradient-to-r from-space-primary to-cosmic-blue rounded-full border-4 border-background hidden md:block group-hover:scale-150 transition-transform duration-300"></div>
                  
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="flex items-center gap-3 mb-2 md:mb-0">
                        <div className="p-2 rounded-lg bg-gradient-to-r from-space-primary/20 to-cosmic-blue/20 flex items-center justify-center">
                          {internship.logo ? (
                            // Render image if logo is provided
                            <img src={internship.logo} alt={`${internship.company} Logo`} className="h-6 w-6 object-contain" />
                          ) : (
                            // Fallback to Briefcase icon if no logo
                            <Briefcase className="h-6 w-6 text-cosmic-blue" />
                          )}
                        </div>
                        <div>
                          <CardTitle className="text-xl font-display group-hover:text-cosmic-blue transition-colors">
                            {internship.role}
                          </CardTitle>
                          <p className="text-lg font-semibold text-space-primary">{internship.company}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span className="text-sm font-medium text-green-500 bg-green-500/10 px-3 py-1 rounded-full">
                          {internship.status}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4 text-cosmic-blue" />
                        <span>{internship.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4 text-cosmic-blue" />
                        <span>{internship.location} ({internship.type})</span>
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      className="border-cosmic-blue/50 hover:bg-cosmic-blue/10"
                      onClick={() => window.open(internship.offerLetterLink, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Offer Letter
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternshipsSection;