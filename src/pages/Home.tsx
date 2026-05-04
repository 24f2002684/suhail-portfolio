import { ArrowRight, BrainCircuit, Code2, GraduationCap, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AchievementCard from "../components/AchievementCard";
import AnimatedPage from "../components/AnimatedPage";
import ProjectCard from "../components/ProjectCard";
import SectionHeading from "../components/SectionHeading";
import { achievements } from "../data/achievements";
import { experience } from "../data/experience";
import { profile } from "../data/profile";
import { projects } from "../data/projects";
import { skillGroups } from "../data/skills";

const featuredProjects = projects.filter((project) => project.featured).slice(0, 4);
const featuredAchievements = achievements.filter((achievement) => achievement.featured).slice(0, 5);

export default function Home() {
  return (
    <AnimatedPage>
      <section className="hero-section">
        <div className="hero-bg" aria-hidden="true" />
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div className="relative z-10">
            <motion.p
              className="kicker"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
            >
              Portfolio / Placement Prep / Builder Log
            </motion.p>
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 }}
            >
              {profile.name}
            </motion.h1>
            <motion.p
              className="mt-5 max-w-2xl text-lg leading-8 text-slate-300"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {profile.intro}
            </motion.p>
            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28 }}
            >
              <Link className="btn btn-primary" to="/projects">
                View Projects
                <ArrowRight size={18} />
              </Link>
              <Link className="btn btn-ghost" to="/achievements">
                Achievements
                <Trophy size={18} />
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="hero-panel"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.22, duration: 0.45 }}
          >
            <div className="scanline" />
            <p className="card-meta">Current Snapshot</p>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {profile.stats.map((stat) => (
                <div className="stat-card" key={stat.label}>
                  <span>{stat.value}</span>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm leading-6 text-slate-300">{profile.role}</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <SectionHeading kicker="Education" title="Two tracks, one builder mindset">
          B.Tech IT at CIT plus IIT Madras Data Science gives the portfolio both engineering and analytical depth.
        </SectionHeading>
        <div className="grid gap-4 md:grid-cols-2">
          {profile.education.map((item) => (
            <article className="info-card" key={item.title}>
              <GraduationCap className="text-teal-200" size={24} />
              <div>
                <h3>{item.title}</h3>
                <p className="mt-1 text-sm text-slate-400">{item.place}</p>
                <p className="mt-3 text-sm text-slate-300">
                  {item.period} / {item.detail}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeading kicker="Skills" title="What I am building with">
          Programming, web development, electronics, and data basics collected into practical groups.
        </SectionHeading>
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <motion.article
              className="skill-card"
              key={group.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
            >
              <Code2 size={21} />
              <h3>{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span className="chip" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-row">
          <SectionHeading kicker="Projects" title="Featured builds">
            A short homepage selection. The full project gallery has every entry and filters.
          </SectionHeading>
          <Link className="btn btn-ghost" to="/projects">
            All Projects
            <ArrowRight size={18} />
          </Link>
        </div>
        <div className="project-grid">
          {featuredProjects.map((project) => (
            <ProjectCard project={project} key={project.slug} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-row">
          <SectionHeading kicker="Achievements" title="Proof that the work leaves the laptop">
            Hackathons, recognition, leadership, robotics exhibitions, and academic highlights.
          </SectionHeading>
          <Link className="btn btn-ghost" to="/achievements">
            All Achievements
            <ArrowRight size={18} />
          </Link>
        </div>
        <div className="achievement-list">
          {featuredAchievements.map((achievement) => (
            <AchievementCard achievement={achievement} key={achievement.title} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="cta-band">
          <BrainCircuit size={28} />
          <div>
            <p className="card-meta">Experience</p>
            <h2>{experience[0].title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              {experience[0].organization} / {experience[0].period}. {experience[0].description}
            </p>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}
