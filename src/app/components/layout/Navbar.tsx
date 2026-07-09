"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import Button from "../ui/Button";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold tracking-tight">
          Sofie<span className="text-blue-500">.</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="transition hover:text-blue-400"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="https://github.com/"
            target="_blank"
            aria-label="GitHub"
          >
            <FaGithub className="h-5 w-5 hover:text-blue-400" />
          </Link>

          <Link
            href="https://linkedin.com/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="h-5 w-5 hover:text-blue-400" />
          </Link>

          <Button href="#contact">
            Contact
          </Button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-slate-800 bg-slate-950 md:hidden">
          <div className="flex flex-col gap-4 px-6 py-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}