"use client"
import Image from "next/image"
import heroBanner from "../../../../public/1.jpeg";
import iphoneImage from "../../../../public/phone.jpeg";
import tshirtImage from "../../../../public/jumpers.webp";
import coffeeMakerImage from "../../../../public/Fridge.jpg";
import bookImage from "../../../../public/books.jpg";
import { 
  TrendingUp, 
  Zap, 
  Shield, 
  Truck, 
  Star,
  ArrowRight,
  Smartphone,
  Shirt,
  Home,
  BookOpen
} from "lucide-react"

// Mock data
const featuredProducts = [
  {
    id: "1",
    name: "iPhone 15 Pro Max 256GB",
    price: 1199.99,
    originalPrice: 1299.99,
    rating: 4.8,
    reviewCount: 2847,
    image: iphoneImage,
    category: "Electronics",
    isOnSale: true,
    inStock: true
  },
  {
    id: "2", 
    name: "Premium Cotton T-Shirt",
    price: 29.99,
    originalPrice: 39.99,
    rating: 4.5,
    reviewCount: 1203,
    image: tshirtImage,
    category: "Fashion",
    isOnSale: true,
    inStock: true
  },
  {
    id: "3",
    name: "Smart Coffee Maker Pro",
    price: 149.99,
    rating: 4.7,
    reviewCount: 856,
    image: coffeeMakerImage,
    category: "Home & Kitchen",
    inStock: true
  },
  {
    id: "4",
    name: "The Art of Programming",
    price: 49.99,
    originalPrice: 59.99,
    rating: 4.9,
    reviewCount: 445,
    image: bookImage,
    category: "Books & Stationery",
    isOnSale: true,
    inStock: true
  }
]

const categories = [
  { name: "Electronics", icon: Smartphone, count: "15,000+", color: "linear-gradient(to bottom right, #3b82f6, #2563eb)" },
  { name: "Fashion", icon: Shirt, count: "25,000+", color: "linear-gradient(to bottom right, #ec4899, #db2777)" },
  { name: "Home & Kitchen", icon: Home, count: "12,000+", color: "linear-gradient(to bottom right, #22c55e, #16a34a)" },
  { name: "Books & Stationery", icon: BookOpen, count: "8,000+", color: "linear-gradient(to bottom right, #a855f7, #7e22ce)" }
]

const stats = [
  { label: "Total Products", value: "60,000+", icon: TrendingUp },
  { label: "Happy Customers", value: "250,000+", icon: Star },
  { label: "Daily Orders", value: "5,000+", icon: Zap },
  { label: "Satisfaction Rate", value: "98.5%", icon: Shield }
]

