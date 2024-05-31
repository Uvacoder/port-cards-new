import "reactflow/dist/style.css";
import  {

  Controls,
  useNodesState,
  useEdgesState,
  addEdge,
  type Node,
} from "reactflow";
import { useCallback, useEffect } from "react";
import { useState } from "react";
import { CustomReactFlow } from "./Flow";
import { Button } from "@/components/ui/button";
import { Cross } from "lucide-react";
import {
  fetchRepos,
  getRandomInt,
  getLayoutedElements,
  nodeTypes,
} from "../../lib/controllers/getGithubData";

const initialNodes: Node[] = [
  { id: "10", position: { x: 0, y: 0 }, data: { label: "1" } },
  {
    id: "20",
    position: { x: 0, y: 100 },
    data: {
      label: "1",
    },
  },
];
const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

export default function CustomReactFlowContainer() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const call = useCallback(async () => {
    try {
      const res = await fetchRepos();
      const foo: Node[] = res.map((repo, i) => {
        const node: Node = {
          data: {
            repo,
          },
          id: String(i),
          type: "repoCardNode",
          position: { x: 0, y: 0 },
        };
        return node;
      });
      const edj = foo.map((e) => {
        return {
          id: `${e.id}`,
          source: Number(e.id),
          target: getRandomInt(0, foo.length),
        };
      });
      const { nodes, edges } = getLayoutedElements(foo, edj, {
        direction: "RL",
      });
      setNodes([...nodes]);
      setEdges(edges || []); // Fix: Ensure edges is not null by providing a default empty array
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    call();
  }, []);

  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <CustomReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView={true}
        maxZoom={1}
        minZoom={0.5}
        panOnScroll
        zoomOnScroll
        zoomActivationKeyCode={"Shift"}
        nodeTypes={nodeTypes}
      >
        <Controls position="bottom-right" showInteractive={false} />
        {/* <MiniMap /> */}
        {/* <Background
          variant={BackgroundVariant.Cross}
          gap={24}
          lineWidth={1}
          size={3}
          color="black"
        /> */}
      </CustomReactFlow>
      <dialog id="modal_1" className="modal">
        <div className="modal-box">
          <h1>hello</h1>
          <div className="modal-action">
            <form method="dialog">
              <Button className="btn">
                <Cross />
              </Button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
