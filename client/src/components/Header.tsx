import { useState } from "react";
import { BsHandbag, BsHouse } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Header() {
  const [transparent, setTransparent] = useState(true);

  function changeColor() {
    if (window.scrollY >= 90) {
      setTransparent(false);
    } else {
      setTransparent(true);
    }
  }

  window.addEventListener("scroll", changeColor);

  return (
    <nav
      className={`fixed top-0 left-0 transition right-0 z-10 flex items-center justify-between h-24 text-xl ${
        transparent
          ? "text-white"
          : "bg-white border-b-black border-b text-black"
      }`}
    >
      <div className="flex justify-center gap-5 basis-1/3 font-mont">
        <Link to="/men" className="hover:underline">
          Men
        </Link>
        |
        <Link to="/women" className="hover:underline">
          Women
        </Link>
        |
        <Link to="/apothecary" className="hover:underline">
          Apothecary
        </Link>
      </div>
      <div className="flex justify-center basis-1/3">
        <Link to="/" className="items-center text-3xl text-black font-mont">
          THESIS
        </Link>
      </div>
      <div className="flex justify-center gap-5 text-2xl basis-1/3">
        <BsHandbag />
        <Link to="/" className="hover:scale-110">
          <BsHouse />
        </Link>
      </div>
    </nav>
  );
}
