
import React from 'react';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import ComparisonChart from '@/components/performance/ComparisonChart';
import MetricsCard from '@/components/performance/MetricsCard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Check, Clock, X } from 'lucide-react';

const taskComparisonData = [
  { name: 'Data Entry', terminator: 0.8, vision: 2.5, manual: 5.2 },
  { name: 'Form Filling', terminator: 1.2, vision: 3.8, manual: 6.5 },
  { name: 'Data Extraction', terminator: 1.5, vision: 4.2, manual: 7.1 },
  { name: 'File Management', terminator: 0.6, vision: 2.1, manual: 3.8 },
  { name: 'Email Sorting', terminator: 0.4, vision: 1.9, manual: 2.7 },
];

const reliabilityData = [
  { name: 'Simple Tasks', terminator: 99, vision: 92, manual: 95 },
  { name: 'Complex Tasks', terminator: 98, vision: 85, manual: 88 },
  { name: 'Variable UI', terminator: 97, vision: 72, manual: 90 },
  { name: 'Across Apps', terminator: 96, vision: 68, manual: 85 },
  { name: 'Overnight Runs', terminator: 99, vision: 75, manual: 0 },
];

const resourceUsageData = [
  { name: 'CPU Usage', terminator: 15, vision: 65, manual: 5 },
  { name: 'Memory', terminator: 25, vision: 70, manual: 10 },
  { name: 'Network', terminator: 5, vision: 40, manual: 0 },
  { name: 'Storage', terminator: 8, vision: 30, manual: 0 },
];

const Performance = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow container py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold tracking-tight">Performance Metrics</h1>
          <p className="text-muted-foreground">
            Compare Terminator's performance with vision-based and manual approaches
          </p>
        </div>
        
        <Tabs defaultValue="speed" className="mb-8">
          <TabsList className="mb-4">
            <TabsTrigger value="speed">
              <Clock className="h-4 w-4 mr-2" />
              Speed
            </TabsTrigger>
            <TabsTrigger value="reliability">
              <Check className="h-4 w-4 mr-2" />
              Reliability
            </TabsTrigger>
            <TabsTrigger value="resource">
              <X className="h-4 w-4 mr-2" />
              Resource Usage
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="speed" className="m-0">
            <ComparisonChart
              title="Task Execution Time"
              description="Average time (in seconds) required to complete common automation tasks"
              data={taskComparisonData}
            />
          </TabsContent>
          
          <TabsContent value="reliability" className="m-0">
            <ComparisonChart
              title="Reliability Comparison"
              description="Success rate (%) across different scenarios and environments"
              data={reliabilityData}
            />
          </TabsContent>
          
          <TabsContent value="resource" className="m-0">
            <ComparisonChart
              title="Resource Utilization"
              description="System resource usage during automation (% of system capacity)"
              data={resourceUsageData}
            />
          </TabsContent>
        </Tabs>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <MetricsCard />
          
          <Card>
            <CardHeader>
              <CardTitle>Why Terminator Outperforms</CardTitle>
              <CardDescription>
                Key advantages of code-driven UI automation over vision-based approaches
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex">
                  <span className="bg-green-500/20 p-1.5 rounded mr-3 border border-green-500/30">
                    <Check className="h-4 w-4 text-green-500" />
                  </span>
                  <div>
                    <h4 className="font-medium">Direct UI Element Access</h4>
                    <p className="text-sm text-muted-foreground">
                      Terminator accesses UI elements directly through accessibility APIs rather than 
                      trying to recognize them visually, resulting in faster and more reliable interactions.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-green-500/20 p-1.5 rounded mr-3 border border-green-500/30">
                    <Check className="h-4 w-4 text-green-500" />
                  </span>
                  <div>
                    <h4 className="font-medium">Resilient to Visual Changes</h4>
                    <p className="text-sm text-muted-foreground">
                      Vision-based methods break when UI appearance changes. Terminator uses 
                      semantic information about UI elements, making it resilient to visual updates.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-green-500/20 p-1.5 rounded mr-3 border border-green-500/30">
                    <Check className="h-4 w-4 text-green-500" />
                  </span>
                  <div>
                    <h4 className="font-medium">Lower Resource Consumption</h4>
                    <p className="text-sm text-muted-foreground">
                      Computer vision requires significant computational resources. Terminator's 
                      approach is much lighter, using a fraction of the CPU and memory resources.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-green-500/20 p-1.5 rounded mr-3 border border-green-500/30">
                    <Check className="h-4 w-4 text-green-500" />
                  </span>
                  <div>
                    <h4 className="font-medium">Better Error Handling</h4>
                    <p className="text-sm text-muted-foreground">
                      When errors occur, Terminator provides specific information about what went wrong, 
                      making debugging faster and more efficient than with vision-based methods.
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Performance;
