"use client"

import { useState } from "react"
import {
  Save,
  Shield,
  Bell,
  Globe,
  Database,
  Users,
  Mail,
  ChevronRight,
  CreditCard,
  Lock,
  Cpu,
  HardDrive,
  Download,
  RefreshCw,
  FileText,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Plus,
  Edit3,
  Trash2,
  Key,
  Network,
  Server
} from "lucide-react"

const AdminSettings = () => {
  const [activeTab, setActiveTab] = useState("general")
  const [notificationEmail, setNotificationEmail] = useState("")
  const [ipAddresses, setIpAddresses] = useState("192.168.1.1\n10.0.0.1")

  const tabs = [
    { id: "general", label: "General", icon: Globe, description: "Platform configuration" },
    { id: "security", label: "Security", icon: Shield, description: "Access and authentication" },
    { id: "notifications", label: "Notifications", icon: Bell, description: "Alert preferences" },
    { id: "users", label: "Admin Users", icon: Users, description: "Manage administrators" },
    { id: "system", label: "System", icon: Database, description: "System status and tools" },
  ]

  const TabContent = () => {
    switch (activeTab) {
      case "general":
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Platform Settings</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Platform Name
                  </label>
                  <input
                    type="text"
                    defaultValue="Bustard E-commerce"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Support Email
                  </label>
                  <input
                    type="email"
                    defaultValue="support@bustard.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Default Currency
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors">
                    <option value="USD">USD - US Dollar</option>
                    <option value="EUR">EUR - Euro</option>
                    <option value="GBP">GBP - British Pound</option>
                    <option value="JPY">JPY - Japanese Yen</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Time Zone
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors">
                    <option value="UTC">UTC (Coordinated Universal Time)</option>
                    <option value="EST">EST (Eastern Standard Time)</option>
                    <option value="PST">PST (Pacific Standard Time)</option>
                    <option value="CET">CET (Central European Time)</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Business Settings</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-900">Auto-approve sellers</h4>
                    <p className="text-sm text-gray-500 mt-1">Automatically approve new seller registrations</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-900">Maintenance Mode</h4>
                    <p className="text-sm text-gray-500 mt-1">Put the platform in maintenance mode</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-900">Enable Analytics</h4>
                    <p className="text-sm text-gray-500 mt-1">Collect and analyze platform usage data</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        )

      case "security":
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Security Settings</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center">
                      <Key className="h-5 w-5 text-indigo-600 mr-3" />
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Two-Factor Authentication</h4>
                        <p className="text-sm text-gray-500 mt-1">Require 2FA for all admin accounts</p>
                      </div>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center">
                      <Lock className="h-5 w-5 text-indigo-600 mr-3" />
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Session Timeout</h4>
                        <p className="text-sm text-gray-500 mt-1">Auto-logout after inactivity</p>
                      </div>
                    </div>
                  </div>
                  <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                    <option value="30">30 minutes</option>
                    <option value="60">1 hour</option>
                    <option value="120">2 hours</option>
                    <option value="480">8 hours</option>
                  </select>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center">
                      <CreditCard className="h-5 w-5 text-indigo-600 mr-3" />
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Payment Security</h4>
                        <p className="text-sm text-gray-500 mt-1">Enable PCI DSS compliance features</p>
                      </div>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                  </label>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Access Control</h3>
              <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-100">
                <div className="flex items-center space-x-3 mb-4">
                  <Network className="h-6 w-6 text-indigo-600" />
                  <h4 className="text-sm font-medium text-gray-900">IP Whitelist</h4>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Restrict admin access to specific IP addresses for enhanced security
                </p>
                <textarea
                  rows={4}
                  value={ipAddresses}
                  onChange={(e) => setIpAddresses(e.target.value)}
                  placeholder="Enter IP addresses, one per line..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                />
                <p className="text-xs text-gray-500 mt-2">Separate multiple IP addresses with new lines</p>
              </div>
            </div>
          </div>
        )

      case "notifications":
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Email Notifications</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-900">New User Registrations</h4>
                    <p className="text-sm text-gray-500 mt-1">Get notified when new users register</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-900">Seller Applications</h4>
                    <p className="text-sm text-gray-500 mt-1">Get notified of new seller applications</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-900">Order Disputes</h4>
                    <p className="text-sm text-gray-500 mt-1">Get notified of order disputes</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-900">System Alerts</h4>
                    <p className="text-sm text-gray-500 mt-1">Get notified of system issues</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                  </label>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Notification Recipients</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <Mail className="h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    value={notificationEmail}
                    onChange={(e) => setNotificationEmail(e.target.value)}
                    placeholder="Enter email address"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                  <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                    <Plus className="h-4 w-4" />
                  </button>
                </div>

                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-900">admin@bustard.com</p>
                      <p className="text-xs text-gray-500">Primary recipient</p>
                    </div>
                    <div className="flex space-x-2">
                      <button className="p-1 text-gray-400 hover:text-indigo-600">
                        <Edit3 className="h-4 w-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-red-600">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-900">alerts@bustard.com</p>
                      <p className="text-xs text-gray-500">System alerts only</p>
                    </div>
                    <div className="flex space-x-2">
                      <button className="p-1 text-gray-400 hover:text-indigo-600">
                        <Edit3 className="h-4 w-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-red-600">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case "users":
        return (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-900">Admin Users</h3>
                <p className="text-sm text-gray-500 mt-1">Manage administrator accounts and permissions</p>
              </div>
              <button className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                <Plus className="h-4 w-4" />
                <span>Add Admin User</span>
              </button>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Login</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0 bg-indigo-100 rounded-full flex items-center justify-center">
                          <span className="font-medium text-indigo-800">SA</span>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">System Administrator</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">admin@bustard.com</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex px-2.5 py-0.5 text-xs font-medium rounded-full bg-purple-100 text-purple-800 border border-purple-200">
                        Super Admin
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-full bg-green-100 text-green-800 border border-green-200">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">2 hours ago</td>
                    <td className="px-6 py-4 text-sm font-medium">
                      <button className="text-indigo-600 hover:text-indigo-900">Edit</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="font-medium text-blue-800">JM</span>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">John Manager</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">john@bustard.com</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex px-2.5 py-0.5 text-xs font-medium rounded-full bg-blue-100 text-blue-800 border border-blue-200">
                        Admin
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-full bg-green-100 text-green-800 border border-green-200">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">Yesterday</td>
                    <td className="px-6 py-4 text-sm font-medium">
                      <button className="text-indigo-600 hover:text-indigo-900 mr-3">Edit</button>
                      <button className="text-red-600 hover:text-red-900">Delete</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0 bg-yellow-100 rounded-full flex items-center justify-center">
                          <span className="font-medium text-yellow-800">SM</span>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">Sarah Moderator</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">sarah@bustard.com</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex px-2.5 py-0.5 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800 border border-yellow-200">
                        Moderator
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-full bg-gray-100 text-gray-800 border border-gray-200">
                        <XCircle className="h-3 w-3 mr-1" />
                        Inactive
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">1 week ago</td>
                    <td className="px-6 py-4 text-sm font-medium">
                      <button className="text-indigo-600 hover:text-indigo-900 mr-3">Edit</button>
                      <button className="text-red-600 hover:text-red-900">Delete</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )

      case "system":
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">System Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                  <div className="flex items-center mb-3">
                    <Database className="h-5 w-5 text-indigo-600 mr-2" />
                    <h4 className="text-sm font-medium text-gray-900">Database Status</h4>
                  </div>
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Connected</span>
                  </div>
                  <p className="text-xs text-gray-500">MySQL 8.0 • 12.4 GB</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                  <div className="flex items-center mb-3">
                    <Cpu className="h-5 w-5 text-indigo-600 mr-2" />
                    <h4 className="text-sm font-medium text-gray-900">Cache Status</h4>
                  </div>
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Active</span>
                  </div>
                  <p className="text-xs text-gray-500">Redis 6.2 • 98% hit rate</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                  <div className="flex items-center mb-3">
                    <HardDrive className="h-5 w-5 text-indigo-600 mr-2" />
                    <h4 className="text-sm font-medium text-gray-900">Storage Usage</h4>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: "45%" }}></div>
                  </div>
                  <span className="text-sm text-gray-600">45% of 100GB used</span>
                </div>

                <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                  <div className="flex items-center mb-3">
                    <Server className="h-5 w-5 text-indigo-600 mr-2" />
                    <h4 className="text-sm font-medium text-gray-900">API Status</h4>
                  </div>
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Operational</span>
                  </div>
                  <p className="text-xs text-gray-500">Response time: 128ms</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">System Actions</h3>
              <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                <button className="flex items-center justify-center space-x-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <RefreshCw className="h-4 w-4" />
                  <span>Clear Cache</span>
                </button>
                <button className="flex items-center justify-center space-x-2 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                  <Download className="h-4 w-4" />
                  <span>Backup Database</span>
                </button>
                <button className="flex items-center justify-center space-x-2 px-4 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors">
                  <FileText className="h-4 w-4" />
                  <span>Generate Report</span>
                </button>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-5">
              <div className="flex items-start">
                <AlertTriangle className="h-5 w-5 text-yellow-600 mr-3 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium text-yellow-800">Maintenance Warning</h4>
                  <p className="text-sm text-yellow-700 mt-1">
                    System maintenance is scheduled for Saturday, 10:00 PM - 2:00 AM EST.
                    The platform may be unavailable during this time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600 mt-2">Manage platform configuration and preferences</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <div className="lg:w-64">
            <nav className="space-y-1 bg-white rounded-xl shadow-sm border border-gray-200 p-4">
              {tabs.map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 text-left rounded-lg transition-colors ${activeTab === tab.id
                        ? "bg-indigo-50 text-indigo-700 border border-indigo-100"
                        : "text-gray-600 hover:bg-gray-100"
                      }`}
                  >
                    <Icon className="h-5 w-5 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium">{tab.label}</div>
                      <div className="text-xs text-gray-500 truncate">{tab.description}</div>
                    </div>
                    <ChevronRight className="h-4 w-4 flex-shrink-0" />
                  </button>
                )
              })}
            </nav>
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <TabContent />

              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex flex-col md:flex-row md:justify-end space-y-3 md:space-y-0 md:space-x-3">
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    Cancel
                  </button>
                  <button className="flex items-center justify-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                    <Save className="h-4 w-4" />
                    <span>Save Changes</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminSettings