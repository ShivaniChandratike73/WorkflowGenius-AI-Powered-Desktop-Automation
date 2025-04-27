
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Copy, Play, ThumbsUp } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ExampleCardProps {
  title: string;
  description: string;
  applications: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  timeToRun: string;
  likes: number;
  image?: string;
}

const ExampleCard = ({
  title,
  description,
  applications,
  difficulty,
  timeToRun,
  likes,
  image
}: ExampleCardProps) => {
  const { toast } = useToast();
  
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-500/20 text-green-500 border-green-500/30';
      case 'Intermediate':
        return 'bg-amber-500/20 text-amber-500 border-amber-500/30';
      case 'Advanced':
        return 'bg-red-500/20 text-red-500 border-red-500/30';
      default:
        return 'bg-gray-500/20 text-gray-500 border-gray-500/30';
    }
  };
  
  const handleClone = () => {
    toast({
      title: "Example Cloned",
      description: `"${title}" has been cloned to your workflows.`,
    });
  };
  
  const handleRunDemo = () => {
    toast({
      title: "Running Demo",
      description: `Starting "${title}" demonstration...`,
    });
    
    // Simulate workflow execution
    let appIndex = 0;
    const appInterval = setInterval(() => {
      if (appIndex >= applications.length) {
        clearInterval(appInterval);
        setTimeout(() => {
          toast({
            title: "Demo Complete",
            description: "Example workflow completed successfully!",
          });
        }, 1000);
        return;
      }
      
      toast({
        title: `Using ${applications[appIndex]}`,
        description: `Executing automated tasks with ${applications[appIndex]}...`,
      });
      
      appIndex++;
    }, 1500);
  };

  return (
    <Card className="overflow-hidden">
      {image && (
        <div className="w-full h-40 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center"
          />
        </div>
      )}
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle>{title}</CardTitle>
          <Badge className={getDifficultyColor(difficulty)}>
            {difficulty}
          </Badge>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {applications.map((app, index) => (
            <Badge key={index} variant="outline" className="bg-brand-light/10">
              {app}
            </Badge>
          ))}
        </div>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center">
            <Clock className="h-3.5 w-3.5 mr-1" />
            <span>{timeToRun}</span>
          </div>
          <div className="flex items-center">
            <ThumbsUp className="h-3.5 w-3.5 mr-1" />
            <span>{likes}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm" onClick={handleClone}>
          <Copy className="h-3.5 w-3.5 mr-1" />
          Clone
        </Button>
        <Button size="sm" onClick={handleRunDemo}>
          <Play className="h-3.5 w-3.5 mr-1" />
          Run Demo
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ExampleCard;
