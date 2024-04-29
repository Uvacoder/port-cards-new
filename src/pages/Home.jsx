import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Github } from "lucide-react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from "reactflow";
import { useCallback } from "react";
import "reactflow/dist/style.css";
import { CustomReactFlow } from "./Flow";

const initialNodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
  { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
];
const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];
export default function Home() {
  return (
    <>
      <div className="bg-yellow-500 w-screen h-screen text-white  ">
        <Navbar />
        <App />
        <Header />
      </div>
    </>
  );
}

function Navbar() {
  return (
    <>
      <div className="flex justify-end absolute z-40 top-0 p-4 gap-2 w-full">
        <Button variant={"link"}>
          <a href="http://www.linkedin.com/in/vince-flores" target="_blank">
            <Linkedin className="text-white" />
          </a>
        </Button>
        <Button variant="link">
          <a
            href="https://github.com/vinceflores?tab=repositories"
            target="_blank"
          >
            <Github className="text-white" />
          </a>
        </Button>
        <Button variant="link">
          <a href="mailto:vincegabriel.flores@gmail.com">
            <Mail className="text-white" />
          </a>
        </Button>
      </div>
    </>
  );
}

function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <CustomReactFlow
        nodes={nodes}
        // edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView={true}
      >
        <Controls position="bottom-right" showInteractive={false} />
        {/* <MiniMap /> */}
        <Background
          variant="dots"
          gap={24}
          lineWidth={0.3}
          size={1}
          color="black"
        />
      </CustomReactFlow>
    </div>
  );
}

function Header() {
  return (
    <div className=" gap-3 absolute bottom-0 flex flex-col mx-10 my-10  text-left items-start justify-start">
      <h1 className=" font-mono  text-3xl   ">Vince Flores</h1>
      <p className="">Software Engineer</p>
    </div>
  );
}


