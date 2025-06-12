import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  const [activeSection, setActiveSection] = useState("story");

  const teamMembers = [
    {
      name: "Rajesh Kumar",
      role: "Founder & Tea Master",
      image: "/images/team1.jpg",
      description: "With over 20 years of experience in tea cultivation and processing, Rajesh brings traditional knowledge passed down through generations."
    },
    {
      name: "Priya Sharma",
      role: "Quality Assurance Manager",
      image: "/images/team2.jpg",
      description: "Priya ensures every batch meets our strict quality standards through rigorous testing and traditional tasting methods."
    },
    {
      name: "Amit Patel",
      role: "Sustainability Director",
      image: "/images/team3.jpg",
      description: "Amit leads our efforts in sustainable farming practices and building strong relationships with our tea garden partners."
    }
  ];

  const milestones = [
    {
      year: "1995",
      title: "Humble Beginnings",
      description: "Started as a small family business in the tea gardens of Darjeeling, with a passion for premium quality tea."
    },
    {
      year: "2005",
      title: "Expansion & Growth",
      description: "Expanded operations to include Assam and Nilgiri tea gardens, establishing direct relationships with local farmers."
    },
    {
      year: "2015",
      title: "Organic Certification",
      description: "Achieved organic certification for all our tea gardens, ensuring sustainable and chemical-free cultivation."
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Launched our online platform to bring premium Indian teas directly to tea enthusiasts worldwide."
    },
    {
      year: "2025",
      title: "Global Recognition",
      description: "Recognized as one of India's leading premium tea brands, serving customers across 15 countries."
    }
  ];

  return (
    <div className="bg-white min-h-screen py-28">
      <div className="w-full  lg:px-16 md:px-12 px-6">
        
        {/* Header Section */}
        <div className="text-center bg-green-50 mb-16 py-8 w-full rounded-lg">
          <h1 className="md:text-5xl text-4xl font-bold text-green-800 mb-4">About Ellora Tea</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Crafting exceptional tea experiences since 1995, bringing you the finest leaves from India's most prestigious tea gardens.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="border-b border-gray-200 mb-12">
          <div className="flex md:space-x-8 space-x-3 justify-center">
            <button
              className={`py-4 text-sm font-medium border-b-2 ${
                activeSection === 'story'
                  ? 'border-green-700 text-green-700'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveSection('story')}
            >
              Our Story
            </button>
            <button
              className={`py-4 text-sm font-medium border-b-2 ${
                activeSection === 'mission'
                  ? 'border-green-700 text-green-700'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveSection('mission')}
            >
              Mission & Values
            </button>
            <button
              className={`py-4 text-sm font-medium border-b-2 ${
                activeSection === 'journey'
                  ? 'border-green-700 text-green-700'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveSection('journey')}
            >
              Our Journey
            </button>
            <button
              className={`py-4 text-sm font-medium border-b-2 ${
                activeSection === 'team'
                  ? 'border-green-700 text-green-700'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveSection('team')}
            >
              Meet Our Team
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="mb-16">
          
          {/* Our Story */}
          {activeSection === 'story' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Where Tradition Meets Excellence</h2>
                <div className="prose text-gray-600 space-y-4">
                  <p>
                    Ellora Tea was born from a deep-rooted passion for India's rich tea heritage. Our journey began in the misty hills of Darjeeling, where our founder, Rajesh Kumar, learned the art of tea cultivation from his grandfather, a respected tea garden manager.
                  </p>
                  <p>
                    What started as a small family operation has grown into one of India's most trusted premium tea brands. We believe that great tea is not just about the leaf—it's about the story, the people, and the traditions that bring each cup to life.
                  </p>
                  <p>
                    Today, we work directly with over 50 tea gardens across India, ensuring that every leaf meets our exacting standards while supporting the communities that make our tea possible. From the rolling hills of Darjeeling to the lush valleys of Assam, we bring you the very best of India's tea heritage.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://theaccordhotels.com/blog/wp-content/uploads/2023/09/Accord_Blog-copy.jpg" 
                  alt="Tea gardens" 
                  className="rounded-lg shadow-lg w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              </div>
            </motion.div>
          )}

          {/* Mission & Values */}
          {activeSection === 'mission' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission & Values</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Guided by principles of quality, sustainability, and community, we strive to create exceptional tea experiences while making a positive impact.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                {/* Quality Excellence */}
                <div className="bg-green-50 rounded-lg p-8 border border-green-100">
                  <div className="w-12 h-12 bg-green-700 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Excellence</h3>
                  <p className="text-gray-600">
                    We never compromise on quality. Every batch is carefully selected, processed, and tested to ensure it meets our premium standards.
                  </p>
                </div>

                {/* Sustainability */}
                <div className="bg-green-50 rounded-lg p-8 border border-green-100">
                  <div className="w-12 h-12 bg-green-700 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Sustainability</h3>
                  <p className="text-gray-600">
                    We're committed to sustainable farming practices that protect the environment and ensure the long-term health of our tea gardens.
                  </p>
                </div>

                {/* Community Support */}
                <div className="bg-green-50 rounded-lg p-8 border border-green-100">
                  <div className="w-12 h-12 bg-green-700 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Support</h3>
                  <p className="text-gray-600">
                    We believe in fair trade and work directly with tea garden communities to ensure they receive fair compensation for their expertise.
                  </p>
                </div>

                {/* Authenticity */}
                <div className="bg-green-50 rounded-lg p-8 border border-green-100">
                  <div className="w-12 h-12 bg-green-700 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Authenticity</h3>
                  <p className="text-gray-600">
                    Our teas are crafted using traditional methods passed down through generations, preserving the authentic flavors and character.
                  </p>
                </div>

                {/* Innovation */}
                <div className="bg-green-50 rounded-lg p-8 border border-green-100">
                  <div className="w-12 h-12 bg-green-700 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
                  <p className="text-gray-600">
                    While respecting tradition, we embrace modern technology and techniques to enhance quality and reach tea lovers worldwide.
                  </p>
                </div>

                {/* Customer Focus */}
                <div className="bg-green-50 rounded-lg p-8 border border-green-100">
                  <div className="w-12 h-12 bg-green-700 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Customer Focus</h3>
                  <p className="text-gray-600">
                    Every decision we make is centered around creating the best possible experience for our customers and tea enthusiasts.
                  </p>
                </div>

              </div>
            </motion.div>
          )}

          {/* Our Journey */}
          {activeSection === 'journey' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-4xl font-bold text-green-700 mb-4">Our Journey Through Time</h2>
                <p className="md:text-lg text-md font-medium text-gray-600 max-w-3xl mx-auto">
                  Three decades of dedication, growth, and passion for exceptional tea.
                </p>
              </div>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-green-200"></div>
                
                <div className="space-y-10 ">
                  {milestones.map((milestone, index) => (
                    <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                      <div className={`w-1/2 ${index % 2 === 0 ? 'pr-0 md:pr-8 text-right' : 'pl-0 md:pl-8 text-left'}`}>
                        <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
                          <div className="md:text-2xl text-xl font-bold text-green-700 mb-2">{milestone.year}</div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                          <p className="text-gray-600">{milestone.description}</p>
                        </div>
                      </div>
                      <div className="relative z-10">
                        <div className="w-4 h-4 bg-green-700 rounded-full border-4 border-white shadow-lg"></div>
                      </div>
                      <div className="w-1/2"></div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Meet Our Team */}
          {activeSection === 'team' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  The passionate individuals behind Ellora Tea, dedicated to bringing you the finest tea experiences.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {teamMembers.map((member, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                      <p className="text-green-700 font-medium mb-4">{member.role}</p>
                      <p className="text-gray-600">{member.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Company Stats */}
              <div className="bg-green-50 rounded-lg p-8 border border-green-100">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold text-green-700 mb-2">30+</div>
                    <div className="text-gray-600">Years of Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-700 mb-2">50+</div>
                    <div className="text-gray-600">Partner Tea Gardens</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-700 mb-2">15</div>
                    <div className="text-gray-600">Countries Served</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-700 mb-2">10K+</div>
                    <div className="text-gray-600">Happy Customers</div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

        </div>

        {/* Call to Action */}
        <div className="bg-green-800 rounded-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Premium Tea?</h2>
          <p className="text-lg mb-6 opacity-90">
            Join thousands of tea enthusiasts who trust Ellora Tea for their daily cup of excellence.
          </p>
          <motion.a
            href="/product"
            className="inline-block bg-white text-green-700 font-semibold py-3 px-8 rounded-md hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Teas
          </motion.a>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;