import { FlipWords } from "../acernity/flip-words";
function Header() {
  const words = ["Engineer", "Developer"]
  return (
    <div className=" sticky bottom-auto lg:absolute lg:bottom-0  hidden sm:flex flex-col mx-5 mb-5  text-left items-start justify-start">
      <h1 className="font-mono  text-sm md:text-3xl">Vince Flores</h1>
      <p className="text-xs">
        Software <FlipWords words={words} />
      </p>
    </div>
  );
}

export default Header;
