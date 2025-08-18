// /app/pages/user/layout.jsx
"use client";

import { AppSidebar } from "@/components/user/usersidebar";

export default function UserLayout({ children }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar always visible */}
      <AppSidebar />

      {/* Page content */}
      <main style={{ flex: 1, padding: "16px" }}>
        {children}
      </main>
    </div>
  );
}
