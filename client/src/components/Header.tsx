import { BsHandbag, BsHouse } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between h-24 text-xl text-white">
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
        <span className="items-center text-3xl text-black font-mont">
          THESIS
        </span>
      </div>
      <div className="flex justify-center gap-5 text-2xl basis-1/3">
        <BsHandbag />
        <Link to="/">
          <BsHouse />
        </Link>
      </div>
    </nav>
  );
}
