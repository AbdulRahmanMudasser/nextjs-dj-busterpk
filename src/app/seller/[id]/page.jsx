import SellerProfile from '@/app/(electronics)/components/SellerProfile'

// This would be your data fetching function
async function getSeller(id) {
  // In a real app, you would fetch this from your API or database
  const sellers = {
    'mobilehut': {
      name: "MobileHut",
      rating: 4.8,
      reviews: 2847,
      joined: "January 2020",
      responseRate: "98%",
      responseTime: "within 2 hours",
      followers: 12500,
      products: 247,
      about: "MobileHut is Pakistan's premier destination for authentic smartphones and accessories. We are an authorized retailer for Samsung, Apple, Xiaomi, and other leading brands. All our products come with official warranty and 7-day return policy.",
      services: [
        "Free delivery across Pakistan",
        "Official warranty on all products",
        "7-day easy returns",
        "Installment plans available",
        "Genuine products only"
      ],
      contact: {
        phone: "+92 300 1234567",
        email: "contact@mobilehut.pk",
        website: "www.mobilehut.pk",
        address: "Main Gulberg, Lahore, Pakistan"
      },
      socialMedia: {
        facebook: "mobilehutofficial",
        twitter: "mobilehut_pk",
        instagram: "mobilehut.pakistan"
      }
    }
  }
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100))
  
  return sellers[id] || null
}

async function getSellerProducts(id) {
  // In a real app, you would fetch this from your API or database
  const sellerProducts = {
    'mobilehut': [
      {
        id: 1,
        title: "Samsung Galaxy A54 5G - 128GB Storage, 8GB RAM",
        price: "Rs. 89,999",
        oldPrice: "Rs. 99,999",
        discount: "-10%",
        image: "/galaxy.jpeg",
        rating: 4.5,
        reviews: 2847,
        sold: 1250,
        colors: ["black", "blue", "white", "purple"]
      },
      {
        id: 2,
        title: "Samsung Galaxy S23 Ultra 512GB",
        price: "Rs. 199,999",
        oldPrice: "Rs. 229,999",
        discount: "-15%",
        image: "/s23ultra.jpeg",
        rating: 4.8,
        reviews: 1523,
        sold: 842,
        colors: ["black", "green", "lavender"]
      },
      {
        id: 3,
        title: "iPhone 14 Pro Max 256GB",
        price: "Rs. 249,999",
        oldPrice: "Rs. 269,999",
        discount: "-12%",
        image: "/iphone14.jpeg",
        rating: 4.7,
        reviews: 1987,
        sold: 956,
        colors: ["black", "white", "gold", "purple"]
      },
      // More products...
    ]
  }
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100))
  
  return sellerProducts[id] || []
}

export default async function SellerPage({ params }) {
  const { id } = await params
  const seller = await getSeller(id)
  const products = await getSellerProducts(id)
  
  if (!seller) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 text-center">
          <h1 className="text-2xl font-bold text-blue-900 mb-4">Seller Not Found</h1>
          <p className="text-blue-700">The seller you're looking for doesn't exist.</p>
        </div>
      </div>
    )
  }
  
  return <SellerProfile seller={seller} products={products} />
}