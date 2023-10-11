import { BsHandbag } from "react-icons/bs";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between h-24 text-2xl text-white">
      <div className="flex justify-center gap-6 basis-1/5">
        <span>Men</span>
        <span>Women</span>
      </div>
      <div className="flex justify-center text-3xl basis-1/5">
        <BsHandbag />
      </div>
    </header>
  );
}
