import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us! We will get back to you soon.");
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const contactReasons = [
    {
      title: "Bulk Orders",
      description: "Special pricing for restaurants, cafes, and wholesale buyers",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    },
    {
      title: "Product Information",
      description: "Questions about our tea varieties, sourcing, and quality",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Partnership Opportunities",
      description: "Interested in becoming a distributor or retail partner",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="bg-white min-h-screen py-28">
      <div className="w-full lg:px-16 md:px-12 px-6">
        
        {/* Header Section */}
        <motion.div 
          className="text-center bg-green-50 mb-16 py-8 w-full rounded-lg"
          initial="hidden"
          animate={isMounted ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.h1 
            variants={fadeInUp}
            className="md:text-5xl text-4xl  font-bold text-green-800 mb-4"
          >
            Contact Us
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            We'd love to hear from you. Get in touch with our team for any questions, bulk orders, or partnership opportunities.
          </motion.p>
        </motion.div>

        {/* Quick Contact Reasons */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial="hidden"
          animate={isMounted ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {contactReasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-green-50 rounded-lg p-6 border border-green-100 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-green-700 rounded-lg flex items-center justify-center mx-auto mb-4 text-white">
                {reason.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Contact Section */}
        <motion.div 
          className="flex flex-col lg:flex-row gap-12 mb-16"
          initial="hidden"
          animate={isMounted ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          
          {/* Contact Form */}
          <motion.div 
            variants={fadeInUp}
            className="lg:w-3/5 bg-white rounded-lg shadow-lg p-8 border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-green-800 mb-6">Send Us a Message</h2>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={fadeInUp}>
                  <label className="block text-gray-700 font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                    placeholder="Enter your full name"
                  />
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                    placeholder="Enter your email address"
                  />
                </motion.div>
              </div>
              
              <motion.div variants={fadeInUp}>
                <label className="block text-gray-700 font-medium mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                  placeholder="What is this regarding?"
                />
              </motion.div>

              <motion.div variants={fadeInUp}>
                <label className="block text-gray-700 font-medium mb-2">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors resize-vertical"
                  placeholder="Tell us more about your inquiry..."
                />
              </motion.div>

              <motion.button
                onClick={handleSubmit}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Send Message
              </motion.button>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            variants={fadeInUp}
            className="lg:w-2/5 space-y-8"
          >
            
            {/* Contact Details Card */}
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-green-800 mb-6">Contact Information</h3>
              <div className="space-y-6">
                {[
                  { 
                    title: 'Visit Our Office', 
                    content: 'Tea Estate Road, Darjeeling\nWest Bengal 734101, India',
                    icon: (
                      <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                    )
                  },
                  { 
                    title: 'Email Us', 
                    content: 'hello@ellorateas.com\nbusiness@ellorateas.com',
                    icon: (
                      <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                    )
                  },
                  { 
                    title: 'Call Us', 
                    content: '+91 98765 43210\n+91 87654 32109',
                    icon: (
                      <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                      </svg>
                    )
                  },
                  { 
                    title: 'Business Hours', 
                    content: 'Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM\nSunday: Closed',
                    icon: (
                      <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    )
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    variants={fadeInUp}
                    className="flex items-start gap-4"
                  >
                    <div className="bg-green-100 p-3 rounded-full mt-1 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">{item.title}</h4>
                      {item.content.split('\n').map((line, i) => (
                        <p key={i} className="text-gray-600 text-sm">{line}</p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Media Card */}
            <div className="bg-green-50 rounded-lg p-8 border border-green-100">
              <h4 className="font-bold text-green-800 mb-4">Connect With Us</h4>
              <p className="text-gray-600 mb-6 text-sm">
                Follow us on social media for tea tips, brewing guides, and the latest updates from our tea gardens.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-green-700">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-green-700">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="text-green-700">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.9.42-.165 1.051-.36 2.235-.42 1.259-.045 1.649-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                  </svg>
                </a>
                <a href="#" className="text-green-700">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

          </motion.div>
        </motion.div>

        {/* Map Section */}
        <motion.div 
          className="bg-gray-100 rounded-lg p-8 mb-16"
          initial="hidden"
          animate={isMounted ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Find Us</h3>
            <p className="text-gray-600">Located in the heart of Darjeeling's tea country</p>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234.59421972128555!2d75.24924794666444!3d19.818467674366566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb99cd8a6aa1ed%3A0x9da69dff20d8cdb5!2sDeogiri%20Crop%20Science%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1747579439411!5m2!1sen!2sin" width="100%" height="350" className='border-0'  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </motion.div>

        {/* FAQ Section */}
        <motion.div 
          className="bg-white rounded-lg shadow-lg p-8 border border-gray-100"
          initial="hidden"
          animate={isMounted ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Frequently Asked Questions</h3>
            <p className="text-gray-600">Quick answers to common questions</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "What is your minimum order quantity?",
                answer: "For retail customers, there's no minimum order. For wholesale, our minimum is 50kg per variety."
              },
              {
                question: "Do you ship internationally?",
                answer: "Yes, we ship worldwide. Shipping costs and delivery times vary by location."
              },
              {
                question: "How fresh are your teas?",
                answer: "All our teas are processed within 24 hours of harvest and shipped within 2 weeks of processing."
              },
              {
                question: "Do you offer custom blending?",
                answer: "Yes, we offer custom blending services for orders above 100kg. Contact us for details."
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="bg-green-50 rounded-lg p-6 border border-green-100"
              >
                <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
                <p className="text-gray-600 text-sm">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default ContactPage;