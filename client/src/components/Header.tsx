import { BsHandbag, BsHouse } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between h-24 text-xl text-white">
      <div className="flex justify-center gap-5 basis-1/3 font-mont">
        <Link to="/men">Men</Link>|<Link to="/women">Women</Link>|
        <Link to="/apothecary">Apothecary</Link>
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
