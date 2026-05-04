# Suhail Portfolio

A creative, placement-focused portfolio for Suhail Akthar S M, built with React, Vite, TypeScript, Tailwind CSS, Framer Motion, React Router, and lucide-react.

## Run Locally

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal.

## Add A New Project

1. Add images or screenshots in `public/projects/project-name/`.
2. Open `src/data/projects.ts`.
3. Add a new project object.
4. Set `featured: true` only if it should appear on the homepage.

Project fields:

```ts
{
  title: "Project Name",
  slug: "project-name",
  summary: "Short card description.",
  description: "Longer detail page description.",
  tech: ["React", "Node.js"],
  category: "web",
  status: "completed",
  featured: false,
  links: {
    github: "https://github.com/...",
    demo: "https://..."
  },
  images: ["/projects/project-name/screenshot.png"]
}
```

## Add A New Achievement

1. Open `src/data/achievements.ts`.
2. Add a new achievement object.
3. Set `featured: true` only if it should appear on the homepage.

## Deploy Free On Vercel

1. Push this folder to a GitHub repository.
2. Go to Vercel and choose **New Project**.
3. Import the GitHub repository.
4. Keep the default Vite settings.
5. Deploy.

The `vercel.json` file keeps direct links like `/projects` and `/achievements` working after deployment.
