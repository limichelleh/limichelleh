import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const Articles = () => {
  const articles = [
    {
      title: "The Future of Voice User Interfaces in UX Design",
      excerpt: "Exploring how voice technology is reshaping user interactions and what designers need to know about conversational UI patterns.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Voice UX",
      featured: true
    },
    {
      title: "Accessibility-First Design: More Than Just Compliance",
      excerpt: "Why designing for accessibility from the start creates better experiences for everyone, not just users with disabilities.",
      date: "2024-01-02",
      readTime: "6 min read",
      category: "Accessibility"
    },
    {
      title: "User Research in Remote Teams: Tools and Best Practices",
      excerpt: "Practical strategies for conducting effective user research when your team is distributed across different locations and time zones.",
      date: "2023-12-18",
      readTime: "10 min read",
      category: "Research Methods"
    },
    {
      title: "Design Systems That Scale: Lessons from 5 Years of Experience",
      excerpt: "Key insights on building and maintaining design systems that can grow with your organization without becoming unwieldy.",
      date: "2023-12-05",
      readTime: "12 min read",
      category: "Design Systems"
    },
    {
      title: "The Psychology Behind Micro-interactions",
      excerpt: "Understanding how small design details can significantly impact user perception and engagement in digital products.",
      date: "2023-11-20",
      readTime: "7 min read",
      category: "Interaction Design"
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">
              Articles
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Thoughts on UX design, user research, and the evolving digital landscape. 
              Sharing insights from the field.
            </p>
          </header>

          <div className="space-y-6">
            {articles.map((article, index) => (
              <Card 
                key={index} 
                className={`group hover:shadow-card transition-all duration-300 cursor-pointer ${
                  article.featured ? 'border-sky shadow-card' : ''
                }`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <Badge 
                      variant={article.featured ? "default" : "secondary"}
                      className="text-xs"
                    >
                      {article.category}
                    </Badge>
                    {article.featured && (
                      <Badge variant="outline" className="text-xs text-sky border-sky">
                        Featured
                      </Badge>
                    )}
                  </div>
                  
                  <h2 className="text-xl md:text-2xl font-semibold text-navy group-hover:text-primary transition-colors">
                    {article.title}
                  </h2>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(article.date)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    
                    <Button variant="ghost" size="sm" className="group/btn">
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Want to discuss UX topics or collaborate on an article?
            </p>
            <Button variant="outline" size="lg">
              Get in Touch
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Articles;