import { useCallback } from "react";
import "reactflow/dist/style.css";
import { type Repository } from "@/lib/repoTypes";
import { Box, Cross, ExternalLink, Github } from "lucide-react";

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
     

    </div>
  );
}
