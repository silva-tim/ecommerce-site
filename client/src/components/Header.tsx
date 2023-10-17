import { BsHandbag, BsHouse } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between h-24 text-2xl text-white">
      <div className="flex justify-center gap-5 basis-1/5 font-mont">
        <Link to="/men">Men</Link>
        <Link to="/women">Women</Link>
      </div>
      <div className="flex justify-center gap-5 text-3xl basis-1/5">
        <BsHandbag />
        <Link to="/">
          <BsHouse />
        </Link>
      </div>
    </nav>
  );
}
