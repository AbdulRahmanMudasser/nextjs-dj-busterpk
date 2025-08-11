'use client'

import Slider from "react-slick"
import "slick-carousel/slick/slick.css" 
import "slick-carousel/slick/slick-theme.css"

const topPakistaniBrands = [
  { 
    name: "Nishat Linen", 
    img: "/nishatlinen.png",
    category: "Fashion & Home Textiles"
  },
  { 
    name: "Khaadi", 
    img: "/khaadi.png",
    category: "Clothing & Accessories"
  },
  { 
    name: "Gul Ahmed", 
    img: "/gulahmed.png",
    category: "Textiles & Home Decor"
  },
  { 
    name: "Servis", 
    img: "/servis.png",
    category: "Footwear"
  },
  { 
    name: "Borjan", 
    img: "/borjan.png",
    category: "Footwear & Accessories"
  },
  { 
    name: "J.", 
    img: "/j.logo.jfif",
    category: "Clothing & Fragrances"
  },
  { 
    name: "ChenOne", 
    img: "/chenone.png",
    category: "Home Textiles & Furniture"
  },
  { 
    name: "Alkaram Studio", 
    img: "/alkaram.jpg",
    category: "Fashion & Textiles"
  },
  { 
    name: "Bonanza Satrangi", 
    img: "/bonanza.jpg",
    category: "Clothing"
  },
  { 
    name: "Sapphire", 
    img: "/saphire.png",
    category: "Fashion & Textiles"
  },
  { 
    name: "Diners", 
    img: "/diners.png",
    category: "Home Appliances"
  },
  { 
    name: "Orient", 
    img: "/orient.png",
    category: "Electronics"
  }
]

export default function ShopByBrand() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "40px"
        }
      }
    ]
  }

  return (
    <div className="py-12 bg-gradient-to-b from-gray-50 to-white mt-4">
      <div className="container mx-auto px-4">
        {/* Top Pakistani Brands Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Top Pakistani Brands</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover products from Pakistan's most trusted and beloved brands
          </p>
        </div>

        {/* Brands Carousel */}
        <div className="mb-16 relative">
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          <Slider {...settings}>
            {topPakistaniBrands.map((brand, index) => (
              <div key={index} className="px-2">
                <div className="group flex flex-col items-center p-5 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-24 h-24 flex items-center justify-center p-3 bg-gray-50 rounded-full mb-4">
                    <img 
                      src={brand.img} 
                      alt={brand.name} 
                      className="max-h-full max-w-full object-contain grayscale-[30%] group-hover:grayscale-0 transition-all duration-300" 
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">{brand.name}</h3>
                    <p className="text-xs text-gray-500">{brand.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Featured Products */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Watch Ultra */}
          <div className="bg-white p-8 rounded-2xl flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow duration-300 group">
            <div className="w-full h-64 mb-6 flex items-center justify-center overflow-hidden rounded-lg">
              <img
                src="/banner-watch.png"
                alt="Watch Ultra"
                className="h-full object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2"> WATCH ULTRA 2</h3>
            <p className="text-gray-600 mb-6">
              A magical new way to use your watch without touching the screen. The brightest Apple display ever.
            </p>
            <button className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-3 rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
              Shop Now
            </button>
          </div>

          {/* Hearth Loft */}
          <div className="bg-gradient-to-br from-gray-900 to-black text-white p-8 rounded-2xl flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow duration-300 group">
            <div className="w-full h-64 mb-6 flex items-center justify-center overflow-hidden rounded-lg">
              <img
                src="/banner-furniture.png"
                alt="Hearth Loft"
                className="h-full object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">ROSS GARDAM</h3>
            <p className="text-gray-300 font-medium mb-2">Hearth loft series</p>
            <p className="text-gray-400 mb-6">
              The expansive proportions of the seating's surface, combined with the soft, curved arms create the ideal gown for relaxation
            </p>
            <button className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-3 rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
              Shop Now
            </button>
          </div>

          {/* Dyson Supersonic */}
          <div className="bg-white p-8 rounded-2xl flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow duration-300 group">
            <div className="w-full h-64 mb-6 flex items-center justify-center overflow-hidden rounded-lg">
              <img
                src="/banner-dryer.png"
                alt="Dyson Supersonic"
                className="h-full object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              <span className="font-bold">dyson</span> <span className="font-normal">supersonic</span>
            </h3>
            <p className="text-gray-600 mb-6">
              Finished in Blue Blush, cushioned with soft fabric and with a removable lid that is also a non-slip mat for your hair dryer.
            </p>
            <button className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-3 rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}