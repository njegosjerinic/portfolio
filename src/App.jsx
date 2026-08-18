import ContactForm from "./components/ContactForm";

const projects = [
  { number: "01", title: "Just Slots", eyebrow: "Game engineering", description: "A browser slot game built around a real game loop—not a decorative demo. It handles reel animation, audio, game state, remote game-server results and tested core behavior.", tech: ["TypeScript", "PixiJS", "RGS", "Vitest", "Howler"], github: "https://github.com/njegosjerinic/just-slots-game", type: "slot" },
  { number: "02", title: "Cookie Consenter", eyebrow: "Privacy tooling", description: "A WordPress plugin that detects and blocks analytics and marketing scripts before consent. Includes consent categories and a browser API for controlling behavior without breaking the page.", tech: ["PHP", "JavaScript", "WordPress", "Browser API"], github: "https://github.com/njegosjerinic/cookie-consent", type: "cookie" },
  { number: "03", title: "Booking Application", eyebrow: "Full-stack system", description: "A reservation system with authentication, user roles and server-side collision validation that prevents overlapping bookings and keeps availability trustworthy.", tech: ["Laravel", "React", "MySQL", "REST"], github: "https://github.com/njegosjerinic/mini-booking-app", live: "https://mini-booking-app-oc8z.onrender.com/", type: "booking" },
];

function Arrow() {
  return <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">↗</span>;
}

function ProjectArt({ type }) {
  if (type === "slot") return (
    <div className="project-art relative grid min-h-80 place-items-center overflow-hidden bg-[#171717] text-[#f3efe4]">
      <span className="absolute left-5 top-5 font-mono text-xs uppercase tracking-[0.2em] text-white/45">RGS connected</span>
      <div className="relative flex gap-2 border-2 border-[#f3efe4] p-3 shadow-[9px_9px_0_#ed5b3a]">{["7", "★", "7"].map((item, index) => <div key={`${item}-${index}`} className="grid h-24 w-20 place-items-center border border-white/25 bg-[#242424] font-serif text-4xl">{item}</div>)}</div>
      <span className="absolute bottom-5 right-5 h-3 w-3 rounded-full bg-[#ed5b3a] shadow-[0_0_0_7px_rgba(237,91,58,0.16)]" />
    </div>
  );
  if (type === "cookie") return (
    <div className="project-art relative flex min-h-80 items-center justify-center overflow-hidden bg-[#d9dfcf] p-8 text-[#171717]">
      <span className="absolute -right-5 -top-10 font-serif text-[12rem] leading-none text-black/[0.035]">C</span>
      <div className="relative w-full max-w-sm border-2 border-[#171717] bg-[#f7f3e9] p-6 shadow-[9px_9px_0_#171717]">
        <p className="font-serif text-2xl">Your privacy, your choice.</p><p className="mt-2 text-sm text-black/55">Choose which scripts are allowed to run.</p>
        <div className="mt-7 space-y-3 font-mono text-xs uppercase tracking-wider">{["Essential", "Analytics", "Marketing"].map((item, index) => <div key={item} className="flex justify-between border-t border-black/20 pt-3"><span>{item}</span><span>{index === 0 ? "Always on" : "○"}</span></div>)}</div>
      </div>
    </div>
  );
  return (
    <div className="project-art grid min-h-80 place-items-center overflow-hidden bg-[#d8d5ef] p-8 text-[#171717]">
      <div className="w-full max-w-md rotate-[-2deg] border-2 border-[#171717] bg-[#f7f3e9] p-5 shadow-[10px_10px_0_#ed5b3a]">
        <div className="flex items-center justify-between border-b-2 border-black pb-3"><strong className="font-serif text-xl">Reservations</strong><span className="font-mono text-xs">MAY / 2026</span></div>
        <div className="mt-4 grid grid-cols-7 gap-1">{Array.from({ length: 28 }, (_, index) => <span key={index} className={`grid aspect-square place-items-center border border-black/15 text-[10px] ${[8, 9, 16].includes(index) ? "bg-[#ed5b3a] text-white" : ""}`}>{index + 1}</span>)}</div>
      </div>
    </div>
  );
}

