
import React from 'react';
import { Button } from '@/components/ui/button';
import { Terminal, Zap, Lock, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/30 via-brand-background to-brand-background z-0"></div>
      
      <div className="container relative z-10 py-20 md:py-32">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-brand-light/20 p-3 rounded-full">
              <Terminal className="h-10 w-10 text-brand" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-flow bg-size-200 animate-flow">
              WorkflowGenius
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-8">
            Build the future of AI computer control with Screenpipe's Terminator.
            Create automated workflows that are faster, more reliable, and more powerful.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button size="lg" asChild>
              <Link to="/builder">
                Start Building
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/examples">
                View Examples
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature Card 1 */}
          <div className="flex flex-col items-center p-6 bg-card/50 border border-border/50 rounded-lg shadow-lg backdrop-blur-sm">
            <div className="bg-brand-light/20 p-3 rounded-full mb-4">
              <Zap className="h-6 w-6 text-brand" />
            </div>
            <h3 className="text-xl font-bold mb-2">Fast & Reliable</h3>
            <p className="text-sm text-muted-foreground text-center">
              Code-driven UI automation that's significantly faster and more reliable than traditional vision-based methods.
            </p>
          </div>
          
          {/* Feature Card 2 */}
          <div className="flex flex-col items-center p-6 bg-card/50 border border-border/50 rounded-lg shadow-lg backdrop-blur-sm">
            <div className="bg-brand-light/20 p-3 rounded-full mb-4">
              <Lock className="h-6 w-6 text-brand" />
            </div>
            <h3 className="text-xl font-bold mb-2">Robust Control</h3>
            <p className="text-sm text-muted-foreground text-center">
              Direct access to UI elements through accessibility APIs for precision control of desktop applications.
            </p>
          </div>
          
          {/* Feature Card 3 */}
          <div className="flex flex-col items-center p-6 bg-card/50 border border-border/50 rounded-lg shadow-lg backdrop-blur-sm">
            <div className="bg-brand-light/20 p-3 rounded-full mb-4">
              <BarChart className="h-6 w-6 text-brand" />
            </div>
            <h3 className="text-xl font-bold mb-2">Measurable Results</h3>
            <p className="text-sm text-muted-foreground text-center">
              Quantifiable performance metrics that showcase the efficiency gains of Terminator-powered automation.
            </p>
          </div>
        </div>
      </div>
      
      {/* Code preview section */}
      <div className="container py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Powerful Under the Hood
        </h2>
        <div className="code-block">
          <pre>{`// Example Terminator script
import { Terminator } from 'screenpipe';

async function automateWorkflow() {
  // Initialize Terminator
  const terminator = new Terminator();
  
  // Find application window
  const app = await terminator.findApplication("Notepad");
  
  // Focus window
  await app.focus();
  
  // Find text area and type content
  const textArea = await app.findElement({ role: "text" });
  await textArea.type("Hello from WorkflowGenius!");
  
  // Find and click menu
  const fileMenu = await app.findElement({ name: "File" });
  await fileMenu.click();
  
  // Find and click save option
  const saveOption = await terminator.findElement({ name: "Save" });
  await saveOption.click();
  
  // Handle save dialog
  const saveDialog = await terminator.waitForElement({ role: "dialog", name: "Save" });
  const filenameInput = await saveDialog.findElement({ role: "textbox" });
  await filenameInput.type("automated-document.txt");
  
  // Click save button
  const saveButton = await saveDialog.findElement({ role: "button", name: "Save" });
  await saveButton.click();
}`}</pre>
        </div>
      </div>
    </div>
  );
};

export default Hero;
