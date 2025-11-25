import { useTranslation } from "react-i18next";

const ProjectCard = ({ id }) => {
  const { t } = useTranslation();

  const title = t(`project.projects.${id}.title`);
  const description = t(`project.projects.${id}.description`);
  const technologies = t(`project.projects.${id}.technologies`, { returnObjects: true });
  const url = t(`project.projects.${id}.url`);

  return (
    <div className="w-72 bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-5 border border-primary">
      <h3 className="text-xl font-bold text-dark dark:text-white text-center mb-3">
        {title}
      </h3>

      <p className="text-gray-600 dark:text-gray-300 text-center text-sm mb-4">
        {description}
      </p>

      <div className="flex flex-wrap justify-center gap-2 mb-5">
        {technologies.map((tech, i) => (
          <span
            key={i}
            className="px-3 py-1 bg-primary/10 text-primary dark:text-white dark:bg-primary/20 rounded-full text-xs"
          >
            {tech}
          </span>
        ))}
      </div>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-center w-full py-2 bg-primary text-white rounded-xl hover:bg-primary/80 transition"
      >
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;
