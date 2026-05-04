import { Award, ExternalLink, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import ImageCarousel from "./ImageCarousel";
import { achievementLabels, type Achievement } from "../data/achievements";

type AchievementCardProps = {
  achievement: Achievement;
};

export default function AchievementCard({ achievement }: AchievementCardProps) {
  const images = achievement.images ?? (achievement.image ? [achievement.image] : []);

  return (
    <motion.article
      className="achievement-card achievement-card-with-image"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.35 }}
    >
      <ImageCarousel images={images} alt={`${achievement.title} visual`} compact />
      <div className="achievement-icon">
        {achievement.featured ? <Sparkles size={20} /> : <Award size={20} />}
      </div>
      <div>
        <p className="card-meta">{achievementLabels[achievement.type]}</p>
        <h3>{achievement.title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-300">{achievement.description}</p>
        {achievement.link && (
          <a className="small-link mt-3" href={achievement.link} target="_blank" rel="noreferrer">
            <ExternalLink size={15} />
            View proof
          </a>
        )}
      </div>
    </motion.article>
  );
}
