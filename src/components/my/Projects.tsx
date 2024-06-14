import { type Repository } from "@/lib/repoTypes";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";
import { Github, Tv, Wrench } from "lucide-react";
export function Projects({ repoList }: { repoList: Repository[] }) {
  function showDetails(e: React.SyntheticEvent) {
    e.preventDefault();
    const modal: HTMLDialogElement | null = document.getElementById(
      "modal_1"
    ) as HTMLDialogElement;
    if (!modal) return;
    modal.showModal();
  }

  return (
    <div className=" w-full ">
      <h1 className="font-bold text-center  sm:text-left w-[90%] md:w-3/4  mt-12 mb-5 text-3xl mx-auto">
        Projects
      </h1>
      <Table className=" w-[90%] mx-auto  md:w-3/4 ">
        <TableBody>
          {repoList?.map((repo: Repository, i: number) => (
            <TableRow key={i} className="border- border-black  ">
              <TableCell className="font-medium">{repo.name}</TableCell>
              <TableCell className=" hidden font-extralight sm:flex justify-left  flex-wrap gap-3">
                {repo.repositoryTopics.length > 0
                  ? repo.repositoryTopics.map((tag, k) => {
                      return tag.topic;
                    })
                  : "No Tags"}
              </TableCell>
              <TableCell>
                <Button variant={"link"} asChild>
                  <a href={repo.homepageUrl} target="_blank">
                    <Tv className="w-5 text-success " />
                  </a>
                </Button>
              </TableCell>
              <TableCell>
                <Button variant={"link"} asChild>
                  <a href={repo.url}>
                    <Github className="w-5  text-black" />
                  </a>
                </Button>
              </TableCell>
              <TableCell>
                <Button className="text-base-100" variant={"link"} onClick={(e) => showDetails(e)}>
                  Details
                </Button>
                <dialog id="modal_1" className="w-3/4 md:w-1/2 rounded-md">
                  <div className="modal_box p-4 w-full">
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
                      <div className="flex flex-wrap gap-x-4">
                        {repo.languages.map((lang, j) => {
                          return (
                            <div
                              key={j}
                              className="flex flex-wrap gap-x-1 justify-start items-center text-xs"
                            >
                              <div
                                className="rounded-full w-3 h-3"
                                style={{
                                  background: lang.color,
                                }}
                              />
                              <p className="text-sm">{lang.name}</p>
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
