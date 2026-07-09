import SectionHeading from "../ui/SectionHeading";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-6 py-24"
    >
      <SectionHeading
        title="About Me"
        subtitle="A little bit about who I am and what I do."
      />

      <div className="mx-auto max-w-3xl text-center text-lg text-slate-400">
        <p>
          I'm Sofie Verhoeven, a Full-Stack Developer passionate about
          creating modern, responsive and user-friendly web applications.
        </p>

        <p className="mt-6">
          I enjoy turning ideas into digital products using technologies
          like React, Next.js, TypeScript and JavaScript. I focus on
          writing clean code, building intuitive interfaces and creating
          solutions that provide a great user experience.
        </p>

        <p className="mt-6">
          Besides web development, I enjoy working on creative software
          projects, learning new technologies and exploring ways to improve
          my development skills.
        </p>
      </div>
    </section>
  );
}