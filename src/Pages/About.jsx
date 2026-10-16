import { Link } from "react-router-dom";

function About() {
  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-950 to-slate-900 p-8 sm:p-14">
        <p className="text-sm font-bold uppercase tracking-widest text-indigo-400">
          About our project
        </p>

        <h1 className="mt-5 text-4xl font-extrabold sm:text-6xl">
          Simple code.
          <br />
          <span className="text-indigo-400">
            Powerful navigation.
          </span>
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          This React application demonstrates client-side
          navigation using BrowserRouter, Routes, Route, and Link.
          Users can move between pages without reloading the
          entire webpage.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {[
          {
            title: "React",
            description: "Build reusable interface components.",
          },
          {
            title: "React Router DOM",
            description: "Manage navigation between pages.",
          },
          {
            title: "Tailwind CSS",
            description: "Create a responsive, modern design.",
          },
        ].map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-white/10 bg-slate-900 p-7 transition hover:border-indigo-400/50"
          >
            <h2 className="text-xl font-bold text-indigo-300">
              {item.title}
            </h2>

            <p className="mt-3 leading-7 text-slate-400">
              {item.description}
            </p>
          </article>
        ))}
      </section>

      <Link
        to="/contact"
        className="inline-block rounded-xl bg-indigo-500 px-6 py-3 font-semibold transition hover:bg-indigo-400"
      >
        Contact Us →
      </Link>
    </div>
  );
}

export default About;