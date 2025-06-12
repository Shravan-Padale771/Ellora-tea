import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
      },
    }),
  };

  return (
    <motion.div
      id="about"
      className="py-16 overflow-x-hidden bg-gray-100"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="w-full lg:px-16 md:px-12 px-6  mx-auto ">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-800 mb-2">About Us</h2>
          
        </div>

        <div className="flex flex-col md:flex-row gap-7 items-center">
          {/* Image Section */}
          <motion.div
            className="md:w-1/2"
            variants={imageVariants}
          >
            <img
              src="images/tea_garden.webp"
              className="rounded-lg shadow-lg "
            />
          </motion.div>

          {/* Text Section */}
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-green-700 mb-4">Our Story</h3>
            <p className="text-gray-700 mb-4">
              Founded in 2010, Tea Power has been on a mission to bring the world's finest tea selections
              to your cup. We partner directly with sustainable tea gardens across the globe to ensure
              the highest quality and ethical sourcing.
            </p>
            <p className="text-gray-700 mb-6">
              Our team of tea experts carefully selects each variety based on flavor profile,
              growing conditions, and ethical practices. We believe that great tea not only tastes
              good but also does good for communities and the environment.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: '15+', label: 'Years Experience' },
                { stat: '50+', label: 'Tea Varieties' },
                { stat: '10+', label: 'Source Countries' },
                { stat: '100%', label: 'Sustainable' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow"
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={cardVariants}
                >
                  <h4 className="font-bold text-green-800 mb-2">{item.stat}</h4>
                  <p className="text-gray-600">{item.label}</p>
                </motion.div>
              ))}
              <a href="/about" className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full flex items-center w-max uppercase text-sm font-medium hover:scale-105 transition-all duration-300">
              Learn More
            
            </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
