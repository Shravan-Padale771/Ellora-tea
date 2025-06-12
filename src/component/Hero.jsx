import { Play, Pause, ArrowBigRight, ArrowRightFromLine, ArrowRight } from 'lucide-react'
import React, { useState, useRef } from 'react'

export const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div>
      <div className="relative w-full md:h-auto min-h-screen bg-gradient-to-r flex items-center from-gray-900 to-gray-700 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 bottom-0 max-sm:top-[27%] max-sm:bottom-[27%] inset-0 bg-gradient-to-r from-black/80 to-transparent  z-10"></div>
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://res.cloudinary.com/dmgmvqtgd/video/upload/v1749743102/qfbujem4tdythcvzjuex.mp4" type="video/mp4" />
            {/* Fallback image if video doesn't load */}
            <img 
              src="/img/hero.jpg" 
              alt="Tea Garden" 
              className="w-full h-full object-cover"
            />
          </video>
        </div>
        
        <div className="container md:px-12 lg:px-16 px-6 py-16 md:py-32 relative z-20 flex flex-col md:flex-row  max-sm:text-center text-left">
          <div className="md:w-[70%] space-y-6 flex flex-col max-sm:items-center items-start">
            <p className="text-sm bg-red-800/45 inline-block px-3 py-1 rounded">
             <i> It's Always Tea Time..!</i>
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Perfect Tea Powder<br />For You
            </h1>
            <p className="text-sm md:text-base max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, animi. Accusamus et iste inventore sapiente cum perferendis animi sed maxime!
            </p>
            <a href="#about" className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full flex items-center uppercase text-sm font-medium hover:scale-105 transition-all duration-300">
              Learn More
            
            </a>
          </div>
          
          
        </div>
      </div>
    </div>
  )
}

