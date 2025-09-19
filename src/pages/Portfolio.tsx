import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce Mobile App Redesign",
      description: "Complete UX overhaul of a fashion e-commerce app, resulting in 40% increase in conversion rates.",
      image: "/placeholder.svg",
      tags: ["Mobile Design", "User Research", "Prototyping"],
      type: "UX Design",
      duration: "3 months"
    },
    {
      title: "Financial Dashboard UI",
      description: "Designed an intuitive dashboard for financial advisors to manage client portfolios and track investments.",
      image: "/placeholder.svg", 
      tags: ["Web Design", "Data Visualization", "Design System"],
      type: "UI Design",
      duration: "2 months"
    },
    {
      title: "Healthcare Patient Portal",
      description: "User-centered design for a patient portal that improved appointment booking by 60%.",
      image: "/placeholder.svg",
      tags: ["Healthcare", "Accessibility", "User Testing"],
      type: "UX Research",
      duration: "4 months"
    },
    {
      title: "SaaS Onboarding Flow",
      description: "Streamlined onboarding experience that reduced user drop-off by 35% in the first week.",
      image: "/placeholder.svg",
      tags: ["User Flow", "A/B Testing", "Conversion Optimization"],
      type: "UX Design",
      duration: "6 weeks"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">
              Portfolio
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of user-centered design projects that solve real problems 
              and create meaningful experiences.
            </p>
          </header>

          <div className="grid gap-8 md:gap-12">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden shadow-card hover:shadow-elegant transition-shadow duration-300">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <div className="aspect-video bg-gradient-card p-8 flex items-center justify-center">
                      <div className="w-full h-full bg-sky-light/20 rounded-lg flex items-center justify-center">
                        <span className="text-sky font-medium">Project Image</span>
                      </div>
                    </div>
                  </div>
                  <CardContent className="md:w-1/2 p-6 md:p-8">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary" className="text-xs">
                        {project.type}
                      </Badge>
                      <span className="text-sm text-muted-foreground">
                        {project.duration}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-navy mb-3">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button className="group">
                      View Case Study
                      <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Interested in working together?
            </p>
            <Button size="lg" className="bg-gradient-hero hover:opacity-90 transition-opacity">
              Let's Connect
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;