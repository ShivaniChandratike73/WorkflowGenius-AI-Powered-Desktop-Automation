
import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, PlayCircle, Repeat, AlertCircle } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const recentWorkflows = [
  {
    name: 'Data Entry Automation',
    description: 'Automates Excel data entry from web forms',
    status: 'Completed',
    lastRun: '2h ago',
    duration: '1m 45s',
    type: 'Scheduled',
    nextRun: 'Today, 4:00 PM',
  },
  {
    name: 'PDF Report Generator',
    description: 'Extracts data from multiple sources and generates PDF reports',
    status: 'Running',
    lastRun: 'Now',
    duration: '3m 20s',
    type: 'Manual',
    nextRun: null,
  },
  {
    name: 'Email Classifier',
    description: 'Sorts emails into folders based on content analysis',
    status: 'Failed',
    lastRun: 'Yesterday',
    duration: '0m 34s',
    type: 'Scheduled',
    nextRun: 'Tomorrow, 9:00 AM',
    error: 'Email application not responding',
  },
  {
    name: 'CRM Data Sync',
    description: 'Synchronizes customer data between web CRM and local database',
    status: 'Completed',
    lastRun: '1d ago',
    duration: '4m 12s',
    type: 'Scheduled',
    nextRun: 'Tomorrow, 12:00 PM',
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Completed':
      return 'bg-green-500/20 text-green-500 border-green-500/30';
    case 'Running':
      return 'bg-blue-500/20 text-blue-500 border-blue-500/30';
    case 'Failed':
      return 'bg-red-500/20 text-red-500 border-red-500/30';
    default:
      return 'bg-gray-500/20 text-gray-500 border-gray-500/30';
  }
};

const RecentWorkflows = () => {
  // Add functions to handle button clicks
  const handleRunWorkflow = (workflow: typeof recentWorkflows[0]) => {
    toast({
      title: `Running ${workflow.name}`,
      description: `Workflow initiated. Starting execution...`,
    });
    console.log('Running workflow:', workflow.name);
  };

  const handleViewHistory = (workflow: typeof recentWorkflows[0]) => {
    toast({
      title: `${workflow.name} History`,
      description: `Viewing execution history for this workflow.`,
    });
    console.log('Viewing history for:', workflow.name);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Workflows</CardTitle>
        <CardDescription>Your most recently executed automation workflows</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentWorkflows.map((workflow, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-md border border-border/50 bg-card/50"
            >
              <div className="space-y-2 mb-4 sm:mb-0">
                <div className="flex items-center">
                  <h3 className="font-medium mr-3">{workflow.name}</h3>
                  <Badge className={cn("text-xs", getStatusColor(workflow.status))}>
                    {workflow.status}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{workflow.description}</p>
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground">
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    Last run: {workflow.lastRun}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    Duration: {workflow.duration}
                  </div>
                  {workflow.type === 'Scheduled' && (
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      Next: {workflow.nextRun}
                    </div>
                  )}
                  {workflow.error && (
                    <div className="flex items-center text-red-500">
                      <AlertCircle className="h-3 w-3 mr-1" />
                      {workflow.error}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex space-x-2">
                {workflow.status !== 'Running' && (
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="h-8"
                    onClick={() => handleRunWorkflow(workflow)}
                  >
                    <PlayCircle className="h-3.5 w-3.5 mr-1" />
                    Run
                  </Button>
                )}
                <Button 
                  size="sm" 
                  variant="ghost" 
                  className="h-8"
                  onClick={() => handleViewHistory(workflow)}
                >
                  <Repeat className="h-3.5 w-3.5 mr-1" />
                  History
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentWorkflows;
