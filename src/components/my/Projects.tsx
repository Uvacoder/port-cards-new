import { type Repository } from "@/lib/repoTypes";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Ghost, Github, Tv } from "lucide-react";
export function Projects({ repoList }: { repoList: Repository[] }) {
  function showDetails(e: React.SyntheticEvent, data: Repository) {
    e.preventDefault();
    const modal: HTMLDialogElement | null = document.getElementById(
      "modal_1"
    ) as HTMLDialogElement;
    if (!modal) return;
    modal.showModal();
  }

  return (
    <div className="h-full w-full ">
      <h1 className=" px-4 text-center md:text-left  md:w-3/4 lg:w-1/2  mt-24 mb-10 text-3xl mx-auto">Projects</h1>
      <Table className=" w-[90%] mx-auto  md:w-3/4 lg:w-1/2  lg:max-w-1/2 ">
        <br />
        <TableHeader className="text-left mx-4">
          <TableRow>
            <TableHead className=" font-light">Name</TableHead>
            <TableHead className="font-ligt flex gap-x-1 items-center">
              Live
            </TableHead>
            <TableHead className="font-light">Github</TableHead>
            <TableHead className="font-light">Details</TableHead>
            <TableHead className="font-light">Tabs</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {repoList?.map((repo: Repository, i: number) => (
            <TableRow key={repo.name} className="border-b border-black hover:bg-fuchsia-400 ">
              <TableCell className="px-4">{repo.name}</TableCell>
              <TableCell className="flex items-center flex-wrap gap-3">
                {repo.repositoryTopics.map((tag, i) => {
                  return <p>{tag.topic}</p>;
                })}
              </TableCell>
              <TableCell>
                <Button variant={"link"} asChild>
                  <a href={repo.homepageUrl} target="_blank">
                    <Tv className="w-5" />
                  </a>
                </Button>
              </TableCell>
              <TableCell>
                <Button variant={"link"} asChild>
                  <a href={repo.url}>
                    <Github className="w-5" />
                  </a>
                </Button>
              </TableCell>
              <TableCell>
                <Button variant={"link"} onClick={(e) => showDetails(e, repo)}>
                  Details
                </Button>

                <dialog id="modal_1" className="text-white rounded-md">
                  <div className="modal_box  p-4 w-[300px]">
                    <div className="modal-action w-full p-2">
                      <form
                        method="dialog"
                        className="absolute flex justify-between  items-center left-1 right-1 px-1 top-2 w-full "
                      >
                        <div className="flex items-center gap-x-3">
                          <a href={repo.url}>
                            <Github className="w-4 h-4" />
                          </a>
                          <a href={repo.homepageUrl}>
                            <Tv className="w-4 h-4" />
                          </a>
                        </div>
                        <button className="btn btn-sm btn-circle btn-ghost ">
                          ✕
                        </button>
                      </form>
                    </div>
                    <div className="flex flex-col gap-4">
                      <p className="font-light text-sm mt-3 border-b">
                        Description: {repo?.description}
                      </p>
                      <p>Languages</p>
                      <div className="flex gap-x-4">
                        {repo.languages.map((lang) => {
                          return (
                            <div className="flex gap-x-1 justify-start items-center text-xs">
                              <div
                                className="rounded-full w-3 h-3"
                                style={{
                                  background: lang.color,
                                }}
                              />
                              <p key={lang.color} className="text-sm">
                                {lang.name}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </dialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
