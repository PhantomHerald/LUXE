import React, { useState } from 'react';
import { Heart, ShoppingCart, Eye, Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProductCardProps {
  image: string;
  name: string;
  price: number;
  category: string;
  rating?: number;
  reviews?: number;
}

export function ProductCard({ 
  image, 
  name, 
  price, 
  category, 
  rating = 5, 
  reviews = Math.floor(Math.random() * 500) + 50 
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    setTimeout(() => setIsAdding(false), 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative bg-white rounded-2xl p-4 hover:shadow-2xl transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-square overflow-hidden rounded-xl mb-4 relative">
        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-gray-900 px-6 py-2 rounded-full font-medium flex items-center gap-2 hover:bg-gray-100 transition-colors"
          >
            <Eye className="w-4 h-4" />
            Quick View
          </motion.button>
        </motion.div>
      </div>

      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsFavorite(!isFavorite)}
        className={`absolute top-6 right-6 p-2 rounded-full shadow-lg transition-all duration-300 ${
          isFavorite 
            ? 'bg-red-50 text-red-500 hover:bg-red-100' 
            : 'bg-white text-gray-600 hover:bg-gray-50'
        }`}
      >
        <Heart className="w-5 h-5" fill={isFavorite ? "currentColor" : "none"} />
      </motion.button>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full">
            {category}
          </span>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600">{rating} ({reviews})</span>
          </div>
        </div>
        
        <h3 className="text-lg font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">
          {name}
        </h3>
        
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-2xl font-bold text-gray-900">${price.toFixed(2)}</p>
            <p className="text-sm text-gray-500">Free shipping</p>
          </div>
        </div>

        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleAddToCart}
          className="mt-4 w-full bg-gray-900 text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-indigo-600 transition-all duration-300 relative overflow-hidden"
          disabled={isAdding}
        >
          {isAdding ? (
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1 }}
              className="absolute inset-0 bg-green-500"
            />
          ) : null}
          <motion.div 
            animate={{ 
              y: isAdding ? -30 : 0,
              opacity: isAdding ? 0 : 1
            }}
            className="flex items-center gap-2"
          >
            <ShoppingCart className="w-5 h-5" />
            Add to Cart
          </motion.div>
          <motion.div
            initial={{ y: 30 }}
            animate={{ 
              y: isAdding ? 0 : 30,
              opacity: isAdding ? 1 : 0
            }}
            className="absolute inset-0 flex items-center justify-center text-white"
          >
            Added! ✓
          </motion.div>
        </motion.button>
      </div>
    </motion.div>
  );
}