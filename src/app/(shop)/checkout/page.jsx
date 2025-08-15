'use client';

import { useState } from 'react';
import { ArrowLeft, CreditCard, Truck, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

export default function CheckoutPage() {
  const [items, setItems] = useState([]); // From your state management
  const [user, setUser] = useState(null); // From your auth state
  
  const [selectedAddress, setSelectedAddress] = useState(
    user?.addresses.find(addr => addr.isDefault) || user?.addresses[0] || null
  );
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [phoneNumber, setPhoneNumber] = useState(user?.phone || '');
  const [newAddress, setNewAddress] = useState({
    street: '',
    area: '',
    city: 'Karachi',
    province: 'Sindh',
    postalCode: ''
  });
  const [showNewAddressForm, setShowNewAddressForm] = useState(!selectedAddress);

  const subtotal = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const deliveryFee = subtotal > 2000 ? 0 : 150;
  const total = subtotal + deliveryFee;

  const pakistaniCities = [
    'Karachi', 'Lahore', 'Islamabad', 'Rawalpindi', 'Faisalabad', 'Multan', 
    'Peshawar', 'Quetta', 'Sialkot', 'Gujranwala', 'Hyderabad', 'Sukkur'
  ];

  const pakistaniProvinces = ['Punjab', 'Sindh', 'Khyber Pakhtunkhwa', 'Balochistan'];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const addressToUse = selectedAddress || {
      id: Date.now().toString(),
      type: 'other',
      ...newAddress,
      isDefault: false
    };

    // Process checkout here
    console.log({
      address: addressToUse,
      paymentMethod,
      phone: phoneNumber
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center gap-4 mb-8">
        <Link
          href="/shop/cart"
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">Checkout</h1>
      </div>

      <form onSubmit={handleSubmit} className="grid lg:grid-cols-3 gap-8">
        {/* Shipping & Payment Info */}
        <div className="lg:col-span-2 space-y-8">
          {/* Contact Information */}
          <div className="bg-white rounded-xl p-6 border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Contact Information
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="+92 300 1234567"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">
                  We'll contact you for delivery confirmation
                </p>
              </div>
            </div>
          </div>

          {/* Shipping Address */}
          <div className="bg-white rounded-xl p-6 border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Shipping Address
            </h2>

            {/* Existing Addresses */}
            {user?.addresses && user.addresses.length > 0 && (
              <div className="mb-6">
                <h3 className="font-medium text-gray-700 mb-3">Saved Addresses</h3>
                <div className="space-y-3">
                  {user.addresses.map((address) => (
                    <label
                      key={address.id}
                      className={`block p-4 border rounded-lg cursor-pointer transition-colors ${
                        selectedAddress?.id === address.id
                          ? 'border-green-500 bg-green-50'
                          : 'border-gray-200 hover:border-green-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="address"
                        value={address.id}
                        checked={selectedAddress?.id === address.id}
                        onChange={() => {
                          setSelectedAddress(address);
                          setShowNewAddressForm(false);
                        }}
                        className="sr-only"
                      />
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-medium capitalize">{address.type}</span>
                            {address.isDefault && (
                              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                                Default
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 mt-1">
                            {address.street}, {address.area}<br />
                            {address.city}, {address.province} {address.postalCode}
                          </p>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
                
                <button
                  type="button"
                  onClick={() => setShowNewAddressForm(true)}
                  className="mt-3 text-green-600 hover:text-green-700 text-sm font-medium"
                >
                  + Add new address
                </button>
              </div>
            )}

            {/* New Address Form */}
            {showNewAddressForm && (
              <div className="space-y-4">
                <h3 className="font-medium text-gray-700">
                  {user?.addresses?.length ? 'New Address' : 'Delivery Address'}
                </h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Street Address *
                  </label>
                  <input
                    type="text"
                    value={newAddress.street}
                    onChange={(e) => setNewAddress({...newAddress, street: e.target.value})}
                    placeholder="House/Flat No, Street Name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Area/Locality *
                  </label>
                  <input
                    type="text"
                    value={newAddress.area}
                    onChange={(e) => setNewAddress({...newAddress, area: e.target.value})}
                    placeholder="Area, Locality"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City *
                    </label>
                    <select
                      value={newAddress.city}
                      onChange={(e) => setNewAddress({...newAddress, city: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    >
                      {pakistaniCities.map(city => (
                        <option key={city} value={city}>{city}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Province *
                    </label>
                    <select
                      value={newAddress.province}
                      onChange={(e) => setNewAddress({...newAddress, province: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    >
                      {pakistaniProvinces.map(province => (
                        <option key={province} value={province}>{province}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    value={newAddress.postalCode}
                    onChange={(e) => setNewAddress({...newAddress, postalCode: e.target.value})}
                    placeholder="12345"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Payment Method */}
          <div className="bg-white rounded-xl p-6 border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <CreditCard className="h-5 w-5" />
              Payment Method
            </h2>

            <div className="space-y-3">
              <label className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:border-green-300 transition-colors">
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={paymentMethod === 'cod'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
                />
                <div className="ml-4">
                  <div className="font-medium text-gray-900">Cash on Delivery</div>
                  <div className="text-sm text-gray-600">Pay when your order arrives</div>
                  <div className="text-xs text-green-600 mt-1">✓ Most Popular</div>
                </div>
              </label>

              <label className="flex items-center p-4 border border-gray-200 rounded-lg opacity-50 cursor-not-allowed">
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  disabled
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
                />
                <div className="ml-4">
                  <div className="font-medium text-gray-900">Card Payment</div>
                  <div className="text-sm text-gray-600">Coming soon</div>
                </div>
              </label>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl p-6 border border-gray-100 sticky top-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Order Summary</h2>
            
            {/* Items */}
            <div className="space-y-3 mb-6">
              {items.map((item) => (
                <div key={item.product.id} className="flex items-center gap-3">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-12 h-12 object-cover rounded-lg"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {item.product.name}
                    </p>
                    <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                  </div>
                  <span className="text-sm font-medium text-gray-900">
                    ₨{(item.product.price * item.quantity).toLocaleString()}
                  </span>
                </div>
              ))}
            </div>

            {/* Totals */}
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Subtotal</span>
                <span>₨{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Delivery</span>
                <span>
                  {deliveryFee === 0 ? (
                    <span className="text-green-600 font-medium">FREE</span>
                  ) : (
                    `₨${deliveryFee}`
                  )}
                </span>
              </div>
              <hr />
              <div className="flex justify-between text-lg font-bold text-gray-900">
                <span>Total</span>
                <span>₨{total.toLocaleString()}</span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-medium transition-colors"
            >
              Place Order
            </button>

            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Truck className="h-4 w-4" />
                <span>2-5 days delivery</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="text-green-600">✓</span>
                <span>Secure checkout</span>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
