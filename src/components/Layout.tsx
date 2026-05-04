import type { ReactNode } from "react";
import { Github, Linkedin, Mail, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { profile } from "../data/profile";
import { cn } from "../utils";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Achievements", href: "/achievements" },
];

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window === "undefined") return "dark";
    return window.localStorage.getItem("theme") === "light" ? "light" : "dark";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="app-shell min-h-screen bg-ink text-slate-100">
      <div className="site-noise" />
      <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/82 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <NavLink to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <span className="grid h-10 w-10 place-items-center rounded-xl border border-teal-300/25 bg-teal-300/10 font-bold text-teal-200">
              SA
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-semibold">{profile.name}</span>
              <span className="block text-xs text-slate-400">Portfolio</span>
            </span>
          </NavLink>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  cn("nav-link", isActive && "nav-link-active")
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <a className="icon-link" href={profile.socials.github} aria-label="GitHub" target="_blank" rel="noreferrer">
              <Github size={18} />
            </a>
            <a className="icon-link" href={profile.socials.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer">
              <Linkedin size={18} />
            </a>
            <button
              className="icon-link"
              type="button"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              onClick={() => setTheme((value) => (value === "dark" ? "light" : "dark"))}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>
              <Mail size={17} />
              Contact
            </a>
          </div>

          <button className="icon-link md:hidden" type="button" onClick={() => setOpen((value) => !value)} aria-label="Menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {open && (
          <div className="border-t border-white/10 px-4 py-3 md:hidden">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn("mobile-nav-link", isActive && "bg-white/10 text-white")
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <button
                className="mobile-nav-link flex items-center gap-2"
                type="button"
                onClick={() => setTheme((value) => (value === "dark" ? "light" : "dark"))}
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                {theme === "dark" ? "Light mode" : "Dark mode"}
              </button>
            </div>
          </div>
        )}
      </header>

      {children}

      <footer className="border-t border-white/10 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-semibold">{profile.name}</p>
            <p className="mt-1 max-w-xl text-sm text-slate-400">
              Built to keep projects, achievements, and learning milestones visible.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <a className="btn btn-ghost" href={`mailto:${profile.email}`}>
              <Mail size={17} />
              Email
            </a>
            <a className="btn btn-ghost" href={profile.socials.github} target="_blank" rel="noreferrer">
              <Github size={17} />
              GitHub
            </a>
            <a className="btn btn-ghost" href={profile.socials.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={17} />
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
