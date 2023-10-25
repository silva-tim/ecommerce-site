import { BsFolder, BsLinkedin, BsGithub } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="flex items-center justify-around h-32 text-white bg-zinc-800">
      <span className="text-zinc-300">
        Copyright © 2023 Tim Silva. All Rights Reserved
      </span>
      <div className="flex gap-6 text-2xl">
        <a
          href="https://www.linkedin.com/in/silva-tim/"
          target="_blank"
          className="hover:scale-110"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/silva-tim"
          target="_blank"
          className="hover:scale-110"
        >
          <BsGithub />
        </a>
        <a
          href="https://silvatim.com/"
          target="_blank"
          className="hover:scale-110"
        >
          <BsFolder />
        </a>
      </div>
    </footer>
  );
}
