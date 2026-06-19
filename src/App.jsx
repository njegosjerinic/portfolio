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
              Izrađujem brze, moderne i pregledne web stranice koristeći PHP,
              Laravel, React i WordPress.
            </p>

            <nav className="mt-12 hidden flex-col gap-5 text-sm font-semibold uppercase tracking-widest text-zinc-500 lg:flex">
              <a href="#projects" className="hover:text-white">
                Projekti
              </a>

              <a href="#services" className="hover:text-white">
                Usluge
              </a>

              <a href="#about" className="hover:text-white">
                O meni
              </a>

              <a href="#contact" className="hover:text-white">
                Kontakt
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
              Izdvojeni Projekti
            </p>

            <div className="space-y-6">
              <article className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 shadow-[0_0_40px_rgba(34,211,238,0.08)] backdrop-blur-sm transition hover:border-cyan-400/50 hover:shadow-[0_0_60px_rgba(34,211,238,0.15)]">
                <img
                  src="public\images\Screenshot 2026-05-19 192630.png"
                  alt="Proda-Mont"
                  className="h-[250px] w-full object-cover"
                />

                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-white">
                    Proda-Mont d.o.o
                  </h2>

                  <p className="mt-3 leading-7 text-zinc-400">
                    Rad na unapređenju i održavanju web stranice sa fokusom na
                    brzinu, preglednost, mobilni prikaz i stabilnost sistema
                    kako bi korisnici imali bolje iskustvo prilikom pregleda
                    sadržaja i kontaktiranja firme.
                  </p>

                  <a
                    href="https://proda-mont.ba"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center rounded-full border border-cyan-400 px-5 py-2 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-zinc-950"
                  >
                    Posjeti stranicu
                  </a>
                </div>
              </article>

              <article className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 shadow-[0_0_40px_rgba(34,211,238,0.08)] backdrop-blur-sm transition hover:border-cyan-400/50 hover:shadow-[0_0_60px_rgba(34,211,238,0.15)]">
                <img
                  src="public\images\Screenshot 2026-05-19 214133.png"
                  alt="Proda-Mont"
                  className="h-[250px] w-full object-cover"
                />

                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-white">
                    Restoran Kraljica
                  </h2>

                  <p className="mt-3 leading-7 text-zinc-400">
                    Rad na modernizaciji i unapređenju web stranice restorana sa
                    fokusom na preglednost menija, mobilni prikaz, jednostavnije
                    informisanje gostiju i bolje predstavljanje restorana na
                    internetu.
                  </p>

                  <a
                    href="https://restoran-kraljica.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center rounded-full border border-cyan-400 px-5 py-2 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-zinc-950"
                  >
                    Posjeti stranicu
                  </a>
                </div>
              </article>

              <article className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition hover:border-cyan-400/50">
                <h2 className="text-2xl font-semibold text-white">
                  Booking Web Aplikacija
                </h2>

                <p className="mt-3 leading-7 text-zinc-400">
                  Sistem za rezervacije sa Laravel backendom, React frontendom,
                  autentifikacijom korisnika i validacijom rezervacija.
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
                  Fullstack e-commerce aplikacija izrađena koristeći React, PHP,
                  custom GraphQL API i MySQL bazu podataka. Aplikacija uključuje
                  filtere proizvoda, rad sa atributima, korpu i sistem za
                  naručivanje.
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
              Usluge
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-zinc-800 p-5">
                <h3 className="font-semibold text-white">
                  Izrada Web Stranica
                </h3>

                <p className="mt-2 text-zinc-400">
                  Moderne i responsive web stranice za firme i biznise.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-800 p-5">
                <h3 className="font-semibold text-white">
                  WordPress Održavanje
                </h3>

                <p className="mt-2 text-zinc-400">
                  Ispravke, nadogradnje, optimizacija i podrška hostingu.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-800 p-5">
                <h3 className="font-semibold text-white">
                  Backend Development
                </h3>

                <p className="mt-2 text-zinc-400">
                  PHP, Laravel, MySQL i razvoj API sistema.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-800 p-5">
                <h3 className="font-semibold text-white">
                  Optimizacija Performansi
                </h3>

                <p className="mt-2 text-zinc-400">
                  Brže učitavanje, bolji mobilni prikaz i čišća struktura sajta.
                </p>
              </div>
            </div>
          </section>

          <section id="about" className="mt-24">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-cyan-400">
              O meni
            </p>

            <p className="leading-8 text-zinc-400">
              Backend-heavy fullstack developer fokusiran na izradu praktičnih
              web rješenja. Najviše radim sa PHP-om, Laravelom, Reactom, MySQL
              bazama i WordPress projektima. Posebno me zanimaju produkcijski
              problemi, optimizacija i unapređenje korisničkog iskustva.
            </p>
          </section>

          <section id="contact" className="mt-24 pb-20">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Kontakt
            </p>

            <h2 className="text-3xl font-semibold text-white">
              Hajde da napravimo nešto korisno.
            </h2>

            <p className="mt-4 text-zinc-400">
              Dostupan za izradu web stranica, WordPress održavanje i fullstack
              development projekte.
            </p>

            <a
              href="mailto:njegos.jerinic@gmail.com"
              className="mt-8 inline-block rounded-full bg-cyan-400 px-6 py-3 font-semibold text-zinc-950 transition hover:bg-cyan-300"
            >
              Kontaktiraj me
            </a>
          </section>
        </section>
      </div>
    </main>
  );
}

export default App;
