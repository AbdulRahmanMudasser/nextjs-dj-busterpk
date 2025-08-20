"use client";

import React, { useState } from "react";
import {
  Bell,
  Package,
  Wallet,
  Users,
  Shield,
  CheckCircle2,
  Circle,
  XCircle,
  Trash2,
  Search,
} from "lucide-react";

/**
 * -----------------------------
 * Types & Constants
 * -----------------------------
 */

const CATEGORY_META = {
  SELLER: {
    icon: <Package size={16} />,
    label: "Seller",
    href: (n) => `/admin/sellers?notif=${n.id}`,
  },
  PAYMENT: {
    icon: <Wallet size={16} />,
    label: "Payment",
    href: (n) => `/admin/transactions?notif=${n.id}`,
  },
  USER: {
    icon: <Users size={16} />,
    label: "User",
    href: (n) => `/admin/users/complaints?notif=${n.id}`,
  },
  APP: {
    icon: <Shield size={16} />,
    label: "System",
    href: (n) => `/admin/system/activity?notif=${n.id}`,
  },
};

/**
 * -----------------------------
 * Demo Notifications
 * -----------------------------
 */

const DEMO_NOTIFS = [
  {
    id: "1",
    title: "New seller registered",
    category: "SELLER",
    created_at: new Date().toISOString(),
    status: "UNREAD",
  },
  {
    id: "2",
    title: "Payment received",
    category: "PAYMENT",
    created_at: new Date().toISOString(),
    status: "READ",
  },
  {
    id: "3",
    title: "User complaint submitted",
    category: "USER",
    created_at: new Date().toISOString(),
    status: "UNREAD",
  },
  {
    id: "4",
    title: "System maintenance scheduled",
    category: "APP",
    created_at: new Date().toISOString(),
    status: "ARCHIVED",
  },
];

/**
 * -----------------------------
 * Component
 * -----------------------------
 */

export default function NotificationFeed() {
  const [notifs, setNotifs] = useState(DEMO_NOTIFS);
  const [filter, setFilter] = useState("");

  const toggleRead = (id) => {
    setNotifs((prev) =>
      prev.map((n) =>
        n.id === id
          ? { ...n, status: n.status === "UNREAD" ? "READ" : "UNREAD" }
          : n
      )
    );
  };

  const deleteNotif = (id) => {
    setNotifs((prev) => prev.filter((n) => n.id !== id));
  };

  const filtered = notifs.filter((n) =>
    n.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: 10,
          gap: 8,
        }}
      >
        <Bell size={20} />
        <h2 style={{ fontSize: 18, fontWeight: "bold" }}>Notifications</h2>
      </div>

      {/* Search */}
      <div style={{ marginBottom: 15 }}>
        <input
          placeholder="Search..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={{
            width: "100%",
            padding: "6px 10px",
            border: "1px solid #ddd",
            borderRadius: 6,
          }}
        />
      </div>

      {/* List */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {filtered.map((n) => (
          <div
            key={n.id}
            style={{
              border: "1px solid #eee",
              borderRadius: 8,
              padding: 10,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background:
                n.status === "UNREAD" ? "rgba(0,0,255,0.05)" : "white",
            }}
          >
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              {CATEGORY_META[n.category].icon}
              <div>
                <div style={{ fontWeight: "500" }}>{n.title}</div>
                <div style={{ fontSize: 12, color: "#666" }}>
                  {CATEGORY_META[n.category].label} •{" "}
                  {new Date(n.created_at).toLocaleString()}
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 6 }}>
              <button
                onClick={() => toggleRead(n.id)}
                style={{
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                }}
              >
                {n.status === "UNREAD" ? (
                  <Circle size={18} color="blue" />
                ) : (
                  <CheckCircle2 size={18} color="green" />
                )}
              </button>
              <button
                onClick={() => deleteNotif(n.id)}
                style={{
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                }}
              >
                <Trash2 size={18} color="red" />
              </button>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <div style={{ textAlign: "center", color: "#999", padding: 20 }}>
            No notifications
          </div>
        )}
      </div>
    </div>
  );
}
