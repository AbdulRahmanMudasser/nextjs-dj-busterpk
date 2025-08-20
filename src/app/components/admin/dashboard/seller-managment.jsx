"use client";
import { useState } from "react";

// ---- Inline Icon Components ----
const IconStore = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9l1-5h16l1 5M4 9h16v11H4z" /></svg>
);

const IconSearch = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
);

const IconFilter = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polygon points="3 4 21 4 14 12.94 14 21 10 23 10 12.94 3 4"/></svg>
);

const IconMore = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/></svg>
);

const IconCheck = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
);

const IconX = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
);

const IconClock = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
);

const IconTrendingUp = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
);

const IconPackage = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.73z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
);

const IconStar = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
);

// ---- Metric Card (inline, no import) ----
function MetricCard({ title, value, change, changeType = "neutral", Icon, description }) {
  const colors = {
    positive: { color: "#16a34a", backgroundColor: "rgba(22,163,74,0.1)" },
    negative: { color: "#dc2626", backgroundColor: "rgba(220,38,38,0.1)" },
    neutral: { color: "#6b7280", backgroundColor: "#f3f4f6" },
  };
  const applied = colors[changeType];

  return (
    <div style={{ borderRadius: "12px", background: "#fff", padding: "16px", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
        <h3 style={{ fontSize: "14px", fontWeight: "500", color: "#6b7280" }}>{title}</h3>
        {Icon && <Icon style={{ width: "16px", height: "16px", color: "#6b7280" }} />}
      </div>
      <div style={{ fontSize: "24px", fontWeight: "bold" }}>{value}</div>
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "4px" }}>
        {change && <span style={{ fontSize: "12px", padding: "2px 6px", borderRadius: "6px", ...applied }}>{change}</span>}
        {description && <p style={{ fontSize: "12px", color: "#6b7280", margin: 0 }}>{description}</p>}
      </div>
    </div>
  );
}

// ---- Data ----
const sellerMetrics = [
  { title: "Total Sellers", value: "2,156", change: "+8.1%", changeType: "positive", Icon: IconStore, description: "Active sellers" },
  { title: "Pending Applications", value: "47", change: "+12.3%", changeType: "neutral", Icon: IconClock, description: "Awaiting review" },
  { title: "Top Performers", value: "342", change: "+5.7%", changeType: "positive", Icon: IconTrendingUp, description: "5-star sellers" },
  { title: "Total Products", value: "45,632", change: "+23.5%", changeType: "positive", Icon: IconPackage, description: "Listed items" },
];

const sellers = [
  { id: 1, name: "TechStore Plus", email: "contact@techstore.com", status: "approved", joinDate: "2023-11-15", products: 156, rating: 4.8, totalSales: "$45,678.90", commission: "$2,283.95", category: "Electronics" },
  { id: 2, name: "Fashion Hub", email: "info@fashionhub.com", status: "approved", joinDate: "2023-12-01", products: 89, rating: 4.6, totalSales: "$23,456.78", commission: "$1,172.84", category: "Clothing" },
  { id: 3, name: "Home Essentials", email: "sales@homeessentials.com", status: "pending", joinDate: "2024-01-20", products: 45, rating: 0, totalSales: "$0.00", commission: "$0.00", category: "Home & Garden" },
  { id: 4, name: "Sports Central", email: "team@sportscentral.com", status: "suspended", joinDate: "2023-10-05", products: 234, rating: 3.2, totalSales: "$67,890.12", commission: "$3,394.51", category: "Sports" },
  { id: 5, name: "Book World", email: "hello@bookworld.com", status: "approved", joinDate: "2023-09-12", products: 678, rating: 4.9, totalSales: "$12,345.67", commission: "$617.28", category: "Books" },
];

