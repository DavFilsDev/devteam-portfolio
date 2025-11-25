import { useTranslation } from "react-i18next";
import { forwardRef } from "react";
import { useInView } from "react-intersection-observer";
import ProjectCard from "../components/common/ProjectCard";


const ProjectSection = forwardRef(function TeamSection(props, ref) {
  const { t } = useTranslation();

  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = t("project.projects", { returnObjects: true });

  const setRefs = (node) => {
    inViewRef(node);
    if (ref) ref.current = node;
  };

  return (
    <section
      id="team"
      className="px-4 sm:px-6 lg:px-8 bg-light dark:bg-dark transition-colors duration-300"
      ref={setRefs}
    >
      {/* --- Titre --- */}
      <div
        className={`text-center transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-dark dark:text-light mb-4">
          {t("project.title")}
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto"></div>  
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          {t("project.subtitle")}
        </p>
      </div>

      {/* --- Grid des projets --- */}
      <div className="flex flex-wrap justify-center gap-8 m-10">
        {Object.keys(projects).map((id) => (
          <ProjectCard key={id} id={id} />
        ))}
      </div>
    </section>
  );
});

export default ProjectSection;
