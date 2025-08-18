"use client"
import React from "react"

export function Sidebar({ children, open, setOpen }) {
  return (
    <aside
      style={{
        width: open ? "16rem" : "3.5rem",
        transition: "width 0.3s ease",
        backgroundColor: "#f9fafb",
        borderRight: "1px solid #e5e7eb",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {children}
    </aside>
  )
}
