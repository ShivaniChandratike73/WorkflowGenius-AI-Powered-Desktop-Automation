
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  PlayCircle, 
  MonitorSmartphone, 
  MousePointerClick, 
  Keyboard, 
  FileText, 
  Flag,
  AlertCircle,
  Timer,
  Repeat,
  Scissors
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const nodeTypes = [
  {
    category: 'Workflow',
    nodes: [
      { name: 'Start', icon: <PlayCircle className="h-4 w-4" />, color: 'bg-green-500', type: 'start' },
      { name: 'End', icon: <Flag className="h-4 w-4" />, color: 'bg-red-500', type: 'end' },
      { name: 'Condition', icon: <AlertCircle className="h-4 w-4" />, color: 'bg-orange-500', type: 'condition' },
      { name: 'Delay', icon: <Timer className="h-4 w-4" />, color: 'bg-blue-500', type: 'action' },
      { name: 'Loop', icon: <Repeat className="h-4 w-4" />, color: 'bg-purple-500', type: 'action' },
    ]
  },
  {
    category: 'Applications',
    nodes: [
      { name: 'Launch App', icon: <MonitorSmartphone className="h-4 w-4" />, color: 'bg-blue-500', type: 'application' },
      { name: 'Close App', icon: <Scissors className="h-4 w-4" />, color: 'bg-red-500', type: 'application' },
    ]
  },
  {
    category: 'Actions',
    nodes: [
      { name: 'Click', icon: <MousePointerClick className="h-4 w-4" />, color: 'bg-brand', type: 'action' },
      { name: 'Type', icon: <Keyboard className="h-4 w-4" />, color: 'bg-teal-500', type: 'action' },
      { name: 'Read Text', icon: <FileText className="h-4 w-4" />, color: 'bg-amber-500', type: 'action' },
    ]
  }
];

const NodePalette = () => {
  const { toast } = useToast();

  const handleDragStart = (e: React.DragEvent, node: any) => {
    e.dataTransfer.setData('nodeType', node.type);
    e.dataTransfer.setData('nodeName', node.name);
    
    // Create custom drag image
    const dragImage = document.createElement('div');
    dragImage.className = `${node.color}/20 p-2 rounded border ${node.color}/30 shadow-sm`;
    dragImage.innerHTML = node.name;
    document.body.appendChild(dragImage);
    e.dataTransfer.setDragImage(dragImage, 20, 20);
    
    // Remove after drag
    setTimeout(() => {
      document.body.removeChild(dragImage);
    }, 0);
    
    toast({
      title: "Dragging Node",
      description: `Drag the ${node.name} node to the canvas`,
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Node Palette</CardTitle>
        <CardDescription>Drag and drop nodes onto the canvas</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {nodeTypes.map((category, index) => (
            <div key={index}>
              <h3 className="text-sm font-medium mb-2">{category.category}</h3>
              <div className="grid grid-cols-2 gap-2">
                {category.nodes.map((node, nodeIndex) => (
                  <div 
                    key={nodeIndex}
                    className="flex items-center p-2 border border-border/50 rounded-md bg-card/50 cursor-grab hover:border-brand-light/50 hover:bg-muted/30 transition-colors"
                    draggable={true}
                    onDragStart={(e) => handleDragStart(e, node)}
                  >
                    <div className={`${node.color}/20 p-1 rounded mr-2 border ${node.color}/30`}>
                      {node.icon}
                    </div>
                    <span className="text-sm">{node.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default NodePalette;
