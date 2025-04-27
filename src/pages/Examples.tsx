
import React from 'react';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import ExampleCard from '@/components/examples/ExampleCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter } from 'lucide-react';

const Examples = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow container py-8">
        <div className="flex flex-col md:flex-row justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Example Workflows</h1>
            <p className="text-muted-foreground">Discover and test ready-made automation solutions</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search examples..."
              className="pl-8"
            />
          </div>
          <Button variant="outline" className="flex items-center">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ExampleCard
            title="Excel Data Entry"
            description="Automate repetitive data entry tasks in Excel spreadsheets"
            applications={['Excel', 'Web Browser']}
            difficulty="Beginner"
            timeToRun="45 seconds"
            likes={152}
            image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop"
          />
          
          <ExampleCard
            title="PDF Data Extraction"
            description="Extract structured data from PDF documents into spreadsheets"
            applications={['Acrobat Reader', 'Excel']}
            difficulty="Intermediate"
            timeToRun="1.2 minutes"
            likes={98}
            image="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop"
          />
          
          <ExampleCard
            title="CRM Record Updates"
            description="Bulk update customer records in your CRM system"
            applications={['Web Browser', 'CSV Files']}
            difficulty="Intermediate"
            timeToRun="3.5 minutes"
            likes={85}
            image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop"
          />
          
          <ExampleCard
            title="Email Categorization"
            description="Sort and organize emails based on content analysis"
            applications={['Outlook', 'Gmail']}
            difficulty="Beginner"
            timeToRun="25 seconds"
            likes={124}
          />
          
          <ExampleCard
            title="Invoice Processing"
            description="Extract data from invoices and enter into accounting software"
            applications={['QuickBooks', 'Acrobat']}
            difficulty="Advanced"
            timeToRun="2 minutes"
            likes={76}
          />
          
          <ExampleCard
            title="Social Media Scheduler"
            description="Schedule and post content across multiple platforms"
            applications={['Web Browser', 'Image Editor']}
            difficulty="Intermediate"
            timeToRun="1.5 minutes"
            likes={110}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Examples;
