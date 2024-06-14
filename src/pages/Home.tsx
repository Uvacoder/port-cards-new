import { TextGenerateEffect } from "@/components/acernity/text-generate-effect";
import { TypewriterEffect } from "@/components/acernity/typewriter-effect";
import { BentoGrid, BentoGridItem } from "@/components/acernity/bento-grid";

function Home() {
  return (
    <BentoGrid className="w-[90%] md:mt-20 md:w-5/6 max-w-[900px]">
      <BentoGridItem
        className="col-span-1 md:col-span-2"
        header={
          <TypewriterEffect
            words={typewriterWords}
            className="w-full md:text-lg text-sm text-left"
            cursorClassName="text-wrror"
          />
        }
      />
      <BentoGridItem
        title="title"
        description="description"
        header={"header"}
        className="text-right bg-success/60"
      />
      <BentoGridItem
        title="title"
        description="List of projects"
        header={"header"}
        className="text-right bg-secondary/50"
      />
      <BentoGridItem className="col-span-2" />
    </BentoGrid>
  );
}

export default Home;

const typewriterWords = [
  {
    text: "Hello",
  },
  {
    text: "World",
  },
  {
    text: "It's",
  },
  {
    text: "a",
  },
  {
    text: "Good",
    className: "text-error w-full",
  },
  {
    text: "Day",
    className: "text-error w-full",
  },
];
