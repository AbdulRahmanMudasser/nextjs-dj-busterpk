"use client"
import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function SidebarMenu({ items, open }) {
  const pathname = usePathname()

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {items.map((item) => {
        const active = pathname === item.url
        return (
          <li key={item.title}>
            <Link
              href={item.url}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "0.5rem 1rem",
                borderRadius: "0.375rem",
                margin: "0.25rem 0",
                backgroundColor: active ? "#e5e7eb" : "transparent",
                fontWeight: active ? "600" : "400",
                color: active ? "#111827" : "#374151",
                textDecoration: "none",
              }}
            >
              <item.icon style={{ marginRight: "0.5rem", height: "1rem", width: "1rem" }} />
              {open && <span>{item.title}</span>}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
