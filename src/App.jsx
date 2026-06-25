function App() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto flex max-w-6xl flex-col px-6 py-10 lg:flex-row lg:gap-16 lg:px-10">
        <aside className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-1/3 lg:flex-col lg:justify-between lg:py-20">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-white">
              Njegoš Jerinić
            </h1>

            <p className="mt-3 text-xl text-zinc-300">
              Fullstack Web Developer
            </p>

            <p className="mt-5 max-w-sm leading-7 text-zinc-400">
              I build fast, modern and user-friendly websites using PHP,
              Laravel, React and WordPress.
            </p>

            <nav className="mt-12 hidden flex-col gap-5 text-sm font-semibold uppercase tracking-widest text-zinc-500 lg:flex">
              <a href="#projects" className="hover:text-white">
                Projects
              </a>

              <a href="#services" className="hover:text-white">
                Services
              </a>

              <a href="#about" className="hover:text-white">
                About
              </a>

              <a href="#contact" className="hover:text-white">
                Contact
              </a>
            </nav>
          </div>

          <div className="mt-10 flex gap-5 text-zinc-400 lg:mt-0">
            <a
              href="https://github.com/njegosjerinic"
              className="hover:text-white"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/njegos-jerinic-ab7071316/"
              className="hover:text-white"
            >
              LinkedIn
            </a>

            <a
              href="mailto:njegos.jerinic@gmail.com"
              className="hover:text-white"
            >
              Email
            </a>
          </div>
        </aside>

        <section className="mt-16 lg:mt-0 lg:w-2/3 lg:py-20">
          <section id="projects">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Featured Projects
            </p>

            <div className="space-y-6">
              <article className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 shadow-[0_0_40px_rgba(34,211,238,0.08)] backdrop-blur-sm transition hover:border-cyan-400/50 hover:shadow-[0_0_60px_rgba(34,211,238,0.15)]">
                <img
                  src="/images/proda-mont.png"
                  alt="Proda-Mont"
                  className="h-[250px] w-full object-cover"
                />

                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-white">
                    Proda-Mont d.o.o
                  </h2>

                  <p className="mt-3 leading-7 text-zinc-400">
                    Worked on improving and maintaining the company's website
                    with a focus on speed, usability, mobile responsiveness and
                    system stability to provide a better user experience when
                    browsing content and contacting the company.
                  </p>

                  <a
                    href="https://proda-mont.ba"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center rounded-full border border-cyan-400 px-5 py-2 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-zinc-950"
                  >
                    Visit Website
                  </a>
                </div>
              </article>

              <article className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 shadow-[0_0_40px_rgba(34,211,238,0.08)] backdrop-blur-sm transition hover:border-cyan-400/50 hover:shadow-[0_0_60px_rgba(34,211,238,0.15)]">
                <img
                  src="/images/restoran-kraljica.png"
                  alt="Proda-Mont"
                  className="h-[250px] w-full object-cover"
                />

                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-white">
                    Restoran Kraljica
                  </h2>

                  <p className="mt-3 leading-7 text-zinc-400">
                    Worked on modernizing and improving the restaurant's website
                    with a focus on menu presentation, mobile responsiveness,
                    easier access to information for guests and a stronger
                    online presence.
                  </p>

                  <a
                    href="https://restoran-kraljica.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center rounded-full border border-cyan-400 px-5 py-2 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-zinc-950"
                  >
                    Visit Website
                  </a>
                </div>
              </article>

              <article className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition hover:border-cyan-400/50">
                <h2 className="text-2xl font-semibold text-white">
                  Booking Web Application
                </h2>

                <p className="mt-3 leading-7 text-zinc-400">
                  Reservation system with a Laravel backend, React frontend,
                  user authentication and reservation validation.
                </p>

                <div className="mt-4 flex flex-wrap gap-2 text-sm text-cyan-300">
                  <span>Laravel</span>
                  <span>React</span>
                  <span>MySQL</span>
                </div>
              </article>

              <article className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition hover:border-cyan-400/50">
                <h2 className="text-2xl font-semibold text-white">
                  Scandiweb E-commerce
                </h2>

                <p className="mt-3 leading-7 text-zinc-400">
                  Fullstack e-commerce application built using React, PHP, a
                  custom GraphQL API and a MySQL database. The application
                  includes product filters, attribute handling, a shopping cart
                  and an ordering system.
                </p>

                <div className="mt-4 flex flex-wrap gap-2 text-sm text-cyan-300">
                  <span>React</span>
                  <span>PHP</span>
                  <span>GraphQL</span>
                  <span>MySQL</span>
                </div>
              </article>
            </div>
          </section>

          <section id="services" className="mt-24">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Services
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-zinc-800 p-5">
                <h3 className="font-semibold text-white">
                  Website Development
                </h3>

                <p className="mt-2 text-zinc-400">
                  Modern and responsive websites for companies and businesses.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-800 p-5">
                <h3 className="font-semibold text-white">
                  WordPress Maintenance
                </h3>

                <p className="mt-2 text-zinc-400">
                  Bug fixes, updates, optimization and hosting support.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-800 p-5">
                <h3 className="font-semibold text-white">
                  Backend Development
                </h3>

                <p className="mt-2 text-zinc-400">
                  PHP, Laravel, MySQL and API development.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-800 p-5">
                <h3 className="font-semibold text-white">
                  Performance Optimization
                </h3>

                <p className="mt-2 text-zinc-400">
                  Faster loading, improved mobile experience and cleaner website
                  structure.
                </p>
              </div>
            </div>
          </section>

          <section id="about" className="mt-24">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-cyan-400">
              About
            </p>

            <p className="leading-8 text-zinc-400">
              Backend-focused fullstack developer specializing in practical web
              solutions. I primarily work with PHP, Laravel, React, MySQL and
              WordPress projects. I am especially interested in solving
              production issues, optimization and improving user experience.
            </p>
          </section>

          <section id="contact" className="mt-24 pb-20">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Contact
            </p>

            <h2 className="text-3xl font-semibold text-white">
              Let's build something useful together.
            </h2>

            <p className="mt-4 text-zinc-400">
              Available for website development, WordPress maintenance and
              fullstack development projects.
            </p>

            <a
              href="mailto:njegos.jerinic@gmail.com"
              className="mt-8 inline-block rounded-full bg-cyan-400 px-6 py-3 font-semibold text-zinc-950 transition hover:bg-cyan-300"
            >
              Contact Me
            </a>
          </section>
        </section>
      </div>
    </main>
  );
}

export default App;
