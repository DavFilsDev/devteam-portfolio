import { useTranslation } from "react-i18next";
import { forwardRef } from "react";
import { useInView } from "react-intersection-observer";
import TeamMemberCard from "../components/common/TeamMemberCard";
import { teamMembers } from "../data/teamData";

const TeamSection = forwardRef(function TeamSection(props, ref) {
  const { t } = useTranslation();

  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const setRefs = (node) => {
    inViewRef(node);
    if (ref) ref.current = node;
  };

  return (
    <section
      id="team"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-light dark:bg-dark transition-colors duration-300"
      ref={setRefs}
    >
      <div className="max-w-6xl mx-auto">
        {/* --- Titre --- */}
        <div
          className={`text-center transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark dark:text-light mb-4">
            {t("team.title")}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm sm:text-base md:text-lg">
            {t("team.subtitle")}
          </p>
        </div>

        {/* --- Grid des membres --- */}
        <div
          className={`mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10 justify-items-center transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
});

export default TeamSection;