import { BsDot } from "react-icons/bs";

export default function Home() {
  return (
    <section>
      <div className="bg-cover flex justify-center items-center bg-center h-screen w-screen px-10 bg-[url('/images/hero.jpg')]">
        <span className="text-6xl font-thin tracking-widest text-center basis-full font-mont">
          THESIS
        </span>
      </div>
      <div className="flex flex-wrap justify-center p-20">
        <span className="text-3xl text-center basis-full">
          Make A Statement
        </span>
        <div className="flex flex-wrap p-4">
          <span className="flex text-2xl basis-full">
            <BsDot />
            thesis
          </span>
          <span className="pt-2">
            1. a statement or theory that is put forward as a premise to be
            maintained or proved.
          </span>
        </div>
      </div>
    </section>
  );
}
