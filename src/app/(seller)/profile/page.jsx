'use client';

import { useState } from 'react';

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('personal');
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Smith',
    email: 'john.smith@example.com',
    phone: '+1 (555) 123-4567',
    businessName: 'Smith Electronics Store',
    businessType: 'Electronics Retailer',
    businessDescription: 'Premium electronics and gadgets store specializing in the latest technology products.',
    address: '123 Commerce Street',
    city: 'San Francisco',
    state: 'CA',
    zipCode: '94102',
    country: 'United States'
  });

  const handleInputChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically call an API to save the data
    console.log('Form data saved:', formData);
  };

  return (
    <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
        <div>
          <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#111827' }}>Profile Management</h1>
          <p style={{ color: '#4B5563', marginTop: '8px' }}>Manage your personal and business information</p>
        </div>
        <button 
          onClick={() => isEditing ? setIsEditing(false) : setIsEditing(true)}
          style={{
            padding: '8px 16px',
            borderRadius: '6px',
            backgroundColor: isEditing ? 'transparent' : '#2563eb',
            color: isEditing ? '#2563eb' : 'white',
            border: isEditing ? '1px solid #2563eb' : 'none',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'background-color 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = isEditing ? '#f3f4f6' : '#1d4ed8'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = isEditing ? 'transparent' : '#2563eb'}
        >
          {isEditing ? "Cancel" : "Edit Profile"}
        </button>
      </div>

      {/* Profile Overview Card */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '24px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        marginBottom: '24px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <div style={{ position: 'relative' }}>
            <div style={{
              height: '96px',
              width: '96px',
              borderRadius: '50%',
              backgroundColor: '#dbeafe',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#2563eb',
              fontSize: '20px',
              overflow: 'hidden'
            }}>
              <img 
                src="/placeholder-avatar.jpg" 
                alt="Profile" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div style={{ display: 'none', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                JS
              </div>
            </div>
            {isEditing && (
              <button style={{
                position: 'absolute',
                bottom: '-8px',
                right: '-8px',
                height: '32px',
                width: '32px',
                backgroundColor: '#2563eb',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                border: 'none',
                cursor: 'pointer'
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                  <circle cx="12" cy="13" r="3" />
                </svg>
              </button>
            )}
          </div>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827' }}>{formData.firstName} {formData.lastName}</h2>
            <p style={{ color: '#2563eb', fontWeight: '500' }}>{formData.businessName}</p>
            <p style={{ color: '#6B7280' }}>{formData.businessType}</p>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '8px', gap: '16px', fontSize: '14px', color: '#4B5563' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>{formData.email}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>{formData.phone}</span>
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '4px 12px',
              backgroundColor: '#dcfce7',
              color: '#166534',
              borderRadius: '9999px',
              fontSize: '14px',
              fontWeight: '500'
            }}>
              ✓ Verified Seller
            </div>
            <p style={{ fontSize: '14px', color: '#6B7280', marginTop: '8px' }}>Member since Jan 2023</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ marginBottom: '24px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '8px',
          backgroundColor: '#f3f4f6',
          padding: '4px',
          borderRadius: '8px'
        }}>
          <button
            onClick={() => setActiveTab('personal')}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '8px 12px',
              borderRadius: '6px',
              backgroundColor: activeTab === 'personal' ? 'white' : 'transparent',
              color: activeTab === 'personal' ? '#111827' : '#6B7280',
              fontWeight: '500',
              border: 'none',
              cursor: 'pointer',
              boxShadow: activeTab === 'personal' ? '0 1px 2px rgba(0,0,0,0.1)' : 'none'
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span>Personal Info</span>
          </button>
          <button
            onClick={() => setActiveTab('business')}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '8px 12px',
              borderRadius: '6px',
              backgroundColor: activeTab === 'business' ? 'white' : 'transparent',
              color: activeTab === 'business' ? '#111827' : '#6B7280',
              fontWeight: '500',
              border: 'none',
              cursor: 'pointer',
              boxShadow: activeTab === 'business' ? '0 1px 2px rgba(0,0,0,0.1)' : 'none'
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
            <span>Business Details</span>
          </button>
          <button
            onClick={() => setActiveTab('payment')}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '8px 12px',
              borderRadius: '6px',
              backgroundColor: activeTab === 'payment' ? 'white' : 'transparent',
              color: activeTab === 'payment' ? '#111827' : '#6B7280',
              fontWeight: '500',
              border: 'none',
              cursor: 'pointer',
              boxShadow: activeTab === 'payment' ? '0 1px 2px rgba(0,0,0,0.1)' : 'none'
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
              <line x1="1" y1="10" x2="23" y2="10" />
            </svg>
            <span>Payment Methods</span>
          </button>
          <button
            onClick={() => setActiveTab('security')}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '8px 12px',
              borderRadius: '6px',
              backgroundColor: activeTab === 'security' ? 'white' : 'transparent',
              color: activeTab === 'security' ? '#111827' : '#6B7280',
              fontWeight: '500',
              border: 'none',
              cursor: 'pointer',
              boxShadow: activeTab === 'security' ? '0 1px 2px rgba(0,0,0,0.1)' : 'none'
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="11" r="1" />
              <path d="M12 21a10 10 0 1 0-10-10 10 10 0 0 0 10 10z" />
              <path d="M12 7v4l2 2" />
            </svg>
            <span>Security</span>
          </button>
        </div>
      </div>

      {/* Personal Information Tab */}
      {activeTab === 'personal' && (
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '24px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#111827', marginBottom: '24px' }}>Personal Information</h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 1fr)',
            gap: '24px',
            marginBottom: '24px'
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '24px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '14px', fontWeight: '500', color: '#374151' }} htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  style={{
                    padding: '8px 12px',
                    borderRadius: '6px',
                    border: '1px solid #D1D5DB',
                    backgroundColor: !isEditing ? '#f9fafb' : 'white',
                    fontSize: '14px'
                  }}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '14px', fontWeight: '500', color: '#374151' }} htmlFor="lastName">Last Name</label>
                <input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  style={{
                    padding: '8px 12px',
                    borderRadius: '6px',
                    border: '1px solid #D1D5DB',
                    backgroundColor: !isEditing ? '#f9fafb' : 'white',
                    fontSize: '14px'
                  }}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '14px', fontWeight: '500', color: '#374151' }} htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  style={{
                    padding: '8px 12px',
                    borderRadius: '6px',
                    border: '1px solid #D1D5DB',
                    backgroundColor: !isEditing ? '#f9fafb' : 'white',
                    fontSize: '14px'
                  }}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '14px', fontWeight: '500', color: '#374151' }} htmlFor="phone">Phone Number</label>
                <input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  style={{
                    padding: '8px 12px',
                    borderRadius: '6px',
                    border: '1px solid #D1D5DB',
                    backgroundColor: !isEditing ? '#f9fafb' : 'white',
                    fontSize: '14px'
                  }}
                />
              </div>
            </div>
          </div>
          {isEditing && (
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '24px' }}>
              <button 
                onClick={handleSave}
                style={{
                  padding: '8px 16px',
                  borderRadius: '6px',
                  backgroundColor: '#2563eb',
                  color: 'white',
                  border: 'none',
                  fontWeight: '500',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'background-color 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#1d4ed8'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                  <polyline points="17 21 17 13 7 13 7 21" />
                  <polyline points="7 3 7 8 15 8" />
                </svg>
                Save Changes
              </button>
            </div>
          )}
        </div>
      )}

      {/* Business Details Tab */}
      {activeTab === 'business' && (
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '24px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#111827', marginBottom: '24px' }}>Business Details</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '24px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '14px', fontWeight: '500', color: '#374151' }} htmlFor="businessName">Business Name</label>
                <input
                  id="businessName"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  style={{
                    padding: '8px 12px',
                    borderRadius: '6px',
                    border: '1px solid #D1D5DB',
                    backgroundColor: !isEditing ? '#f9fafb' : 'white',
                    fontSize: '14px'
                  }}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '14px', fontWeight: '500', color: '#374151' }} htmlFor="businessType">Business Type</label>
                <input
                  id="businessType"
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  style={{
                    padding: '8px 12px',
                    borderRadius: '6px',
                    border: '1px solid #D1D5DB',
                    backgroundColor: !isEditing ? '#f9fafb' : 'white',
                    fontSize: '14px'
                  }}
                />
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '14px', fontWeight: '500', color: '#374151' }} htmlFor="businessDescription">Business Description</label>
              <textarea
                id="businessDescription"
                name="businessDescription"
                value={formData.businessDescription}
                onChange={handleInputChange}
                disabled={!isEditing}
                style={{
                  padding: '8px 12px',
                  borderRadius: '6px',
                  border: '1px solid #D1D5DB',
                  backgroundColor: !isEditing ? '#f9fafb' : 'white',
                  fontSize: '14px',
                  minHeight: '80px',
                  resize: 'vertical'
                }}
              />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '24px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '14px', fontWeight: '500', color: '#374151' }} htmlFor="address">Address</label>
                <input
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  style={{
                    padding: '8px 12px',
                    borderRadius: '6px',
                    border: '1px solid #D1D5DB',
                    backgroundColor: !isEditing ? '#f9fafb' : 'white',
                    fontSize: '14px'
                  }}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '14px', fontWeight: '500', color: '#374151' }} htmlFor="city">City</label>
                <input
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  style={{
                    padding: '8px 12px',
                    borderRadius: '6px',
                    border: '1px solid #D1D5DB',
                    backgroundColor: !isEditing ? '#f9fafb' : 'white',
                    fontSize: '14px'
                  }}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '14px', fontWeight: '500', color: '#374151' }} htmlFor="state">State</label>
                <input
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  style={{
                    padding: '8px 12px',
                    borderRadius: '6px',
                    border: '1px solid #D1D5DB',
                    backgroundColor: !isEditing ? '#f9fafb' : 'white',
                    fontSize: '14px'
                  }}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '14px', fontWeight: '500', color: '#374151' }} htmlFor="zipCode">ZIP Code</label>
                <input
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  style={{
                    padding: '8px 12px',
                    borderRadius: '6px',
                    border: '1px solid #D1D5DB',
                    backgroundColor: !isEditing ? '#f9fafb' : 'white',
                    fontSize: '14px'
                  }}
                />
              </div>
            </div>
          </div>
          {isEditing && (
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '24px' }}>
              <button 
                onClick={handleSave}
                style={{
                  padding: '8px 16px',
                  borderRadius: '6px',
                  backgroundColor: '#2563eb',
                  color: 'white',
                  border: 'none',
                  fontWeight: '500',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'background-color 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#1d4ed8'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                  <polyline points="17 21 17 13 7 13 7 21" />
                  <polyline points="7 3 7 8 15 8" />
                </svg>
                Save Changes
              </button>
            </div>
          )}
        </div>
      )}

      {/* Payment Methods Tab */}
      {activeTab === 'payment' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '24px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#111827', marginBottom: '24px' }}>Payment Methods</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{
                border: '1px solid #E5E7EB',
                borderRadius: '8px',
                padding: '16px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      height: '40px',
                      width: '40px',
                      backgroundColor: '#dbeafe',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                        <line x1="1" y1="10" x2="23" y2="10" />
                      </svg>
                    </div>
                    <div>
                      <p style={{ fontWeight: '500', color: '#111827' }}>Bank Account</p>
                      <p style={{ fontSize: '14px', color: '#6B7280' }}>****1234 - Wells Fargo</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 8px',
                      backgroundColor: '#dcfce7',
                      color: '#166534',
                      borderRadius: '9999px',
                      fontSize: '12px',
                      fontWeight: '500'
                    }}>
                      Primary
                    </span>
                    <button style={{
                      padding: '6px 12px',
                      borderRadius: '6px',
                      border: '1px solid #D1D5DB',
                      backgroundColor: 'white',
                      fontSize: '14px',
                      fontWeight: '500',
                      cursor: 'pointer'
                    }}>
                      Edit
                    </button>
                  </div>
                </div>
              </div>
              <button style={{
                width: '100%',
                padding: '8px 16px',
                borderRadius: '6px',
                border: '1px dashed #D1D5DB',
                backgroundColor: 'transparent',
                color: '#4B5563',
                fontWeight: '500',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
                Add New Payment Method
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Security Tab */}
      {activeTab === 'security' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '24px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#111827', marginBottom: '24px' }}>Security Settings</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 0',
                borderBottom: '1px solid #E5E7EB'
              }}>
                <div>
                  <h4 style={{ fontWeight: '500', color: '#111827' }}>Two-Factor Authentication</h4>
                  <p style={{ fontSize: '14px', color: '#6B7280' }}>Add an extra layer of security to your account</p>
                </div>
                <label style={{ position: 'relative', display: 'inline-block', width: '44px', height: '24px' }}>
                  <input type="checkbox" style={{ opacity: 0, width: 0, height: 0 }} />
                  <span style={{
                    position: 'absolute',
                    cursor: 'pointer',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: '#E5E7EB',
                    transition: '.4s',
                    borderRadius: '24px'
                  }}></span>
                  <span style={{
                    position: 'absolute',
                    content: '""',
                    height: '20px',
                    width: '20px',
                    left: '2px',
                    bottom: '2px',
                    backgroundColor: 'white',
                    transition: '.4s',
                    borderRadius: '50%'
                  }}></span>
                </label>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 0',
                borderBottom: '1px solid #E5E7EB'
              }}>
                <div>
                  <h4 style={{ fontWeight: '500', color: '#111827' }}>Email Notifications</h4>
                  <p style={{ fontSize: '14px', color: '#6B7280' }}>Receive security alerts via email</p>
                </div>
                <label style={{ position: 'relative', display: 'inline-block', width: '44px', height: '24px' }}>
                  <input type="checkbox" defaultChecked style={{ opacity: 0, width: 0, height: 0 }} />
                  <span style={{
                    position: 'absolute',
                    cursor: 'pointer',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: '#2563eb',
                    transition: '.4s',
                    borderRadius: '24px'
                  }}></span>
                  <span style={{
                    position: 'absolute',
                    content: '""',
                    height: '20px',
                    width: '20px',
                    left: '2px',
                    bottom: '2px',
                    backgroundColor: 'white',
                    transition: '.4s',
                    borderRadius: '50%',
                    transform: 'translateX(20px)'
                  }}></span>
                </label>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 0'
              }}>
                <div>
                  <h4 style={{ fontWeight: '500', color: '#111827' }}>SMS Notifications</h4>
                  <p style={{ fontSize: '14px', color: '#6B7280' }}>Receive security alerts via SMS</p>
                </div>
                <label style={{ position: 'relative', display: 'inline-block', width: '44px', height: '24px' }}>
                  <input type="checkbox" style={{ opacity: 0, width: 0, height: 0 }} />
                  <span style={{
                    position: 'absolute',
                    cursor: 'pointer',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: '#E5E7EB',
                    transition: '.4s',
                    borderRadius: '24px'
                  }}></span>
                  <span style={{
                    position: 'absolute',
                    content: '""',
                    height: '20px',
                    width: '20px',
                    left: '2px',
                    bottom: '2px',
                    backgroundColor: 'white',
                    transition: '.4s',
                    borderRadius: '50%'
                  }}></span>
                </label>
              </div>
            </div>
          </div>

          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '24px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#111827', marginBottom: '24px' }}>Change Password</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '14px', fontWeight: '500', color: '#374151' }} htmlFor="currentPassword">Current Password</label>
                <input 
                  id="currentPassword" 
                  type="password" 
                  style={{
                    padding: '8px 12px',
                    borderRadius: '6px',
                    border: '1px solid #D1D5DB',
                    fontSize: '14px'
                  }}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '14px', fontWeight: '500', color: '#374151' }} htmlFor="newPassword">New Password</label>
                <input 
                  id="newPassword" 
                  type="password" 
                  style={{
                    padding: '8px 12px',
                    borderRadius: '6px',
                    border: '1px solid #D1D5DB',
                    fontSize: '14px'
                  }}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '14px', fontWeight: '500', color: '#374151' }} htmlFor="confirmPassword">Confirm New Password</label>
                <input 
                  id="confirmPassword" 
                  type="password" 
                  style={{
                    padding: '8px 12px',
                    borderRadius: '6px',
                    border: '1px solid #D1D5DB',
                    fontSize: '14px'
                  }}
                />
              </div>
              <button style={{
                padding: '8px 16px',
                borderRadius: '6px',
                backgroundColor: '#2563eb',
                color: 'white',
                border: 'none',
                fontWeight: '500',
                cursor: 'pointer',
                alignSelf: 'flex-start',
                transition: 'background-color 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#1d4ed8'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
              >
                Update Password
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;