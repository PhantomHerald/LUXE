import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductCard } from './components/ProductCard';

const featuredProducts = [
  {
    id: 1,
    name: "Classic Leather Jacket",
    price: 299.99,
    category: "Outerwear",
    rating: 4.9,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
  },
  {
    id: 2,
    name: "Premium Denim Jeans",
    price: 129.99,
    category: "Bottoms",
    rating: 4.8,
    reviews: 256,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=926&q=80"
  },
  {
    id: 3,
    name: "Cashmere Sweater",
    price: 199.99,
    category: "Knitwear",
    rating: 4.7,
    reviews: 189,
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=905&q=80"
  },
  {
    id: 4,
    name: "Designer Sunglasses",
    price: 159.99,
    category: "Accessories",
    rating: 4.9,
    reviews: 215,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      
      <div className="pt-16">
        <Hero />
        
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        >
          <div className="text-center mb-12">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-semibold text-indigo-600 tracking-wide uppercase"
            >
              Curated Selection
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-1 text-4xl font-bold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl"
            >
              Featured Products
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="max-w-xl mt-5 mx-auto text-xl text-gray-500"
            >
              Discover our handpicked selection of premium items
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                category={product.category}
                rating={product.rating}
                reviews={product.reviews}
                image={product.image}
              />
            ))}
          </div>
        </motion.section>

        <motion.footer 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gray-900 text-white py-16"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  LUXE
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Premium fashion for the modern individual. Discover your unique style with our curated collection.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h4 className="font-semibold text-lg mb-6">Shop</h4>
                <ul className="space-y-4 text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">New Arrivals</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">Best Sellers</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">Sale</a>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <h4 className="font-semibold text-lg mb-6">Help</h4>
                <ul className="space-y-4 text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">FAQs</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">Shipping</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">Returns</a>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <h4 className="font-semibold text-lg mb-6">Contact</h4>
                <ul className="space-y-4 text-gray-400">
                  <li className="flex items-center gap-2">
                    Email: support@luxe.com
                  </li>
                  <li className="flex items-center gap-2">
                    Phone: (555) 123-4567
                  </li>
                </ul>
                <div className="mt-6">
                  <h5 className="font-medium mb-4">Newsletter</h5>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="bg-gray-800 text-white px-4 py-2 rounded-lg flex-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                    >
                      Subscribe
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400"
            >
              <p>&copy; 2024 LUXE. All rights reserved.</p>
            </motion.div>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}

export default App;