function App() {
  return (
    <main className="min-h-screen bg-[#f3efe4] text-[#171717] selection:bg-[#ed5b3a] selection:text-white">
      <header className="site-header border-b border-black/20"><div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
        <a href="#top" className="font-mono text-sm font-bold uppercase tracking-[0.16em]">NJ / Software Engineer</a>
        <nav aria-label="Main navigation" className="hidden gap-8 font-mono text-xs uppercase tracking-wider sm:flex"><a href="#work" className="hover:text-[#c63f25]">Work</a><a href="#about" className="hover:text-[#c63f25]">About</a><a href="#contact" className="hover:text-[#c63f25]">Contact</a></nav>
        <a href="mailto:njegos.jerinic@gmail.com?subject=Resume%20request" className="group flex items-center gap-2 border-b border-black pb-1 text-sm font-semibold">Resume <Arrow /></a>
      </div></header>

      <section id="top" className="hero paper-grid overflow-hidden border-b border-black/20"><div className="mx-auto grid max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.45fr_0.55fr] lg:gap-16 lg:px-12 lg:py-28">
        <div className="rise-in"><p className="mb-5 flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-[0.18em]"><span className="h-2.5 w-2.5 rounded-full bg-[#ed5b3a]" /> Open to engineering roles</p><h1 className="hero-title max-w-5xl font-serif text-[clamp(3.8rem,9vw,8rem)] leading-[0.82] tracking-[-0.065em]">I build software that holds up.</h1><p className="hero-copy mt-8 max-w-2xl text-lg leading-8 text-black/65 sm:text-xl">Backend-minded software engineer working across Laravel, TypeScript and React. I like clear systems, difficult bugs and products that do something useful.</p></div>
        <div className="rise-in-delayed mt-12 flex flex-col justify-end lg:mt-0"><div className="border-l-2 border-[#ed5b3a] pl-5"><p className="font-mono text-xs uppercase tracking-widest text-black/45">Previously</p><p className="mt-2 font-serif text-2xl">Junior Software Engineer<br />at Kompitenz</p></div><div className="mt-10 flex gap-5 font-mono text-xs font-bold uppercase tracking-wider"><a href="https://github.com/njegosjerinic" target="_blank" rel="noreferrer" className="group flex gap-1 hover:text-[#c63f25]">GitHub <Arrow /></a><a href="https://www.linkedin.com/in/njegos-jerinic-ab7071316/" target="_blank" rel="noreferrer" className="group flex gap-1 hover:text-[#c63f25]">LinkedIn <Arrow /></a></div></div>
      </div></section>

      <section id="work" className="work-section mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mb-12 flex items-end justify-between border-b-2 border-black pb-4"><div><p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#c63f25]">Selected work</p><h2 className="mt-2 font-serif text-4xl sm:text-6xl">Built, tested, shipped.</h2></div><span className="hidden font-mono text-xs text-black/45 sm:block">2024—NOW</span></div>
        <div className="project-list space-y-24">{projects.map((project, index) => (
          <article key={project.title} className="group grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
            <div className={index % 2 ? "lg:order-2" : ""}><ProjectArt type={project.type} /></div>
            <div><div className="flex items-center gap-4 font-mono text-xs font-bold uppercase tracking-[0.16em]"><span className="text-[#c63f25]">{project.number}</span><span className="h-px w-10 bg-black/30" /><span>{project.eyebrow}</span></div><h3 className="project-title mt-5 font-serif text-5xl tracking-tight sm:text-6xl">{project.title}</h3><p className="project-copy mt-5 max-w-xl text-lg leading-8 text-black/65">{project.description}</p><div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs font-bold uppercase tracking-wider">{project.tech.map((item) => <span key={item}>· {item}</span>)}</div><div className="project-links mt-8 flex gap-6"><a href={project.github} target="_blank" rel="noreferrer" className="group flex items-center gap-2 border-b-2 border-black pb-1 font-semibold hover:border-[#ed5b3a] hover:text-[#c63f25]">Source code <Arrow /></a>{project.live && <a href={project.live} target="_blank" rel="noreferrer" className="group flex items-center gap-2 border-b-2 border-black pb-1 font-semibold hover:border-[#ed5b3a] hover:text-[#c63f25]">Live demo <Arrow /></a>}</div></div>
          </article>
        ))}</div>
      </section>

      <section id="about" className="about-section bg-[#171717] text-[#f3efe4]"><div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-12 lg:py-28">
        <div><p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#ed5b3a]">Experience & approach</p><h2 className="mt-4 font-serif text-5xl leading-none sm:text-6xl">More engineer.<br />Less buzzword.</h2></div>
        <div><p className="max-w-2xl text-xl leading-9 text-white/70">I care about how a feature behaves after the happy path: validation, failure states, maintainability and the person using it. My backend focus is backed by enough frontend range to ship the complete experience.</p><div className="mt-12 grid gap-px border border-white/20 bg-white/20 sm:grid-cols-2"><div className="bg-[#171717] p-6"><span className="font-mono text-xs text-[#ed5b3a]">01 / EXPERIENCE</span><h3 className="mt-4 font-serif text-2xl">Junior Software Engineer</h3><p className="mt-2 text-white/50">Kompitenz · Previous role</p></div><div className="bg-[#171717] p-6"><span className="font-mono text-xs text-[#ed5b3a]">02 / INDEPENDENT</span><h3 className="mt-4 font-serif text-2xl">Freelance Developer</h3><p className="mt-2 text-white/50">Selected client work</p></div></div><div className="mt-10 flex flex-wrap gap-2">{["PHP / Laravel", "JavaScript / TypeScript", "React", "MySQL", "REST / GraphQL", "WordPress", "PixiJS", "Git / Testing"].map((item) => <span key={item} className="border border-white/20 px-3 py-2 font-mono text-xs uppercase tracking-wider text-white/70">{item}</span>)}</div></div>
      </div></section>

      <section className="client-section border-b border-black/20 bg-[#d9dfcf]"><div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12"><div className="client-heading mb-8 flex items-center justify-between"><h2 className="font-serif text-3xl">Client work</h2><span className="font-mono text-xs uppercase tracking-wider">Selected websites</span></div><div className="grid gap-6 sm:grid-cols-2">{[{ title: "Proda-Mont", image: "/images/proda-mont.png", url: "https://proda-mont.ba" }, { title: "Restoran Kraljica", image: "/images/restoran-kraljica.png", url: "https://restoran-kraljica.com/" }].map((client) => <a key={client.title} href={client.url} target="_blank" rel="noreferrer" className="group border-2 border-black bg-[#f3efe4] p-3 transition duration-300 hover:-translate-y-1 hover:shadow-[7px_7px_0_#171717]"><div className="overflow-hidden"><img src={client.image} alt={`${client.title} website`} className="h-52 w-full object-cover grayscale transition duration-500 group-hover:scale-[1.025] group-hover:grayscale-0" /></div><div className="flex items-center justify-between px-2 pb-1 pt-4"><strong className="font-serif text-xl">{client.title}</strong><Arrow /></div></a>)}</div></div></section>

      <section id="contact" className="contact-section mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:px-12 lg:py-28"><div><p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#c63f25]">Get in touch</p><h2 className="contact-title mt-4 font-serif text-5xl leading-[0.95] sm:text-7xl">Have a role<br />worth building for?</h2><p className="mt-6 max-w-md text-lg leading-8 text-black/60">I’m open to software engineering opportunities, internships and backend/full-stack roles.</p><a href="mailto:njegos.jerinic@gmail.com" className="mt-8 inline-block border-b-2 border-black pb-1 font-semibold hover:border-[#ed5b3a] hover:text-[#c63f25]">njegos.jerinic@gmail.com</a></div><ContactForm /></section>
      <footer className="border-t border-black/20 px-5 py-6 font-mono text-xs uppercase tracking-wider sm:px-8 lg:px-12"><div className="mx-auto flex max-w-7xl justify-between"><span>Njegoš Jerinić</span><a href="#top">Back to top ↑</a></div></footer>
    </main>
  );
}

export default App;