// ---- Component ----
export default function SellerManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredSellers = sellers.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(searchTerm.toLowerCase()) || s.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || s.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const renderRating = (rating) => {
    if (rating === 0) return <span style={{ color: "#6b7280" }}>No rating</span>;
    return (
      <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
        <IconStar style={{ width: "12px", height: "12px", color: "#facc15" }} />
        <span style={{ fontSize: "14px", fontWeight: "500" }}>{rating}</span>
      </div>
    );
  };

  const badgeStyle = (status) => {
    const base = { padding: "2px 6px", borderRadius: "6px", fontSize: "12px", display: "inline-flex", alignItems: "center", gap: "4px" };
    switch (status) {
      case "approved": return { ...base, background: "rgba(22,163,74,0.1)", color: "#16a34a" };
      case "pending": return { ...base, background: "rgba(234,179,8,0.1)", color: "#ca8a04" };
      case "suspended": return { ...base, background: "rgba(220,38,38,0.1)", color: "#dc2626" };
      case "rejected": return { ...base, background: "#f3f4f6", color: "#6b7280" };
      default: return base;
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      {/* Metrics */}
      <div style={{ display: "grid", gap: "16px", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))" }}>
        {sellerMetrics.map((m, i) => <MetricCard key={i} {...m} />)}
      </div>

      {/* Seller Management */}
      <div style={{ background: "#fff", borderRadius: "12px", padding: "16px", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px" }}>
          <div>
            <h2 style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "18px", fontWeight: "600" }}>
              <IconStore style={{ width: "20px", height: "20px" }} /> Seller Management
            </h2>
            <p style={{ fontSize: "14px", color: "#6b7280" }}>Manage seller applications, approvals, and performance monitoring</p>
          </div>
          <button style={{ display: "flex", alignItems: "center", gap: "6px", background: "#16a34a", color: "#fff", border: "none", padding: "6px 12px", borderRadius: "6px" }}>
            <IconCheck style={{ width: "16px", height: "16px" }} /> Review Applications
          </button>
        </div>

        {/* Filters */}
        <div style={{ display: "flex", gap: "12px", marginBottom: "16px" }}>
          <div style={{ position: "relative", flex: "1", maxWidth: "300px" }}>
            <IconSearch style={{ position: "absolute", top: "50%", left: "10px", transform: "translateY(-50%)", width: "16px", height: "16px", color: "#6b7280" }} />
            <input
              type="text"
              placeholder="Search sellers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ width: "100%", padding: "6px 6px 6px 32px", border: "1px solid #d1d5db", borderRadius: "6px" }}
            />
          </div>
          <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} style={{ padding: "6px 10px", border: "1px solid #d1d5db", borderRadius: "6px" }}>
            <option value="all">All Status</option>
            <option value="approved">Approved</option>
            <option value="pending">Pending</option>
            <option value="suspended">Suspended</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>

        {/* Sellers Table */}
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ textAlign: "left", background: "#f9fafb" }}>
              <th style={{ padding: "8px" }}>Seller</th>
              <th>Status</th>
              <th>Products</th>
              <th>Rating</th>
              <th>Total Sales</th>
              <th>Commission</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredSellers.map(s => (
              <tr key={s.id} style={{ borderTop: "1px solid #e5e7eb" }}>
                <td style={{ padding: "8px" }}>
                  <div>
                    <p style={{ fontWeight: "500" }}>{s.name}</p>
                    <p style={{ fontSize: "12px", color: "#6b7280" }}>{s.email}</p>
                    <span style={{ fontSize: "12px", border: "1px solid #d1d5db", borderRadius: "6px", padding: "2px 6px" }}>{s.category}</span>
                  </div>
                </td>
                <td style={{ padding: "8px" }}>
                  <span style={badgeStyle(s.status)}>
                    {s.status === "approved" && <IconCheck style={{ width: "12px", height: "12px" }} />}
                    {s.status === "pending" && <IconClock style={{ width: "12px", height: "12px" }} />}
                    {(s.status === "suspended" || s.status === "rejected") && <IconX style={{ width: "12px", height: "12px" }} />}
                    {s.status}
                  </span>
                </td>
                <td>{s.products}</td>
                <td>{renderRating(s.rating)}</td>
                <td style={{ fontWeight: "500" }}>{s.totalSales}</td>
                <td style={{ fontWeight: "500", color: "#16a34a" }}>{s.commission}</td>
                <td>
                  <button style={{ background: "none", border: "none", cursor: "pointer" }}>
                    <IconMore style={{ width: "16px", height: "16px", color: "#6b7280" }} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
