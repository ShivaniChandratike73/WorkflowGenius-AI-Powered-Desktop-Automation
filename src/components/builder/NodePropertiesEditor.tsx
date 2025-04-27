
import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Check } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

interface NodePropertiesEditorProps {
  node: {
    id: string;
    type: string;
    label: string;
    description: string;
    position: { top: number; left: number };
  } | null;
  onUpdateNode: (id: string, updates: { label: string; description: string }) => void;
}

const NodePropertiesEditor = ({ node, onUpdateNode }: NodePropertiesEditorProps) => {
  const { toast } = useToast();
  const [label, setLabel] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (node) {
      setLabel(node.label);
      setDescription(node.description);
    } else {
      setLabel('');
      setDescription('');
    }
  }, [node]);

  const handleSave = () => {
    if (!node) return;
    
    onUpdateNode(node.id, {
      label,
      description
    });
    
    toast({
      title: "Properties Updated",
      description: "Node properties have been updated successfully.",
    });
  };

  if (!node) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Properties</CardTitle>
          <CardDescription>Configure the selected node</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-sm text-muted-foreground text-center py-6">
            Select a node to view and edit its properties
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Properties</CardTitle>
        <CardDescription>Configure the selected node</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <Label htmlFor="node-type">Node Type</Label>
            <div className="p-2 bg-muted/30 rounded-md text-sm mt-1">
              {node.type.charAt(0).toUpperCase() + node.type.slice(1)}
            </div>
          </div>
          
          <div>
            <Label htmlFor="node-label">Label</Label>
            <Input
              id="node-label"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              className="mt-1"
            />
          </div>
          
          <div>
            <Label htmlFor="node-description">Description</Label>
            <Input
              id="node-description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1"
            />
          </div>

          {node.type === 'condition' && (
            <div className="space-y-2">
              <Label>Condition Options</Label>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex p-2 border rounded-md items-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-sm">True Path</span>
                </div>
                <div className="flex p-2 border rounded-md items-center">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <span className="text-sm">False Path</span>
                </div>
              </div>
            </div>
          )}

          <Button 
            className="w-full" 
            onClick={handleSave}
          >
            <Check className="h-4 w-4 mr-1" />
            Apply Changes
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default NodePropertiesEditor;
