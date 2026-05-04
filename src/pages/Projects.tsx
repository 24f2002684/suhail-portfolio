import { Filter } from "lucide-react";
import { useMemo, useState } from "react";
import AnimatedPage from "../components/AnimatedPage";
import ProjectCard from "../components/ProjectCard";
import SectionHeading from "../components/SectionHeading";
import { projects, type ProjectCategory } from "../data/projects";
import { cn } from "../utils";

type FilterKey = "all" | ProjectCategory | "in-progress";

const filters: Array<{ label: string; value: FilterKey }> = [
  { label: "All", value: "all" },
  { label: "Web", value: "web" },
  { label: "AI", value: "ai" },
  { label: "Robotics", value: "robotics" },
  { label: "IoT", value: "iot" },
  { label: "Hackathon", value: "hackathon" },
  { label: "In Progress", value: "in-progress" },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");

  const visibleProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    if (activeFilter === "in-progress") {
      return projects.filter((project) => project.status === "in-progress");
    }
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <AnimatedPage className="page-shell">
      <SectionHeading kicker="Projects" title="Every build gets its own shelf">
        Browse the full collection without making the homepage too heavy. Filters keep web apps, AI ideas, robotics, and IoT builds easy to scan.
      </SectionHeading>

      <div className="filter-bar">
        <Filter size={18} className="text-teal-200" />
        {filters.map((filter) => (
          <button
            className={cn("filter-chip", activeFilter === filter.value && "filter-chip-active")}
            type="button"
            key={filter.value}
            onClick={() => setActiveFilter(filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="project-grid">
        {visibleProjects.map((project) => (
          <ProjectCard project={project} key={project.slug} />
        ))}
      </div>

      <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.04] p-5 text-sm leading-6 text-slate-300">
        Project detail pages are already wired. Add screenshots in <code>public/projects/project-name/</code>, then update the matching entry in <code>src/data/projects.ts</code>.
      </div>
    </AnimatedPage>
  );
}
