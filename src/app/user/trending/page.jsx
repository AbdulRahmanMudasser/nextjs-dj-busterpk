export default function Trending() {
  // Mock trending data
  const trendingProducts = [
    {
      id: "1",
      name: "iPhone 15 Pro Max 256GB",
      price: 1199.99,
      originalPrice: 1299.99,
      rating: 4.8,
      reviewCount: 2847,
      image: "/iphone-15-pro.jpg",
      category: "Electronics",
      isOnSale: true,
      inStock: true,
      trendScore: 98,
      views24h: 15420,
      likes24h: 2340
    },
    {
      id: "2",
      name: "Premium Cotton T-Shirt",
      price: 29.99,
      originalPrice: 39.99,
      rating: 4.5,
      reviewCount: 1203,
      image: "/cotton-tshirt.jpg",
      category: "Fashion",
      isOnSale: true,
      inStock: true,
      trendScore: 92,
      views24h: 8750,
      likes24h: 1820
    },
    {
      id: "3",
      name: "Smart Coffee Maker Pro",
      price: 149.99,
      rating: 4.7,
      reviewCount: 856,
      image: "/coffee-maker.jpg",
      category: "Home & Kitchen",
      inStock: true,
      trendScore: 87,
      views24h: 6230,
      likes24h: 980
    },
    {
      id: "4",
      name: "The Art of Programming",
      price: 49.99,
      originalPrice: 59.99,
      rating: 4.9,
      reviewCount: 445,
      image: "/programming-book.jpg",
      category: "Books & Stationery",
      isOnSale: true,
      inStock: true,
      trendScore: 85,
      views24h: 4560,
      likes24h: 670
    }
  ];

  const trendingCategories = [
    { name: "Electronics", growth: "+24%", color: "hsl(var(--success))" },
    { name: "Fashion", growth: "+18%", color: "hsl(var(--orange))" },
    { name: "Home & Kitchen", growth: "+15%", color: "hsl(var(--primary))" },
    { name: "Books", growth: "+12%", color: "hsl(var(--purple-500))" }
  ];

  const trendingSearches = [
    "iPhone 15 Pro",
    "Wireless Headphones",
    "Smart Watch",
    "Gaming Laptop",
    "Air Fryer",
    "Yoga Mat",
    "Coffee Grinder",
    "LED Strip Lights"
  ];

  const ProductCard = ({ product }) => {
    return (
      <div style={{
        borderRadius: "0.5rem",
        border: "1px solid hsl(var(--border))",
        overflow: "hidden",
        position: "relative",
        height: "100%"
      }}>
        <div style={{ position: "relative", paddingTop: "100%", overflow: "hidden" }}>
          <img
            src={product.image}
            alt={product.name}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }}
          />
          {product.isOnSale && (
            <div style={{
              position: "absolute",
              bottom: "0.5rem",
              left: "0.5rem",
              background: "hsl(var(--primary))",
              color: "white",
              padding: "0.25rem 0.5rem",
              borderRadius: "0.25rem",
              fontSize: "0.75rem",
              fontWeight: "500"
            }}>
              Sale
            </div>
          )}
        </div>
        <div style={{ padding: "1rem" }}>
          <div style={{ marginBottom: "0.5rem" }}>
            <span style={{ fontSize: "0.75rem", color: "hsl(var(--muted-foreground))" }}>
              {product.category}
            </span>
          </div>
          <h3 style={{ fontWeight: "500", marginBottom: "0.5rem" }}>{product.name}</h3>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "0.5rem" }}>
            <div style={{ display: "flex" }}>
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
                    color: i < Math.floor(product.rating) ? "hsl(var(--primary))" : "hsl(var(--muted))",
                    width: "1rem",
                    height: "1rem"
                  }}
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <span style={{ fontSize: "0.75rem", color: "hsl(var(--muted-foreground))", marginLeft: "0.25rem" }}>
              ({product.reviewCount})
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ fontWeight: "600", fontSize: "1.125rem" }}>
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span style={{ textDecoration: "line-through", color: "hsl(var(--muted-foreground))", fontSize: "0.875rem" }}>
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      {/* Header */}
      <div style={{ textAlign: "center", display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          background: "linear-gradient(to right, hsl(var(--orange)/0.1), hsl(var(--primary)/0.1))",
          borderRadius: "9999px",
          padding: "0.5rem 1rem",
          margin: "0 auto"
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "hsl(var(--orange))" }}>
            <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
          </svg>
          <span style={{ fontSize: "0.875rem", fontWeight: "500" }}>What's Hot Right Now</span>
        </div>
        <h1 style={{
          fontSize: "2.25rem",
          fontWeight: "700",
          background: "linear-gradient(to right, hsl(var(--primary)), hsl(var(--orange)))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          lineHeight: "2.5rem"
        }}>
          Trending Products
        </h1>
        <p style={{
          fontSize: "1.125rem",
          color: "hsl(var(--muted-foreground))",
          maxWidth: "42rem",
          margin: "0 auto"
        }}>
          Discover the most popular products that everyone is talking about. 
          Updated in real-time based on views, purchases, and social engagement.
        </p>
      </div>

      {/* Trending Stats */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "1rem",
        "@media (min-width: 768px)": {
          gridTemplateColumns: "repeat(4, 1fr)"
        }
      }}>
        <div style={{
          borderRadius: "0.5rem",
          border: "1px solid hsl(var(--orange)/0.2)",
          background: "linear-gradient(to bottom right, hsl(var(--orange)/0.05), hsl(var(--orange)/0.1))",
          padding: "1rem",
          textAlign: "center"
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "hsl(var(--orange))", margin: "0 auto 0.5rem" }}>
            <path d="m22 7-8.5-4.5L5 7m15 10-8.5 4.5L5 17" />
            <path d="m5 7 8.5 4.5L22 7l-8.5 4.5L5 7Zm0 10 8.5 4.5L22 17l-8.5 4.5L5 17Z" />
          </svg>
          <div style={{ fontSize: "1.5rem", fontWeight: "700", color: "hsl(var(--orange))" }}>+35%</div>
          <div style={{ fontSize: "0.875rem", color: "hsl(var(--muted-foreground))" }}>Sales Growth</div>
        </div>
        <div style={{
          borderRadius: "0.5rem",
          border: "1px solid hsl(var(--primary)/0.2)",
          background: "linear-gradient(to bottom right, hsl(var(--primary)/0.05), hsl(var(--primary)/0.1))",
          padding: "1rem",
          textAlign: "center"
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "hsl(var(--primary))", margin: "0 auto 0.5rem" }}>
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          <div style={{ fontSize: "1.5rem", fontWeight: "700", color: "hsl(var(--primary))" }}>124K</div>
          <div style={{ fontSize: "0.875rem", color: "hsl(var(--muted-foreground))" }}>Views Today</div>
        </div>
        <div style={{
          borderRadius: "0.5rem",
          border: "1px solid hsl(var(--success)/0.2)",
          background: "linear-gradient(to bottom right, hsl(var(--success)/0.05), hsl(var(--success)/0.1))",
          padding: "1rem",
          textAlign: "center"
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "hsl(var(--success))", margin: "0 auto 0.5rem" }}>
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
          <div style={{ fontSize: "1.5rem", fontWeight: "700", color: "hsl(var(--success))" }}>8.4K</div>
          <div style={{ fontSize: "0.875rem", color: "hsl(var(--muted-foreground))" }}>Likes Today</div>
        </div>
        <div style={{
          borderRadius: "0.5rem",
          border: "1px solid hsl(var(--purple-500)/0.2)",
          background: "linear-gradient(to bottom right, hsl(var(--purple-500)/0.05), hsl(var(--purple-500)/0.1))",
          padding: "1rem",
          textAlign: "center"
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "hsl(var(--purple-500))", margin: "0 auto 0.5rem" }}>
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          <div style={{ fontSize: "1.5rem", fontWeight: "700", color: "hsl(var(--purple-500))" }}>4.8</div>
          <div style={{ fontSize: "0.875rem", color: "hsl(var(--muted-foreground))" }}>Avg Rating</div>
        </div>
      </div>

      {/* Trending Categories */}
      <div style={{
        borderRadius: "0.5rem",
        border: "1px solid hsl(var(--border))",
        overflow: "hidden"
      }}>
        <div style={{ padding: "1.5rem" }}>
          <h2 style={{
            fontSize: "1.25rem",
            fontWeight: "600",
            marginBottom: "1rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem"
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "hsl(var(--orange))" }}>
              <path d="m22 7-8.5-4.5L5 7m15 10-8.5 4.5L5 17" />
              <path d="m5 7 8.5 4.5L22 7l-8.5 4.5L5 7Zm0 10 8.5 4.5L22 17l-8.5 4.5L5 17Z" />
            </svg>
            Trending Categories
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1rem",
            "@media (min-width: 768px)": {
              gridTemplateColumns: "repeat(4, 1fr)"
            }
          }}>
            {trendingCategories.map((category) => (
              <div key={category.name} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "1.125rem", fontWeight: "600" }}>{category.name}</div>
                <div style={{ fontSize: "0.875rem", fontWeight: "500", color: category.color }}>
                  {category.growth}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hot Products */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}>
          <h2 style={{
            fontSize: "1.5rem",
            fontWeight: "700",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem"
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "hsl(var(--orange))" }}>
              <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
            </svg>
            Hot Products
          </h2>
          <button style={{
            display: "inline-flex",
            alignItems: "center",
            borderRadius: "0.375rem",
            padding: "0.5rem 1rem",
            fontSize: "0.875rem",
            fontWeight: "500",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            color: "hsl(var(--foreground))"
          }}>
            View All
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: "0.5rem" }}>
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "1.5rem",
          "@media (min-width: 768px)": {
            gridTemplateColumns: "repeat(2, 1fr)"
          },
          "@media (min-width: 1024px)": {
            gridTemplateColumns: "repeat(4, 1fr)"
          }
        }}>
          {trendingProducts.map((product, index) => (
            <div key={product.id} style={{ position: "relative" }}>
              {/* Trending Badge */}
              <div style={{
                position: "absolute",
                top: "-0.5rem",
                left: "-0.5rem",
                zIndex: 10
              }}>
                <span style={{
                  display: "inline-flex",
                  alignItems: "center",
                  borderRadius: "9999px",
                  padding: "0.25rem 0.75rem",
                  fontSize: "0.75rem",
                  fontWeight: "500",
                  background: "linear-gradient(to right, hsl(var(--orange)), hsl(var(--orange-light)))",
                  color: "white",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
                }}>
                  #{index + 1} Trending
                </span>
              </div>
              
              {/* Trend Score */}
              <div style={{
                position: "absolute",
                top: "0.5rem",
                right: "0.5rem",
                zIndex: 10
              }}>
                <span style={{
                  display: "inline-flex",
                  alignItems: "center",
                  borderRadius: "9999px",
                  padding: "0.25rem 0.5rem",
                  fontSize: "0.75rem",
                  fontWeight: "500",
                  background: "rgba(0, 0, 0, 0.8)",
                  color: "white"
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: "0.25rem" }}>
                    <path d="m22 7-8.5-4.5L5 7m15 10-8.5 4.5L5 17" />
                    <path d="m5 7 8.5 4.5L22 7l-8.5 4.5L5 7Zm0 10 8.5 4.5L22 17l-8.5 4.5L5 17Z" />
                  </svg>
                  {product.trendScore}
                </span>
              </div>

              <ProductCard product={product} />

              {/* Trending Stats */}
              <div style={{
                borderRadius: "0.5rem",
                marginTop: "0.5rem",
                padding: "0.75rem",
                background: "linear-gradient(to right, hsl(var(--background)), hsl(var(--muted)/0.3))",
                border: "1px solid hsl(var(--border))"
              }}>
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "0.75rem",
                  color: "hsl(var(--muted-foreground))"
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                    {product.views24h.toLocaleString()}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                    {product.likes24h.toLocaleString()}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    24h
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trending Searches */}
      <div style={{
        borderRadius: "0.5rem",
        border: "1px solid hsl(var(--border))",
        overflow: "hidden"
      }}>
        <div style={{ padding: "1.5rem" }}>
          <h2 style={{
            fontSize: "1.25rem",
            fontWeight: "600",
            marginBottom: "1rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem"
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "hsl(var(--primary))" }}>
              <path d="m22 7-8.5-4.5L5 7m15 10-8.5 4.5L5 17" />
              <path d="m5 7 8.5 4.5L22 7l-8.5 4.5L5 7Zm0 10 8.5 4.5L22 17l-8.5 4.5L5 17Z" />
            </svg>
            Trending Searches
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {trendingSearches.map((search, index) => (
              <span
                key={search}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  borderRadius: "9999px",
                  padding: "0.25rem 0.75rem",
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  border: "1px solid hsl(var(--border))",
                  cursor: "pointer",
                  transition: "background-color 0.2s, color 0.2s",
                  ":hover": {
                    background: "hsl(var(--primary))",
                    color: "hsl(var(--primary-foreground))"
                  }
                }}
              >
                #{index + 1} {search}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div style={{
        borderRadius: "0.5rem",
        background: "linear-gradient(to right, hsl(var(--primary)), hsl(var(--orange)))",
        color: "white",
        border: "none",
        overflow: "hidden"
      }}>
        <div style={{ padding: "2rem", textAlign: "center" }}>
          <h3 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "0.5rem" }}>Don't Miss Out!</h3>
          <p style={{ color: "rgba(255, 255, 255, 0.9)", marginBottom: "1.5rem" }}>
            Join thousands of shoppers discovering amazing deals on trending products
          </p>
          <button style={{
            padding: "0.75rem 1.5rem",
            borderRadius: "0.375rem",
            fontSize: "1rem",
            fontWeight: "500",
            background: "white",
            color: "hsl(var(--primary))",
            border: "none",
            cursor: "pointer",
            transition: "background-color 0.2s",
            ":hover": {
              background: "rgba(255, 255, 255, 0.9)"
            },
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem"
          }}>
            Start Shopping Trending Items
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}