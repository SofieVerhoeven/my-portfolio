import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import {projects} from "../../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-6 py-24"
    >

      <SectionHeading
        title="Projects"
        subtitle="Some of the projects I have worked on."
      />

      <div className="grid gap-8 md:grid-cols-3">

        {projects.map((project) => (
          <Card key={project.title}>

            <h3 className="text-xl font-bold">
              {project.title}
            </h3>

            <p className="mt-4 text-slate-400">
              {project.description}
            </p>


            <div className="mt-6 flex flex-wrap gap-2">

              {project.technologies.map((tech) => (
                <Badge
                  key={tech}
                  text={tech}
                />
              ))}

            </div>

          </Card>
        ))}

      </div>

    </section>
  );
}