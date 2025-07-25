import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Filter } from 'lucide-react';
import Button from '../../components/ui/Button';

interface ProductCard {
  title: string;
  image: string;
  category: string;
  path: string;
}

const GymwearPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const products: ProductCard[] = [
    {
      title: 'Performance T-Shirts',
      image: 'https://images.pexels.com/photos/4753878/pexels-photo-4753878.jpeg',
      category: 'Tops',
      path: '/contact'
    },
    {
      title: 'Training Shorts',
      image: 'https://images.pexels.com/photos/7005684/pexels-photo-7005684.jpeg',
      category: 'Bottoms',
      path: '/contact'
    },
    {
      title: 'Compression Wear',
      image: 'https://images.pexels.com/photos/4761779/pexels-photo-4761779.jpeg',
      category: 'Performance',
      path: '/contact'
    },
    {
      title: 'Gym Hoodies',
      image: 'https://images.pexels.com/photos/2204196/pexels-photo-2204196.jpeg',
      category: 'Outerwear',
      path: '/contact'
    },
    {
      title: 'Tank Tops',
      image: 'https://images.pexels.com/photos/10105925/pexels-photo-10105925.jpeg',
      category: 'Tops',
      path: '/contact'
    },
    {
      title: 'Leggings',
      image: 'https://images.pexels.com/photos/4761779/pexels-photo-4761779.jpeg',
      category: 'Bottoms',
      path: '/contact'
    }
  ];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-rb-black texture-overlay relative">
        <div className="absolute inset-0 bg-gradient-to-b from-rb-black to-transparent opacity-80"></div>
        
        <div className="container-custom relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bebas mb-6">Gymwear</h1>
            <p className="text-lg text-rb-gray-300">
              High-performance gymwear designed for fitness enthusiasts and athletes
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-rb-gray-900 border-b border-rb-gray-800">
        <div className="container-custom">
          <div className="flex items-center justify-end gap-4">
            <Filter size={20} className="text-rb-gray-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-rb-gray-800 text-rb-white border border-rb-gray-700 rounded-md px-4 py-2 focus:border-rb-red focus:outline-none"
            >
              <option value="All">All Categories</option>
              <option value="Tops">Tops</option>
              <option value="Bottoms">Bottoms</option>
              <option value="Performance">Performance</option>
              <option value="Outerwear">Outerwear</option>
            </select>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-rb-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={product.path}>
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transform transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${product.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-rb-black to-transparent opacity-60"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-bebas text-rb-white group-hover:text-rb-red transition-colors">
                        {product.title}
                      </h3>
                      <span className="inline-block bg-rb-red px-3 py-1 rounded-sm text-rb-white text-sm mt-2">
                        {product.category}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-rb-black">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bebas mb-6">Ready to Order Your Gymwear?</h2>
            <p className="text-rb-gray-300 mb-8">
              Get in touch with our team for custom designs and bulk orders
            </p>
            <Button to="/contact" variant="primary" size="lg">
              Get a Quote
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default GymwearPage;