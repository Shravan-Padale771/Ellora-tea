import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
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

  return (
    <motion.div
      id="contact"
      className="py-16 bg-gray-50 min-h-screen"
      initial="hidden"
      animate={isMounted ? "visible" : "hidden"}
      variants={staggerContainer}
      key="contact-page" // Important for route changes
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-green-800 mb-4">Contact Us</h2>
          <motion.div 
            className="w-16 h-1 bg-yellow-500 mx-auto mb-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about our products or want to place a bulk order? Reach out to our team!
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Contact Form */}
          <motion.div 
            variants={fadeInUp}
            className="lg:w-1/2 bg-white rounded-lg shadow-lg p-6"
          >
            <h3 className="text-xl font-semibold text-green-800 mb-4">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              {['name', 'email', 'subject'].map((field) => (
                <motion.div 
                  key={field}
                  variants={fadeInUp}
                >
                  <label htmlFor={field} className="block text-gray-700 mb-2">
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    id={field}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </motion.div>
              ))}
              
              <motion.div variants={fadeInUp}>
                <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </motion.div>

              <motion.button
                type="submit"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-6 rounded-lg w-full"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            variants={fadeInUp}
            className="lg:w-1/2 bg-white rounded-lg shadow-lg p-6"
          >
            <h3 className="text-xl font-semibold text-green-800 mb-4">Contact Information</h3>
            <div className="space-y-6">
              {[
                { 
                  title: 'Our Location', 
                  content: '123 Tea Garden Avenue, Green City, TC 54321',
                  icon: (
                    <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  )
                },
                { 
                  title: 'Email Us', 
                  content: 'info@teapower.com\nsupport@teapower.com',
                  icon: (
                    <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  )
                },
                { 
                  title: 'Call Us', 
                  content: '+1 (555) 123-4567\n+1 (555) 987-6543',
                  icon: (
                    <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  )
                },
                { 
                  title: 'Business Hours', 
                  content: 'Mon-Fri: 9 AM - 6 PM\nSat: 10 AM - 4 PM\nSun: Closed',
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
                  <div className="bg-green-100 p-2 rounded-full mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{item.title}</h4>
                    {item.content.split('\n').map((line, i) => (
                      <p key={i} className="text-gray-600">{line}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              variants={fadeInUp}
              className="mt-8"
            >
              <h4 className="font-bold text-gray-800 mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {[
                  { name: 'Facebook', icon: 'facebook' },
                  { name: 'Twitter', icon: 'twitter' },
                  { name: 'Instagram', icon: 'instagram' },
                  { name: 'LinkedIn', icon: 'linkedin' }
                ].map((social, idx) => (
                  <motion.a
                    key={social.name}
                    href="#"
                    variants={fadeInUp}
                    whileHover={{ y: -3 }}
                    className="bg-green-100 hover:bg-green-200 p-3 rounded-full text-green-700 transition-colors"
                    aria-label={social.name}
                  >
                    {/* Social media icons would go here */}
                    <span className="sr-only">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;