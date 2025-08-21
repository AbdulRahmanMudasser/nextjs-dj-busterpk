"use client";

import { Flame, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";
// Import product images
import headphonesImage from "../../../../public/logitechheadphones.jpg";
import smartphoneImage from "../../../../public/phone.jpeg";
import keyboardImage from "../../../../public/switch.jpeg";
import smartwatchImage from "../../../../public/banner-watch.png";

export default function HotSales() {
  const { toast } = useToast();
  const [cart, setCart] = useState([]);

  const hotSaleProducts = [
    {
      id: 1,
      title: "Gaming Headphones Pro",
      Image: headphonesImage,
      originalPrice: 299.99,
      salePrice: 179.99,
      discountPercentage: 40,
    },
    {
      id: 2,
      title: "Smartphone Ultra",
      Image: smartphoneImage,
      originalPrice: 899.99,
      salePrice: 649.99,
      discountPercentage: 28,
    },
    {
      id: 3,
      title: "Mechanical Keyboard RGB",
      Image: keyboardImage,
      originalPrice: 199.99,
      salePrice: 119.99,
      discountPercentage: 40,
    },
    {
      id: 4,
      title: "Luxury Smartwatch",
      Image: smartwatchImage,
      originalPrice: 449.99,
      salePrice: 279.99,
      discountPercentage: 38,
    },
  ];

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    toast({
      title: "🔥 Added to Cart!",
      description: `${product.title} has been added to your cart.`,
    });
  };

  const handleViewAllSales = () => {
    toast({
      title: "Coming Soon!",
      description: "Hot Sales page is under construction.",
    });
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white via-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-14 flex-wrap gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r  from-blue-600 to-purple-600 bg-clip-text text-transparent">
              <Flame className="w-10 h-10 text-blue-600 animate-pulse" />
              Hot Sales
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Limited-time offers at{" "}
              <span className="font-semibold text-blue-600">
                unbeatable prices
              </span>
            </p>
          </div>

          {/* View All Button */}
          <button
            onClick={handleViewAllSales}
            className="hidden md:flex items-center gap-2 px-6 py-3 border-2 border-blue-600 rounded-full text-blue-600 font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md"
          >
            View All Hot Sales
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {hotSaleProducts.map((product) => (
            <div
              key={product.id}
              className="relative group rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-white to-blue-50 border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Discount Badge */}
              <div className="absolute top-4 left-4 z-10">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg animate-bounce">
                  <Flame className="w-4 h-4" />
                  -{product.discountPercentage}%
                </div>
              </div>

              {/* Product Image */}
              <div className="aspect-square overflow-hidden relative">
                <Image
                  src={product.Image}
                  alt={product.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  priority={product.id === 1}
                />
                {/* Overlay Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Product Details */}
              <div className="p-6">
                <h3 className="font-bold text-lg mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                  {product.title}
                </h3>

                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl font-extrabold text-blue-600">
                    ${product.salePrice.toFixed(2)}
                  </span>
                  <span className="text-lg line-through text-gray-400">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="md:hidden text-center">
          <button
            onClick={handleViewAllSales}
            className="px-6 py-3 border-2 border-blue-600 rounded-full text-blue-600 font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md"
          >
            View All Hot Sales
          </button>
        </div>
      </div>
    </section>
  );
}
