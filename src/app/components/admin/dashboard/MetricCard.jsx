"use client";

export default function MetricCard({
  title,
  value,
  change,
  changeType = "neutral",
  Icon,
  description,
  className = "",
}) {
  const changeColors = {
    positive: {
      color: "#16a34a", // green
      backgroundColor: "rgba(22,163,74,0.1)",
    },
    negative: {
      color: "#dc2626", // red
      backgroundColor: "rgba(220,38,38,0.1)",
    },
    neutral: {
      color: "#6b7280", // gray
      backgroundColor: "#f3f4f6",
    },
  };

  const appliedChangeStyle = changeColors[changeType] || changeColors.neutral;

  return (
    <div
      style={{
        borderRadius: "12px",
        backgroundColor: "white",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        transition: "box-shadow 0.3s ease",
        padding: "16px",
        ...className,
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.12)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.05)")
      }
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "8px",
        }}
      >
        <h3 style={{ fontSize: "14px", fontWeight: "500", color: "#6b7280" }}>
          {title}
        </h3>
        {Icon && <Icon style={{ width: "16px", height: "16px", color: "#6b7280" }} />}
      </div>

      {/* Value */}
      <div style={{ fontSize: "24px", fontWeight: "bold" }}>{value}</div>

      {/* Change + Description */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "4px" }}>
        {change && (
          <span
            style={{
              fontSize: "12px",
              fontWeight: "500",
              borderRadius: "6px",
              padding: "2px 6px",
              ...appliedChangeStyle,
            }}
          >
            {change}
          </span>
        )}
        {description && (
          <p style={{ fontSize: "12px", color: "#6b7280", margin: 0 }}>
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
