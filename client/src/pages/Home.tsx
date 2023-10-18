import { BsDot } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section>
      <div className="bg-cover flex justify-center items-center bg-center h-screen w-screen px-10 bg-[url('/images/hero.jpg')]">
        <span className="text-6xl tracking-widest text-center basis-full font-mont">
          THESIS
        </span>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="flex items-center justify-center h-screen gap-5 p-10 basis-full">
          <Link
            to="/women"
            className="group bg-cover flex basis-1/2 justify-center items-center h-5/6 bg-center bg-[url('/images/women.jpg')] transition bg-blend-overlay hover:bg-black hover:bg-opacity-20"
          >
            <span className="px-4 py-2 text-3xl bg-white font-mont">Women</span>
          </Link>
          <Link
            to="/men"
            className="group bg-cover flex basis-1/2 justify-center items-center h-5/6 bg-center bg-[url('/images/men.jpg')] transition bg-blend-overlay hover:bg-black hover:bg-opacity-20"
          >
            <span className="px-4 py-2 text-3xl bg-white font-mont">Men</span>
          </Link>
        </div>
        <div className="h-96 basis-5/6 mb-20 bg-center bg-cover rounded-xl bg-[url('/images/about.jpg')]">
          <div className="w-full h-full backdrop-blur-sm">
            <div className="flex justify-center basis-full">
              <span className="p-10 text-3xl font-black text-white font-mont">
                About
              </span>
            </div>
            {/* <div className="flex items-center basis-full">
                <BsDot />
                <span className="flex font-serif text-2xl basis-full">
                  thesis
                </span>
              </div>
              <span className="pt-2">
                1. a statement or theory that is put forward as a premise to be
                maintained or proved.
              </span> */}
          </div>
        </div>
      </div>
    </section>
  );
}
