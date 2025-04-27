
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  BarChart as BarChartIcon, 
  Clock, 
  AlertCircle, 
  Settings
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

interface ComparisonChartProps {
  title: string;
  description: string;
  data: {
    name: string;
    terminator: number;
    vision: number;
    manual: number;
  }[];
}

const ComparisonChart = ({ title, description, data }: ComparisonChartProps) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
          <BarChartIcon className="h-5 w-5 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#444" vertical={false} />
              <XAxis dataKey="name" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1A1F2C', 
                  borderColor: '#3f3f46',
                  color: '#fff' 
                }} 
              />
              <Legend />
              <Bar dataKey="terminator" name="Terminator" fill="#8B5CF6" />
              <Bar dataKey="vision" name="Vision-based" fill="#6E59A5" />
              <Bar dataKey="manual" name="Manual" fill="#333" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center p-3 rounded-md bg-card/50 border border-border/50">
            <Clock className="h-4 w-4 text-brand mb-1" />
            <span className="text-xs font-medium">Time Efficiency</span>
            <span className="text-lg font-bold">85% faster</span>
            <span className="text-xs text-muted-foreground">vs. vision-based</span>
          </div>
          
          <div className="flex flex-col items-center p-3 rounded-md bg-card/50 border border-border/50">
            <AlertCircle className="h-4 w-4 text-brand mb-1" />
            <span className="text-xs font-medium">Error Rate</span>
            <span className="text-lg font-bold">95% lower</span>
            <span className="text-xs text-muted-foreground">vs. vision-based</span>
          </div>
          
          <div className="flex flex-col items-center p-3 rounded-md bg-card/50 border border-border/50">
            <Settings className="h-4 w-4 text-brand mb-1" />
            <span className="text-xs font-medium">Resource Usage</span>
            <span className="text-lg font-bold">70% reduced</span>
            <span className="text-xs text-muted-foreground">vs. vision-based</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ComparisonChart;
