import { Award, ExternalLink, Trophy } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// --- Step 1: Import the issuer logos ---
// Course Certificate Logos
import infosysLogo from '@/assets/is.avif'; // Adjust path as needed
import isacLogo from '@/assets/isac.png';
import accentureLogo from '@/assets/acc.jpg';
import ciscoLogo from '@/assets/cisco.png';
import simplilearnLogo from '@/assets/simple.jpg';

// Internship Certificate Logos (for consistency)
import youngbotLogo from '@/assets/Youngobt.jpg';
import codecLogo from '@/assets/codec.jpeg';
import edunetLogo from '@/assets/edunet.png';


// --- Step 2: Update the Certificate interface ---
interface Certificate {
  title: string;
  issuer: string;
  link: string;
  issuerLogo?: string; // Add optional logo property
}

const CertificationsSection = () => {
  // --- Step 3: Add logos to your data arrays ---
  const internshipCertificates: Certificate[] = [
    {
      title: "Web Development",
      issuer: "Youngbot Academy",
      link: "https://www.linkedin.com/posts/kundum-pravallika-4a1249296_firstinternship-navyasree-youngbotacademy-activity-7263601336250703872-XP4B",
      issuerLogo: youngbotLogo,
    },
    {
      title: "Python Programming",
      issuer: "Youngbot Academy",
      link: "https://www.linkedin.com/posts/kundum-pravallika-4a1249296_pythonprogramming-codemastery-projectbuilding-activity-7276794436792004608-jVql",
      issuerLogo: youngbotLogo,
    },
    {
      title: "Python Developer Intern",
      issuer: "Codec Technologies",
      link: "https://www.linkedin.com/posts/kundum-pravallika-4a1249296_pythondeveloper-internshipexperience-pythonprogramming-activity-7318194667127267328-BhUC",
      issuerLogo: codecLogo,
    },
    {
      title: "AI and Data Analytics",
      issuer: "Edunet Foundation",
      link: "https://www.linkedin.com/posts/kundum-pravallika-4a1249296_edunet-foundation-activity-7357647114773913600-vb3p",
      issuerLogo: edunetLogo,
    }
  ];

  const courseCertificates: Certificate[] = [
    {
      title: "Front End Web Developer",
      issuer: "Infosys Springboard",
      link: "https://drive.google.com/file/d/1OxTr3LEboAIisYQnPb64llHu1YmeUf7H/view?usp=sharing",
      issuerLogo: infosysLogo,
    },
    {
      title: "Fundamentals of Sequence Model: Artificial Neural Networks",
      issuer: "Infosys Springboard",
      link: "https://drive.google.com/file/d/1UiB2NxdOr58EA-RgVrslA9_xPDY_xW0_/view?usp=sharing",
      issuerLogo: infosysLogo,
    },
    {
      title: "ISAC Certified Cyber Crime Intervention Officer (CICO) and Professional Ethics (CPEW)",
      issuer: "ISAC",
      link: "https://www.linkedin.com/posts/kundum-pravallika-4a1249296_cybersecurity-cico-cpew-activity-7330972980069486592-5sSg",
      issuerLogo: isacLogo,
    },
    {
      title: "Data Analytics and Visualization Job Simulation",
      issuer: "Accenture",
      link: "https://www.linkedin.com/posts/kundum-pravallika-4a1249296_thankyouaccenture-dataanalytics-certified-activity-7332292977840529409-0_tg",
      issuerLogo: accentureLogo,
    },
    {
      title: "Introduction to Modern AI Course",
      issuer: "Cisco Academy",
      link: "https://www.linkedin.com/posts/kundum-pravallika-4a1249296_ai-cisconetworkingacademy-artificialintelligence-activity-7341744202839412738-5Iws",
      issuerLogo: ciscoLogo,
    },
    {
      title: "ReactJS for Beginners",
      issuer: "Simplilearn",
      link: "https://www.linkedin.com/posts/kundum-pravallika-4a1249296_reactjs-activity-7352886627116961792-sVn7",
      issuerLogo: simplilearnLogo,
    }
  ];

  // --- Step 4: Update the CertificateCard to render the logo ---
  const CertificateCard = ({ cert }: { cert: Certificate }) => (
    <Card className="space-card group hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
      <CardHeader>
        <div className="flex items-center gap-4">
          <div className="p-2 rounded-lg bg-gradient-to-r from-space-primary/20 to-cosmic-blue/20 flex items-center justify-center h-12 w-12 flex-shrink-0">
            {cert.issuerLogo ? (
              <img src={cert.issuerLogo} alt={`${cert.issuer} logo`} className="h-8 w-8 object-contain" />
            ) : (
              <Award className="h-6 w-6 text-cosmic-blue" />
            )}
          </div>
          <div className="flex-1">
            <CardTitle className="text-lg font-display group-hover:text-cosmic-blue transition-colors line-clamp-2">
              {cert.title}
            </CardTitle>
            <p className="text-space-primary font-medium">{cert.issuer}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Button
          variant="outline"
          size="sm"
          className="w-full border-cosmic-blue/50 hover:bg-cosmic-blue/10"
          onClick={() => window.open(cert.link, '_blank')}
        >
          <ExternalLink className="h-4 w-4 mr-2" />
          View Certificate
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <section id="certifications" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4 text-white">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="internships" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-secondary/50">
              <TabsTrigger value="internships" className="text-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-space-primary data-[state=active]:to-cosmic-blue data-[state=active]:text-white">
                <Trophy className="h-5 w-5 mr-2" />
                Internship Certificates
              </TabsTrigger>
              <TabsTrigger value="courses" className="text-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-space-primary data-[state=active]:to-cosmic-blue data-[state=active]:text-white">
                <Award className="h-5 w-5 mr-2" />
                Course Certificates
              </TabsTrigger>
            </TabsList>

            <TabsContent value="internships">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {internshipCertificates.map((cert, index) => (
                  <CertificateCard key={index} cert={cert} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="courses">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courseCertificates.map((cert, index) => (
                  <CertificateCard key={index} cert={cert} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;