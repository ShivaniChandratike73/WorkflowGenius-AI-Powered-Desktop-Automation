
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-brand-background/95 py-6">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-3">WorkflowGenius</h3>
            <p className="text-muted-foreground text-sm">
              Building the future of AI computer control with Screenpipe's Terminator.
              Create innovative solutions that automate complex workflows.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-3">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/builder" className="text-muted-foreground hover:text-foreground transition-colors">
                  Workflow Builder
                </Link>
              </li>
              <li>
                <Link to="/examples" className="text-muted-foreground hover:text-foreground transition-colors">
                  Example Workflows
                </Link>
              </li>
              <li>
                <Link to="/performance" className="text-muted-foreground hover:text-foreground transition-colors">
                  Performance Metrics
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://screenpipe.com/docs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terminator Documentation
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/screenpipe" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Screenpipe GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-border/40 text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} WorkflowGenius. Created for hackathon purposes only.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
