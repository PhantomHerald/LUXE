import React from 'react';
import { ArrowRight, TrendingUp, Shield, Truck, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
          <motion.main
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
          >
            <motion.div variants={itemVariants} className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <motion.span 
                  className="block"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Elevate Your Style
                </motion.span>
                <motion.span 
                  className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  With Luxury Fashion
                </motion.span>
              </h1>
              <motion.p 
                variants={itemVariants}
                className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              >
                Discover our expertly curated collection of premium fashion pieces. From timeless classics
                to contemporary statements, find your perfect style expression.
              </motion.p>
              
              <motion.div 
                variants={itemVariants}
                className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start gap-4"
              >
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-md shadow"
                >
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 md:py-4 md:text-lg md:px-10 transition-all duration-300"
                  >
                    Shop Now
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-3 sm:mt-0"
                >
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-indigo-600 text-base font-medium rounded-lg text-indigo-600 bg-white hover:bg-indigo-50 md:py-4 md:text-lg md:px-10 transition-all duration-300"
                  >
                    View Collection
                  </a>
                </motion.div>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="mt-8 flex items-center justify-center lg:justify-start space-x-2 text-gray-400"
              >
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm">Trusted by 10,000+ customers worldwide</span>
              </motion.div>
            </motion.div>
          </motion.main>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-4 bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Premium Quality</h3>
                  <p className="text-sm text-gray-500">Handpicked luxury items</p>
                </div>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-4 bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-lg">
                  <Shield className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Secure Shopping</h3>
                  <p className="text-sm text-gray-500">100% secure checkout</p>
                </div>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-4 bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-lg">
                  <Truck className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Fast Delivery</h3>
                  <p className="text-sm text-gray-500">Free shipping worldwide</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"
      >
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
          alt="Fashion collection"
        />
      </motion.div>
    </div>
  );
}