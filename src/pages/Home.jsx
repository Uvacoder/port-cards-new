import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Github } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="bg-slate-900 w-full h-screen text-white flex flex-col items-start ">
        <Navbar />
        <div className=" gap-3 absolute bottom-0 flex flex-col mx-10 my-10  text-left items-start justify-start">
          <h1 className=" font-mono  text-3xl   ">Vince Flores</h1>
          <p className="">Software Engineer</p>
        </div>
      </div>
    </>
  );
}

function Navbar() {
  return (
    <>
      <div className="flex justify-end p-4 gap-2 w-full">
        <Button variant={"link"}>
          <a href="http://www.linkedin.com/in/vince-flores" target="_blank">
            <Linkedin className="text-white" />
          </a>
        </Button>
        <Button variant="link">
          <a href="https://github.com/vinceflores" target="_blank">
            <Github className="text-white" />
          </a>
        </Button>
        <Button variant="link">
          <a  href="mailto:vincegabriel.flores@gmail.com">
            <Mail className="text-white" />
          </a>
        </Button>
      </div>
    </>
  );
}
