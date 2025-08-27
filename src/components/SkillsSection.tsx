import { Code, Brain, Users, MessageCircle, Lightbulb, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SkillsSection = () => {
  const technicalSkills = [
    "HTML", "CSS", "JavaScript", "Python", "React", "Power BI", 
    "AI Tools", "Machine Learning (Beginner)", "Flask", "Django", 
    "Vercel", "Git", "SQL"
  ];

  const softSkills = [
    { name: "Leadership", icon: Users },
    { name: "Communication", icon: MessageCircle },
    { name: "Problem-solving", icon: Lightbulb },
    { name: "Critical Thinking", icon: Brain },
    { name: "Team Collaboration", icon: Users },
    { name: "Goal-oriented", icon: Target }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4 text-white">
            Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Technical Skills */}
          <Card className="space-card group hover:shadow-2xl transition-all duration-300">
            <CardHeader className="text-center">
              <div className="mx-auto p-3 rounded-full bg-gradient-to-r from-space-primary/20 to-cosmic-blue/20 w-fit mb-4">
                <Code className="h-8 w-8 text-cosmic-blue" />
              </div>
              <CardTitle className="text-2xl font-display">Technical Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {technicalSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-secondary to-secondary/50 rounded-full text-sm font-medium border border-border/50 hover:from-space-primary/20 hover:to-cosmic-blue/20 hover:border-cosmic-blue/50 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Soft Skills */}
          <Card className="space-card group hover:shadow-2xl transition-all duration-300">
            <CardHeader className="text-center">
              <div className="mx-auto p-3 rounded-full bg-gradient-to-r from-space-secondary/20 to-space-primary/20 w-fit mb-4">
                <Brain className="h-8 w-8 text-space-secondary" />
              </div>
              <CardTitle className="text-2xl font-display">Soft Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {softSkills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-muted/50 to-muted/30 hover:from-space-secondary/20 hover:to-space-primary/20 transition-all duration-300 cursor-default border border-border/30 hover:border-space-secondary/50"
                    >
                      <Icon className="h-5 w-5 text-space-secondary" />
                      <span className="font-medium">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;