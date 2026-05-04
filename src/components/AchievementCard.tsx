import { Award, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { achievementLabels, type Achievement } from "../data/achievements";

type AchievementCardProps = {
  achievement: Achievement;
};

export default function AchievementCard({ achievement }: AchievementCardProps) {
  return (
    <motion.article
      className="achievement-card"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.35 }}
    >
      <div className="achievement-icon">
        {achievement.featured ? <Sparkles size={20} /> : <Award size={20} />}
      </div>
      <div>
        <p className="card-meta">{achievementLabels[achievement.type]}</p>
        <h3>{achievement.title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-300">{achievement.description}</p>
      </div>
    </motion.article>
  );
}
