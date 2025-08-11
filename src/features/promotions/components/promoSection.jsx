'use client'

import { useEffect, useRef, useState } from 'react'
import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

const slides = [
  {
    id: 1,
    title: "Summer Collection 2024",
    subtitle: "Fresh styles for your wardrobe",
    cta: "Shop Now",
    bgColor: "from-pink-500 to-purple-600",
    image: "/earbuds3.jpeg",
    overlay: "bg-gradient-to-r",
    textColor: "text-white"
  },
  {
    id: 2,
    title: "Tech Revolution",
    subtitle: "Cutting-edge gadgets at unbeatable prices",
    cta: "Explore Tech",
    bgColor: "from-blue-500 to-cyan-400",
    image: "/womanslider.jpg",
    overlay: "bg-gradient-to-br",
    textColor: "text-white"
  },
  {
    id: 3,
    title: "Home Essentials",
    subtitle: "Transform your living space",
    cta: "Discover More",
    bgColor: "from-amber-500 to-orange-600",
    image: "/bannerfurniture.jpg",
    overlay: "bg-gradient-to-tr",
    textColor: "text-white"
  },
  {
    id: 4,
    title: "Fitness Gear",
    subtitle: "Performance meets style",
    cta: "Get Equipped",
    bgColor: "from-emerald-500 to-teal-600",
    image: "/headphones.jpg",
    overlay: "bg-gradient-to-l",
    textColor: "text-white"
  },
  {
    id: 5,
    title: "Luxury Watches",
    subtitle: "Timeless elegance redefined",
    cta: "View Collection",
    bgColor: "from-gray-700 to-gray-900",
    image: "/watch.jpg",
    overlay: "bg-gradient-to-t",
    textColor: "text-white"
  },
]

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(1)
  const [isHovered, setIsHovered] = useState(false)
  const timerRef = useRef(null)
  const sliderRef = useRef(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Auto-rotate slides
  useEffect(() => {
    if (!isHovered && isClient) {
      timerRef.current = setInterval(() => {
        setDirection(1)
        setCurrentSlide(prev => (prev + 1) % slides.length)
      }, 6000)
    }
    
    return () => clearInterval(timerRef.current)
  }, [isHovered, isClient])

  // Handle manual navigation
  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1)
    setCurrentSlide(index)
    resetTimer()
  }

  const nextSlide = () => {
    setDirection(1)
    setCurrentSlide(prev => (prev + 1) % slides.length)
    resetTimer()
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length)
    resetTimer()
  }

  const resetTimer = () => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setDirection(1)
      setCurrentSlide(prev => (prev + 1) % slides.length)
    }, 6000)
  }

  // Parallax effect
  const handleMouseMove = (e) => {
    if (!sliderRef.current || !isClient) return
    const { left, width } = sliderRef.current.getBoundingClientRect()
    const x = (e.clientX - left) / width - 0.5
    const y = (e.clientY - sliderRef.current.offsetTop) / sliderRef.current.offsetHeight - 0.5
    
    sliderRef.current.style.setProperty('--mouse-x', x * 40 + 'px')
    sliderRef.current.style.setProperty('--mouse-y', y * 40 + 'px')
  }

  // Animation variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0.7,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 400, damping: 30 },
        opacity: { duration: 0.6 },
        scale: { duration: 0.8 }
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0.7,
      scale: 0.95,
      transition: {
        x: { type: 'spring', stiffness: 400, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.6 }
      }
    })
  }

  const contentVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    })
  }

  // Predefined particle positions to avoid hydration mismatch
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    width: `${Math.random() * 12 + 4}`,
    height: `${Math.random() * 12 + 4}`,
    top: `${Math.random() * 100}`,
    left: `${Math.random() * 100}`,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 5,
    y: `${Math.random() * 100 - 50}`,
    x: `${Math.random() * 100 - 50}`
  }))

  return (
    <div 
      className="relative w-screen h-screen max-h-[900px] overflow-hidden -mx-[calc((100vw-100%)/2)] mt-16"
      ref={sliderRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        '--mouse-x': '0px',
        '--mouse-y': '0px',
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-black/10 backdrop-blur-[1px]"></div>
        <div className="absolute inset-0 opacity-20 bg-[url('/noise-pattern.png')]"></div>
      </div>

      {/* Slides container */}
      <div className="relative z-10 h-full w-full">
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={slides[currentSlide].id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 flex items-center"
            style={{
              transform: 'translate3d(var(--mouse-x), var(--mouse-y), 0) rotate(0.001deg)'
            }}
          >
            {/* Slide background */}
            <div className={`absolute inset-0 ${slides[currentSlide].overlay} ${slides[currentSlide].bgColor} opacity-90`}></div>
            
            {/* Slide image with enhanced parallax */}
            <motion.div 
              className="absolute inset-0 overflow-hidden"
              initial={{ scale: 1.15 }}
              animate={{ scale: 1.05 }}
              transition={{ duration: 8, ease: 'linear' }}
            >
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="w-full h-full object-cover object-center"
                style={{
                  transform: 'translate3d(calc(var(--mouse-x) * -0.8), calc(var(--mouse-y) * -0.8), 0) scale(1.05)',
                  transition: 'transform 0.15s linear',
                  filter: 'brightness(0.95) contrast(1.05)'
                }}
              />
            </motion.div>

            {/* Content overlay with glassmorphism effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>

            {/* Content */}
            <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 xl:px-24 text-white">
              <motion.div
                initial="hidden"
                animate="visible"
                className="max-w-2xl space-y-6"
              >
                <motion.span 
                  custom={0}
                  variants={contentVariants}
                  className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-medium border border-white/10 shadow-lg"
                >
                  <span 
                    className="w-2 h-2 bg-red-500 rounded-full mr-2"
                    style={{
                      animation: 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                    }}
                  ></span>
                  {slides[currentSlide].title}
                </motion.span>
                
                <motion.h1 
                  custom={1}
                  variants={contentVariants}
                  className={`text-5xl md:text-7xl lg:text-8xl font-bold leading-tight ${slides[currentSlide].textColor} drop-shadow-2xl`}
                >
                  {slides[currentSlide].subtitle}
                </motion.h1>
                
                <motion.div
                  custom={2}
                  variants={contentVariants}
                >
                  <motion.button 
                    className="flex items-center gap-3 bg-white text-black hover:bg-black hover:text-white px-10 py-5 rounded-full font-medium transition-all duration-300 group shadow-xl hover:shadow-2xl"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-lg font-semibold">{slides[currentSlide].cta}</span>
                    <FaArrowRight className="text-xl group-hover:translate-x-2 transition-transform duration-300" />
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Enhanced Navigation arrows */}
        <motion.button 
          onClick={prevSlide}
          className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition-all shadow-lg hover:shadow-xl"
          aria-label="Previous slide"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaChevronLeft className="text-2xl" />
        </motion.button>
        <motion.button 
          onClick={nextSlide}
          className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition-all shadow-lg hover:shadow-xl"
          aria-label="Next slide"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaChevronRight className="text-2xl" />
        </motion.button>

        {/* Modern Dots navigation */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative w-4 h-4 rounded-full transition-all duration-500 ${currentSlide === index ? 'bg-white scale-125' : 'bg-white/40 scale-100'}`}
              aria-label={`Go to slide ${index + 1}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              {currentSlide === index && (
                <span 
                  className="absolute inset-0 rounded-full bg-white/30"
                  style={{
                    animation: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite'
                  }}
                ></span>
              )}
            </motion.button>
          ))}
        </div>

        {/* Animated Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1.5 z-20 bg-white/10 backdrop-blur-sm">
          <motion.div
            className="h-full bg-gradient-to-r from-white to-white/80"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 5.8, ease: 'linear' }}
            key={currentSlide}
          />
        </div>

        {/* Floating decorative elements */}
        {isClient && (
          <>
            <div 
              className="absolute top-1/4 left-1/4 w-20 h-20 rounded-full bg-white/10 backdrop-blur-md shadow-lg"
              style={{
                animation: 'float 12s ease-in-out infinite both'
              }}
            ></div>
            <div 
              className="absolute bottom-1/3 right-1/4 w-28 h-28 rounded-full bg-white/5 backdrop-blur-md shadow-lg"
              style={{
                animation: 'float-delay 14s ease-in-out infinite both'
              }}
            ></div>
          </>
        )}
      </div>

      {/* Animated particles */}
      {isClient && (
        <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
          {particles.map((particle) => (
            <motion.div 
              key={particle.id}
              className="absolute rounded-full bg-white/10 backdrop-blur-sm"
              initial={{
                width: `${particle.width}px`,
                height: `${particle.height}px`,
                top: `${particle.top}%`,
                left: `${particle.left}%`,
                opacity: 0
              }}
              animate={{
                opacity: [0, 0.8, 0],
                y: `${particle.y}px`,
                x: `${particle.x}px`,
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                repeatType: 'reverse',
                delay: particle.delay
              }}
            />
          ))}
        </div>
      )}

      {/* Inline styles for animations */}
      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes ping {
          0% { transform: scale(1); opacity: 1; }
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); }
          25% { transform: translateY(-20px) translateX(10px) rotate(2deg); }
          50% { transform: translateY(10px) translateX(-10px) rotate(-2deg); }
          75% { transform: translateY(-10px) translateX(15px) rotate(3deg); }
        }
        @keyframes float-delay {
          0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); }
          25% { transform: translateY(15px) translateX(-15px) rotate(-3deg); }
          50% { transform: translateY(-15px) translateX(10px) rotate(2deg); }
          75% { transform: translateY(10px) translateX(-10px) rotate(-1deg); }
        }
      `}</style>
    </div>
  )
}