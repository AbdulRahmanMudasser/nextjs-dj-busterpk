// src/components/Layout/Footer.jsx
'use client'

import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaCcPaypal, FaCcStripe, FaGooglePay, FaApplePay } from "react-icons/fa";
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white border-t py-8 text-sm text-gray-600">
      <div className="container mx-auto px-4 grid md:grid-cols-5 gap-6">
        {/* Get to Know Us */}
        <div>
          <h3 className="font-semibold mb-2">Get to Know Us</h3>
          <ul className="space-y-1">
            <li><Link href="#">About Us</Link></li>
            <li><Link href="#">FAQs</Link></li>
            <li><Link href="#">Our Partners</Link></li>
            <li><Link href="#">Work With Us</Link></li>
            <li><Link href="#">Contact Us</Link></li>
          </ul>
        </div>

        {/* Shop */}
        <div>
          <h3 className="font-semibold mb-2">Shop</h3>
          <ul className="space-y-1">
            <li><Link href="#">Recently Viewed</Link></li>
            <li><Link href="#">Featured Products</Link></li>
            <li><Link href="#">Top 100 Appliances</Link></li>
            <li><Link href="#">Laptops</Link></li>
            <li><Link href="#">Toys & Games</Link></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-semibold mb-2">Useful Links</h3>
          <ul className="space-y-1">
            <li><Link href="#">Track Order</Link></li>
            <li><Link href="#">Latest News</Link></li>
            <li><Link href="#">Purchase Theme</Link></li>
          </ul>
        </div>

        {/* Subscribe Newsletter */}
        <div className="md:col-span-2">
          <h3 className="text-pink-600 font-semibold mb-2">Subscribe Newsletter</h3>
          <p className="mb-3">Join our mailing list to receive any latest updates and promotions.</p>
          <form className="flex gap-2">
            <input type="email" placeholder="Your email address" className="w-full border rounded px-3 py-2" />
            <button type="submit" className="bg-pink-500 text-white px-5 py-2 rounded">Sign Up</button>
          </form>

          {/* Payment Icons */}
          <div className="mt-5">
            <span className="font-semibold text-gray-700 mr-2">🔒 Safety Payments</span>
            <div className="flex items-center gap-2 mt-2 flex-wrap">
              <FaCcMastercard size={32} />
              <FaCcVisa size={32} />
              <FaCcAmex size={32} />
              <FaCcStripe size={32} />
              <FaGooglePay size={32} />
              <FaApplePay size={32} />
              <FaCcPaypal size={32} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t mt-8 pt-4 text-center text-xs text-gray-500">
        <div className="flex justify-center space-x-4 mb-2">
          <Link href="#"><FaFacebookF /></Link>
          <Link href="#"><FaTwitter /></Link>
          <Link href="#"><FaInstagram /></Link>
          <Link href="#"><FaYoutube /></Link>
        </div>
        <p> <strong>Bustard</strong> App <strong>Coming soon</strong>.</p>
      </div>
    </footer>
  );
}