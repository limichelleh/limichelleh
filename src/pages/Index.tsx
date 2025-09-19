import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Lightbulb, Target } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const highlights = [
    {
      icon: Users,
      title: "User-Centered Design",
      description: "Creating experiences that put users first through research and empathy."
    },
    {
      icon: Lightbulb,
      title: "Innovation & Strategy",
      description: "Transforming complex problems into elegant, accessible solutions."
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Delivering measurable improvements in user engagement and business metrics."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              UX Designer & Researcher
            </Badge>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-navy mb-6 leading-tight">
              Creating meaningful
              <span className="bg-gradient-hero bg-clip-text text-transparent block">
                digital experiences
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Hi, I'm Michelle! I'm a UX designer passionate about solving complex problems 
              through user research, strategic thinking, and thoughtful design.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button size="lg" asChild className="bg-gradient-hero hover:opacity-90 transition-opacity">
                <Link to="/portfolio">
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button variant="outline" size="lg" asChild>
                <Link to="/resume">View Resume</Link>
              </Button>
            </div>

            {/* Portfolio preview image placeholder */}
            <div className="relative max-w-4xl mx-auto">
              <div className="aspect-video bg-gradient-card rounded-lg shadow-elegant p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-sky rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-8 w-8 text-background" />
                  </div>
                  <p className="text-sky-light font-medium">Portfolio Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                Design Philosophy
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                My approach combines rigorous research, creative problem-solving, 
                and strategic thinking to create impactful user experiences.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {highlights.map((highlight, index) => (
                <Card key={index} className="text-center shadow-card hover:shadow-elegant transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-hero rounded-full mx-auto mb-6 flex items-center justify-center">
                      <highlight.icon className="h-8 w-8 text-background" />
                    </div>
                    <h3 className="text-xl font-semibold text-navy mb-4">
                      {highlight.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Let's Create Something Amazing Together
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and collaborate with 
              teams who are passionate about creating exceptional user experiences.
            </p>
            <Button size="lg" className="bg-gradient-hero hover:opacity-90 transition-opacity">
              Get In Touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
