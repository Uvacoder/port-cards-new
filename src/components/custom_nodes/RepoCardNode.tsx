import { useCallback } from "react";
import { Handle, Position } from "reactflow";
import "reactflow/dist/style.css";
import { type Repository } from "@/lib/repoTypes";
import { Box, Cross, ExternalLink, Github } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "../ui/button";

const handleStyle = { left: 10 };
export default function RepoCardNode({
  data,
  id,
}: {
  id: string;
  data: { repo: Repository };
}) {
  const onChange = useCallback((evt: any) => {
    console.log(evt.target.value);
  }, []);
  const { repo } = data;
  console.log(repo);
  return (
    <div className="">
      <h1>{repo.name}</h1>
      <Button
        onClick={() => document.getElementById("modal_1").showModal()}
      >Open</Button>

    </div>
  );
}
