import { TextGenerateEffect } from "@/components/acernity/text-generate-effect";
function Home() {
  return (
    <div className="h-[500px] lg:max-h-[500px]  grid grid-cols-3  grid-rows-3 lg:grid-cols-4 lg:grid-rows-4 mx-10 gap-3  ">
      <div className="rounded-box  grid grid-cols-2 grid-rows-2 gap-2  row-span-4"></div>
      <div className=" rounded-box bg-primary row-span-1 lg:row-span-2"></div>
      <div className=" rounded-box bg-warning row-span-1 lg:row-span-2"></div>
      <div className=" border border-black/20 bg-accent rounded-box row-span-full col-span-2 ">
        <h1 className="m-4">
          <TextGenerateEffect words="Hello world its a beautiful day" />
        </h1>
      </div>
    </div>
  );
}

export default Home;
