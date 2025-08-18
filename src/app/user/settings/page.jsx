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
    { key: "general", label: "General" },
    { key: "notifications", label: "Notifications" },
    { key: "privacy", label: "Privacy" },
    { key: "help", label: "Help & Support" },
  ];

  const TabButton = ({ value, children }) => (
    <button
      onClick={() => setActiveTab(value)}
      style={{
        padding: "10px",
        borderBottom: activeTab === value ? "2px solid blue" : "2px solid transparent",
        fontWeight: activeTab === value ? "bold" : "normal",
        cursor: "pointer",
        textAlign: "center",
      }}
    >
      {children}
    </button>
  );

  const Card = ({ children }) => (
    <div
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: "10px",
        padding: "16px",
        background: "white",
        boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
      }}
    >
      {children}
    </div>
  );

  const CardHeader = ({ children }) => (
    <div style={{ marginBottom: "12px" }}>{children}</div>
  );

  const CardTitle = ({ children }) => (
    <h2 style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: "bold" }}>
      {children}
    </h2>
  );

  const Switch = ({ checked, onCheckedChange }) => (
    <input
      type="checkbox"
      checked={checked}
      onChange={(e) => onCheckedChange(e.target.checked)}
      style={{ width: "20px", height: "20px", cursor: "pointer" }}
    />
  );

  const Button = ({ children, onClick, variant = "default", full, justify }) => {
    let bg = "blue";
    let color = "white";
    if (variant === "outline") {
      bg = "transparent";
      color = "black";
    }
    if (variant === "destructive") {
      bg = "red";
      color = "white";
    }
    return (
      <button
        onClick={onClick}
        style={{
          width: full ? "100%" : "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: justify || "center",
          padding: "10px 14px",
          border: variant === "outline" ? "1px solid #ccc" : "none",
          borderRadius: "8px",
          background: bg,
          color: color,
          cursor: "pointer",
          fontWeight: "500",
          gap: "8px",
        }}
      >
        {children}
      </button>
    );
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <SettingsIcon size={32} color="blue" />
        <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>Settings</h1>
      </div>

      {/* Tabs */}
      <div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", borderBottom: "1px solid #e5e7eb" }}>
          {tabs.map((t) => (
            <TabButton key={t.key} value={t.key}>
              {t.label}
            </TabButton>
          ))}
        </div>

        {/* General */}
        {activeTab === "general" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "20px" }}>
            <Card>
              <CardHeader>
                <CardTitle>
                  <Eye size={20} /> Appearance
                </CardTitle>
              </CardHeader>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <label>Dark Mode</label>
                  <p style={{ fontSize: "12px", color: "gray" }}>Switch between light and dark themes</p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <Sun size={16} />
                  <Switch checked={darkMode} onCheckedChange={setDarkMode} />
                  <Moon size={16} />
                </div>
              </div>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>
                  <Globe size={20} /> Language & Region
                </CardTitle>
              </CardHeader>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <label>Language</label>
                  <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    style={{ padding: "8px", borderRadius: "6px", border: "1px solid #ccc" }}
                  >
                    <option value="en">English</option>
                    <option value="es">Español</option>
                    <option value="fr">Français</option>
                    <option value="de">Deutsch</option>
                    <option value="it">Italiano</option>
                    <option value="pt">Português</option>
                  </select>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <label>Currency</label>
                  <select
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    style={{ padding: "8px", borderRadius: "6px", border: "1px solid #ccc" }}
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
            </Card>
          </div>
        )}

        {/* Notifications */}
        {activeTab === "notifications" && (
          <Card>
            <CardHeader>
              <CardTitle>
                <Bell size={20} /> Notification Preferences
              </CardTitle>
            </CardHeader>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                {
                  key: "orderUpdates",
                  label: "Order Updates",
                  desc: "Get notified about order status changes, shipping updates, and delivery confirmations",
                },
                {
                  key: "promotions",
                  label: "Promotions & Deals",
                  desc: "Receive notifications about sales, discounts, and special offers",
                },
                {
                  key: "newsletter",
                  label: "Newsletter",
                  desc: "Weekly newsletter with new products, trends, and featured items",
                },
                {
                  key: "priceAlerts",
                  label: "Price Alerts",
                  desc: "Get notified when items in your wishlist go on sale",
                },
                {
                  key: "securityAlerts",
                  label: "Security Alerts",
                  desc: "Important security notifications about your account",
                },
                {
                  key: "reviewReminders",
                  label: "Review Reminders",
                  desc: "Reminders to review products you've purchased",
                },
              ].map((item) => (
                <div key={item.key} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <label>{item.label}</label>
                    <p style={{ fontSize: "12px", color: "gray" }}>{item.desc}</p>
                  </div>
                  <Switch
                    checked={notifications[item.key]}
                    onCheckedChange={(checked) =>
                      setNotifications((prev) => ({ ...prev, [item.key]: checked }))
                    }
                  />
                </div>
              ))}

              <Button full style={{ background: "linear-gradient(to right, blue, orange)" }}>
                Save Notification Preferences
              </Button>
            </div>
          </Card>
        )}

        {/* Privacy */}
        {activeTab === "privacy" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "20px" }}>
            <Card>
              <CardHeader>
                <CardTitle>
                  <Shield size={20} /> Privacy Settings
                </CardTitle>
              </CardHeader>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {[
                  {
                    key: "showProfile",
                    label: "Public Profile",
                    desc: "Allow others to see your profile and reviews",
                  },
                  {
                    key: "shareWishlist",
                    label: "Share Wishlist",
                    desc: "Allow your wishlist to be visible to friends",
                  },
                  {
                    key: "trackingConsent",
                    label: "Tracking Consent",
                    desc: "Allow tracking for personalized recommendations",
                  },
                  {
                    key: "marketingEmails",
                    label: "Marketing Emails",
                    desc: "Receive targeted marketing emails",
                  },
                  {
                    key: "dataCollection",
                    label: "Data Collection",
                    desc: "Allow collection of usage data for improvement",
                  },
                ].map((item) => (
                  <div key={item.key} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <label>{item.label}</label>
                      <p style={{ fontSize: "12px", color: "gray" }}>{item.desc}</p>
                    </div>
                    <Switch
                      checked={privacy[item.key]}
                      onCheckedChange={(checked) =>
                        setPrivacy((prev) => ({ ...prev, [item.key]: checked }))
                      }
                    />
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Data Management</CardTitle>
              </CardHeader>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <Button variant="outline" full justify="flex-start">
                  <Download size={16} /> Download My Data
                </Button>
                <Button variant="outline" full justify="flex-start">
                  <Eye size={16} /> View Privacy Policy
                </Button>
                <Button variant="destructive" full justify="flex-start">
                  <Trash2 size={16} /> Delete My Account
                </Button>
              </div>
            </Card>
          </div>
        )}

        {/* Help */}
        {activeTab === "help" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "20px" }}>
            <Card>
              <CardHeader>
                <CardTitle>
                  <HelpCircle size={20} /> Help Center
                </CardTitle>
              </CardHeader>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <Button variant="outline" full justify="space-between">
                  Frequently Asked Questions <ExternalLink size={16} />
                </Button>
                <Button variant="outline" full justify="space-between">
                  Contact Support <ExternalLink size={16} />
                </Button>
                <Button variant="outline" full justify="space-between">
                  Shipping & Returns <ExternalLink size={16} />
                </Button>
                <Button variant="outline" full justify="space-between">
                  Product Guides <ExternalLink size={16} />
                </Button>
              </div>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>App Information</CardTitle>
              </CardHeader>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span>Version</span>
                  <span style={{ color: "gray" }}>2.1.0</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span>Last Updated</span>
                  <span style={{ color: "gray" }}>January 15, 2024</span>
                </div>
                <Button variant="outline" full justify="space-between">
                  Terms of Service <ExternalLink size={16} />
                </Button>
                <Button variant="outline" full justify="space-between">
                  Privacy Policy <ExternalLink size={16} />
                </Button>
              </div>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <p style={{ fontSize: "12px", color: "gray" }}>
                  <strong>Email:</strong> support@browsepro.com
                </p>
                <p style={{ fontSize: "12px", color: "gray" }}>
                  <strong>Phone:</strong> +1 (555) 123-4567
                </p>
                <p style={{ fontSize: "12px", color: "gray" }}>
                  <strong>Hours:</strong> Mon-Fri 9AM-6PM EST
                </p>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
