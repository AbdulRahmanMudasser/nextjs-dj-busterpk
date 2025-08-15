"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { 
  Home, 
  Search, 
  ShoppingCart, 
  Heart, 
  User, 
  Package, 
  Settings,
  Smartphone,
  Shirt,
  Home as HomeIcon,
  BookOpen,
  Star,
  TrendingUp
} from "lucide-react";
import Link from "next/link";

// Sample Sidebar UI structure since we can't import from "@/components/ui/sidebar"
function Sidebar({ children, style }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", ...style }}>
      {children}
    </div>
  );
}

function SidebarTrigger({ onClick, style }) {
  return (
    <button onClick={onClick} style={{ margin: "8px", alignSelf: "flex-end", ...style }}>
      ☰
    </button>
  );
}

function SidebarContent({ children, style }) {
  return <div style={{ padding: "8px", ...style }}>{children}</div>;
}

function SidebarGroup({ children, style }) {
  return <div style={{ marginBottom: "16px", ...style }}>{children}</div>;
}

function SidebarGroupLabel({ children, style }) {
  return (
    <div style={{ fontWeight: "bold", fontSize: "14px", marginBottom: "8px", ...style }}>
      {children}
    </div>
  );
}

function SidebarGroupContent({ children, style }) {
  return <div style={style}>{children}</div>;
}

function SidebarMenu({ children, style }) {
  return <ul style={{ listStyle: "none", padding: 0, margin: 0, ...style }}>{children}</ul>;
}

function SidebarMenuItem({ children, style }) {
  return <li style={style}>{children}</li>;
}

function SidebarMenuButton({ children, style }) {
  return (
    <div style={{ borderRadius: "6px", ...style }}>
      {children}
    </div>
  );
}

export function AppSidebar() {
  const [open, setOpen] = useState(true);
  const pathname = usePathname();

  const mainNavItems = [
    { title: "Dashboard", url: "/", icon: Home },
    { title: "Search", url: "/search", icon: Search },
    { title: "Cart", url: "/cart", icon: ShoppingCart },
    { title: "Wishlist", url: "/wishlist", icon: Heart },
    { title: "Orders", url: "/orders", icon: Package },
    { title: "Profile", url: "/profile", icon: User },
  ];

  const categoryItems = [
    { title: "Electronics", url: "/category/electronics", icon: Smartphone },
    { title: "Fashion", url: "/category/fashion", icon: Shirt },
    { title: "Home & Kitchen", url: "/category/home-kitchen", icon: HomeIcon },
    { title: "Books & Stationery", url: "/category/books", icon: BookOpen },
  ];

  const quickLinks = [
    { title: "Trending", url: "/trending", icon: TrendingUp },
    { title: "Top Rated", url: "/top-rated", icon: Star },
    { title: "Settings", url: "/settings", icon: Settings },
  ];

  const getNavCls = (isActive) => ({
    display: "flex",
    alignItems: "center",
    padding: "8px 12px",
    borderRadius: "6px",
    textDecoration: "none",
    fontWeight: isActive ? "600" : "400",
    backgroundColor: isActive ? "#E5E7EB" : "transparent",
    color: isActive ? "#1F2937" : "#374151",
    cursor: "pointer",
  });

  return (
    <Sidebar style={{ width: open ? "256px" : "56px", backgroundColor: "#F9FAFB", height: "100vh", borderRight: "1px solid #E5E7EB" }}>
      <SidebarTrigger onClick={() => setOpen(!open)} style={{ cursor: "pointer" }} />

      <SidebarContent>
        {/* Brand */}
        {open && (
          <div style={{ padding: "16px" }}>
            <h1 style={{
              fontSize: "20px",
              fontWeight: "bold",
              backgroundImage: "linear-gradient(to right, #3B82F6, orange)",
              WebkitBackgroundClip: "text",
              color: "transparent"
            }}>
              BrowsePro
            </h1>
            <p style={{ fontSize: "14px", color: "#6B7280" }}>Your Shopping Hub</p>
          </div>
        )}

        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton>
                    <Link href={item.url} style={getNavCls(pathname === item.url)}>
                      <item.icon style={{ marginRight: open ? "8px" : "0", height: "16px", width: "16px" }} />
                      {open && <span>{item.title}</span>}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Categories */}
        <SidebarGroup>
          <SidebarGroupLabel>Categories</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {categoryItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton>
                    <Link href={item.url} style={getNavCls(pathname === item.url)}>
                      <item.icon style={{ marginRight: open ? "8px" : "0", height: "16px", width: "16px" }} />
                      {open && <span>{item.title}</span>}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Quick Links */}
        <SidebarGroup>
          <SidebarGroupLabel>Quick Links</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {quickLinks.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton>
                    <Link href={item.url} style={getNavCls(pathname === item.url)}>
                      <item.icon style={{ marginRight: open ? "8px" : "0", height: "16px", width: "16px" }} />
                      {open && <span>{item.title}</span>}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
