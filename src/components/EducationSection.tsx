import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface Education {
  degree: string;
  institution: string;
  location: string;
  year: string;
  percentage: string;
}

const EducationSection = () => {
  const education: Education[] = [
    {
      degree: "B.Tech (Currently Pursuing)",
      institution: "JNTU-GV",
      location: "Vizianagaram",
      year: "2023-2027",
      percentage: "8.00 CGPA"
    },
    {
      degree: "Intermediate",
      institution: "Prathiba Junior College",
      location: "Rajahmundry",
      year: "2021-2023",
      percentage: "88%"
    },
    {
      degree: "SSC",
      institution: "Bhashyam Talent School",
      location: "Rajahmundry",
      year: "2021",
      percentage: "99%"
    }
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4 text-white">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-space-primary via-cosmic-blue to-space-secondary hidden md:block"></div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <Card key={index} className="space-card relative ml-0 md:ml-20 group hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                  {/* Timeline dot */}
                  <div className="absolute -left-[4.5rem] top-8 w-4 h-4 bg-gradient-to-r from-space-primary to-cosmic-blue rounded-full border-4 border-background hidden md:block group-hover:scale-150 transition-transform duration-300"></div>
                  
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div className="flex items-center gap-3 mb-2 md:mb-0">
                        <div className="p-2 rounded-lg bg-gradient-to-r from-space-primary/20 to-cosmic-blue/20">
                          <GraduationCap className="h-6 w-6 text-cosmic-blue" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground">
                          {edu.degree}
                        </h3>
                      </div>
                      <div className="text-2xl font-bold text-space-primary">
                        {edu.percentage}
                      </div>
                    </div>

                    <div className="space-y-2 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-cosmic-blue" />
                        <span>{edu.institution}, {edu.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-cosmic-blue" />
                        <span>{edu.year}</span>
                      </div>
                    </div>
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

export default EducationSection;