import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedStat from './common/AnimatedStat';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRecycle, faPalette, faWrench, faBolt } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import { forwardRef } from 'react';

const AboutSection = forwardRef(function AboutSection(props, ref) {
  const { t } = useTranslation();

  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const setRefs = (node) => {
    // attache les deux refs (inView + scroll)
    inViewRef(node);
    if (ref) ref.current = node;
  };
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const features = [
    {
      title: t('aboutSection.differentiator_sub-title1'),
      icon: faRecycle,
      desc: t('aboutSection.differentiator_content1')
    },
    {
      title: t('aboutSection.differentiator_sub-title2'),
      icon: faWrench,
      desc: t('aboutSection.differentiator_content2')
    },
    {
      title: t('aboutSection.differentiator_sub-title3'),
      icon: faBolt,
      desc: t('aboutSection.differentiator_content3')
    },
        {
      title: t('aboutSection.differentiator_sub-title4'),
      icon: faPalette,
      desc: t('aboutSection.differentiator_content4')
    }
  ];


  return (
    <section 
      id="about" 
      className="py-20 px-4 sm:px-6 lg:px-8 bg-light dark:bg-dark transition-colors duration-300"
      ref={setRefs}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark dark:text-light mb-4">
            {t('aboutSection.title_header')}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Story */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-secondary mb-4 mt-3">
              {t('aboutSection.sub_title_story')}
            </h3>
            <p className="text-lg text-dark dark:text-light mb-6">
              {t('aboutSection.content_story')}
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <AnimatedStat value={10} duration={1200} label={t('aboutSection.project_label')} />
              <AnimatedStat value={100} label={t('aboutSection.satisfaction_label')} />
            </div>
          </motion.div>

          {/* Right Column - Values */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-10"
          >
            {/* Mission Card */}
            <motion.div 
              className="p-3 bg-light dark:bg-dark border border-accent/20 rounded-xl shadow-sm hover:shadow-md transition-all"
            >
              <h4 className="text-2xl font-semibold text-secondary mb-2">{t('aboutSection.mission_title')}</h4>
              <p className="text-lg text-dark dark:text-light">
                {t('aboutSection.mission_content')}
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div 
              className="p-3 bg-light dark:bg-dark border border-accent/20 rounded-xl shadow-sm hover:shadow-md transition-all"
            >
              <h4 className="text-2xl font-semibold text-secondary mb-2">{t('aboutSection.vision_title')}</h4>
              <p className="text-lg text-dark dark:text-light">
                {t('aboutSection.vision_content')}
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Differentiators */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-center text-dark dark:text-light mb-8">
            {t('aboutSection.differentiator_title')}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-6 bg-light dark:bg-dark border border-accent/10 rounded-xl shadow-sm hover:shadow-md transition-all"
              >
                <div className="text-3xl mb-3 text-primary flex justify-center
                ">
                  <FontAwesomeIcon icon={item.icon} />
                </div>
                <h4 className="text-lg font-semibold text-secondary mb-2 text-center">{item.title}</h4>
                <p className="text-dark dark:text-light text-center">{item.desc}</p>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
});

export default AboutSection;