export default function Dashboard() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      
      {/* Hero Section */}
      <div style={{ position: "relative", borderRadius: "16px", overflow: "hidden", boxShadow: "0 8px 20px rgba(0,0,0,0.2)" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, #ef4444, rgba(239,68,68,0.9), rgba(249,115,22,0.9))", zIndex: 10 }} />
        <Image 
          src={heroBanner} 
          alt="Hero Banner" 
          style={{ width: "100%", height: "400px", objectFit: "cover" }}
        />
        <div style={{ position: "absolute", inset: 0, zIndex: 20, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ textAlign: "center", color: "white", maxWidth: "768px", padding: "1.5rem" }}>
            <h1 style={{ fontSize: "3rem", fontWeight: "bold", lineHeight: "1.2" }}>
              Discover Amazing{" "}
              <span style={{ background: "linear-gradient(to right, #fcd34d, #f97316)", WebkitBackgroundClip: "text", color: "transparent" }}>
                Deals
              </span>
            </h1>
            <p style={{ fontSize: "1.25rem", marginTop: "1rem", opacity: 0.9 }}>
              Shop from millions of products across Electronics, Fashion, Home & Kitchen, and Books
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginTop: "2rem", flexWrap: "wrap" }}>
              <button style={{ background: "#ef4444", color: "white", padding: "0.75rem 1.5rem", borderRadius: "8px", fontSize: "1rem", display: "flex", alignItems: "center", gap: "0.5rem", border: "none" }}>
                Start Shopping <ArrowRight size={20} />
              </button>
              <button style={{ background: "transparent", border: "1px solid white", color: "white", padding: "0.75rem 1.5rem", borderRadius: "8px", fontSize: "1rem" }}>
                Browse Categories
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem" }}>
        {stats.map((stat) => (
          <div key={stat.label} style={{ textAlign: "center", padding: "1.5rem", borderRadius: "12px", background: "white", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
            <div style={{ display: "inline-flex", padding: "0.75rem", borderRadius: "50%", background: "rgba(249,115,22,0.1)", color: "#f97316", marginBottom: "1rem" }}>
              <stat.icon size={24} />
            </div>
            <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#ef4444" }}>{stat.value}</div>
            <div style={{ fontSize: "0.875rem", color: "#6b7280" }}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Categories Grid */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2 style={{ fontSize: "1.875rem", fontWeight: "bold", color: "#ef4444" }}>Shop by Category</h2>
          <button style={{ background: "transparent", border: "none", color: "#ef4444", display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer" }}>
            View All <ArrowRight size={16} />
          </button>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem" }}>
          {categories.map((category) => (
            <div key={category.name} style={{ borderRadius: "12px", overflow: "hidden", cursor: "pointer", transition: "0.3s", background: "white", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
              <div style={{ height: "8rem", background: category.color, position: "relative" }}>
                <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.1)" }} />
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <category.icon size={48} color="white" />
                </div>
                <span style={{ position: "absolute", top: "0.75rem", right: "0.75rem", background: "rgba(255,255,255,0.2)", color: "white", fontSize: "0.875rem", padding: "0.25rem 0.5rem", borderRadius: "8px" }}>
                  {category.count}
                </span>
              </div>
              <div style={{ padding: "1rem", textAlign: "center" }}>
                <h3 style={{ fontWeight: "600", color: "#111827" }}>{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2 style={{ fontSize: "1.875rem", fontWeight: "bold", color: "#ef4444" }}>Featured Products</h2>
          <button style={{ background: "#ef4444", color: "white", border: "none", padding: "0.5rem 1rem", borderRadius: "8px", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            View All Products <ArrowRight size={16} />
          </button>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem" }}>
          {featuredProducts.map((product) => (
            <div key={product.id} style={{ background: "white", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
              <Image src={product.image} alt={product.name} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ fontWeight: "600", fontSize: "1.125rem" }}>{product.name}</h3>
                <p style={{ color: "#ef4444", fontWeight: "bold" }}>${product.price}</p>
                {product.originalPrice && (
                  <p style={{ textDecoration: "line-through", fontSize: "0.875rem", color: "#6b7280" }}>${product.originalPrice}</p>
                )}
                <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>{product.rating} ★ ({product.reviewCount} reviews)</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Banner */}
      <div style={{ background: "linear-gradient(to right, #ef4444, #f97316)", color: "white", padding: "2rem", borderRadius: "12px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem", textAlign: "center" }}>
          <div>
            <Truck size={32} />
            <h3 style={{ fontWeight: "600", marginTop: "0.5rem" }}>Free Shipping</h3>
            <p style={{ fontSize: "0.875rem", opacity: 0.8 }}>On orders over $50</p>
          </div>
          <div>
            <Shield size={32} />
            <h3 style={{ fontWeight: "600", marginTop: "0.5rem" }}>Secure Payment</h3>
            <p style={{ fontSize: "0.875rem", opacity: 0.8 }}>100% secure transactions</p>
          </div>
          <div>
            <Star size={32} />
            <h3 style={{ fontWeight: "600", marginTop: "0.5rem" }}>Top Quality</h3>
            <p style={{ fontSize: "0.875rem", opacity: 0.8 }}>Verified products only</p>
          </div>
        </div>
      </div>
    </div>
  )
}
