import { useState } from "react";
import projects, { filters } from "../content/projects";
import ProjectCard from "./ProjectCard";

// <Projects limit={3} />  → featured projects only (Home)
// <Projects />            → every project with filter tabs (Projects page)
export default function Projects({ limit }) {
  const [active, setActive] = useState("All");
  const current = filters.find((f) => f.label === active);

  const list = limit
    ? projects.filter((p) => p.featured).slice(0, limit)
    : projects.filter(
        (p) => !current.match || p.tags.some((t) => current.match.includes(t)),
      );

  return (
    <>
      {!limit && (
        <div className="tabs" role="tablist">
          {filters.map(({ label }) => (
            <button
              key={label}
              role="tab"
              aria-selected={active === label}
              className={`tab ${active === label ? "is-active" : ""}`}
              onClick={() => setActive(label)}
            >
              {label}
            </button>
          ))}
        </div>
      )}
      <div className="projects">
        {list.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </>
  );
}
