function Contact() {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="mx-auto max-w-4xl">
      <section className="mb-10 text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-indigo-400">
          Get in touch
        </p>

        <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">
          Let's connect.
        </h1>

        <p className="mt-4 text-slate-400">
          Have a question? Send us a message.
        </p>
      </section>

      <section className="rounded-3xl border border-white/10 bg-slate-900 p-6 sm:p-10">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-slate-300"
            >
              Full Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              required
              className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-indigo-400"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-slate-300"
            >
              Email Address
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
              className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-indigo-400"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-slate-300"
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Write your message..."
              required
              className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-indigo-400"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-indigo-500 px-6 py-3.5 font-semibold transition hover:bg-indigo-400"
          >
            Send Message →
          </button>
        </form>
      </section>
    </div>
  );
}

export default Contact;