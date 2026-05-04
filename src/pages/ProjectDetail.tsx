import { ArrowLeft, Github, Globe2 } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import AnimatedPage from "../components/AnimatedPage";
import ImageCarousel from "../components/ImageCarousel";
import { categoryLabels, projects } from "../data/projects";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <AnimatedPage className="page-shell">
        <Link className="small-link" to="/projects">
          <ArrowLeft size={16} />
          Back to projects
        </Link>
        <h1 className="mt-6 text-3xl font-bold">Project not found</h1>
      </AnimatedPage>
    );
  }

  return (
    <AnimatedPage className="page-shell">
      <Link className="small-link" to="/projects">
        <ArrowLeft size={16} />
        Back to projects
      </Link>

      <section className="detail-hero">
        <ImageCarousel images={project.images} alt={`${project.title} gallery`} className="detail-carousel" />
        <p className="kicker">
          {categoryLabels[project.category]} / {project.status === "in-progress" ? "In progress" : "Completed"}
        </p>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span className="chip" key={tech}>
              {tech}
            </span>
          ))}
        </div>
        {(project.links?.github || project.links?.demo) && (
          <div className="mt-8 flex flex-wrap gap-3">
            {project.links.github && (
              <a className="btn btn-ghost" href={project.links.github} target="_blank" rel="noreferrer">
                <Github size={18} />
                View Code
              </a>
            )}
            {project.links.demo && (
              <a className="btn btn-primary" href={project.links.demo} target="_blank" rel="noreferrer">
                <Globe2 size={18} />
                Live Demo
              </a>
            )}
          </div>
        )}
      </section>

      <section className="detail-grid">
        <article className="info-card">
          <div>
            <p className="card-meta">Problem</p>
            <h3>Why this matters</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              This space is ready for the story behind the project: the problem, target users, constraints, and what made the build worth attempting.
            </p>
          </div>
        </article>
        <article className="info-card">
          <div>
            <p className="card-meta">Solution</p>
            <h3>How it works</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Add screenshots, architecture notes, links, and outcomes here later by extending this project entry and page layout.
            </p>
          </div>
        </article>
      </section>
    </AnimatedPage>
  );
}
