
import React from 'react';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import StatCard from '@/components/dashboard/StatCard';
import RecentWorkflows from '@/components/dashboard/RecentWorkflows';
import { 
  BarChart, 
  Clock, 
  CheckCircle, 
  AlertTriangle, 
  RefreshCw,
  CalendarDays,
  Cpu
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow container py-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">Monitor and manage your automation workflows</p>
          </div>
          <div className="flex items-center mt-4 md:mt-0 space-x-2">
            <Button size="sm" variant="outline">
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </Button>
            <Button size="sm">Create Workflow</Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <StatCard 
            title="Total Workflows" 
            value="12"
            description="3 active, 9 inactive"
            icon={<BarChart className="h-4 w-4" />}
            trend={{ value: 20, positive: true }}
          />
          <StatCard 
            title="Successful Runs" 
            value="254"
            description="Last 30 days"
            icon={<CheckCircle className="h-4 w-4" />}
            trend={{ value: 12, positive: true }}
          />
          <StatCard 
            title="Failed Runs" 
            value="8"
            description="Last 30 days"
            icon={<AlertTriangle className="h-4 w-4" />}
            trend={{ value: 3, positive: false }}
          />
          <StatCard 
            title="Time Saved" 
            value="42h"
            description="This month"
            icon={<Clock className="h-4 w-4" />}
            trend={{ value: 15, positive: true }}
          />
        </div>

        <div className="grid gap-4 md:grid-cols-3 mb-8">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Weekly Execution Trends</CardTitle>
              <CardDescription>Number of runs per workflow category</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center bg-card/50 rounded-md">
                <p className="text-muted-foreground italic">Interactive chart would display here</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>System Health</CardTitle>
              <CardDescription>Performance metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Cpu className="h-4 w-4 mr-2 text-blue-500" />
                    <span className="text-sm">CPU Usage</span>
                  </div>
                  <span className="text-sm font-medium">12%</span>
                </div>
                <div className="h-1.5 w-full bg-muted overflow-hidden rounded-full">
                  <div className="bg-blue-500 h-full rounded-full" style={{ width: '12%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <CalendarDays className="h-4 w-4 mr-2 text-green-500" />
                    <span className="text-sm">Uptime</span>
                  </div>
                  <span className="text-sm font-medium">14 days</span>
                </div>
                <div className="h-1.5 w-full bg-muted overflow-hidden rounded-full">
                  <div className="bg-green-500 h-full rounded-full" style={{ width: '95%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-amber-500" />
                    <span className="text-sm">Response Time</span>
                  </div>
                  <span className="text-sm font-medium">125ms</span>
                </div>
                <div className="h-1.5 w-full bg-muted overflow-hidden rounded-full">
                  <div className="bg-amber-500 h-full rounded-full" style={{ width: '30%' }}></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <RecentWorkflows />
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
