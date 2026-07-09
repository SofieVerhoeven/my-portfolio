import SectionHeading from "../ui/SectionHeading";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-6 py-24"
    >

      <SectionHeading
        title="Contact"
        subtitle="Interested in working together? Feel free to reach out."
      />

      <div className="mx-auto max-w-xl">

        <form className="space-y-5">

          <input
            placeholder="Name"
            className="w-full rounded-xl border border-slate-800 bg-slate-900 px-4 py-3"
          />

          <input
            placeholder="Email"
            className="w-full rounded-xl border border-slate-800 bg-slate-900 px-4 py-3"
          />

          <textarea
            placeholder="Message"
            rows={5}
            className="w-full rounded-xl border border-slate-800 bg-slate-900 px-4 py-3"
          />

          <button
            className="w-full rounded-xl bg-blue-600 py-3 font-semibold hover:bg-blue-700"
          >
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}