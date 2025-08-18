'use client'

import { useState } from "react"
import Image from "next/image"
import { Minus, Plus, X, ShoppingBag, Truck, Shield, ArrowRight, CreditCard } from "lucide-react"
import iphoneImage from "../../../../public/phone.jpeg"
import tshirtImage from "../../../../public/jumpers.webp"
import coffeeMakerImage from "../../../../public/Fridge.jpg"

const initialCartItems = [
  { id: "1", name: "iPhone 15 Pro Max 256GB", price: 1199.99, originalPrice: 1299.99, image: iphoneImage, quantity: 1, inStock: true },
  { id: "2", name: "Premium Cotton T-Shirt", price: 29.99, originalPrice: 39.99, image: tshirtImage, quantity: 2, inStock: true },
  { id: "3", name: "Smart Coffee Maker Pro", price: 149.99, image: coffeeMakerImage, quantity: 1, inStock: true }
]

export default function Cart() {
  const [cartItems, setCartItems] = useState(initialCartItems)
  const [promoCode, setPromoCode] = useState("")
  const fmt = (n)=>n.toLocaleString(undefined,{style:"currency",currency:"USD"})

  const updateQuantity = (id, change) => {
    setCartItems(prev => prev.map(item => item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item))
  }
  const removeItem = (id) => setCartItems(prev => prev.filter(item => item.id !== id))

  const subtotal = cartItems.reduce((sum, i) => sum + (i.price * i.quantity), 0)
  const savings = cartItems.reduce((sum, i) => sum + (((i.originalPrice ?? i.price) - i.price) * i.quantity), 0)
  const shipping = subtotal > 50 ? 0 : 9.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  if (!cartItems.length) {
    return (
      <div className="empty-cart">
        <ShoppingBag className="empty-icon" />
        <h2>Your cart is empty</h2>
        <p>Add some products to get started with your shopping</p>
        <button className="continue-btn">Continue Shopping</button>
        <style jsx>{`
          .empty-cart{max-width:920px;margin:0 auto;padding:4rem 1rem;text-align:center;display:flex;flex-direction:column;gap:1rem}
          .empty-icon{width:4rem;height:4rem;color:var(--muted-foreground)}
          .continue-btn{padding:.75rem 1.25rem;border-radius:.5rem;background:linear-gradient(90deg,var(--primary),var(--orange));color:#fff;border:0;font-weight:600;cursor:pointer;transition:transform .15s ease,box-shadow .15s ease}
          .continue-btn:hover{transform:translateY(-1px);box-shadow:0 8px 24px rgba(0,0,0,.12)}
          :root{--primary:#2563eb;--orange:#f97316;--success:#16a34a;--secondary:#f1f5f9;--secondary-foreground:#0f172a;--border:#e2e8f0;--card:#fff;--muted-foreground:#64748b;--input:#e5e7eb;--background:#fff}
        `}</style>
      </div>
    )
  }

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h1>Shopping Cart</h1>
        <span className="item-count">{cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}</span>
      </div>

      <div className="cart-grid">
        <div className="items-section">
          {cartItems.map(item=>(
            <div key={item.id} className="cart-item">
              <div className="thumb">
                <Image src={item.image} alt={item.name} width={96} height={96} className="item-image" />
              </div>
              <div className="item-details">
                <div className="item-header">
                  <div className="title-row">
                    <h3>{item.name}</h3>
                    {item.inStock && <span className="badge">In stock</span>}
                  </div>
                  <button onClick={()=>removeItem(item.id)} className="remove-btn" aria-label={`Remove ${item.name}`}><X size={16}/></button>
                </div>

                <div className="price-display">
                  <span className="current-price">{fmt(item.price)}</span>
                  {!!item.originalPrice && item.originalPrice>item.price && (
                    <span className="original-price">{fmt(item.originalPrice)}</span>
                  )}
                </div>

                <div className="quantity-control">
                  <div className="quantity-selector">
                    <button onClick={()=>updateQuantity(item.id,-1)} disabled={item.quantity<=1} className="quantity-btn" aria-label="Decrease quantity"><Minus size={12}/></button>
                    <span className="qty">{item.quantity}</span>
                    <button onClick={()=>updateQuantity(item.id,1)} className="quantity-btn" aria-label="Increase quantity"><Plus size={12}/></button>
                  </div>
                  <div className="item-total">{fmt(item.price*item.quantity)}</div>
                </div>
              </div>
            </div>
          ))}

          <div className="promo-section">
            <h3>Promo Code</h3>
            <div className="promo-input">
              <input type="text" placeholder="Enter promo code" value={promoCode} onChange={(e)=>setPromoCode(e.target.value)} />
              <button disabled={!promoCode.trim()}>Apply</button>
            </div>
          </div>
        </div>

        <div className="summary-section">
          <div className="order-summary">
            <div className="summary-header"><h2>Order Summary</h2></div>
            <div className="summary-content">
              <div className="summary-row"><span>Subtotal</span><span>{fmt(subtotal)}</span></div>
              {savings>0 && <div className="summary-row savings"><span>Savings</span><span>-{fmt(savings)}</span></div>}
              <div className="summary-row"><span>Shipping</span><span>{shipping===0?"Free":fmt(shipping)}</span></div>
              <div className="summary-row"><span>Tax</span><span>{fmt(tax)}</span></div>
              <div className="divider" />
              <div className="total-row"><span>Total</span><span>{fmt(total)}</span></div>
              <button className="checkout-btn"><CreditCard size={16}/>Proceed to Checkout<ArrowRight size={16}/></button>
            </div>
          </div>

          <div className="benefits-section">
            <div className="benefit-item"><Truck size={16} className="benefit-icon"/><span>Free shipping on orders over $50</span></div>
            <div className="benefit-item"><Shield size={16} className="benefit-icon"/><span>100% secure checkout</span></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        :root{--primary:#2563eb;--orange:#f97316;--success:#16a34a;--secondary:#f8fafc;--secondary-foreground:#0f172a;--border:#e2e8f0;--card:#ffffff;--muted-foreground:#64748b;--input:#e5e7eb;--background:#ffffff}
        .cart-container{max-width:1200px;margin:0 auto;padding:1rem;display:flex;flex-direction:column;gap:1.5rem}
        .cart-header{display:flex;align-items:center;justify-content:space-between}
        .cart-header h1{font-size:1.75rem;letter-spacing:-.01em}
        .item-count{display:inline-flex;align-items:center;border-radius:9999px;background:var(--secondary);color:var(--secondary-foreground);padding:.25rem .75rem;font-size:.875rem}
        .cart-grid{display:grid;gap:2rem}
        @media(min-width:1024px){.cart-grid{grid-template-columns:2fr 1fr}}
        .items-section{display:flex;flex-direction:column;gap:1rem}
        .cart-item{border-radius:.75rem;border:1px solid var(--border);background:var(--card);padding:1rem;display:flex;gap:1rem;transition:transform .15s ease,box-shadow .15s ease}
        .cart-item:hover{transform:translateY(-2px);box-shadow:0 10px 24px rgba(0,0,0,.06)}
        .thumb{flex:0 0 auto}
        .item-image{border-radius:.5rem;object-fit:cover}
        .item-details{flex:1;display:flex;flex-direction:column;gap:.75rem}
        .item-header{display:flex;justify-content:space-between;align-items:flex-start}
        .title-row{display:flex;align-items:center;gap:.5rem}
        .badge{background:#ecfdf5;color:#065f46;border:1px solid #a7f3d0;padding:.125rem .5rem;border-radius:.375rem;font-size:.75rem;font-weight:600}
        .remove-btn{background:transparent;border:0;padding:.25rem;border-radius:.375rem;cursor:pointer;color:var(--muted-foreground);transition:background .15s ease,color .15s ease}
        .remove-btn:hover{background:#f8fafc;color:#ef4444}
        .price-display{display:flex;align-items:center;gap:.5rem}
        .current-price{font-size:1.125rem;font-weight:800;color:#0f172a}
        .original-price{font-size:.875rem;color:var(--muted-foreground);text-decoration:line-through}
        .quantity-control{display:flex;align-items:center;justify-content:space-between;margin-top:.25rem}
        .quantity-selector{display:flex;align-items:center;gap:.5rem;background:#f8fafc;border:1px solid var(--border);border-radius:.5rem;padding:.25rem .5rem}
        .quantity-btn{width:28px;height:28px;border-radius:.375rem;border:1px solid var(--border);background:var(--background);cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background .15s ease,transform .05s}
        .quantity-btn:hover{background:#f3f4f6}
        .quantity-btn:active{transform:scale(.98)}
        .quantity-btn:disabled{opacity:.5;cursor:not-allowed}
        .qty{min-width:1.5rem;text-align:center;font-weight:600}
        .item-total{font-weight:700}
        .promo-section{border-radius:.75rem;border:1px solid var(--border);background:var(--card);padding:1.25rem}
        .promo-section h3{font-size:1rem}
        .promo-input{display:flex;gap:.5rem;margin-top:.75rem}
        .promo-input input{flex:1;padding:.6rem .75rem;border-radius:.5rem;border:1px solid var(--input);background:var(--background);outline:none}
        .promo-input input:focus{border-color:var(--primary);box-shadow:0 0 0 3px rgba(37,99,235,.1)}
        .promo-input button{padding:.6rem 1rem;border-radius:.5rem;border:1px solid var(--border);background:var(--background);font-weight:600;cursor:pointer;transition:all .15s ease}
        .promo-input button:hover{background:#f8fafc}
        .promo-input button:disabled{opacity:.6;cursor:not-allowed}
        .summary-section{display:flex;flex-direction:column;gap:1rem}
        .order-summary{border-radius:.75rem;border:1px solid var(--border);background:var(--card)}
        @media(min-width:1024px){.order-summary{position:sticky;top:1rem}}
        .summary-header{padding:1.25rem;border-bottom:1px solid var(--border)}
        .summary-content{padding:1.25rem;display:flex;flex-direction:column;gap:1rem}
        .summary-row{display:flex;justify-content:space-between;color:#0f172a}
        .savings{color:var(--success)}
        .divider{height:1px;background:var(--border);width:100%}
        .total-row{display:flex;justify-content:space-between;font-size:1.125rem;font-weight:800}
        .checkout-btn{width:100%;height:3rem;border-radius:.625rem;background:linear-gradient(90deg,var(--primary),var(--orange));color:#fff;font-weight:700;display:inline-flex;align-items:center;justify-content:center;gap:.5rem;border:0;cursor:pointer;transition:transform .15s ease,box-shadow .15s ease}
        .checkout-btn:hover{transform:translateY(-1px);box-shadow:0 12px 28px rgba(0,0,0,.12)}
        .benefits-section{border-radius:.75rem;border:1px solid var(--border);background:var(--card);padding:1rem;display:flex;flex-direction:column;gap:.75rem}
        .benefit-item{display:flex;align-items:center;gap:.75rem;font-size:.9rem;color:#0f172a}
        .benefit-icon{color:var(--success)}
      `}</style>
    </div>
  )
}
