"use client";
import { 
  Users, 
  Store, 
  Package, 
  ShoppingCart, 
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  Eye
} from "lucide-react";

const metrics = [
  {
    title: "Total Users",
    value: "12,847",
    change: "+12.3%",
    changeType: "positive",
    icon: Users,
    description: "from last month"
  },
  {
    title: "Active Sellers",
    value: "2,156",
    change: "+8.1%",
    changeType: "positive",
    icon: Store,
    description: "from last month"
  },
  {
    title: "Products Listed",
    value: "45,632",
    change: "+23.5%",
    changeType: "positive",
    icon: Package,
    description: "from last month"
  },
  {
    title: "Orders Today",
    value: "1,847",
    change: "-2.1%",
    changeType: "negative",
    icon: ShoppingCart,
    description: "from yesterday"
  }
];

const recentActivity = [
  {
    type: "user",
    message: "New user registration: john.doe@email.com",
    time: "2 minutes ago",
    status: "success"
  },
  {
    type: "seller",
    message: "Seller verification pending: TechStore Plus",
    time: "5 minutes ago",
    status: "warning"
  },
  {
    type: "product",
    message: "Product flagged for review: iPhone 15 Pro",
    time: "8 minutes ago",
    status: "warning"
  },
  {
    type: "order",
    message: "High-value order completed: $2,847.99",
    time: "12 minutes ago",
    status: "success"
  },
  {
    type: "system",
    message: "System maintenance scheduled for 2:00 AM",
    time: "1 hour ago",
    status: "info"
  }
];

const pendingActions = [
  { title: "Seller Applications", count: 12, action: "Review", priority: "high" },
  { title: "Product Reports", count: 8, action: "Investigate", priority: "medium" },
  { title: "User Disputes", count: 3, action: "Resolve", priority: "high" },
  { title: "Payment Issues", count: 5, action: "Process", priority: "medium" }
];

export default function DashboardOverview() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      
      {/* Metrics Grid */}
      <div style={{ display: "grid", gap: "16px", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div key={index} style={{
              border: "1px solid #e5e7eb",
              borderRadius: "12px",
              padding: "16px",
              backgroundColor: "#fff",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Icon style={{ height: "20px", width: "20px", color: "#2563eb" }} />
                <h3 style={{ fontSize: "14px", fontWeight: "500" }}>{metric.title}</h3>
              </div>
              <p style={{ fontSize: "20px", fontWeight: "bold" }}>{metric.value}</p>
              <p style={{
                fontSize: "12px",
                color: metric.changeType === "positive" ? "green" : "red"
              }}>
                {metric.change} {metric.description}
              </p>
            </div>
          );
        })}
      </div>

      <div style={{ display: "grid", gap: "24px", gridTemplateColumns: "1fr 1fr" }}>
        
        {/* Recent Activity */}
        <div style={{
          border: "1px solid #e5e7eb",
          borderRadius: "12px",
          backgroundColor: "#fff",
          padding: "16px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
        }}>
          <h2 style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: "600", fontSize: "16px" }}>
            <TrendingUp style={{ height: "20px", width: "20px" }} />
            Recent Activity
          </h2>
          <p style={{ fontSize: "14px", color: "#6b7280", marginBottom: "12px" }}>
            Latest platform events and user actions
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {recentActivity.map((activity, index) => (
              <div key={index} style={{
                display: "flex",
                gap: "12px",
                padding: "12px",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                backgroundColor: "#f9fafb"
              }}>
                <div style={{
                  height: "8px",
                  width: "8px",
                  borderRadius: "50%",
                  marginTop: "6px",
                  backgroundColor: activity.status === "success" ? "green" :
                                  activity.status === "warning" ? "orange" : "blue"
                }} />
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: "14px" }}>{activity.message}</p>
                  <p style={{ fontSize: "12px", color: "#6b7280", display: "flex", alignItems: "center", gap: "4px" }}>
                    <Clock style={{ height: "12px", width: "12px" }} />
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pending Actions */}
        <div style={{
          border: "1px solid #e5e7eb",
          borderRadius: "12px",
          backgroundColor: "#fff",
          padding: "16px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
        }}>
          <h2 style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: "600", fontSize: "16px" }}>
            <AlertTriangle style={{ height: "20px", width: "20px" }} />
            Pending Actions
          </h2>
          <p style={{ fontSize: "14px", color: "#6b7280", marginBottom: "12px" }}>
            Items requiring admin attention
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {pendingActions.map((action, index) => (
              <div key={index} style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "12px",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                backgroundColor: "#f9fafb"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "48px",
                    height: "28px",
                    borderRadius: "6px",
                    backgroundColor: action.priority === "high" ? "#ef4444" : "#d1d5db",
                    color: "#fff",
                    fontSize: "14px",
                    fontWeight: "600"
                  }}>
                    {action.count}
                  </span>
                  <div>
                    <p style={{ fontWeight: "500" }}>{action.title}</p>
                    <p style={{ fontSize: "12px", color: "#6b7280" }}>Priority: {action.priority}</p>
                  </div>
                </div>
                <button style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  padding: "6px 10px",
                  fontSize: "12px",
                  border: "1px solid #d1d5db",
                  borderRadius: "6px",
                  backgroundColor: "#fff",
                  cursor: "pointer"
                }}>
                  <Eye style={{ height: "12px", width: "12px" }} />
                  {action.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div style={{
        border: "1px solid #e5e7eb",
        borderRadius: "12px",
        backgroundColor: "#fff",
        padding: "16px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
      }}>
        <h2 style={{ fontSize: "16px", fontWeight: "600" }}>Platform Health</h2>
        <p style={{ fontSize: "14px", color: "#6b7280", marginBottom: "16px" }}>
          Current system status and performance metrics
        </p>

        <div style={{ display: "grid", gap: "16px", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "16px", borderRadius: "8px", backgroundColor: "#ecfdf5", border: "1px solid #d1fae5" }}>
            <CheckCircle style={{ height: "32px", width: "32px", color: "green" }} />
            <div>
              <p style={{ fontWeight: "600" }}>System Status</p>
              <p style={{ fontSize: "12px", color: "#6b7280" }}>All systems operational</p>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "16px", borderRadius: "8px", backgroundColor: "#eff6ff", border: "1px solid #bfdbfe" }}>
            <TrendingUp style={{ height: "32px", width: "32px", color: "#2563eb" }} />
            <div>
              <p style={{ fontWeight: "600" }}>Response Time</p>
              <p style={{ fontSize: "12px", color: "#6b7280" }}>Average 120ms</p>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "16px", borderRadius: "8px", backgroundColor: "#ecfdf5", border: "1px solid #d1fae5" }}>
            <Users style={{ height: "32px", width: "32px", color: "green" }} />
            <div>
              <p style={{ fontWeight: "600" }}>Active Sessions</p>
              <p style={{ fontSize: "12px", color: "#6b7280" }}>3,247 users online</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
