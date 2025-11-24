import { useTranslation } from "react-i18next";
import * as Icons from "lucide-react";

const ServiceCard = ({ id }) => {
  const { t } = useTranslation();

  const title = t(`services.list.${id}.title`);
  const description = t(`services.list.${id}.description`);
  const items = t(`services.list.${id}.items`, { returnObjects: true });
  const iconName = t(`services.list.${id}.icon`);
  const Icon = Icons[iconName] || Icons.Code;

  return (
    <div className="bg-white dark:bg-gray-800 border border-primary/40 dark:border-primary/30 rounded-2xl shadow-md p-6 w-full max-w-sm transition hover:shadow-xl">
      
      <div className="flex justify-center mb-4">
        <Icon className="w-12 h-12 text-primary dark:text-primary" />
      </div>

      <h3 className="text-xl font-bold text-dark dark:text-light text-center">
        {title}
      </h3>

      <p className="text-gray-600 dark:text-gray-300 text-center mt-2 mb-4">
        {description}
      </p>

      <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            {item}
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default ServiceCard;
