import AnimatedPage from "../components/AnimatedPage";
import AchievementCard from "../components/AchievementCard";
import SectionHeading from "../components/SectionHeading";
import { achievementLabels, achievements, type AchievementType } from "../data/achievements";

const groups = Object.keys(achievementLabels) as AchievementType[];

export default function Achievements() {
  return (
    <AnimatedPage className="page-shell">
      <SectionHeading kicker="Achievements" title="Milestones without the scroll fatigue">
        The homepage shows highlights. This dedicated page keeps hackathons, recognition, leadership, robotics, and academic wins organized.
      </SectionHeading>

      <div className="grid gap-8">
        {groups.map((group) => {
          const groupAchievements = achievements.filter((achievement) => achievement.type === group);
          if (groupAchievements.length === 0) return null;

          return (
            <section className="achievement-group" key={group}>
              <div className="group-heading">
                <span>{groupAchievements.length}</span>
                <h2>{achievementLabels[group]}</h2>
              </div>
              <div className="achievement-list">
                {groupAchievements.map((achievement) => (
                  <AchievementCard achievement={achievement} key={achievement.title} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </AnimatedPage>
  );
}
