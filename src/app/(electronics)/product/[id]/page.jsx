import React from "react"
import { products } from "@/app/(electronics)/data/product"
import ProductDetail from "@/app/(electronics)/components/ProductDetails"

export default function ProductPage({ params }) {
  // ✅ unwrap params (new Next.js requirement)
  const { id } = React.use(params)

  const product = products.find((p) => String(p.id) === String(id))

  if (!product) {
    return <div className="p-10 text-center text-gray-600">Product not found</div>
  }

  return <ProductDetail product={product} />
}
