import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  // Gallery data
  const galleryItems = [
    {
      id: 1,
      title: "Siliguri Gold Tea Gardens",
      category: "Landscapes",
      image: "https://media.istockphoto.com/id/534111760/photo/tea-plantation-in-cameron-highlands-malaysia.jpg?s=612x612&w=0&k=20&c=JjZV1FSztAZb5DQL2hmg5feI6FgaXJXg83WsEGc0_nY=",
      description: "Rolling hills covered in lush tea bushes under the morning mist."
    },
    {
      id: 2,
      title: "Tea Leaf Harvesting",
      category: "Process",
      image: "https://assets.telegraphindia.com/telegraph/2021/Apr/1617565587_tea.jpg",
      description: "Skilled workers carefully picking the finest tea leaves during golden hour."
    },
    {
      id: 3,
      title: "Traditional Tea Ceremony",
      category: "Culture",
      image: "https://thedailyguardian.com/wp-content/uploads/2024/10/sunset-at-tata-tea-gardens.jpg",
      description: "An elegant traditional tea ceremony showcasing the art behind tea preparation."
    },
    {
      id: 4,
      title: "Premium Tea Collection",
      category: "Products",
      image: "images/ElloraTea1kg.png",
      description: "Our finest collection of premium teas with unique aroma and flavor."
    },
    {
      id: 5,
      title: "Sunset Over Tea Fields",
      category: "Landscapes",
      image: "https://images.pexels.com/photos/392100/pexels-photo-392100.jpeg?cs=srgb&dl=pexels-yogeshkumar-392100.jpg&fm=jpg",
      description: "Golden sunset casting warm glow over endless tea plantations."
    },
    {
      id: 6,
      title: "Tea Processing Facility",
      category: "Process",
      image: "https://media.istockphoto.com/id/1197644844/photo/production-in-tea-factory.jpg?s=612x612&w=0&k=20&c=fAJLTfGYSw3Nwr0bsm_yUKuW_Ea8ikLx_MGAnX-mydc=",
      description: "Where tradition meets technology for the perfect tea blend."
    },
    {
      id: 7,
      title: "Master Tea Blender",
      category: "People",
      image: "https://5.imimg.com/data5/SELLER/Default/2021/1/WZ/RB/SZ/3040559/milk-pasteurization-plants-500x500.jpg",
      description: "Decades of experience creating the perfect tea blends."
    },
    {
      id: 8,
      title: "Tea Tasting Session",
      category: "Culture",
      image: "https://cdn.dotpe.in/longtail/store-items/6596305/6Yt7QCF1.webp",
      description: "Professional evaluation of flavors, aromas, and qualities."
    }
  ];

  // State
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  // Get unique categories
  const categories = ['All', ...new Set(galleryItems.map(item => item.category))];

  // Filter items by category
  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  // Navigate through images in lightbox
  const navigateImage = (direction) => {
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredItems.length;
    } else {
      newIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    }
    
    setSelectedImage(filteredItems[newIndex]);
  };

  return (
    <div className="bg-white w-full lg:px-16 md:px-12 px-6 py-28 min-h-screen">
      {/* Header */}
      <div className="bg-green-50  py-10 mb-5 px-6">
        <div className="w-full  mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold  text-green-800 mb-4">Gallery</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the journey of our premium teas from garden to cup
            </p>
          </motion.div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="mb-12">
        <div className="flex justify-center">
          <div className="flex bg-gray-100 p-1 rounded-full">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`md:px-6 px-2 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-green-700 text-white shadow-sm'
                    : 'text-gray-600 hover:text-green-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="w-full pb-20">
        <motion.div
          className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="group  cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100 mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300 object-contain " />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-gray-900 group-hover:text-green-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed min-h-screen inset-0 z-50 bg-green-50 bg-opacity-95 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative md:w-[45%] h-auto"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-0 right-0 p-2 m-2 text-black hover:text-gray-300 transition-colors z-10 bg-green-100 rounded-full"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation Arrows */}
              <button
                onClick={() => navigateImage('prev')}
                className="absolute md:left-7 left-[33%] md:top-1/2 top-[60%] transform -translate-y-1/2 p-2 text-black hover:text-gray-300 transition-colors z-10 bg-green-100 md:mt-0 mt-3 rounded-full"
              >
                <ChevronLeft className="w-7 h-7" />
              </button>
              <button
                onClick={() => navigateImage('next')}
                className="absolute md:right-7 right-[33%] md:top-1/2 top-[60%] transform -translate-y-1/2 p-2 text-black hover:text-gray-300 transition-colors z-10  bg-green-100 md:mt-0 mt-3 rounded-full"
              >
                <ChevronRight className="w-7 h-7" />
              </button>

              {/* Image */}
              <div className="bg-white rounded-lg overflow-hidden">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full md:h-[60vh] h-[50vh] object-contain"
                />
                
                {/* Image Info */}
                <div className="p-8">
                  <div className="max-w-2xl">
                    <span className="text-sm text-green-600 uppercase tracking-wide font-medium">
                      {selectedImage.category}
                    </span>
                    <h2 className="text-2xl font-light text-gray-900 mt-2 mb-4">
                      {selectedImage.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      {selectedImage.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;