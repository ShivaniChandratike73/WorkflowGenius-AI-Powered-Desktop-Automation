
import React, { useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Save, Play, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface WorkflowNode {
  id: string;
  type: string;
  label: string;
  description: string;
  position: { top: number; left: number };
  selected?: boolean;
}

const initialWorkflowNodes: WorkflowNode[] = [
  {
    id: 'node1',
    type: 'start',
    label: 'Start Workflow',
    description: 'Initialize workflow and set variables',
    position: { top: 40, left: 50 },
  },
  {
    id: 'node2',
    type: 'application',
    label: 'Open Excel',
    description: 'Launch Microsoft Excel application',
    position: { top: 160, left: 50 },
  },
  {
    id: 'node3',
    type: 'action',
    label: 'Open Workbook',
    description: 'Open the target Excel workbook',
    position: { top: 280, left: 50 },
  },
  {
    id: 'node4',
    type: 'action',
    label: 'Navigate to Sheet',
    description: 'Select the appropriate worksheet',
    position: { top: 400, left: 50 },
  },
  {
    id: 'node5',
    type: 'condition',
    label: 'Check Data Validity',
    description: 'Verify if the data has proper format',
    position: { top: 520, left: 50 },
  },
];

const getNodeStyle = (type: string) => {
  switch (type) {
    case 'start':
      return 'border-green-500/30 bg-green-500/10';
    case 'application':
      return 'border-blue-500/30 bg-blue-500/10';
    case 'action':
      return 'border-purple-500/30 bg-purple-500/10';
    case 'condition':
      return 'border-orange-500/30 bg-orange-500/10';
    case 'end':
      return 'border-red-500/30 bg-red-500/10';
    default:
      return '';
  }
};

interface WorkflowCanvasProps {
  onSelectNode: (node: WorkflowNode | null) => void;
}

const WorkflowCanvas = ({ onSelectNode }: WorkflowCanvasProps) => {
  const { toast } = useToast();
  const [nodes, setNodes] = useState<WorkflowNode[]>(initialWorkflowNodes);
  const [draggedNode, setDraggedNode] = useState<null | string>(null);
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  
  // Handle button actions
  const handleAddNode = () => {
    const newNode = {
      id: `node${nodes.length + 1}`,
      type: 'action',
      label: 'New Action',
      description: 'Enter description here',
      position: { top: 40, left: 380 },
    };
    
    setNodes([...nodes, newNode]);
    toast({
      title: "Node Added",
      description: "A new action node has been added to your workflow.",
    });
  };

  const handleSave = () => {
    toast({
      title: "Workflow Saved",
      description: "Your workflow has been saved successfully.",
    });
  };

  const handleTestRun = () => {
    toast({
      title: "Test Run Started",
      description: "Starting test execution of your workflow...",
    });

    // Simulate workflow execution with sequential toasts
    setTimeout(() => {
      toast({
        title: "Starting Excel",
        description: "Launching Excel application...",
      });
    }, 1000);

    setTimeout(() => {
      toast({
        title: "Opening Workbook",
        description: "Opening the target Excel file...",
      });
    }, 2500);

    setTimeout(() => {
      toast({
        title: "Test Complete",
        description: "Workflow executed successfully!",
      });
    }, 4000);
  };

  // Node selection
  const handleNodeClick = (nodeId: string) => {
    const selectedNode = nodes.find(node => node.id === nodeId);
    setSelectedNodeId(nodeId);
    
    if (selectedNode) {
      onSelectNode(selectedNode);
    }
    
    toast({
      title: "Node Selected",
      description: `Selected: ${selectedNode?.label}`,
    });
  };

  // Drag and drop functionality
  const handleDragStart = (e: React.DragEvent, nodeId: string) => {
    setDraggedNode(nodeId);
    e.dataTransfer.setData('text/plain', nodeId);
    
    // Set ghost drag image
    const dragGhost = document.createElement('div');
    dragGhost.className = 'w-8 h-8 bg-brand-light/50 rounded-md border border-brand-light';
    document.body.appendChild(dragGhost);
    e.dataTransfer.setDragImage(dragGhost, 20, 20);
    
    // Remove after drag ends
    setTimeout(() => {
      document.body.removeChild(dragGhost);
    }, 0);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (!canvasRef.current) return;
    
    // Handle drops from palette
    if (e.dataTransfer.types.includes('nodeType')) {
      const nodeType = e.dataTransfer.getData('nodeType');
      const nodeName = e.dataTransfer.getData('nodeName');
      
      const canvasRect = canvasRef.current.getBoundingClientRect();
      const newNode = {
        id: `node${nodes.length + 1}`,
        type: nodeType,
        label: nodeName,
        description: `New ${nodeName} node`,
        position: {
          top: e.clientY - canvasRect.top,
          left: e.clientX - canvasRect.left
        }
      };
      
      setNodes([...nodes, newNode]);
      
      toast({
        title: "Node Added",
        description: `Added ${nodeName} node to the workflow.`,
      });
      return;
    }
    
    // Handle moving existing nodes
    if (draggedNode) {
      const nodeId = e.dataTransfer.getData('text/plain');
      const canvasRect = canvasRef.current.getBoundingClientRect();
      
      const updatedNodes = nodes.map(node => {
        if (node.id === nodeId) {
          return {
            ...node,
            position: {
              top: e.clientY - canvasRect.top,
              left: e.clientX - canvasRect.left
            }
          };
        }
        return node;
      });
      
      setNodes(updatedNodes);
      setDraggedNode(null);
      
      toast({
        title: "Node Moved",
        description: "Node position updated in the workflow.",
      });
    }
  };

  return (
    <div className="relative h-[calc(100vh-12rem)] w-full overflow-auto p-4 border border-border/50 rounded-md bg-card/30">
      <div className="absolute top-4 right-4 flex space-x-2 z-10">
        <Button size="sm" variant="outline" onClick={handleAddNode}>
          <Plus className="h-4 w-4 mr-1" />
          Add Node
        </Button>
        <Button size="sm" variant="outline" onClick={handleSave}>
          <Save className="h-4 w-4 mr-1" />
          Save
        </Button>
        <Button size="sm" onClick={handleTestRun}>
          <Play className="h-4 w-4 mr-1" />
          Test Run
        </Button>
      </div>
      
      <div 
        ref={canvasRef}
        className="relative w-[800px] h-[1000px]"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {/* Workflow nodes */}
        {nodes.map((node, index) => (
          <React.Fragment key={node.id}>
            <div 
              className={`workflow-node ${getNodeStyle(node.type)} cursor-move p-3 rounded-md border absolute shadow-sm ${selectedNodeId === node.id ? 'ring-2 ring-brand' : ''}`}
              style={{
                position: 'absolute',
                top: node.position.top,
                left: node.position.left,
                width: '300px',
              }}
              draggable={true}
              onDragStart={(e) => handleDragStart(e, node.id)}
              onClick={() => handleNodeClick(node.id)}
            >
              <h4 className="font-medium">{node.label}</h4>
              <p className="text-xs text-muted-foreground mt-1">{node.description}</p>
              
              {node.type === 'condition' && (
                <div className="flex mt-3 text-xs">
                  <div className="flex-1 flex items-center">
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-1"></div>
                    <span>True</span>
                  </div>
                  <div className="flex-1 flex items-center">
                    <div className="w-3 h-3 rounded-full bg-red-500 mr-1"></div>
                    <span>False</span>
                  </div>
                </div>
              )}
              
              {/* Add connector to next node */}
              {index < nodes.length - 1 && (
                <div className="connector absolute w-[2px] bg-brand-light/30" style={{
                  height: nodes[index + 1].position.top - node.position.top - 70,
                  top: '100%',
                  left: '50%',
                }}>
                  <ArrowRight className="absolute -bottom-4 -right-2 h-4 w-4 text-brand-light/70" />
                </div>
              )}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default WorkflowCanvas;
