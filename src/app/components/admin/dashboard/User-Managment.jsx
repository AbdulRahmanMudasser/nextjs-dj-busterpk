'use client';
import { useState } from "react";
import { 
  Search, 
  Filter, 
  MoreHorizontal, 
  UserCheck, 
  UserX, 
  Mail,
  Calendar,
  Shield,
  AlertTriangle
} from "lucide-react";

const userMetrics = [
  {
    title: "Total Users",
    value: "12,847",
    change: "+12.3%",
    changeType: "positive",
    icon: UserCheck,
    description: "Active accounts"
  },
  {
    title: "New Registrations",
    value: "156",
    change: "+8.1%",
    changeType: "positive",
    icon: Calendar,
    description: "This week"
  },
  {
    title: "Suspended Users",
    value: "23",
    change: "-15.2%",
    changeType: "positive",
    icon: UserX,
    description: "Active suspensions"
  },
  {
    title: "Pending Verification",
    value: "89",
    change: "+5.3%",
    changeType: "neutral",
    icon: AlertTriangle,
    description: "Email verification"
  }
];

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@email.com",
    status: "active",
    role: "customer",
    joinDate: "2024-01-15",
    lastLogin: "2 hours ago",
    orders: 12,
    totalSpent: "$2,456.78"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    status: "active",
    role: "customer",
    joinDate: "2024-01-20",
    lastLogin: "1 day ago",
    orders: 8,
    totalSpent: "$1,234.56"
  },
  {
    id: 3,
    name: "Mike Chen",
    email: "mike.chen@email.com",
    status: "suspended",
    role: "customer",
    joinDate: "2024-01-10",
    lastLogin: "5 days ago",
    orders: 15,
    totalSpent: "$3,789.12"
  },
  {
    id: 4,
    name: "Emma Wilson",
    email: "emma.w@email.com",
    status: "pending",
    role: "customer",
    joinDate: "2024-02-01",
    lastLogin: "Never",
    orders: 0,
    totalSpent: "$0.00"
  },
  {
    id: 5,
    name: "David Brown",
    email: "david.brown@email.com",
    status: "active",
    role: "customer",
    joinDate: "2023-12-05",
    lastLogin: "30 minutes ago",
    orders: 25,
    totalSpent: "$5,678.90"
  }
];

export default function UserManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || user.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status) => {
    const variants = {
      active: { backgroundColor: "#dcfce7", color: "#15803d", border: "1px solid #bbf7d0", padding: "2px 6px", borderRadius: "6px" },
      suspended: { backgroundColor: "#fee2e2", color: "#b91c1c", border: "1px solid #fecaca", padding: "2px 6px", borderRadius: "6px" },
      pending: { backgroundColor: "#fef9c3", color: "#a16207", border: "1px solid #fde68a", padding: "2px 6px", borderRadius: "6px" }
    };
    return variants[status] || variants.active;
  };

  const MetricCard = ({ title, value, change, changeType, icon: Icon, description }) => {
    return (
      <div style={{ border: "1px solid #e5e7eb", borderRadius: "12px", padding: "16px", boxShadow: "0 1px 2px rgba(0,0,0,0.1)", background: "white" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
          <Icon size={20} />
          <h3 style={{ fontSize: "14px", fontWeight: "600" }}>{title}</h3>
        </div>
        <p style={{ fontSize: "20px", fontWeight: "700" }}>{value}</p>
        <p style={{ fontSize: "12px", color: changeType === "positive" ? "green" : changeType === "negative" ? "red" : "gray" }}>{change}</p>
        <p style={{ fontSize: "12px", color: "#6b7280" }}>{description}</p>
      </div>
    );
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      {/* Metrics */}
      <div style={{ display: "grid", gap: "16px", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
        {userMetrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      {/* User Management Table */}
      <div style={{ border: "1px solid #e5e7eb", borderRadius: "12px", background: "white", boxShadow: "0 2px 4px rgba(0,0,0,0.05)" }}>
        <div style={{ padding: "16px", borderBottom: "1px solid #e5e7eb", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <h2 style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: "600", fontSize: "16px" }}>
              <Shield size={20} /> User Management
            </h2>
            <p style={{ fontSize: "13px", color: "#6b7280" }}>Manage user accounts, permissions, and access controls</p>
          </div>
          <button style={{ display: "flex", alignItems: "center", gap: "6px", background: "#2563eb", color: "white", padding: "8px 12px", borderRadius: "8px", border: "none", cursor: "pointer" }}>
            <Mail size={16} /> Bulk Email
          </button>
        </div>
        <div style={{ padding: "16px" }}>
          {/* Filters */}
          <div style={{ display: "flex", gap: "16px", marginBottom: "16px" }}>
            <div style={{ position: "relative", flex: "1", maxWidth: "300px" }}>
              <Search size={16} style={{ position: "absolute", top: "50%", left: "8px", transform: "translateY(-50%)", color: "#9ca3af" }} />
              <input
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ width: "100%", padding: "8px 8px 8px 28px", border: "1px solid #d1d5db", borderRadius: "6px" }}
              />
            </div>
            <select 
              value={statusFilter} 
              onChange={(e) => setStatusFilter(e.target.value)}
              style={{ padding: "8px", border: "1px solid #d1d5db", borderRadius: "6px" }}
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="suspended">Suspended</option>
              <option value="pending">Pending</option>
            </select>
          </div>

          {/* Users Table */}
          <div style={{ border: "1px solid #e5e7eb", borderRadius: "6px", overflow: "hidden" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead style={{ background: "#f9fafb", textAlign: "left" }}>
                <tr>
                  <th style={{ padding: "12px" }}>User</th>
                  <th style={{ padding: "12px" }}>Status</th>
                  <th style={{ padding: "12px" }}>Join Date</th>
                  <th style={{ padding: "12px" }}>Last Login</th>
                  <th style={{ padding: "12px" }}>Orders</th>
                  <th style={{ padding: "12px" }}>Total Spent</th>
                  <th style={{ padding: "12px" }}></th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr key={user.id} style={{ borderBottom: "1px solid #f3f4f6" }}>
                    <td style={{ padding: "12px" }}>
                      <div>
                        <p style={{ fontWeight: "500" }}>{user.name}</p>
                        <p style={{ fontSize: "13px", color: "#6b7280" }}>{user.email}</p>
                      </div>
                    </td>
                    <td style={{ padding: "12px" }}>
                      <span style={getStatusBadge(user.status)}>{user.status}</span>
                    </td>
                    <td style={{ padding: "12px", fontSize: "14px" }}>{user.joinDate}</td>
                    <td style={{ padding: "12px", fontSize: "14px" }}>{user.lastLogin}</td>
                    <td style={{ padding: "12px", fontSize: "14px" }}>{user.orders}</td>
                    <td style={{ padding: "12px", fontWeight: "500" }}>{user.totalSpent}</td>
                    <td style={{ padding: "12px" }}>
                      <button style={{ background: "none", border: "none", cursor: "pointer" }}>
                        <MoreHorizontal size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
