import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Download } from "lucide-react";

const Resume = () => {
  const experience = [
    {
      title: "Senior UX Designer",
      company: "TechFlow Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      responsibilities: [
        "Led UX design for 3 major product initiatives, resulting in 45% increase in user engagement",
        "Established design system adopted across 8 product teams",
        "Mentored 2 junior designers and conducted weekly design reviews",
        "Collaborated with product and engineering teams in agile environment"
      ]
    },
    {
      title: "UX Researcher & Designer",
      company: "Digital Innovations Inc.",
      location: "Austin, TX",
      period: "2020 - 2022",
      responsibilities: [
        "Conducted user research studies with 200+ participants across 5 different user segments",
        "Designed and prototyped mobile and web applications using Figma and Adobe Creative Suite",
        "Improved conversion rates by 30% through iterative design and A/B testing",
        "Created detailed user personas and journey maps for product strategy"
      ]
    },
    {
      title: "Junior UX Designer",
      company: "StartUp Collective",
      location: "Portland, OR",
      period: "2018 - 2020",
      responsibilities: [
        "Designed user interfaces for 4 different SaaS products",
        "Conducted usability testing sessions and synthesized findings into actionable insights",
        "Created wireframes, prototypes, and high-fidelity mockups",
        "Worked closely with developers to ensure design implementation quality"
      ]
    }
  ];

  const education = [
    {
      degree: "Master of Science in Human-Computer Interaction",
      school: "University of Washington",
      location: "Seattle, WA",
      year: "2018"
    },
    {
      degree: "Bachelor of Arts in Psychology",
      school: "University of California, Berkeley",
      location: "Berkeley, CA", 
      year: "2016"
    }
  ];

  const skills = {
    "Design Tools": ["Figma", "Adobe Creative Suite", "Sketch", "InVision", "Miro"],
    "Research Methods": ["User Interviews", "Usability Testing", "Survey Design", "A/B Testing", "Card Sorting"],
    "Technical": ["HTML/CSS", "JavaScript Basics", "Design Systems", "Responsive Design", "Accessibility Standards"],
    "Soft Skills": ["Team Leadership", "Cross-functional Collaboration", "Presentation Skills", "Strategic Thinking"]
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">
              Michelle Li
            </h1>
            <h2 className="text-xl text-muted-foreground mb-6">
              Senior UX Designer & Researcher
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-1">
                <Mail className="h-4 w-4" />
                <span>michelle.rodriguez@email.com</span>
              </div>
            </div>
            <Button className="bg-gradient-hero hover:opacity-90 transition-opacity">
              <Download className="mr-2 h-4 w-4" />
              Download PDF Resume
            </Button>
          </header>

          {/* Experience */}
          <section className="mb-12">
            <h3 className="text-2xl font-semibold text-navy mb-6">Experience</h3>
            <div className="space-y-6">
              {experience.map((job, index) => (
                <Card key={index} className="shadow-card">
                  <CardHeader className="pb-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                      <div>
                        <h4 className="text-lg font-semibold text-navy">{job.title}</h4>
                        <p className="text-muted-foreground">{job.company}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">{job.period}</p>
                        <p className="text-sm text-muted-foreground">{job.location}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      {job.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex}>{responsibility}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="mb-12">
            <h3 className="text-2xl font-semibold text-navy mb-6">Education</h3>
            <div className="grid gap-4 md:gap-6">
              {education.map((edu, index) => (
                <Card key={index} className="shadow-card">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                      <div>
                        <h4 className="font-semibold text-navy">{edu.degree}</h4>
                        <p className="text-muted-foreground">{edu.school}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">{edu.year}</p>
                        <p className="text-sm text-muted-foreground">{edu.location}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section>
            <h3 className="text-2xl font-semibold text-navy mb-6">Skills</h3>
            <div className="grid gap-6 md:grid-cols-2">
              {Object.entries(skills).map(([category, skillList]) => (
                <Card key={category} className="shadow-card">
                  <CardHeader className="pb-4">
                    <h4 className="font-semibold text-navy">{category}</h4>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Resume;