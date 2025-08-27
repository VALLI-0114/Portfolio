import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
}

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      title: "To-do List Web App",
      description: "A responsive task management application built with HTML and CSS featuring clean UI design and smooth interactions.",
      technologies: ["HTML", "CSS"],
      githubLink: "https://github.com/VALLI-0114/list.git"
    },
    {
      title: "Image Slider App",
      description: "Interactive image carousel with smooth transitions and responsive design for optimal viewing experience.",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/VALLI-0114/slider.git"
    },
    {
      title: "Weather API Application",
      description: "Dynamic weather application using Flask framework with real-time weather data integration and location-based forecasts.",
      technologies: ["Python", "Flask", "API"],
      githubLink: "https://github.com/VALLI-0114/weather.git"
    },
    {
      title: "Weather App Frontend",
      description: "Clean and intuitive weather interface with modern design patterns and responsive layout.",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/VALLI-0114/Codec.git"
    },
    {
      title: "Simple Banking System",
      description: "Core banking operations simulator with account management, transactions, and balance tracking functionality.",
      technologies: ["Python"],
      githubLink: "https://github.com/VALLI-0114/simple-banking.git"
    },
    {
      title: "Netflix Dashboard",
      description: "Comprehensive data visualization dashboard analyzing Netflix content trends and user engagement metrics.",
      technologies: ["Power BI", "Data Analytics"],
      githubLink: "https://github.com/VALLI-0114/Netflix-Dashboard.git"
    },
    {
      title: "HR Analytics Dashboard",
      description: "Employee performance and HR metrics visualization tool for data-driven workforce management decisions.",
      technologies: ["Power BI", "Analytics"],
      githubLink: "https://github.com/VALLI-0114/HR-ANALYTICS-DASHBOARD.git"
    },
    {
      title: "E-Waste Classifier",
      description: "AI-powered waste classification system using machine learning algorithms with database integration for environmental sustainability.",
      technologies: ["AI", "Python", "Database", "ML"],
      githubLink: "https://github.com/VALLI-0114/E-WASTE.git"
    },
    {
      title: "Eatopia E-commerce Platform",
      description: "Full-stack e-commerce web application for food delivery with modern React frontend and comprehensive backend functionality.",
      technologies: ["React", "Full Stack", "E-commerce"],
      githubLink: "https://github.com/VALLI-0114/Eatopia.git"
    },
    {
      title: "K-Means Clustering on Iris Dataset",
      description: "Machine learning implementation of K-Means clustering algorithm for iris flower classification and data pattern analysis.",
      technologies: ["Python", "Machine Learning", "Scikit-learn"],
      githubLink: "https://github.com/VALLI-0114/K-Means-Clustering.git"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4 text-white">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="space-card group hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] flex flex-col">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-display group-hover:text-blue-400 transition-colors text-white">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <p className="text-gray-300 mb-6 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded border border-blue-500/30 text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400"
                    onClick={() => window.open(project.githubLink, '_blank')}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-purple-500/50 text-purple-400 hover:bg-purple-500/10 hover:border-purple-400"
                    onClick={() => window.open(project.githubLink, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;