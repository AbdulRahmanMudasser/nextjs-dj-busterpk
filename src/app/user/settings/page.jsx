"use client";

import { useState } from "react";
import {
  Settings as SettingsIcon,
  Bell,
  Shield,
  Globe,
  Moon,
  Sun,
  Eye,
  Download,
  Trash2,
  HelpCircle,
  ExternalLink,
  Save,
  Mail,
  Phone,
  Clock,
  FileText,
  User,
  PieChart,
  Megaphone,
  AlertTriangle,
  Star,
  Heart,
  Truck,
} from "lucide-react";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("general");
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("en");
  const [currency, setCurrency] = useState("usd");

  const [notifications, setNotifications] = useState({
    orderUpdates: true,
    promotions: false,
    newsletter: true,
    priceAlerts: true,
    securityAlerts: true,
    reviewReminders: false,
  });

  const [privacy, setPrivacy] = useState({
    showProfile: true,
    shareWishlist: false,
    trackingConsent: true,
    marketingEmails: false,
    dataCollection: true,
  });

  const tabs = [
    { key: "general", label: "General", icon: SettingsIcon },
    { key: "notifications", label: "Notifications", icon: Bell },
    { key: "privacy", label: "Privacy", icon: Shield },
    { key: "help", label: "Help & Support", icon: HelpCircle },
  ];

  const Switch = ({ checked, onCheckedChange }) => (
    <div 
      onClick={() => onCheckedChange(!checked)}
      className={`w-12 h-6 rounded-full transition-all duration-300 cursor-pointer ${
        checked ? 'bg-blue-600' : 'bg-gray-300'
      }`}
    >
      <div className={`w-5 h-5 bg-white rounded-full transition-all duration-300 transform ${
        checked ? 'translate-x-6' : 'translate-x-1'
      } mt-0.5`} />
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
            <SettingsIcon size={24} className="text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-blue-900">Settings</h1>
            <p className="text-blue-600">Manage your account preferences and privacy settings</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden">
          {/* Tabs */}
          <div className="grid grid-cols-4 border-b border-blue-100">
            {tabs.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center justify-center gap-2 py-4 font-medium transition-all ${
                  activeTab === key
                    ? "text-blue-700 border-b-2 border-blue-700 bg-blue-50"
                    : "text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                }`}
              >
                <Icon size={18} />
                {label}
              </button>
            ))}
          </div>

          <div className="p-6">
            {/* General */}
            {activeTab === "general" && (
              <div className="space-y-6">
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <h2 className="text-xl font-semibold text-blue-900 flex items-center gap-2 mb-4">
                    <Eye size={24} /> Appearance
                  </h2>
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="block text-sm font-medium text-blue-700 mb-1">Dark Mode</label>
                      <p className="text-sm text-blue-600">Switch between light and dark themes</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Sun size={18} className="text-blue-600" />
                      <Switch checked={darkMode} onCheckedChange={setDarkMode} />
                      <Moon size={18} className="text-blue-600" />
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <h2 className="text-xl font-semibold text-blue-900 flex items-center gap-2 mb-4">
                    <Globe size={24} /> Language & Region
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-blue-700 mb-2">Language</label>
                      <select
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        className="w-full px-4 py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                      >
                        <option value="en">English</option>
                        <option value="es">Español</option>
                        <option value="fr">Français</option>
                        <option value="de">Deutsch</option>
                        <option value="it">Italiano</option>
                        <option value="pt">Português</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-blue-700 mb-2">Currency</label>
                      <select
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                        className="w-full px-4 py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                      >
                        <option value="usd">USD ($)</option>
                        <option value="eur">EUR (€)</option>
                        <option value="gbp">GBP (£)</option>
                        <option value="jpy">JPY (¥)</option>
                        <option value="cad">CAD (C$)</option>
                        <option value="aud">AUD (A$)</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Notifications */}
            {activeTab === "notifications" && (
              <div className="space-y-6">
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <h2 className="text-xl font-semibold text-blue-900 flex items-center gap-2 mb-6">
                    <Bell size={24} /> Notification Preferences
                  </h2>
                  <div className="space-y-4">
                    {[
                      {
                        key: "orderUpdates",
                        label: "Order Updates",
                        desc: "Get notified about order status changes, shipping updates, and delivery confirmations",
                        icon: FileText
                      },
                      {
                        key: "promotions",
                        label: "Promotions & Deals",
                        desc: "Receive notifications about sales, discounts, and special offers",
                        icon: Megaphone
                      },
                      {
                        key: "newsletter",
                        label: "Newsletter",
                        desc: "Weekly newsletter with new products, trends, and featured items",
                        icon: Mail
                      },
                      {
                        key: "priceAlerts",
                        label: "Price Alerts",
                        desc: "Get notified when items in your wishlist go on sale",
                        icon: AlertTriangle
                      },
                      {
                        key: "securityAlerts",
                        label: "Security Alerts",
                        desc: "Important security notifications about your account",
                        icon: Shield
                      },
                      {
                        key: "reviewReminders",
                        label: "Review Reminders",
                        desc: "Reminders to review products you've purchased",
                        icon: Star
                      },
                    ].map(({ key, label, desc, icon: Icon }) => (
                      <div key={key} className="flex items-center justify-between p-4 bg-white rounded-xl border border-blue-100">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <Icon size={18} className="text-blue-600" />
                          </div>
                          <div>
                            <label className="block font-medium text-blue-900">{label}</label>
                            <p className="text-sm text-blue-600">{desc}</p>
                          </div>
                        </div>
                        <Switch
                          checked={notifications[key]}
                          onCheckedChange={(checked) =>
                            setNotifications((prev) => ({ ...prev, [key]: checked }))
                          }
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white py-3.5 rounded-xl font-semibold transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                  <Save size={18} />
                  Save Notification Preferences
                </button>
              </div>
            )}

            {/* Privacy */}
            {activeTab === "privacy" && (
              <div className="space-y-6">
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <h2 className="text-xl font-semibold text-blue-900 flex items-center gap-2 mb-6">
                    <Shield size={24} /> Privacy Settings
                  </h2>
                  <div className="space-y-4">
                    {[
                      {
                        key: "showProfile",
                        label: "Public Profile",
                        desc: "Allow others to see your profile and reviews",
                        icon: User
                      },
                      {
                        key: "shareWishlist",
                        label: "Share Wishlist",
                        desc: "Allow your wishlist to be visible to friends",
                        icon: Heart
                      },
                      {
                        key: "trackingConsent",
                        label: "Tracking Consent",
                        desc: "Allow tracking for personalized recommendations",
                        icon: PieChart
                      },
                      {
                        key: "marketingEmails",
                        label: "Marketing Emails",
                        desc: "Receive targeted marketing emails",
                        icon: Mail
                      },
                      {
                        key: "dataCollection",
                        label: "Data Collection",
                        desc: "Allow collection of usage data for improvement",
                        icon: Download
                      },
                    ].map(({ key, label, desc, icon: Icon }) => (
                      <div key={key} className="flex items-center justify-between p-4 bg-white rounded-xl border border-blue-100">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <Icon size={18} className="text-blue-600" />
                          </div>
                          <div>
                            <label className="block font-medium text-blue-900">{label}</label>
                            <p className="text-sm text-blue-600">{desc}</p>
                          </div>
                        </div>
                        <Switch
                          checked={privacy[key]}
                          onCheckedChange={(checked) =>
                            setPrivacy((prev) => ({ ...prev, [key]: checked }))
                          }
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <h2 className="text-xl font-semibold text-blue-900 mb-4">Data Management</h2>
                  <div className="space-y-3">
                    <button className="w-full flex items-center gap-3 px-4 py-3 bg-white border border-blue-200 text-blue-700 rounded-xl hover:bg-blue-50 transition-colors">
                      <Download size={18} />
                      Download My Data
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-3 bg-white border border-blue-200 text-blue-700 rounded-xl hover:bg-blue-50 transition-colors">
                      <Eye size={18} />
                      View Privacy Policy
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-3 bg-red-100 border border-red-200 text-red-700 rounded-xl hover:bg-red-200 transition-colors">
                      <Trash2 size={18} />
                      Delete My Account
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Help */}
            {activeTab === "help" && (
              <div className="space-y-6">
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <h2 className="text-xl font-semibold text-blue-900 flex items-center gap-2 mb-4">
                    <HelpCircle size={24} /> Help Center
                  </h2>
                  <div className="space-y-3">
                    {[
                      { label: "Frequently Asked Questions", icon: HelpCircle },
                      { label: "Contact Support", icon: Mail },
                      { label: "Shipping & Returns", icon: Truck },
                      { label: "Product Guides", icon: FileText },
                    ].map(({ label, icon: Icon }) => (
                      <button
                        key={label}
                        className="w-full flex items-center justify-between px-4 py-3 bg-white border border-blue-200 text-blue-700 rounded-xl hover:bg-blue-50 transition-colors"
                      >
                        <span className="flex items-center gap-3">
                          <Icon size={18} />
                          {label}
                        </span>
                        <ExternalLink size={16} />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <h2 className="text-xl font-semibold text-blue-900 mb-4">App Information</h2>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-blue-700">Version</span>
                      <span className="text-blue-900 font-medium">2.1.0</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-blue-700">Last Updated</span>
                      <span className="text-blue-900 font-medium">January 15, 2024</span>
                    </div>
                    <button className="w-full flex items-center justify-between px-4 py-3 bg-white border border-blue-200 text-blue-700 rounded-xl hover:bg-blue-50 transition-colors">
                      <span className="flex items-center gap-3">
                        <FileText size={18} />
                        Terms of Service
                      </span>
                      <ExternalLink size={16} />
                    </button>
                    <button className="w-full flex items-center justify-between px-4 py-3 bg-white border border-blue-200 text-blue-700 rounded-xl hover:bg-blue-50 transition-colors">
                      <span className="flex items-center gap-3">
                        <Shield size={18} />
                        Privacy Policy
                      </span>
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <h2 className="text-xl font-semibold text-blue-900 mb-4">Contact Information</h2>
                  <div className="space-y-3 text-blue-700">
                    <div className="flex items-center gap-3">
                      <Mail size={18} />
                      <span>support@browsepro.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone size={18} />
                      <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock size={18} />
                      <span>Mon-Fri 9AM-6PM EST</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}