import { User } from 'lucide-react';

export default function Profile() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-md p-8">
        {/* Profile Header */}
        <div className="flex items-center space-x-4 mb-8 flex-col sm:flex-row">
          <div className="bg-orange-100 p-4 rounded-full">
            <User className="h-12 w-12 text-orange-600" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">John Doe</h1>
            <p className="text-gray-600">john.doe@example.com</p>
          </div>
        </div>

        {/* Form Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Personal Information */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Personal Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  value="John Doe"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  value="john.doe@example.com"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="tel"
                  value="+91 9876543210"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
            </div>
          </div>

          {/* Account Settings */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Account Settings</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Language</label>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500">
                  <option>English</option>
                  <option>Hindi</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email Notifications</label>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" className="rounded text-orange-600" checked />
                    <span className="ml-2 text-sm text-gray-600">Order updates</span>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" className="rounded text-orange-600" checked />
                    <span className="ml-2 text-sm text-gray-600">Promotions and deals</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-8 flex justify-end">
          <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
