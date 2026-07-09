import Link from "next/link";
import { Mail, Menu, X } from "lucide-react";
import {FaGithub, FaLinkedin} from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 text-center">

        <h3 className="text-xl font-semibold">
          Sofie Verhoeven
        </h3>

        <p className="max-w-xl text-slate-400">
          Full-Stack Developer passionate about building modern,
          responsive and user-friendly web applications.
        </p>

        <div className="flex gap-5">
          <Link href="https://github.com/" target="_blank">
            <FaGithub className="h-5 w-5 hover:text-blue-400" />
          </Link>

          <Link href="https://linkedin.com/" target="_blank">
            <FaLinkedin className="h-5 w-5 hover:text-blue-400" />
          </Link>

          <Link href="mailto:your@email.com">
            <Mail />
          </Link>
        </div>

        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Sofie Verhoeven. All rights reserved.
        </p>

      </div>
    </footer>
  );
}