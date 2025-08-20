"use client"
import { useState } from "react"
import {
  User,
  CreditCard,
  Bell,
  Shield,
  Star,
  Edit,
  Plus,
  Trash2,
  MapPin,
  CheckCircle,
  Download,
  Key,
  Lock
} from "lucide-react"

// Mock user data
const userData = {
  name: "John Doe",
  email: "john.doe@email.com",
  phone: "+1 (555) 123-4567",
  avatar: "",
  memberSince: "2023-01-15",
  totalOrders: 12,
  totalSpent: 2847.50,
  loyaltyPoints: 2847
}

const addresses = [
  {
    id: "1",
    type: "Home",
    name: "John Doe",
    address: "123 Main Street, Apt 4B",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    phone: "+1 (555) 123-4567",
    isDefault: true
  },
  {
    id: "2",
    type: "Work",
    name: "John Doe",
    address: "456 Business Ave, Suite 200",
    city: "New York",
    state: "NY",
    zipCode: "10002",
    phone: "+1 (555) 123-4567",
    isDefault: false
  }
]

const paymentMethods = [
  {
    id: "1",
    type: "Visa",
    last4: "4567",
    expiry: "12/26",
    isDefault: true
  },
  {
    id: "2",
    type: "Mastercard",
    last4: "8901",
    expiry: "09/25",
    isDefault: false
  }
]

