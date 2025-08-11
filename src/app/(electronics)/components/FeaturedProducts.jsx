'use client'

const products = [
  {
    title: "Samsung Galaxy A54 5G - 128GB Storage, 8GB RAM",
    price: "Rs. 89,999",
    oldPrice: "Rs. 99,999",
    discount: "-10%",
    freeShipping: true,
    image: "/galaxy.jpeg",
    seller: "by MobileHut",
  },
  {
    title: "Nike Air Max 270 - Premium Running Shoes",
    price: "Rs. 15,999",
    oldPrice: "Rs. 19,999",
    discount: "-20%",
    freeShipping: true,
    image: "/nikeshoes.jpeg",
    seller: "by Sports Hub",
  },
  {
    title: "HP Pavilion Laptop - Intel i5, 8GB RAM, 512GB SSD",
    price: "Rs. 125,000",
    oldPrice: "Rs. 145,000",
    discount: "-15%",
    freeShipping: true,
    image: "/hppavilion.avif",
    seller: "by Laptop Store PK",
  },
  {
    title: "Wireless Bluetooth Headphones - Premium Sound Quality",
    price: "Rs. 8,999",
    oldPrice: "Rs. 13,999",
    discount: "-35%",
    freeShipping: false,
    image: "/headphones.jpg",
    seller: "by Audio Zone",
  },
  {
    title: "Traditional Pakistani Lawn Suit - Unstitched 3 Pieces",
    price: "Rs. 4,500",
    oldPrice: "Rs. 5,200",
    discount: "-15%",
    freeShipping: true,
    image: "/lawn.jpg",
    seller: "by Fashion Palace",
  },
  {
    title: "Pressure Cooker - 5L Capacity, Stainless Steel",
    price: "Rs. 3,999",
    oldPrice: "Rs. 4,999",
    discount: "-20%",
    freeShipping: false,
    image: "/cooker.jpg",
    seller: "by Kitchen Essentials",
  },
  {
    title: "Cricket Bat - Professional Grade English Willow",
    price: "Rs. 12,500",
    oldPrice: "Rs. 14,999",
    discount: "-17%",
    freeShipping: true,
    image: "/bat.jpg",
    seller: "by Sports Champion",
  },
  {
    title: "Islamic Books Collection - Quran Translation & Tafseer",
    price: "Rs. 2,500",
    oldPrice: "Rs. 2,900",
    discount: "-14%",
    freeShipping: true,
    image: "/books.jpg",
    seller: "by Islamic Literature",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="w-full bg-white py-10 px-4 md:px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex justify-between items-center mb-8 flex-wrap gap-2">
          <div>
            <h2 className="bg-gradient-to-r text-2xl  from-blue-600 to-purple-600 bg-clip-text text-transparent">Featured Products</h2>
            <p className="text-sm text-gray-500">
              Handpicked items just for you with zero commission for sellers
            </p>
          </div>
          <a href="#" className="text-sm text-blue-600 hover:underline">View All →</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden border border-gray-100 flex flex-col"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  {product.discount}
                </span>
                {product.freeShipping && (
                  <span className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                    Free Shipping
                  </span>
                )}
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <h3 className="text-sm font-semibold text-gray-800 mb-1 line-clamp-2">
                  {product.title}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{product.seller}</p>

                <div className="mb-4">
                  <span className="text-lg font-bold text-green-600">{product.price}</span>{' '}
                  <span className="text-sm line-through text-gray-400">{product.oldPrice}</span>
                </div>

                <button className="bg-[#ff0e1e] hover:bg-[#ff0e1ea8] text-white text-sm py-2 rounded-md w-full transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
