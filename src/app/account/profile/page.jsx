'use client';

import { useState } from 'react';
import { User, MapPin, Phone, Mail, Edit2, Save, Plus, Trash2 } from 'lucide-react';

export default function ProfilePage() {
  const [user, setUser] = useState(null); // From your auth state
  const [isEditing, setIsEditing] = useState(false);
  const [isAddingAddress, setIsAddingAddress] = useState(false);
  const [editedUser, setEditedUser] = useState(user);
  const [newAddress, setNewAddress] = useState({
    type: 'home',
    street: '',
    area: '',
    city: 'Karachi',
    province: 'Sindh',
    postalCode: '',
    isDefault: false
  });

  const pakistaniCities = [
    'Karachi', 'Lahore', 'Islamabad', 'Rawalpindi', 'Faisalabad', 'Multan',
    'Peshawar', 'Quetta', 'Sialkot', 'Gujranwala', 'Hyderabad', 'Sukkur'
  ];

  const pakistaniProvinces = ['Punjab', 'Sindh', 'Khyber Pakhtunkhwa', 'Balochistan'];

  const handleSave = () => {
    if (editedUser) {
      setUser(editedUser);
      setIsEditing(false);
    }
  };

  const handleAddAddress = () => {
    if (editedUser && newAddress.street && newAddress.area) {
      const address = {
        id: Date.now().toString(),
        type: newAddress.type,
        street: newAddress.street,
        area: newAddress.area,
        city: newAddress.city || 'Karachi',
        province: newAddress.province || 'Sindh',
        postalCode: newAddress.postalCode || '',
        isDefault: newAddress.isDefault || false
      };

      const updatedAddresses = newAddress.isDefault
        ? [address, ...(editedUser.addresses || []).map(addr => ({ ...addr, isDefault: false }))]
        : [...(editedUser.addresses || []), address];

      const updatedUser = {
        ...editedUser,
        addresses: updatedAddresses
      };

      setEditedUser(updatedUser);
      setUser(updatedUser);
      setNewAddress({
        type: 'home',
        street: '',
        area: '',
        city: 'Karachi',
        province: 'Sindh',
        postalCode: '',
        isDefault: false
      });
      setIsAddingAddress(false);
    }
  };

  const removeAddress = (addressId) => {
    if (editedUser) {
      const updatedUser = {
        ...editedUser,
        addresses: (editedUser.addresses || []).filter(addr => addr.id !== addressId)
      };
      setEditedUser(updatedUser);
      setUser(updatedUser);
    }
  };

  const setDefaultAddress = (addressId) => {
    if (editedUser) {
      const updatedUser = {
        ...editedUser,
        addresses: (editedUser.addresses || []).map(addr => ({
          ...addr,
          isDefault: addr.id === addressId
        }))
      };
      setEditedUser(updatedUser);
      setUser(updatedUser);
    }
  };

  if (!user || !editedUser) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Please log in to view your profile</h2>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-900">My Profile</h1>
        <div className="flex items-center gap-4">
          {isEditing ? (
            <>
              <button
                onClick={handleSave}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
              >
                <Save className="h-4 w-4" />
                Save Changes
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors"
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
            >
              <Edit2 className="h-4 w-4" />
              Edit Profile
            </button>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Personal Information */}
        <div className="bg-white rounded-xl p-6 border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <User className="h-5 w-5" />
            Personal Information
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              {isEditing ? (
                <input
                  type="text"
                  value={editedUser.name}
                  onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              ) : (
                <p className="text-gray-900">{user.name}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              {isEditing ? (
                <input
                  type="email"
                  value={editedUser.email}
                  onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              ) : (
                <p className="text-gray-900 flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  {user.email}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
              {isEditing ? (
                <input
                  type="tel"
                  value={editedUser.phone}
                  onChange={(e) => setEditedUser({ ...editedUser, phone: e.target.value })}
                  placeholder="+92 300 1234567"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              ) : (
                <p className="text-gray-900 flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  {user.phone}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Addresses */}
        <div className="bg-white rounded-xl p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Saved Addresses
            </h2>
            <button
              onClick={() => setIsAddingAddress(true)}
              className="text-green-600 hover:text-green-700 flex items-center gap-1 text-sm font-medium"
            >
              <Plus className="h-4 w-4" />
              Add Address
            </button>
          </div>

          {/* Add New Address Form */}
          {isAddingAddress && (
            <div className="mb-6 p-4 border border-gray-200 rounded-lg bg-gray-50">
              <h3 className="font-medium text-gray-900 mb-4">Add New Address</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Address Type</label>
                  <select
                    value={newAddress.type}
                    onChange={(e) => setNewAddress({ ...newAddress, type: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="home">Home</option>
                    <option value="work">Work</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Street Address</label>
                  <input
                    type="text"
                    value={newAddress.street}
                    onChange={(e) => setNewAddress({ ...newAddress, street: e.target.value })}
                    placeholder="House/Flat No, Street Name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Area/Locality</label>
                  <input
                    type="text"
                    value={newAddress.area}
                    onChange={(e) => setNewAddress({ ...newAddress, area: e.target.value })}
                    placeholder="Area, Locality"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                    <select
                      value={newAddress.city}
                      onChange={(e) => setNewAddress({ ...newAddress, city: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      {pakistaniCities.map(city => (
                        <option key={city} value={city}>{city}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Province</label>
                    <select
                      value={newAddress.province}
                      onChange={(e) => setNewAddress({ ...newAddress, province: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      {pakistaniProvinces.map(province => (
                        <option key={province} value={province}>{province}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Postal Code</label>
                  <input
                    type="text"
                    value={newAddress.postalCode}
                    onChange={(e) => setNewAddress({ ...newAddress, postalCode: e.target.value })}
                    placeholder="12345"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={newAddress.isDefault}
                    onChange={(e) => setNewAddress({ ...newAddress, isDefault: e.target.checked })}
                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                  />
                  <label className="ml-2 text-sm text-gray-700">Set as default address</label>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={handleAddAddress}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    Add Address
                  </button>
                  <button
                    onClick={() => setIsAddingAddress(false)}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Existing Addresses */}
          <div className="space-y-4">
            {user.addresses.length === 0 ? (
              <p className="text-gray-500 text-center py-4">No addresses added yet</p>
            ) : (
              user.addresses.map((address) => (
                <div key={address.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium capitalize">{address.type}</span>
                        {address.isDefault && (
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                            Default
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 text-sm">
                        {address.street}<br />
                        {address.area}<br />
                        {address.city}, {address.province} {address.postalCode}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      {!address.isDefault && (
                        <button
                          onClick={() => setDefaultAddress(address.id)}
                          className="text-xs text-green-600 hover:text-green-700"
                        >
                          Set Default
                        </button>
                      )}
                      <button
                        onClick={() => removeAddress(address.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Account Actions */}
      <div className="mt-8 bg-white rounded-xl p-6 border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Account Actions</h2>
        <button
          onClick={() => {
            // Handle logout
          }}
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
