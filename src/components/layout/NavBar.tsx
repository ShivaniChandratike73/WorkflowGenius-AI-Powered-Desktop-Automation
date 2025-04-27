
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Terminal,
  LayoutDashboard,
  Code2,
  PlayCircle,
  Gauge,
  Github
} from 'lucide-react';

const NavBar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 backdrop-blur-md bg-brand-background/95">
      <div className="container flex h-16 items-center px-4">
        <div className="flex items-center mr-4">
          <Link to="/" className="flex items-center space-x-2">
            <Terminal className="h-6 w-6 text-brand" />
            <span className="font-bold text-xl">WorkflowGenius</span>
          </Link>
        </div>
        
        <nav className="flex flex-1 items-center justify-between">
          <div className="flex items-center space-x-1">
            <Button 
              variant={isActive('/dashboard') ? 'default' : 'ghost'} 
              asChild
            >
              <Link to="/dashboard" className="flex items-center px-3">
                <LayoutDashboard className="h-4 w-4 mr-2" />
                Dashboard
              </Link>
            </Button>
            <Button 
              variant={isActive('/builder') ? 'default' : 'ghost'} 
              asChild
            >
              <Link to="/builder" className="flex items-center px-3">
                <Code2 className="h-4 w-4 mr-2" />
                Builder
              </Link>
            </Button>
            <Button 
              variant={isActive('/examples') ? 'default' : 'ghost'} 
              asChild
            >
              <Link to="/examples" className="flex items-center px-3">
                <PlayCircle className="h-4 w-4 mr-2" />
                Examples
              </Link>
            </Button>
            <Button 
              variant={isActive('/performance') ? 'default' : 'ghost'} 
              asChild
            >
              <Link to="/performance" className="flex items-center px-3">
                <Gauge className="h-4 w-4 mr-2" />
                Performance
              </Link>
            </Button>
          </div>
          
          <div>
            <Button 
              variant="outline" 
              size="sm" 
              className="flex items-center"
              onClick={() => window.open('https://github.com/workflowgenius/automation', '_blank')}
            >
              <Github className="h-4 w-4 mr-2" />
              <span>View on GitHub</span>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
