"use client"
import React from "react"

export function SidebarTrigger({ open, setOpen }) {
  return (
    <button
      style={{
        margin: "0.5rem",
        alignSelf: "flex-end",
        padding: "0.25rem 0.5rem",
        border: "1px solid #e5e7eb",
        borderRadius: "0.25rem",
        background: "#fff",
      }}
      onClick={() => setOpen(!open)}
    >
      {open ? "←" : "→"}
    </button>
  )
}
