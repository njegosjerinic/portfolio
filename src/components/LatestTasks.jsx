import Arrow from "./Arrow";

const currentProject = {
  title: "University thesis",
  description:
    "Analysis of Reliability and Synchronization of Time-Sensitive Events in a Distributed Sports Scoring System",
  state: "Phase 1: Project Setup and Planning",
  date: "Oct 10",
  link: "https://github.com/njegosjerinic/martial-arts-realtime-tracking",
  image: "/images/thesis.png",
};

export default function LatestTasks() {
  return (
    <div className="task">
      <h2 className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#c63f25]">
        Currently working on:
      </h2>
      <div>
        <h2 className="mt-2 mb-2 font-serif text-4xl sm:text-6xl">
          {currentProject.title}
        </h2>
      </div>
      <div className="relative" id="task-container">
        <img src={currentProject.image} alt="Computer Dashboard" />
        <div className="absolute font-serif flex flex-col bottom-0.5 left-5 sm:text 4xl  sm:bottom-10 sm:left-10 text-white">
          <p className="md:text-3xl font-serif  uppercase mb-3">
            {currentProject.description}
          </p>
          <div className="mb-3">
            <p className="font-extralight font-mono">{currentProject.state}</p>
            <p className="font-extralight font-mono">
              Updated at {currentProject.date}
            </p>
          </div>
          <a className="task-link" href={currentProject.link}>
            Go to the project <Arrow />
          </a>
        </div>
      </div>
    </div>
  );
}
