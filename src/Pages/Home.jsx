import { Link } from "react-router-dom";

function Home() {
  const features = [
    {
      icon: "⚡",
      title: "Fast Navigation",
      description:
        "Navigate between pages without reloading the entire website.",
    },
    {
      icon: "🧭",
      title: "Easy Routing",
      description:
        "Organize your application with simple and clear routes.",
    },
    {
      icon: "✨",
      title: "Modern Design",
      description:
        "Enjoy a clean and responsive interface using Tailwind CSS.",
    },
  ];

  return (
    <div className="space-y-16">
      <section className="relative overflow-hidden rounded-3xl border border-indigo-400/20 bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 px-6 py-16 sm:px-12 sm:py-24">
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />

        <div className="relative max-w-3xl">
          <span className="rounded-full border border-indigo-400/30 bg-indigo-400/10 px-4 py-2 text-sm text-indigo-300">
            Welcome to RouteFlow
          </span>

          <h1 className="mt-8 text-4xl font-extrabold leading-tight sm:text-6xl">
            Explore more.
            <br />
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Reload less.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Discover seamless navigation with React Router.
            Move between Home, About, and Contact with a modern,
            responsive interface.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              to="/about"
              className="rounded-xl bg-indigo-500 px-6 py-3.5 font-semibold text-white transition hover:bg-indigo-400"
            >
              Explore Project →
            </Link>

            <Link
              to="/contact"
              className="rounded-xl border border-white/20 px-6 py-3.5 font-semibold transition hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-400">
            <span>✓ Smooth navigation</span>
            <span>✓ Responsive design</span>
            <span>✓ Reusable components</span>
          </div>
        </div>
      </section>

      <section>
        <p className="text-sm font-bold uppercase tracking-widest text-indigo-400">
          Features
        </p>

        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          Designed for simplicity.
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-white/10 bg-slate-900 p-7 transition hover:-translate-y-1 hover:border-indigo-400/50"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/15 text-3xl">
                {feature.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold">
                {feature.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;