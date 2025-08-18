"use client"
import React from "react"

export function SidebarGroup({ label, children }) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <div style={{ padding: "0.5rem 1rem", fontSize: "0.875rem", fontWeight: "500", color: "#6b7280" }}>
        {label}
      </div>
      <div>{children}</div>
    </div>
  )
}