export default function Profile() {
  const [activeTab, setActiveTab] = useState("personal")
  const [notifications, setNotifications] = useState({
    orderUpdates: true,
    promotions: false,
    newsletter: true,
    priceAlerts: true
  })

  const [personalInfo, setPersonalInfo] = useState({
    name: userData.name,
    email: userData.email,
    phone: userData.phone,
    bio: "Passionate about technology and great products. Love discovering new brands and sharing reviews."
  })

  const updatePersonalInfo = () => {
    console.log("Updating personal info:", personalInfo)
  }

  const ProfileStats = () => (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div className="bg-white rounded-xl p-4 text-center border border-blue-100 shadow-sm">
        <div className="text-2xl font-bold text-blue-900">{userData.totalOrders}</div>
        <div className="text-sm text-blue-600">Total Orders</div>
      </div>
      <div className="bg-white rounded-xl p-4 text-center border border-blue-100 shadow-sm">
        <div className="text-2xl font-bold text-blue-900">${userData.totalSpent.toFixed(2)}</div>
        <div className="text-sm text-blue-600">Total Spent</div>
      </div>
      <div className="bg-white rounded-xl p-4 text-center border border-blue-100 shadow-sm">
        <div className="text-2xl font-bold text-orange-600">{userData.loyaltyPoints}</div>
        <div className="text-sm text-blue-600">Loyalty Points</div>
      </div>
      <div className="bg-white rounded-xl p-4 text-center border border-blue-100 shadow-sm">
        <div className="text-2xl font-bold text-green-600">4.8</div>
        <div className="text-sm text-blue-600">Avg. Rating</div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 mb-8">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center text-white font-bold text-2xl">
            {userData.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-blue-900">{userData.name}</h1>
            <p className="text-blue-600">Member since {new Date(userData.memberSince).toLocaleDateString()}</p>
            <span className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-800 text-white px-3 py-1 rounded-full text-sm font-medium mt-2">
              <Star size={14} className="mr-1" />
              VIP Customer
            </span>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-blue-200 text-blue-700 rounded-xl hover:bg-blue-50 transition-colors">
            <Edit size={16} />
            Edit Profile Picture
          </button>
        </div>

        <ProfileStats />

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden">
          <div className="grid grid-cols-4 border-b border-blue-100">
            {[
              { id: "personal", label: "Personal Info", icon: User },
              { id: "addresses", label: "Addresses", icon: MapPin },
              { id: "payments", label: "Payments", icon: CreditCard },
              { id: "settings", label: "Settings", icon: Settings }
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center justify-center gap-2 py-4 font-medium transition-colors ${activeTab === id
                  ? "text-blue-700 border-b-2 border-blue-700"
                  : "text-blue-600 hover:text-blue-700"
                  }`}
              >
                <Icon size={18} />
                {label}
              </button>
            ))}
          </div>

          <div className="p-6">
            {/* Personal Info */}
            {activeTab === "personal" && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-blue-900 flex items-center gap-2">
                  <User size={24} /> Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-blue-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      value={personalInfo.name}
                      onChange={(e) => setPersonalInfo({ ...personalInfo, name: e.target.value })}
                      className="w-full px-4 py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-blue-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      value={personalInfo.email}
                      onChange={(e) => setPersonalInfo({ ...personalInfo, email: e.target.value })}
                      className="w-full px-4 py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-blue-700 mb-2">Phone Number</label>
                    <input
                      type="text"
                      value={personalInfo.phone}
                      onChange={(e) => setPersonalInfo({ ...personalInfo, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-blue-700 mb-2">CNIC</label>
                    <input
                      type="text"
                      value={personalInfo.cnic}
                      onChange={(e) => setPersonalInfo({ ...personalInfo, cnic: e.target.value })}
                      placeholder="xxxxx-xxxxxxx-x"
                      className="w-full px-4 py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-blue-700 mb-2">Bio</label>
                  <textarea
                    rows="3"
                    value={personalInfo.bio}
                    onChange={(e) => setPersonalInfo({ ...personalInfo, bio: e.target.value })}
                    className="w-full px-4 py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <button
                  onClick={updatePersonalInfo}
                  className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-md hover:shadow-lg"
                >
                  Save Changes
                </button>
              </div>
            )}


            {/* Addresses */}
            {activeTab === "addresses" && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <h3 className="text-xl font-semibold text-blue-900">Saved Addresses</h3>
                  <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl hover:from-blue-700 hover:to-blue-900 transition-all">
                    <Plus size={16} />
                    Add New Address
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {addresses.map(address => (
                    <div key={address.id} className="bg-blue-50 rounded-xl p-5 border border-blue-200">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold text-blue-900">{address.type}</h4>
                          {address.isDefault && (
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                              Default
                            </span>
                          )}
                        </div>
                        <div className="flex gap-2">
                          <button className="p-1.5 rounded-lg hover:bg-blue-100 text-blue-600">
                            <Edit size={16} />
                          </button>
                          <button className="p-1.5 rounded-lg hover:bg-blue-100 text-red-600">
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                      <div className="space-y-2 text-blue-700">
                        <p className="font-medium">{address.name}</p>
                        <p>{address.address}</p>
                        <p>{address.city}, {address.state} {address.zipCode}</p>
                        <p>{address.phone}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Payments */}
            {activeTab === "payments" && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <h3 className="text-xl font-semibold text-blue-900">Payment Method</h3>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-blue-50 rounded-xl p-5 border border-blue-200">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-4">
                        <CreditCard size={32} className="text-blue-600" />
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-blue-900">
                              Cash on Delivery
                            </span>
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                              Default
                            </span>
                          </div>
                          <p className="text-blue-600">Pay when you receive your order</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="p-1.5 rounded-lg hover:bg-blue-100 text-blue-600">
                          <Edit size={16} />
                        </button>
                        <button className="p-1.5 rounded-lg hover:bg-blue-100 text-red-600">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}


            {/* Settings */}
            {activeTab === "settings" && (
              <div className="space-y-6">
                {/* Notifications */}
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <h3 className="text-xl font-semibold text-blue-900 flex items-center gap-2 mb-4">
                    <Bell size={24} /> Notification Preferences
                  </h3>
                  <div className="space-y-4">
                    {Object.entries(notifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center">
                        <label className="font-medium text-blue-700 capitalize">
                          {key.replace(/([A-Z])/g, " $1")}
                        </label>
                        <div className="relative inline-block w-12 h-6">
                          <input
                            type="checkbox"
                            checked={value}
                            onChange={(e) => setNotifications(prev => ({ ...prev, [key]: e.target.checked }))}
                            className="sr-only"
                          />
                          <div className={`w-12 h-6 rounded-full transition-colors ${value ? 'bg-blue-600' : 'bg-gray-300'
                            }`} />
                          <div className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform ${value ? 'transform translate-x-6' : ''
                            }`} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Security */}
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <h3 className="text-xl font-semibold text-blue-900 flex items-center gap-2 mb-4">
                    <Shield size={24} /> Security
                  </h3>
                  <div className="space-y-3">
                    <button className="w-full flex items-center gap-3 px-4 py-3 bg-white border border-blue-200 text-blue-700 rounded-xl hover:bg-blue-50 transition-colors">
                      <Key size={18} />
                      Change Password
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-3 bg-white border border-blue-200 text-blue-700 rounded-xl hover:bg-blue-50 transition-colors">
                      <Lock size={18} />
                      Enable Two-Factor Authentication
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-3 bg-white border border-blue-200 text-blue-700 rounded-xl hover:bg-blue-50 transition-colors">
                      <Download size={18} />
                      Download My Data
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-3 bg-red-100 border border-red-200 text-red-700 rounded-xl hover:bg-red-200 transition-colors">
                      <Trash2 size={18} />
                      Delete Account
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// Settings icon component
const Settings = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
)