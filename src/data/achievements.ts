export type AchievementType = "hackathon" | "robotics" | "leadership" | "academic" | "recognition";

export type Achievement = {
  title: string;
  description: string;
  type: AchievementType;
  featured: boolean;
  year?: string;
};

export const achievementLabels: Record<AchievementType, string> = {
  hackathon: "Hackathons",
  robotics: "Robotics & Science",
  leadership: "Leadership",
  academic: "Academic",
  recognition: "Recognition & Visits",
};

export const achievements: Achievement[] = [
  {
    title: "Finalist - Sprint4Good AI Hackathon",
    description: "Reached the finalist stage at an AI hackathon hosted by IIT Delhi.",
    type: "hackathon",
    featured: true,
  },
  {
    title: "Finalist - TechSprint Hackathon",
    description: "Selected as a finalist at TechSprint Hackathon by GDG On Campus.",
    type: "hackathon",
    featured: true,
  },
  {
    title: "Visa 24-Hour AI Hackathon",
    description: "Participated in a high-intensity AI hackathon at IIT Madras.",
    type: "hackathon",
    featured: true,
  },
  {
    title: "EcoFinds at IIT Madras",
    description: "Built and presented EcoFinds, a sustainable second-hand marketplace, during a hackathon.",
    type: "hackathon",
    featured: true,
  },
  {
    title: "ISRO Visit After Science Fair Win",
    description: "Visited ISRO after winning a school science fair.",
    type: "recognition",
    featured: true,
  },
  {
    title: "School President",
    description: "Led student body activities and coordinated school-wide events in Class XI.",
    type: "leadership",
    featured: false,
  },
  {
    title: "Robotics And Science Competitions",
    description: "Built and demonstrated working robots across multiple school-level robotics and science competitions.",
    type: "robotics",
    featured: false,
  },
  {
    title: "Strong Academic Track Record",
    description: "Scored 95% in Class X and 94.7% in Class XII under the Tamil Nadu State Board.",
    type: "academic",
    featured: false,
  },
];
