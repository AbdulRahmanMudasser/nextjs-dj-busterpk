"use client";
import { useState } from "react";

// Simple inline SVG icons (replacing lucide-react)
const Icon = ({ path, size = 16, color = "currentColor" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    style={{ flexShrink: 0 }}
  >
    <path d={path} />
  </svg>
);

const icons = {
  home: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V12H9v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2z",
  users: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87",
  store: "M4 4h16v4H4zM2 10h20v10H2z",
  package: "M21 16V8a2 2 0 0 0-1-1.73L12 2 3 6.27A2 2 0 0 0 2 8v8a2 2 0 0 0 1 1.73L12 22l9-4.27A2 2 0 0 0 21 16z",
  shopping: "M6 6h15l-1.5 9h-13zM6 6l-2 12h18M9 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm9 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
  chart: "M3 3v18h18M9 17V9m4 8v-5m4 5v-3",
  message: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
  bell: "M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9",
  settings: "M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42",
  shield: "M12 2l7 4v6c0 5-3 9-7 10-4-1-7-5-7-10V6l7-4z",
  logout: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4m7 7l5 5m0 0l-5 5m5-5H9",
};

const navigationItems = [
  { id: "dashboard", label: "Dashboard", icon: "home",path:"/DashboardOverview.jsx" },
  { id: "users", label: "User Management", icon: "users",link:"/User-Managment.jsx" },
  { id: "sellers", label: "Seller Management", icon: "store",link:"/seller-managment.jsx" },
  { id: "products", label: "Product Control", icon: "package" },
  { id: "orders", label: "Order Tracking", icon: "shopping" },
  { id: "analytics", label: "Analytics", icon: "chart" },
  { id: "communications", label: "Communications", icon: "message" },
  { id: "notifications", label: "Notifications", icon: "bell" },
  { id: "settings", label: "Settings", icon: "settings" },
];

export default function DashboardSidebar() {
  const [activeSection, setActiveSection] = useState("dashboard");

  const handleLogout = () => {
    alert("Logging out...");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "260px",
        backgroundColor: "#1e1e2d",
        borderRight: "1px solid #333",
      }}
    >
      {/* Logo */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          padding: "0 20px",
          height: "64px",
          borderBottom: "1px solid #333",
        }}
      >
        <div
          style={{
            padding: "8px",
            backgroundColor: "#4f46e5",
            borderRadius: "8px",
          }}
        >
          <Icon path={icons.shield} size={24} color="#fff" />
        </div>
        <div>
          <h1 style={{ fontSize: "16px", fontWeight: "bold", color: "#fff" }}>
            Bustard Admin
          </h1>
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.6)" }}>
            Control Center
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div style={{ flex: 1, padding: "12px", overflowY: "auto" }}>
        <nav style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          {navigationItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  height: "40px",
                  padding: "0 12px",
                  borderRadius: "6px",
                  border: "none",
                  cursor: "pointer",
                  backgroundColor: isActive ? "#4f46e5" : "transparent",
                  color: isActive ? "#fff" : "rgba(255,255,255,0.85)",
                  fontSize: "14px",
                  textAlign: "left",
                }}
              >
                <Icon
                  path={icons[item.icon]}
                  size={16}
                  color={isActive ? "#fff" : "rgba(255,255,255,0.85)"}
                />
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* User Section */}
      <div style={{ borderTop: "1px solid #333", padding: "12px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "8px 12px",
            marginBottom: "12px",
          }}
        >
          <div
            style={{
              height: "32px",
              width: "32px",
              borderRadius: "50%",
              backgroundColor: "#4f46e5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            A
          </div>
          <div style={{ minWidth: 0 }}>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "500",
                color: "#fff",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              Admin User
            </p>
            <p
              style={{
                fontSize: "12px",
                color: "rgba(255,255,255,0.6)",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              admin@bustard.com
            </p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            width: "100%",
            height: "36px",
            padding: "0 12px",
            borderRadius: "6px",
            border: "none",
            backgroundColor: "transparent",
            cursor: "pointer",
            color: "rgba(255,255,255,0.85)",
            fontSize: "14px",
            textAlign: "left",
          }}
        >
          <Icon path={icons.logout} size={16} color="rgba(255,255,255,0.85)" />
          Sign out
        </button>
      </div>
    </div>
  );
}
