import Arrow from "./Arrow";

const currentProject = {
  title: "University thesis",
  description:
    "Network Performance Analysis of an AI-Enhanced Real-Time Martial Arts Tracking System",
  state: "Research Phase",
  date: "Oct 3",
  link: "https://github.com/njegosjerinic/martial-arts-realtime-tracking",
};

export default function LatestTasks() {
  return (
    <div>
      <h2 className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#c63f25]">
        Currently working on:
      </h2>
      <div>
        <h2 className="mt-2 mb-2 font-serif text-4xl sm:text-6xl">
          {currentProject.title}
        </h2>
      </div>
      <div className="relative" id="task-container">
        <img src="/images/thesis.png" alt="Computer Dashboard" />
        <div className="absolute font-serif flex flex-col  sm:text 4xl  bottom-10 left-10 text-white">
          <p className="text-2xl font-bold mb-1">
            {currentProject.description}
          </p>
          <div className="mb-3">
            <span className="">{currentProject.state}</span>
            <span>-</span>
            <span>Updated at {currentProject.date}</span>
          </div>
          <a className="task-link" href={currentProject.link}>
            Go to the project <Arrow />
          </a>
        </div>
      </div>
    </div>
  );
}
