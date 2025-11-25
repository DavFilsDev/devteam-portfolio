import { useTranslation } from "react-i18next";

const TechnologyCard = ({ id }) => {
  const { t } = useTranslation();

  const tech = t(`technologies.list.${id}`, { returnObjects: true });

  return (
    <div className="bg-white dark:bg-gray-800 border border-primary/30 rounded-2xl shadow-md p-6 flex flex-col items-center transition hover:shadow-xl w-36">
      <img
        src={tech.logo}
        alt={tech.name}
        className="w-12 h-12 mb-4"
      />
      <h3 className="text-lg font-bold text-dark dark:text-light text-center">
        {tech.name}
      </h3>
    </div>
  );
};

export default TechnologyCard;
