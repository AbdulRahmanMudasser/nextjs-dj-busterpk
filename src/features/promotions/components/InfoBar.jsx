'use client'

import {
  FaShippingFast,
  FaThumbsUp,
  FaPhoneAlt,
  FaHeart,
  FaShieldAlt,
  FaGift,
} from "react-icons/fa"
import { motion } from "framer-motion"

const infoBarItems = [
  {
    icon: FaShippingFast,
    title: "Fast, Free Shipping",
    subtitle: "On orders over $50",
    color: "text-blue-500"
  },
  {
    icon: FaThumbsUp,
    title: "60-Day Free Returns",
    subtitle: "All shipping methods",
    color: "text-green-500"
  },
  {
    icon: FaPhoneAlt,
    title: "Expert Customer Service",
    subtitle: "Choose chat or call us",
    color: "text-purple-500"
  },
  {
    icon: FaHeart,
    title: "Exclusive Brands",
    subtitle: "More exclusive products",
    color: "text-pink-500"
  },
  {
    icon: FaShieldAlt,
    title: "Secure Payments",
    subtitle: "SSL encryption guaranteed",
    color: "text-yellow-500"
  },
  {
    icon: FaGift,
    title: "Special Offers",
    subtitle: "Daily deals and bundles",
    color: "text-red-500"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  },
  hover: {
    y: -5,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10
    }
  }
}

export default function InfoBar() {
  return (
    <div className="bg-gradient-to-r from-gray-50 to-white border-t border-b border-gray-100 py-8 shadow-sm">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {infoBarItems.map((item, idx) => {
            const IconComponent = item.icon
            return (
              <motion.div
                key={idx}
                className="flex flex-col items-center p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300"
                variants={itemVariants}
                whileHover="hover"
              >
                <div className="relative mb-3">
                  <IconComponent 
                    className={`${item.color} text-3xl z-10 relative`} 
                  />
                  <div className="absolute -inset-3 bg-opacity-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                    style={{ backgroundColor: item.color.split('-')[1] === 'blue' ? '#3b82f6' : 
                                           item.color.split('-')[1] === 'green' ? '#10b981' :
                                           item.color.split('-')[1] === 'purple' ? '#8b5cf6' :
                                           item.color.split('-')[1] === 'pink' ? '#ec4899' :
                                           item.color.split('-')[1] === 'yellow' ? '#f59e0b' : '#ef4444' }}
                  ></div>
                </div>
                <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1">{item.title}</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-tight">{item.subtitle}</p>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </div>
  )
}