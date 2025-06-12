import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      id: 1,
      text: "This tea has completely transformed my morning routine. The quality is outstanding and the flavor is exceptional. I can't start my day without it!",
      author: "Sarah Johnson",
      role: "Tea Enthusiast",
      rating: 5
    },
    {
      id: 2,
      text: "I've tried many tea brands, but none come close to the richness and authenticity of Siliguri Gold. The attention to detail is remarkable.",
      author: "Michael Chen",
      role: "Food Blogger",
      rating: 5
    },
    {
      id: 3,
      text: "As a café owner, this premium tea has helped me attract more customers and increase satisfaction. My customers absolutely love it!",
      author: "Emily Rodriguez",
      role: "Café Owner",
      rating: 5
    }
  ];

  const nextSlide = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      setAutoPlay(false);
      setTimeout(() => {
        setIsAnimating(false);
        setAutoPlay(true);
      }, 500);
    }
  }, [isAnimating, testimonials.length]);

  const prevSlide = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
      setAutoPlay(false);
      setTimeout(() => {
        setIsAnimating(false);
        setAutoPlay(true);
      }, 500);
    }
  }, [isAnimating, testimonials.length]);

  const goToSlide = useCallback((index) => {
    if (!isAnimating && index !== currentSlide) {
      setIsAnimating(true);
      setCurrentSlide(index);
      setAutoPlay(false);
      setTimeout(() => {
        setIsAnimating(false);
        setAutoPlay(true);
      }, 500);
    }
  }, [isAnimating, currentSlide]);

  useEffect(() => {
    let interval;
    if (autoPlay && !isAnimating) {
      interval = setInterval(nextSlide, 4000);
    }
    return () => clearInterval(interval);
  }, [autoPlay, isAnimating, nextSlide]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-white to-emerald-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-green-200 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-emerald-200 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-block"
            style={{
              opacity: 0,
              transform: 'translateY(30px)',
              animation: 'slideUp 0.8s ease-out 0.2s forwards'
            }}
          >
            <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
              What Our Customers Say
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-green-800 mb-4">
              Customer Testimonials
            </h2>
            
          </div>
        </div>
        
        {/* Testimonials Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div 
                    className={`bg-white p-8 sm:p-12 rounded-2xl shadow-xl border border-green-100 relative transform transition-all duration-500 ${
                      index === currentSlide ? 'scale-100 opacity-100' : 'scale-95 opacity-70'
                    }`}
                    style={{
                      backgroundImage: 'linear-gradient(135deg, rgba(34, 197, 94, 0.02) 0%, rgba(16, 185, 129, 0.02) 100%)'
                    }}
                  >
                    {/* Quote Icon */}
                    <div className="absolute top-6 left-6 opacity-10">
                      <Quote className="w-16 h-16 text-green-600" />
                    </div>
                    
                    {/* Rating */}
                    <div className="flex justify-center mb-6">
                      <div className="flex space-x-1">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                    
                    {/* Testimonial Text */}
                    <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed font-light italic text-center relative z-10">
                      "{testimonial.text}"
                    </p>
                    
                    {/* Author Info */}
                    <div className="flex items-center justify-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mr-4 flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-lg">
                          {testimonial.author.charAt(0)}
                        </span>
                      </div>
                      <div className="text-center sm:text-left">
                        <h4 className="font-semibold text-gray-800 text-lg">
                          {testimonial.author}
                        </h4>
                        <p className="text-green-600 font-medium">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            disabled={isAnimating}
            className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-white rounded-full p-4 shadow-xl hover:shadow-2xl transition-all duration-300 z-10 group hover:bg-green-50 disabled:opacity-50"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} className="text-green-700 group-hover:text-green-800 transition-colors" />
          </button>
          
          <button 
            onClick={nextSlide}
            disabled={isAnimating}
            className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-white rounded-full p-4 shadow-xl hover:shadow-2xl transition-all duration-300 z-10 group hover:bg-green-50 disabled:opacity-50"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} className="text-green-700 group-hover:text-green-800 transition-colors" />
          </button>
          
          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isAnimating}
                className={`w-4 h-4 rounded-full transition-all duration-300 transform hover:scale-125 disabled:opacity-50 ${
                  currentSlide === index 
                    ? 'bg-gradient-to-r from-red-500 to-pink-500 shadow-lg' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonial;