import { BsHandbag } from "react-icons/bs";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 flex items-center justify-center h-24 bg-red-200">
      <div className="flex justify-center basis-1/5">
        <span>Thesis</span>
      </div>
      <div className="flex justify-center gap-6 basis-3/5">
        <span>Men</span>
        <span>Women</span>
      </div>
      <div className="flex justify-center basis-1/5">
        <BsHandbag />
      </div>
    </header>
  );
}
