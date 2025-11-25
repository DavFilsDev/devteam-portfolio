import { useTranslation } from "react-i18next";
import { forwardRef } from "react";
import { useInView } from "react-intersection-observer";
import TechnologyCard from "../components/common/TechnologyCard";

const TechnologySection = forwardRef(function TechnologySection(props, ref) {
  const { t } = useTranslation();

  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const setRefs = (node) => {
    inViewRef(node);
    if (ref) ref.current = node;
  };

  const technologies = t("technologies.list", { returnObjects: true });

  return (
    <section
      id="technologies"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-light dark:bg-dark transition-colors duration-300"
      ref={setRefs}
    >
      {/* --- Title --- */}
      <div
        className={`text-center transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-dark dark:text-light">
          {t("technologies.title")}
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mt-2"></div>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          {t("technologies.subtitle")}
        </p>
      </div>

      {/* --- Grid --- */}
      <div
        className={`max-w-6xl mx-auto mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-center transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {Object.keys(technologies).map((id) => (
          <TechnologyCard key={id} id={id} />
        ))}
      </div>
    </section>
  );
});

export default TechnologySection;
