"use client"
import { useState } from "react"
import { 
  User, 
  CreditCard,
  Bell,
  Shield,
  Star,
  Edit,
  Plus,
  Trash2
} from "lucide-react"

// Mock user data
const userData = {
  name: "John Doe",
  email: "john.doe@email.com",
  phone: "+1 (555) 123-4567",
  avatar: "",
  memberSince: "2023-01-15",
  totalOrders: 12,
  totalSpent: 2847.50,
  loyaltyPoints: 2847
}

const addresses = [
  {
    id: "1",
    type: "Home",
    name: "John Doe",
    address: "123 Main Street, Apt 4B",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    phone: "+1 (555) 123-4567",
    isDefault: true
  },
  {
    id: "2",
    type: "Work",
    name: "John Doe",
    address: "456 Business Ave, Suite 200",
    city: "New York",
    state: "NY",
    zipCode: "10002",
    phone: "+1 (555) 123-4567",
    isDefault: false
  }
]

const paymentMethods = [
  {
    id: "1",
    type: "Visa",
    last4: "4567",
    expiry: "12/26",
    isDefault: true
  },
  {
    id: "2",
    type: "Mastercard",
    last4: "8901",
    expiry: "09/25",
    isDefault: false
  }
]

export default function Profile() {
  const [activeTab, setActiveTab] = useState("personal")
  const [notifications, setNotifications] = useState({
    orderUpdates: true,
    promotions: false,
    newsletter: true,
    priceAlerts: true
  })

  const [personalInfo, setPersonalInfo] = useState({
    name: userData.name,
    email: userData.email,
    phone: userData.phone,
    bio: "Passionate about technology and great products. Love discovering new brands and sharing reviews."
  })

  const updatePersonalInfo = () => {
    console.log("Updating personal info:", personalInfo)
  }

  const ProfileStats = () => (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: "1rem", marginBottom: "1.5rem" }}>
      <div style={{ textAlign: "center", padding: "1rem", border: "1px solid #ddd", borderRadius: "8px" }}>
        <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "blue" }}>{userData.totalOrders}</div>
        <div style={{ fontSize: "0.9rem", color: "#666" }}>Total Orders</div>
      </div>
      <div style={{ textAlign: "center", padding: "1rem", border: "1px solid #ddd", borderRadius: "8px" }}>
        <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "blue" }}>${userData.totalSpent.toFixed(2)}</div>
        <div style={{ fontSize: "0.9rem", color: "#666" }}>Total Spent</div>
      </div>
      <div style={{ textAlign: "center", padding: "1rem", border: "1px solid #ddd", borderRadius: "8px" }}>
        <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "orange" }}>{userData.loyaltyPoints}</div>
        <div style={{ fontSize: "0.9rem", color: "#666" }}>Loyalty Points</div>
      </div>
      <div style={{ textAlign: "center", padding: "1rem", border: "1px solid #ddd", borderRadius: "8px" }}>
        <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "green" }}>4.8</div>
        <div style={{ fontSize: "0.9rem", color: "#666" }}>Avg. Rating</div>
      </div>
    </div>
  )

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      {/* Header */}
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "1rem" }}>
        <div style={{ height: "80px", width: "80px", borderRadius: "50%", background: "linear-gradient(to right, blue, orange)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: "bold", fontSize: "1.2rem" }}>
          {userData.name.split(' ').map(n => n[0]).join('')}
        </div>
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: "1.75rem", fontWeight: "bold" }}>{userData.name}</h1>
          <p style={{ color: "#666" }}>Member since {new Date(userData.memberSince).toLocaleDateString()}</p>
          <span style={{ display: "inline-flex", alignItems: "center", background: "linear-gradient(to right, blue, orange)", color: "white", padding: "0.25rem 0.5rem", borderRadius: "6px", fontSize: "0.85rem", marginTop: "0.5rem" }}>
            <Star size={14} style={{ marginRight: "4px" }} />
            VIP Customer
          </span>
        </div>
        <button style={{ border: "1px solid #ccc", padding: "0.5rem 1rem", borderRadius: "6px", background: "white", cursor: "pointer" }}>
          <Edit size={16} style={{ marginRight: "4px", display: "inline" }} />
          Edit Profile Picture
        </button>
      </div>

      <ProfileStats />

      {/* Tabs */}
      <div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", borderBottom: "1px solid #ddd", marginBottom: "1rem" }}>
          {["personal","addresses","payments","settings"].map(tab => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: "0.75rem",
                borderBottom: activeTab === tab ? "3px solid blue" : "3px solid transparent",
                fontWeight: activeTab === tab ? "bold" : "normal",
                cursor: "pointer"
              }}
            >
              {tab === "personal" && "Personal Info"}
              {tab === "addresses" && "Addresses"}
              {tab === "payments" && "Payment Methods"}
              {tab === "settings" && "Settings"}
            </button>
          ))}
        </div>

        {/* Personal Info */}
        {activeTab === "personal" && (
          <div style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "1rem" }}>
            <h3 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
              <User size={20} /> Personal Information
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <div>
                <label>Full Name</label>
                <input type="text" value={personalInfo.name} onChange={(e)=>setPersonalInfo({...personalInfo,name:e.target.value})} style={{ width:"100%", padding:"0.5rem", border:"1px solid #ccc", borderRadius:"6px" }} />
              </div>
              <div>
                <label>Email Address</label>
                <input type="email" value={personalInfo.email} onChange={(e)=>setPersonalInfo({...personalInfo,email:e.target.value})} style={{ width:"100%", padding:"0.5rem", border:"1px solid #ccc", borderRadius:"6px" }} />
              </div>
              <div>
                <label>Phone Number</label>
                <input type="text" value={personalInfo.phone} onChange={(e)=>setPersonalInfo({...personalInfo,phone:e.target.value})} style={{ width:"100%", padding:"0.5rem", border:"1px solid #ccc", borderRadius:"6px" }} />
              </div>
            </div>
            <div style={{ marginTop: "1rem" }}>
              <label>Bio</label>
              <textarea rows="3" value={personalInfo.bio} onChange={(e)=>setPersonalInfo({...personalInfo,bio:e.target.value})} style={{ width:"100%", padding:"0.5rem", border:"1px solid #ccc", borderRadius:"6px" }} />
            </div>
            <button onClick={updatePersonalInfo} style={{ marginTop:"1rem", background:"linear-gradient(to right, blue, orange)", color:"white", padding:"0.5rem 1rem", border:"none", borderRadius:"6px", cursor:"pointer" }}>
              Save Changes
            </button>
          </div>
        )}

        {/* Addresses */}
        {activeTab === "addresses" && (
          <div>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"1rem" }}>
              <h3>Saved Addresses</h3>
              <button style={{ background:"linear-gradient(to right, blue, orange)", color:"white", padding:"0.5rem 1rem", border:"none", borderRadius:"6px", cursor:"pointer" }}>
                <Plus size={16} style={{ marginRight:"4px" }} />
                Add New Address
              </button>
            </div>
            {addresses.map(address => (
              <div key={address.id} style={{ border:"1px solid #ddd", borderRadius:"8px", padding:"1rem", marginBottom:"1rem" }}>
                <div style={{ display:"flex", justifyContent:"space-between" }}>
                  <div>
                    <div style={{ display:"flex", gap:"0.5rem", alignItems:"center" }}>
                      <h4>{address.type}</h4>
                      {address.isDefault && <span style={{ background:"#eee", padding:"0.25rem 0.5rem", borderRadius:"4px" }}>Default</span>}
                    </div>
                    <p style={{ fontWeight:"500" }}>{address.name}</p>
                    <p style={{ color:"#666" }}>{address.address}<br/>{address.city}, {address.state} {address.zipCode}<br/>{address.phone}</p>
                  </div>
                  <div style={{ display:"flex", gap:"0.5rem" }}>
                    <button style={{ background:"none", border:"none", cursor:"pointer" }}><Edit size={14}/></button>
                    <button style={{ background:"none", border:"none", cursor:"pointer" }}><Trash2 size={14}/></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Payments */}
        {activeTab === "payments" && (
          <div>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"1rem" }}>
              <h3>Payment Methods</h3>
              <button style={{ background:"linear-gradient(to right, blue, orange)", color:"white", padding:"0.5rem 1rem", border:"none", borderRadius:"6px", cursor:"pointer" }}>
                <Plus size={16} style={{ marginRight:"4px" }} />
                Add New Card
              </button>
            </div>
            {paymentMethods.map(method => (
              <div key={method.id} style={{ border:"1px solid #ddd", borderRadius:"8px", padding:"1rem", marginBottom:"1rem" }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                  <div style={{ display:"flex", gap:"1rem", alignItems:"center" }}>
                    <CreditCard size={32} style={{ color:"#666" }}/>
                    <div>
                      <div style={{ display:"flex", gap:"0.5rem", alignItems:"center" }}>
                        <span>{method.type} •••• {method.last4}</span>
                        {method.isDefault && <span style={{ background:"#eee", padding:"0.25rem 0.5rem", borderRadius:"4px" }}>Default</span>}
                      </div>
                      <p style={{ color:"#666" }}>Expires {method.expiry}</p>
                    </div>
                  </div>
                  <div style={{ display:"flex", gap:"0.5rem" }}>
                    <button style={{ background:"none", border:"none", cursor:"pointer" }}><Edit size={14}/></button>
                    <button style={{ background:"none", border:"none", cursor:"pointer" }}><Trash2 size={14}/></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Settings */}
        {activeTab === "settings" && (
          <div style={{ display:"flex", flexDirection:"column", gap:"1rem" }}>
            {/* Notifications */}
            <div style={{ border:"1px solid #ddd", borderRadius:"8px", padding:"1rem" }}>
              <h3 style={{ display:"flex", gap:"0.5rem", alignItems:"center", marginBottom:"1rem" }}>
                <Bell size={20}/> Notification Preferences
              </h3>
              {Object.entries(notifications).map(([key,value])=>(
                <div key={key} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"0.5rem" }}>
                  <div>
                    <label style={{ fontWeight:"500", textTransform:"capitalize" }}>{key.replace(/([A-Z])/g," $1")}</label>
                  </div>
                  <input 
                    type="checkbox" 
                    checked={value} 
                    onChange={(e)=>setNotifications(prev=>({...prev,[key]:e.target.checked}))}
                  />
                </div>
              ))}
            </div>

            {/* Security */}
            <div style={{ border:"1px solid #ddd", borderRadius:"8px", padding:"1rem" }}>
              <h3 style={{ display:"flex", gap:"0.5rem", alignItems:"center", marginBottom:"1rem" }}>
                <Shield size={20}/> Security
              </h3>
              <button style={{ border:"1px solid #ccc", borderRadius:"6px", padding:"0.5rem 1rem", marginBottom:"0.5rem", cursor:"pointer", width:"100%", textAlign:"left" }}>Change Password</button>
              <button style={{ border:"1px solid #ccc", borderRadius:"6px", padding:"0.5rem 1rem", marginBottom:"0.5rem", cursor:"pointer", width:"100%", textAlign:"left" }}>Enable Two-Factor Authentication</button>
              <button style={{ border:"1px solid #ccc", borderRadius:"6px", padding:"0.5rem 1rem", marginBottom:"0.5rem", cursor:"pointer", width:"100%", textAlign:"left" }}>Download My Data</button>
              <button style={{ border:"1px solid red", background:"red", color:"white", borderRadius:"6px", padding:"0.5rem 1rem", cursor:"pointer", width:"100%", textAlign:"left" }}>Delete Account</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
