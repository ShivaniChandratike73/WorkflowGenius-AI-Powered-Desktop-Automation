
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const features = [
  {
    title: 'Workflow Builder',
    description: 'Drag-and-drop interface for creating automation workflows without coding',
    badges: ['Visual Builder', 'No-Code']
  },
  {
    title: 'Performance Analytics',
    description: 'Measure and compare automation speed against traditional methods',
    badges: ['Metrics', 'Benchmarking']
  },
  {
    title: 'Cross-Application Control',
    description: 'Automate workflows across multiple desktop applications',
    badges: ['Integration', 'Multi-app']
  },
  {
    title: 'Script Generation',
    description: 'Export workflows as executable Terminator scripts in Python or TypeScript',
    badges: ['Export', 'Code Generation']
  },
  {
    title: 'Workflow Templates',
    description: 'Ready-to-use automation templates for common tasks and applications',
    badges: ['Templates', 'Quick Start']
  },
  {
    title: 'Debug & Test Tools',
    description: 'Interactive tools for debugging and testing automation workflows',
    badges: ['Testing', 'Debugging']
  }
];

const FeatureShowcase = () => {
  return (
    <div className="container py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
        Powerful Features
      </h2>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">
        WorkflowGenius combines the power of Terminator with an intuitive interface for creating
        sophisticated automation workflows.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="bg-card/50 border border-border/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {feature.badges.map((badge, badgeIndex) => (
                  <Badge key={badgeIndex} variant="outline" className="bg-brand-light/10">
                    {badge}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FeatureShowcase;
