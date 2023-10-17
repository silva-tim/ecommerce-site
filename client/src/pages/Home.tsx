import { BsDot } from "react-icons/bs";

export default function Home() {
  return (
    <section>
      <div className="bg-cover flex justify-center items-center bg-center h-screen w-screen px-10 bg-[url('/images/hero.jpg')]">
        <span className="text-6xl font-thin tracking-widest text-center basis-full font-mont">
          THESIS
        </span>
      </div>
      <div className="flex flex-wrap justify-center p-10">
        <div className="flex justify-center h-screen gap-4 basis-full">
          <div className="bg-cover flex basis-1/2 justify-center items-center h-4/5 bg-center bg-[url('/images/women.jpg')]">
            <span className="px-4 py-2 text-3xl bg-white font-mont">Women</span>
          </div>
          <div className="bg-cover flex basis-1/2 justify-center items-center h-4/5 bg-center bg-[url('/images/men.jpg')]">
            <span className="px-4 py-2 text-3xl bg-white font-mont">Men</span>
          </div>
        </div>
        <div className="flex flex-wrap p-4 border border-black rounded-md">
          <div className="flex items-center basis-full">
            <BsDot />
            <span className="flex font-serif text-2xl basis-full">thesis</span>
          </div>
          <span className="pt-2">
            1. a statement or theory that is put forward as a premise to be
            maintained or proved.
          </span>
        </div>
      </div>
    </section>
  );
}
