import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Leaf, Award, Sunrise, Droplets } from 'lucide-react';

const WhyChooseUs = () => {
  const features = useMemo(() => [
    {
      icon: <Leaf className="w-6 h-6 md:w-8 md:h-8 text-green-600" />,
      title: "Heritage Blends",
      description: "Discover teas crafted from generations-old recipes, perfected over centuries of tradition."
    },
    {
      icon: <Sunrise className="w-6 h-6 md:w-8 md:h-8 text-green-600" />,
      title: "Morning Rituals",
      description: "Explore blends specifically designed to complement different times of day and moods."
    },
    {
      icon: <Droplets className="w-6 h-6 md:w-8 md:h-8 text-green-600" />,
      title: "Single-Origin",
      description: "Each tea tells the story of its unique terroir - from misty mountains to sun-drenched valleys."
    },
    {
      icon: <Award className="w-6 h-6 md:w-8 md:h-8 text-green-600" />,
      title: "Artisan Process",
      description: "Witness the meticulous hand-processing methods that make our teas extraordinary."
    },
  ], []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="mt-12 md:py-16 bg-gray-100" id="philosophy">
      <div className="container mx-auto lg:px-16 px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-8 md:mb-12"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-3xl font-bold text-green-800 mb-3 md:mb-4"
          >
            Our Tea Philosophy
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base"
          >
            What makes our tea collection truly special - a celebration of craftsmanship and terroir
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-green-50 rounded-lg md:rounded-xl p-4 md:p-6 hover:shadow-md transition-all duration-300 h-full flex flex-col items-center text-center"
            >
              <div className="bg-white p-2 md:p-3 rounded-full shadow-sm w-fit mb-3 md:mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-green-800 mb-1 md:mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Storytelling Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 md:mt-16 bg-green-800 rounded-xl md:rounded-2xl p-6 md:p-12 text-white"
        >
          <div className="max-w-4xl mx-auto text-center">
            <Sunrise className="w-8 h-8 md:w-12 md:h-12 mx-auto mb-4 md:mb-6 text-green-300" />
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">
              From Leaf to Cup
            </h3>
            <p className="text-green-100 text-base md:text-lg mb-4 md:mb-6">
              Our portfolio showcases the journey of each tea - from the skilled hands that pluck the leaves at perfect maturity, 
              through ancient processing techniques, to the moment the hot water releases its full story in your cup.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(WhyChooseUs);