"use client";

import { useState } from "react";
import {
  Mail,
  Bell,
  MessageSquare,
  Send,
  FileText,
  Users,
  Settings,
  Download,
  Upload,
  Plus,
  Edit3,
  Trash2,
  ChevronDown,
  Search,
  Filter,
  CheckCircle,
  XCircle,
  AlertCircle,
  Clock,
  Eye,
  Copy,
  TestTube,
  BarChart3,
  Save,
} from "lucide-react";

const Communications = () => {
  const [activeTab, setActiveTab] = useState("templates")
  const [testEmail, setTestEmail] = useState("")
  const [selectedTemplate, setSelectedTemplate] = useState(null)

  // Mock data - replace with actual API calls
  const emailTemplates = [
    {
      id: 1,
      name: "Welcome Email",
      subject: "Welcome to Our Platform!",
      category: "Onboarding",
      lastEdited: "2024-01-15",
      status: "active",
      uses: 1245
    },
    {
      id: 2,
      name: "Order Confirmation",
      subject: "Your Order #{{order_id}} is Confirmed",
      category: "Transactions",
      lastEdited: "2024-01-18",
      status: "active",
      uses: 5678
    },
    {
      id: 3,
      name: "Password Reset",
      subject: "Reset Your Password",
      category: "Security",
      lastEdited: "2024-01-10",
      status: "active",
      uses: 987
    },
    {
      id: 4,
      name: "Account Verification",
      subject: "Verify Your Email Address",
      category: "Security",
      lastEdited: "2023-12-20",
      status: "inactive",
      uses: 2345
    },
    {
      id: 5,
      name: "Shipping Notification",
      subject: "Your Order Has Shipped!",
      category: "Transactions",
      lastEdited: "2024-01-05",
      status: "active",
      uses: 3456
    }
  ]

  const notificationSettings = [
    {
      id: 1,
      name: "New User Registration",
      description: "When a new user signs up on the platform",
      email: true,
      push: false,
      inApp: true
    },
    {
      id: 2,
      name: "Order Placement",
      description: "When a customer places a new order",
      email: true,
      push: true,
      inApp: true
    },
    {
      id: 3,
      name: "Payment Received",
      description: "When a payment is successfully processed",
      email: true,
      push: false,
      inApp: true
    },
    {
      id: 4,
      name: "Support Ticket Created",
      description: "When a customer submits a support request",
      email: true,
      push: true,
      inApp: true
    },
    {
      id: 5,
      name: "Low Inventory Alert",
      description: "When product stock falls below threshold",
      email: true,
      push: true,
      inApp: false
    }
  ]

  const emailConfig = {
    fromName: "Bustard E-commerce",
    fromEmail: "noreply@bustard.com",
    replyTo: "support@bustard.com",
    smtpHost: "smtp.bustard.com",
    smtpPort: 587,
    smtpEncryption: "TLS"
  }

  const TabButton = ({ id, label, icon }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-colors ${activeTab === id ? "bg-indigo-100 text-indigo-700 border border-indigo-200" : "text-gray-500 hover:bg-gray-100"}`}
    >
      {icon}
      <span className="font-medium">{label}</span>
    </button>
  )

  const StatusBadge = ({ status }) => (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${status === "active" ? "bg-green-100 text-green-800 border border-green-200" : "bg-gray-100 text-gray-800 border border-gray-200"}`}>
      {status === "active" ? (
        <>
          <CheckCircle className="h-3 w-3 mr-1" />
          Active
        </>
      ) : (
        <>
          <XCircle className="h-3 w-3 mr-1" />
          Inactive
        </>
      )}
    </span>
  )

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Communications</h1>
              <p className="text-gray-600 mt-2">Manage communications settings and configurations</p>
            </div>
            <div className="flex space-x-3 mt-4 md:mt-0">
              <button className="flex items-center justify-center px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50">
                <Download className="h-4 w-4 mr-2" />
                Export
              </button>
              <button className="flex items-center justify-center px-4 py-2 bg-indigo-600 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white hover:bg-indigo-700">
                <BarChart3 className="h-4 w-4 mr-2" />
                Analytics
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
          <div className="flex flex-wrap gap-2">
            <TabButton id="templates" label="Email Templates" icon={<FileText className="h-4 w-4" />} />
            <TabButton id="notifications" label="Notifications" icon={<Bell className="h-4 w-4" />} />
            <TabButton id="email" label="Email Settings" icon={<Mail className="h-4 w-4" />} />
            <TabButton id="sms" label="SMS Settings" icon={<MessageSquare className="h-4 w-4" />} />
            <TabButton id="preferences" label="Preferences" icon={<Settings className="h-4 w-4" />} />
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          {/* Email Templates */}
          {activeTab === "templates" && (
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Email Templates</h3>
                  <p className="text-gray-500 mt-1">Manage your email templates and automations</p>
                </div>
                <div className="flex space-x-3 mt-4 md:mt-0">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search templates..."
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <button className="flex items-center justify-center px-4 py-2 bg-indigo-600 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white hover:bg-indigo-700">
                    <Plus className="h-4 w-4 mr-2" />
                    New Template
                  </button>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="flex flex-wrap gap-4">
                  <div className="flex-1 min-w-[200px]">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                      <option value="all">All Categories</option>
                      <option value="onboarding">Onboarding</option>
                      <option value="transactions">Transactions</option>
                      <option value="security">Security</option>
                      <option value="marketing">Marketing</option>
                    </select>
                  </div>
                  <div className="flex-1 min-w-[200px]">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                      <option value="all">All Status</option>
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </div>
                  <div className="flex-1 min-w-[200px]">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                      <option value="newest">Newest First</option>
                      <option value="oldest">Oldest First</option>
                      <option value="name">Name</option>
                      <option value="popular">Most Used</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Edited</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Uses</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {emailTemplates.map((template) => (
                      <tr key={template.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{template.name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{template.subject}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex px-2.5 py-0.5 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                            {template.category}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(template.lastEdited).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <StatusBadge status={template.status} />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {template.uses}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex items-center space-x-2">
                            <button className="text-indigo-600 hover:text-indigo-900">
                              <Edit3 className="h-4 w-4" />
                            </button>
                            <button className="text-gray-500 hover:text-gray-700">
                              <Eye className="h-4 w-4" />
                            </button>
                            <button className="text-gray-500 hover:text-gray-700">
                              <Copy className="h-4 w-4" />
                            </button>
                            <button className="text-red-600 hover:text-red-900">
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Notifications */}
          {activeTab === "notifications" && (
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Notification Settings</h3>
                  <p className="text-gray-500 mt-1">Configure how and when you receive notifications</p>
                </div>
                <button className="flex items-center justify-center px-4 py-2 bg-indigo-600 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white hover:bg-indigo-700 mt-4 md:mt-0">
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </button>
              </div>

              <div className="space-y-4">
                {notificationSettings.map((setting) => (
                  <div key={setting.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-gray-900">{setting.name}</h4>
                      <p className="text-sm text-gray-500 mt-1">{setting.description}</p>
                    </div>
                    <div className="flex items-center space-x-6 ml-4">
                      <div className="flex items-center">
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" defaultChecked={setting.email} className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                          <span className="ml-2 text-sm font-medium text-gray-900">Email</span>
                        </label>
                      </div>
                      <div className="flex items-center">
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" defaultChecked={setting.push} className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                          <span className="ml-2 text-sm font-medium text-gray-900">Push</span>
                        </label>
                      </div>
                      <div className="flex items-center">
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" defaultChecked={setting.inApp} className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                          <span className="ml-2 text-sm font-medium text-gray-900">In-App</span>
                        </label>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Email Settings */}
          {activeTab === "email" && (
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Email Configuration</h3>
                  <p className="text-gray-500 mt-1">Set up your email service provider and preferences</p>
                </div>
                <button className="flex items-center justify-center px-4 py-2 bg-indigo-600 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white hover:bg-indigo-700 mt-4 md:mt-0">
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">From Name</label>
                  <input
                    type="text"
                    defaultValue={emailConfig.fromName}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">From Email</label>
                  <input
                    type="email"
                    defaultValue={emailConfig.fromEmail}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Reply-To Address</label>
                  <input
                    type="email"
                    defaultValue={emailConfig.replyTo}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">SMTP Host</label>
                  <input
                    type="text"
                    defaultValue={emailConfig.smtpHost}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">SMTP Port</label>
                  <input
                    type="number"
                    defaultValue={emailConfig.smtpPort}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Encryption</label>
                  <select
                    defaultValue={emailConfig.smtpEncryption}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  >
                    <option value="none">None</option>
                    <option value="SSL">SSL</option>
                    <option value="TLS">TLS</option>
                  </select>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <div className="flex items-center">
                  <AlertCircle className="h-5 w-5 text-blue-600 mr-3" />
                  <h4 className="text-sm font-medium text-blue-800">Test Email Configuration</h4>
                </div>
                <p className="text-sm text-blue-700 mt-2">
                  Send a test email to verify your email configuration is working correctly.
                </p>
                <div className="flex items-center space-x-3 mt-4">
                  <input
                    type="email"
                    value={testEmail}
                    onChange={(e) => setTestEmail(e.target.value)}
                    placeholder="Enter email address"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <button className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    <TestTube className="h-4 w-4 mr-2" />
                    Send Test
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* SMS Settings */}
          {activeTab === "sms" && (
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">SMS Configuration</h3>
                  <p className="text-gray-500 mt-1">Set up your SMS service provider and preferences</p>
                </div>
                <button className="flex items-center justify-center px-4 py-2 bg-indigo-600 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white hover:bg-indigo-700 mt-4 md:mt-0">
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </button>
              </div>

              <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                <div className="flex items-center">
                  <AlertCircle className="h-5 w-5 text-yellow-600 mr-3" />
                  <h4 className="text-sm font-medium text-yellow-800">SMS Service Not Configured</h4>
                </div>
                <p className="text-sm text-yellow-700 mt-2">
                  To enable SMS notifications, you need to connect to an SMS service provider.
                </p>
                <button className="mt-4 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700">
                  Configure SMS Service
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">SMS Provider</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                    <option value="">Select a provider</option>
                    <option value="twilio">Twilio</option>
                    <option value="nexmo">Vonage (Nexmo)</option>
                    <option value="plivo">Plivo</option>
                    <option value="aws">Amazon SNS</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">API Key</label>
                  <input
                    type="password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">API Secret</label>
                  <input
                    type="password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">From Number</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Preferences */}
          {activeTab === "preferences" && (
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Communication Preferences</h3>
                  <p className="text-gray-500 mt-1">Customize how communications are handled on your platform</p>
                </div>
                <button className="flex items-center justify-center px-4 py-2 bg-indigo-600 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white hover:bg-indigo-700 mt-4 md:mt-0">
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-900">Enable Email Notifications</h4>
                    <p className="text-sm text-gray-500 mt-1">Allow the system to send email notifications</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-900">Enable SMS Notifications</h4>
                    <p className="text-sm text-gray-500 mt-1">Allow the system to send SMS notifications</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-900">Enable Push Notifications</h4>
                    <p className="text-sm text-gray-500 mt-1">Allow the system to send push notifications</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-900">Enable Marketing Emails</h4>
                    <p className="text-sm text-gray-500 mt-1">Allow the system to send marketing communications</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-900">Enable Transactional Emails</h4>
                    <p className="text-sm text-gray-500 mt-1">Allow the system to send transactional emails</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Communications