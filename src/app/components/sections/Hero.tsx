"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import Button from "../ui/Button";
import Badge from "../ui/Badge";

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Node.js",
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        {/* Tekst gedeelte */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 text-lg text-blue-400">Hello, I'm</p>

          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
            Sofie Verhoeven
          </h1>

          <h2 className="mt-4 text-2xl font-semibold text-slate-400 md:text-3xl">
            Full-Stack Developer
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
            I build modern, responsive and user-friendly web applications using
            React, Next.js and TypeScript. I enjoy transforming ideas into
            clean, scalable digital solutions.
          </p>

          {/* Technologie badges */}
          <div className="mt-8 flex flex-wrap gap-3">
            {technologies.map((technology, index) => (
              <motion.div
                key={technology}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  delay: 0.5 + index * 0.1,
                }}
              >
                <Badge text={technology} />
              </motion.div>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="#projects">View Projects</Button>

            <Button href="#contact" variant="secondary">
              Contact Me
            </Button>

            <a
              href="/cv/sofie-verhoeven-cv.pdf"
              download
              className="flex items-center gap-2 rounded-xl border border-slate-700 px-6 py-3 font-semibold transition hover:bg-slate-800"
            >
              <Download size={18} />
              CV
            </a>
          </div>

          {/* Social links */}
          <div className="mt-8 flex gap-5">
            <a
              href="https://github.com/"
              target="_blank"
              className="transition hover:text-blue-400"
            >
              <FaGithub size={24} />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              className="transition hover:text-blue-400"
            >
              <FaLinkedin size={24} />
            </a>

            <a
              href="mailto:your@email.com"
              className="transition hover:text-blue-400"
            >
              <Mail size={24} />
            </a>
          </div>
        </motion.div>

        {/* Profiel afbeelding */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-blue-500 blur-3xl opacity-20" />

            <div className="relative flex h-72 w-72 items-center justify-center overflow-hidden rounded-full border border-slate-800 bg-slate-900 md:h-96 md:w-96">
              <div className="text-6xl">👩‍💻</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400"
      >
        <ArrowDown />
      </motion.a>
    </section>
  );
}
