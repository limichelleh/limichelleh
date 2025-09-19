import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Lock, Eye, EyeOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface PasswordSplashProps {
  onAuthenticated: () => void;
}

const PasswordSplash = ({ onAuthenticated }: PasswordSplashProps) => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  
  // You can change this password as needed
  const correctPassword = "uxdesign2024";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate network delay for better UX
    setTimeout(() => {
      if (password === correctPassword) {
        localStorage.setItem('portfolio-authenticated', 'true');
        onAuthenticated();
        toast({
          title: "Welcome!",
          description: "Access granted to Michelle's portfolio.",
        });
      } else {
        toast({
          title: "Access Denied",
          description: "Incorrect password. Please try again.",
          variant: "destructive",
        });
        setPassword("");
      }
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      
      <Card className="w-full max-w-md shadow-elegant relative z-10">
        <CardHeader className="text-center pb-2">
          <div className="w-16 h-16 bg-gradient-hero rounded-full mx-auto mb-4 flex items-center justify-center">
            <Lock className="h-8 w-8 text-background" />
          </div>
          <h1 className="text-2xl font-semibold text-navy">Portfolio Access</h1>
          <p className="text-muted-foreground">
            Please enter the password to view Michelle's portfolio
          </p>
        </CardHeader>
        
        <CardContent className="pt-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pr-10"
                required
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <Eye className="h-4 w-4 text-muted-foreground" />
                )}
              </Button>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-gradient-hero hover:opacity-90 transition-opacity"
              disabled={isLoading}
            >
              {isLoading ? "Verifying..." : "Enter Portfolio"}
            </Button>
          </form>
          
          <div className="mt-6 pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground text-center">
              Demo password: <code className="bg-muted px-2 py-1 rounded text-xs">uxdesign2024</code>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PasswordSplash;