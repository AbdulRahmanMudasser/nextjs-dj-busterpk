"use client";
import { useState } from "react";
import { Bell, Search, RefreshCw } from "lucide-react";

export default function DashboardHeader({ title, subtitle, showSearch = true, onRefresh }) {
  return (
    <div style={{ borderBottom: "1px solid #e5e7eb", backgroundColor: "#fff" }}>
      <div style={{ display: "flex", height: "64px", alignItems: "center", justifyContent: "space-between", padding: "0 24px" }}>
        {/* Title + Subtitle */}
        <div>
          <h1 style={{ fontSize: "20px", fontWeight: 600, letterSpacing: "-0.02em" }}>{title}</h1>
          {subtitle && (
            <p style={{ fontSize: "14px", color: "#6b7280" }}>{subtitle}</p>
          )}
        </div>

        {/* Right Controls */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          {/* Search Box */}
          {showSearch && (
            <div style={{ position: "relative", width: "256px" }}>
              <Search
                style={{
                  position: "absolute",
                  left: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  height: "16px",
                  width: "16px",
                  color: "#6b7280",
                }}
              />
              <input
                placeholder="Search..."
                style={{
                  width: "100%",
                  padding: "8px 12px 8px 36px",
                  borderRadius: "6px",
                  border: "1px solid #d1d5db",
                  outline: "none",
                }}
              />
            </div>
          )}

          {/* Refresh Button */}
          {onRefresh && (
            <button
              onClick={onRefresh}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                border: "1px solid #d1d5db",
                borderRadius: "6px",
                padding: "6px 12px",
                fontSize: "14px",
                backgroundColor: "#fff",
                cursor: "pointer",
              }}
            >
              <RefreshCw style={{ height: "16px", width: "16px" }} />
              Refresh
            </button>
          )}

          {/* Notifications Button */}
          <button
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              border: "1px solid #d1d5db",
              borderRadius: "6px",
              padding: "6px 12px",
              fontSize: "14px",
              backgroundColor: "#fff",
              cursor: "pointer",
            }}
          >
            <Bell style={{ height: "16px", width: "16px" }} />
            <span
              style={{
                position: "absolute",
                top: "-6px",
                right: "-6px",
                height: "20px",
                width: "20px",
                backgroundColor: "#ef4444",
                color: "#fff",
                borderRadius: "9999px",
                fontSize: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              3
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
