import { ArrowUpRight, Github, Globe2 } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ImageCarousel from "./ImageCarousel";
import { categoryLabels, type Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      className="project-card"
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
    >
      <ImageCarousel images={project.images} alt={`${project.title} preview`} compact />
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="card-meta">
            {categoryLabels[project.category]} / {project.status === "in-progress" ? "In progress" : "Completed"}
          </p>
          <h3>{project.title}</h3>
        </div>
        <Link className="circle-link" to={`/projects/${project.slug}`} aria-label={`Open ${project.title}`}>
          <ArrowUpRight size={18} />
        </Link>
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-300">{project.summary}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.slice(0, 5).map((tech) => (
          <span className="chip" key={tech}>
            {tech}
          </span>
        ))}
      </div>
      {(project.links?.github || project.links?.demo) && (
        <div className="mt-5 flex gap-2">
          {project.links.github && (
            <a className="small-link" href={project.links.github} target="_blank" rel="noreferrer">
              <Github size={15} />
              Code
            </a>
          )}
          {project.links.demo && (
            <a className="small-link" href={project.links.demo} target="_blank" rel="noreferrer">
              <Globe2 size={15} />
              Demo
            </a>
          )}
        </div>
      )}
    </motion.article>
  );
}
