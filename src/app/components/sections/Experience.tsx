import SectionHeading from "../ui/SectionHeading";

export default function Experience() {
  return (
    <section className="bg-slate-900/50 px-6 py-24">

      <div className="mx-auto max-w-5xl">

        <SectionHeading
          title="Experience"
          subtitle="My learning journey and development experience."
        />

        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-8">

          <h3 className="text-xl font-bold">
            Graduaat Programmeren
          </h3>

          <p className="mt-2 text-blue-400">
            Thomas More Hogeschool
          </p>

          <p className="mt-4 text-slate-400">
            Focused on software development, web applications,
            programming concepts and modern development workflows.
          </p>

        </div>

      </div>

    </section>
  );
}