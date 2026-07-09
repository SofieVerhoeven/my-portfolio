import SectionHeading from "../ui/SectionHeading";

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";

const skills = [
  {
    name: "React",
    icon: <FaReact />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-900/50 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        <SectionHeading
          title="Skills & Technologies"
          subtitle="Technologies I use to build modern applications."
        />

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">

          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center gap-3 rounded-2xl border border-slate-800 bg-slate-950 p-6 transition hover:-translate-y-1"
            >

              <div className="text-4xl text-blue-400">
                {skill.icon}
              </div>

              <span>
                {skill.name}
              </span>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}