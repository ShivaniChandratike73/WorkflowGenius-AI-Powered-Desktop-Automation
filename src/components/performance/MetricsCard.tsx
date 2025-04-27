
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Clock, 
  AlertTriangle, 
  BarChart, 
  Cpu, 
  Zap, 
  CheckCircle, 
  XCircle 
} from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

// Demo data for execution time comparison across different methods
const executionTimeData = [
  { name: 'Task 1', terminator: 1.2, vision: 4.5, manual: 8.2 },
  { name: 'Task 2', terminator: 0.8, vision: 3.2, manual: 5.1 },
  { name: 'Task 3', terminator: 2.1, vision: 5.8, manual: 10.2 },
  { name: 'Task 4', terminator: 1.5, vision: 4.1, manual: 7.5 },
  { name: 'Task 5', terminator: 0.6, vision: 2.9, manual: 4.8 },
];

const MetricsCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Execution Time Comparison</CardTitle>
        <CardDescription>
          Time taken to complete identical tasks using different methods (in seconds)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={executionTimeData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis dataKey="name" stroke="#888" />
              <YAxis stroke="#888" label={{ value: 'Time (s)', angle: -90, position: 'insideLeft', fill: '#888' }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1A1F2C', 
                  borderColor: '#3f3f46',
                  color: '#fff' 
                }} 
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="terminator" 
                name="Terminator" 
                stroke="#8B5CF6" 
                activeDot={{ r: 8 }} 
                strokeWidth={2}
              />
              <Line 
                type="monotone" 
                dataKey="vision" 
                name="Vision-based" 
                stroke="#6E59A5" 
                strokeWidth={2}
              />
              <Line 
                type="monotone" 
                dataKey="manual" 
                name="Manual" 
                stroke="#888" 
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center space-x-2">
            <Zap className="h-5 w-5 text-brand" />
            <div>
              <p className="text-xs text-muted-foreground">Avg. Speed-up</p>
              <p className="font-medium">4.2x faster</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Cpu className="h-5 w-5 text-brand" />
            <div>
              <p className="text-xs text-muted-foreground">CPU Usage</p>
              <p className="font-medium">45% lower</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5 text-green-500" />
            <div>
              <p className="text-xs text-muted-foreground">Success Rate</p>
              <p className="font-medium">99.2%</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <XCircle className="h-5 w-5 text-red-500" />
            <div>
              <p className="text-xs text-muted-foreground">Error Rate</p>
              <p className="font-medium">0.8%</p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="text-xs text-muted-foreground border-t border-border/50 pt-4">
        <div className="flex items-start space-x-2">
          <AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5" />
          <p>
            Benchmarks performed on identical tasks across methods. Vision-based automation
            used a leading commercial solution. Manual execution performed by experienced operators.
          </p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default MetricsCard;
