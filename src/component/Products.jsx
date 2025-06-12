import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Product = () => {
  // Single product information
  const product = {
    name: "Siliguri Gold",
    category: "Ellora Tea",
    price: "200rs",
    description: "Stone-ground ceremonial grade green tea powder with a vibrant color and rich umami flavor. Sourced from the finest tea gardens in Japan, our premium matcha is perfect for traditional tea ceremonies or as a modern superfood addition to your daily routine.",
    features: [
      "Ceremonial Grade Quality",
      "Rich in Antioxidants",
      "Sustainably Harvested",
      "Vibrant Green Color",
      "Smooth, Non-Bitter Taste"
    ],
    image: "images/product1.png"
  };

  return (
    <div id="product" className="pt-10 bg-white min-h-screen overflow-x-hidden  items-center">
      <div className="text-center mb-4">
          <h2 className="text-4xl font-bold text-green-800 mb-2">Our Product</h2>
          
        </div>
      <div className="w-full lg:px-16 md:px-12 px-6 mx-auto ">
        <motion.div 
          className="flex flex-col md:flex-row gap-8 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Left Section - Product Image */}
          <motion.div 
            className="w-full md:w-1/2 flex justify-center pt-12"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto rounded-lg shadow-xl bg-gray-white"
            />
          </motion.div>
          
          {/* Right Section - Product Information */}
          <motion.div 
            className="w-full md:w-1/2 space-y-6"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="text-sm font-semibold text-green-600 block">{product.category}</span>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">{product.name}</h1>
            <motion.div 
            className="w-52 h-1 bg-red-600 "
            initial={{ width: 0, opacity: 0 }}
            animate={{width: "208px", opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            
            ></motion.div>
            
            
            <p className="text-gray-600 text-lg">{product.description}</p>
            
            <div className="space-y-2">
              <h3 className="font-medium text-gray-800">Key Features:</h3>
              <ul className="space-y-1">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="pt-4">
              
              
            <Link to="/product">  <motion.button
                className="bg-green-700 hover:bg-green-800 text-white py-3 px-8 rounded-lg font-medium text-lg w-full md:w-auto"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Learn More
              </motion.button></Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Product;