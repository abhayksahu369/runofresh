import React from 'react';
import { MapPin, Plus } from 'lucide-react';

const addresses = [
  {
    id: 1,
    type: "Home",
    name: "John Doe",
    street: "123 Main Street",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400001",
    phone: "+91 9876543210",
    isDefault: true,
  },
  {
    id: 2,
    type: "Office",
    name: "John Doe",
    street: "456 Business Park",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400051",
    phone: "+91 9876543210",
    isDefault: false,
  },
];

export default function Address() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-2">
          <MapPin className="h-6 w-6 text-orange-600" />
          <h1 className="text-2xl font-bold">Manage Addresses</h1>
        </div>
        <button className="flex items-center space-x-2 bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700">
          <Plus className="h-5 w-5" />
          <span>Add New Address</span>
        </button>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {addresses.map((address) => (
          <div
            key={address.id}
            className="bg-white rounded-lg shadow-md p-6 relative"
          >
            {address.isDefault && (
              <span className="absolute top-4 right-4 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Default
              </span>
            )}
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="h-5 w-5 text-orange-600" />
              <span className="font-medium">{address.type}</span>
            </div>
            <div className="space-y-2">
              <p className="font-medium">{address.name}</p>
              <p className="text-gray-600">{address.street}</p>
              <p className="text-gray-600">
                {address.city}, {address.state} - {address.pincode}
              </p>
              <p className="text-gray-600">Phone: {address.phone}</p>
            </div>
            <div className="mt-6 flex space-x-4">
              <button className="text-orange-600 hover:text-orange-700 text-sm font-medium">
                Edit
              </button>
              <button className="text-gray-600 hover:text-gray-700 text-sm font-medium">
                Delete
              </button>
              {!address.isDefault && (
                <button className="text-orange-600 hover:text-orange-700 text-sm font-medium">
                  Set as Default
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}