import { BsHandbag } from "react-icons/bs";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 flex items-center justify-center h-24 bg-red-200">
      <span className="basis-1/3">Thesis</span>
      <div className="basis-1/3">
        <span>Men</span>
        <span>Women</span>
      </div>
      <BsHandbag />
    </header>
  );
}
