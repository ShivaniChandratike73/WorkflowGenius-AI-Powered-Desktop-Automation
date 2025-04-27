
import React, { useState } from 'react';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import WorkflowCanvas from '@/components/builder/WorkflowCanvas';
import NodePalette from '@/components/builder/NodePalette';
import NodePropertiesEditor from '@/components/builder/NodePropertiesEditor';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Code, Eye, Save, Settings, Play } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface WorkflowNode {
  id: string;
  type: string;
  label: string;
  description: string;
  position: { top: number; left: number };
}

const Builder = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('canvas');
  const [workflowName, setWorkflowName] = useState('Excel Data Processor');
  const [workflowDesc, setWorkflowDesc] = useState('This workflow automates Excel data processing tasks...');
  const [selectedNode, setSelectedNode] = useState<WorkflowNode | null>(null);

  // Handle node selection
  const handleNodeSelect = (node: WorkflowNode | null) => {
    setSelectedNode(node);
  };

  // Handle node property updates
  const handleUpdateNode = (nodeId: string, updates: { label: string; description: string }) => {
    setSelectedNode(prev => {
      if (prev && prev.id === nodeId) {
        return { ...prev, ...updates };
      }
      return prev;
    });
  };

  // Handle save functionality
  const handleSave = () => {
    toast({
      title: "Workflow Saved",
      description: `Your workflow "${workflowName}" has been saved successfully.`,
    });
  };

  // Handle test run functionality
  const handleTestRun = () => {
    toast({
      title: "Test Run Started",
      description: `Starting test execution of "${workflowName}"...`,
    });

    // Simulate workflow execution
    setTimeout(() => {
      toast({
        title: "Test Complete",
        description: "Workflow executed successfully!",
      });
    }, 3000);
  };

  // Handle workflow creation
  const handleCreateWorkflow = () => {
    toast({
      title: "New Workflow",
      description: "Created a new blank workflow.",
    });
    
    setWorkflowName("New Workflow");
    setWorkflowDesc("Description for your new workflow");
    
    // Reset existing workflow (in a real app, we would load a blank workflow template)
    setSelectedNode(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow container py-8">
        <div className="flex flex-col md:flex-row justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Workflow Builder</h1>
            <p className="text-muted-foreground">Design and test your automation workflows</p>
          </div>
          <div className="flex space-x-2 mt-4 md:mt-0">
            <Button variant="outline" size="sm" onClick={handleCreateWorkflow}>
              <Play className="h-4 w-4 mr-2" />
              New Workflow
            </Button>
            <Button variant="outline" size="sm" onClick={handleSave}>
              <Save className="h-4 w-4 mr-2" />
              Save
            </Button>
            <Button size="sm" onClick={handleTestRun}>
              <Play className="h-4 w-4 mr-2" />
              Test Run
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-1 space-y-6">
            <NodePalette />
            
            <NodePropertiesEditor 
              node={selectedNode}
              onUpdateNode={handleUpdateNode}
            />
          </div>
          
          <div className="md:col-span-3">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <div className="flex justify-between items-center mb-4">
                <TabsList>
                  <TabsTrigger value="canvas">
                    <Eye className="h-4 w-4 mr-2" />
                    Canvas
                  </TabsTrigger>
                  <TabsTrigger value="code">
                    <Code className="h-4 w-4 mr-2" />
                    Code
                  </TabsTrigger>
                  <TabsTrigger value="settings">
                    <Settings className="h-4 w-4 mr-2" />
                    Settings
                  </TabsTrigger>
                </TabsList>
                <div className="text-sm text-muted-foreground">
                  Workflow: <span className="font-medium">{workflowName}</span>
                </div>
              </div>
              
              <TabsContent value="canvas" className="m-0">
                <WorkflowCanvas onSelectNode={handleNodeSelect} />
              </TabsContent>
              
              <TabsContent value="code" className="m-0">
                <div className="code-block h-[calc(100vh-12rem)]">
                  <pre className="bg-muted/30 p-4 rounded-md overflow-auto h-full">
{`import { Terminator } from 'screenpipe';

async function excelDataProcessor() {
  // Initialize Terminator
  const terminator = new Terminator();
  
  // Launch Excel application
  const excel = await terminator.launchApplication("Excel");
  
  // Wait for Excel to fully load
  await terminator.sleep(1000);
  
  // Open workbook
  await excel.keyboard.hotkey("ctrl", "o");
  const openDialog = await terminator.waitForElement({ role: "dialog", name: "Open" });
  const fileInput = await openDialog.findElement({ role: "textbox" });
  await fileInput.type("C:\\Data\\sales_data.xlsx");
  await openDialog.keyboard.press("Enter");
  
  // Navigate to specific sheet
  const sheetsListBox = await excel.findElement({ role: "listbox", name: "Sheets" });
  const dataSheet = await sheetsListBox.findElement({ role: "listitem", name: "Data" });
  await dataSheet.click();
  
  // Check data validity
  // More code would follow...
  
  console.log("Workflow completed successfully");
}`}
                  </pre>
                </div>
              </TabsContent>
              
              <TabsContent value="settings" className="m-0">
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <h3 className="font-medium text-lg">Workflow Settings</h3>
                      <div className="grid gap-4">
                        <div>
                          <label className="text-sm font-medium mb-1 block">Workflow Name</label>
                          <input
                            type="text"
                            value={workflowName}
                            onChange={(e) => setWorkflowName(e.target.value)}
                            className="w-full px-3 py-2 bg-muted/30 border border-border rounded-md"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-1 block">Description</label>
                          <textarea
                            rows={3}
                            value={workflowDesc}
                            onChange={(e) => setWorkflowDesc(e.target.value)}
                            className="w-full px-3 py-2 bg-muted/30 border border-border rounded-md"
                          ></textarea>
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-1 block">Schedule</label>
                          <select className="w-full px-3 py-2 bg-muted/30 border border-border rounded-md">
                            <option>Manual Execution</option>
                            <option>Daily</option>
                            <option>Weekly</option>
                            <option>Monthly</option>
                          </select>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="errorHandling" className="mr-2" />
                          <label htmlFor="errorHandling" className="text-sm">Enable advanced error handling</label>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Builder;
