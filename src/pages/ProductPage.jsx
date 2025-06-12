import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ProductPage = () => {
  // Product information
  const product = {
    name: "Siliguri Gold",
    category: "Ellora Tea",
    price: {
      small: 19.99,
      medium: 34.99,
      large: 59.99
    },
   
    description: "Stone-ground ceremonial grade green tea powder with a vibrant color and rich umami flavor. Sourced from the finest tea gardens in Japan, our premium matcha is perfect for traditional tea ceremonies or as a modern superfood addition to your daily routine.",
    longDescription: "Our Matcha Premium is harvested from shade-grown tea leaves, which are stone-ground into a fine powder, preserving all the nutrients and flavor. The result is a vibrant green tea with a rich, smooth taste that's packed with antioxidants, L-theanine, and a natural caffeine boost that provides sustained energy without the crash associated with coffee.",
    features: [
      "Ceremonial Grade Quality",
      "Rich in Antioxidants",
      "Sustainably Harvested",
      "Vibrant Green Color",
      "Smooth, Non-Bitter Taste"
    ],
    sizes: [
      { id: "small", label: "Small (30g)", value: "30g", price: "$19.99", description: "Perfect for first-time matcha drinkers (15-20 servings)" },
      { id: "medium", label: "Medium (100g)", value: "100g", price: "$34.99", description: "Our most popular size (50-60 servings)" },
      { id: "large", label: "Large (250g)", value: "250g", price: "$59.99", description: "Best value for matcha enthusiasts (125-150 servings)" }
    ],
    brewing: [
      "Use 1-2 grams (½-1 teaspoon) of matcha powder per serving",
      "Heat water to 175°F (80°C) - not boiling",
      "Pour a small amount of water and whisk to create a smooth paste",
      "Add remaining water (2-3 oz) and whisk in zigzag motion until frothy",
      "Enjoy immediately for best flavor and texture"
    ],
    nutritionFacts: {
      servingSize: "2g (1 teaspoon)",
      calories: 10,
      totalFat: "0g",
      sodium: "0mg",
      totalCarbs: "1g",
      protein: "1g",
      caffeine: "35mg"
    },
    images: [
      "/images/product1.png",
      "/images/product2.png",
      "/images/product3.png"
    ]
  };

  // State
  const [selectedSize, setSelectedSize] = useState("medium");
  const [activeTab, setActiveTab] = useState("description");
  const [mainImage, setMainImage] = useState(0);

  return (
    <div className="bg-white min-h-screen py-28">
      <div className="w-full lg:px-16 md:px-12 px-6 mx-auto ">
        <div className="text-center bg-green-50 mb-16 py-8 w-full rounded-lg">
          <h1 className="md:text-5xl text-4xl font-bold text-green-800 mb-4">Products</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Crafting exceptional tea experiences since 1995, bringing you the finest leaves from India's most prestigious tea gardens.
          </p>
        </div>
        

        {/* Product Main Section */}
        <div className="flex flex-col lg:flex-row gap-12 mb-10">
          
          {/* Left Column - Images */}
          <div className="lg:w-1/2 space-y-4">
            {/* Main Image */}
            <motion.div
              className=" overflow-hidden rounded-lg bg-gray-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src={product.images[mainImage]} 
                alt={product.name}
                className="w-full h-full object-cover object-center" 
              />
            </motion.div>
            
            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((img, index) => (
                <div 
                  key={index}
                  className={`aspect-square rounded-md cursor-pointer overflow-hidden border-2 ${mainImage === index ? 'border-green-600' : 'border-transparent'}`}
                  onClick={() => setMainImage(index)}
                >
                  <img 
                    src={img} 
                    alt={`${product.name} thumbnail ${index + 1}`}
                    className="w-full h-full object-cover" 
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column - Product Info */}
          <div className="lg:w-1/2">
            <span className="text-sm font-medium border-green-400 py-1 px-3 rounded-full bg-green-200/40 text-green-700">{product.category}</span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-1 mb-2">{product.name}</h1>
            
           
            

            {/* Short Description */}
            <p className="text-gray-600 mb-6">
              {product.description}
            </p>

           
            

            {/* View Product Button */}
            <div className="mb-8">
              <motion.a
                href="/contact"
                className="block text-center bg-green-700 hover:bg-green-800 text-white py-3 px-4 rounded-md font-medium"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Us
              </motion.a>
            </div>

            {/* Features */}
            <div className="border-t border-b border-gray-200 py-6 mb-6">
              <h3 className="text-sm font-medium text-gray-900 mb-4">Product Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

           
           
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <div className="flex space-x-8">
            <button
              className={`py-4 text-sm font-medium border-b-2 ${
                activeTab === 'description'
                  ? 'border-green-700 text-green-700'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('description')}
            >
              Product Description
            </button>
            <button
              className={`py-4 text-sm font-medium border-b-2 ${
                activeTab === 'brewing'
                  ? 'border-green-700 text-green-700'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('brewing')}
            >
              Brewing Instructions
            </button>
            <button
              className={`py-4 text-sm font-medium border-b-2 ${
                activeTab === 'nutrition'
                  ? 'border-green-700 text-green-700'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('nutrition')}
            >
              Nutrition Facts
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="mb-16">
          {/* Description Tab */}
          {activeTab === 'description' && (
            <div className="prose max-w-none text-gray-600">
              <p className="mb-4">{product.longDescription}</p>
              <p>
                Matcha has been used in traditional Japanese tea ceremonies for centuries and is prized not only for its distinctive taste but also for its numerous health benefits. Our premium matcha is shade-grown for the last three weeks before harvest, increasing chlorophyll production and creating a vibrant green color and rich amino acid content.
              </p>
              <p>
                Each batch is carefully stone-ground to preserve the delicate flavor compounds and nutrients, resulting in a fine powder that dissolves easily in water. The result is a smooth, full-bodied green tea with notes of umami, sweetness, and a mild pleasant bitterness that characterizes the finest ceremonial grade matcha.
              </p>
            </div>
          )}

          {/* Brewing Tab */}
          {activeTab === 'brewing' && (
            <div>
              <div className="text-gray-600 mb-6">
                <p className="mb-4">For the best matcha experience, follow these simple steps:</p>
              </div>
              <div className="bg-green-50 rounded-lg p-6 border border-green-100">
                <h3 className="font-medium text-green-800 mb-4">Traditional Preparation Method</h3>
                <ol className="space-y-3">
                  {product.brewing.map((step, index) => (
                    <li key={index} className="flex">
                      <span className="bg-green-700 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium mr-3">{index + 1}</span>
                      <span className="text-gray-700">{step}</span>
                    </li>
                  ))}
                </ol>
                <div className="mt-6 text-green-800">
                  <p>You'll need: Bamboo whisk (chasen), matcha bowl (chawan), and matcha scoop (chashaku) for best results.</p>
                </div>
              </div>
            </div>
          )}

          {/* Nutrition Tab */}
          {activeTab === 'nutrition' && (
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <div className="border rounded-lg overflow-hidden">
                  <div className="bg-gray-100 px-4 py-2 border-b">
                    <h3 className="text-lg font-bold">Nutrition Facts</h3>
                    <p className="text-sm text-gray-600">Serving Size: {product.nutritionFacts.servingSize}</p>
                  </div>
                  <div className="px-4 py-3 border-b">
                    <div className="flex justify-between font-bold">
                      <span>Calories</span>
                      <span>{product.nutritionFacts.calories}</span>
                    </div>
                  </div>
                  <div className="p-4 space-y-2">
                    <div className="flex justify-between border-b pb-2">
                      <span>Total Fat</span>
                      <span>{product.nutritionFacts.totalFat}</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span>Sodium</span>
                      <span>{product.nutritionFacts.sodium}</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span>Total Carbohydrates</span>
                      <span>{product.nutritionFacts.totalCarbs}</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span>Protein</span>
                      <span>{product.nutritionFacts.protein}</span>
                    </div>
                    <div className="flex justify-between pt-2">
                      <span>Caffeine</span>
                      <span>{product.nutritionFacts.caffeine}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <h3 className="text-lg font-medium mb-3">Health Benefits</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="font-medium">Rich in Antioxidants:</span>
                      <span className="text-gray-600"> Matcha contains catechins, a powerful group of antioxidants that help fight free radicals and may reduce cell damage.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="font-medium">Balanced Energy:</span>
                      <span className="text-gray-600"> Contains L-theanine and caffeine, providing sustained energy without jitters or crashes.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="font-medium">Enhanced Focus:</span>
                      <span className="text-gray-600"> The combination of caffeine and L-theanine has been shown to improve attention and cognitive performance.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="font-medium">Metabolism Support:</span>
                      <span className="text-gray-600"> Studies suggest matcha may help boost metabolism and aid in fat oxidation.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        
      </div>
      
    </div>
  
  );
};

export default ProductPage;