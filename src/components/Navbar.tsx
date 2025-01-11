import React, { useState } from 'react';
import { Search, ShoppingCart, User, Coins } from 'lucide-react';

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center flex-1">
            <span className="text-xl font-bold text-orange-600"><a href='/' >RunoFresh</a></span>
            <div className="ml-6 flex-1 max-w-lg">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for Fresh Farm Products..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:border-orange-500"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-1 hover:text-orange-600"
              >
                <User className="h-5 w-5" />
                <span>Account</span>
              </button>
              
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  {['Profile', 'Manage Address', 'Wishlist', 'Orders', 'Logout'].map((item) => (
                    <a
                      key={item}
                      href={`/${item}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <button className="flex items-center space-x-1 hover:text-orange-600">
              <ShoppingCart className="h-5 w-5" />
              <span>Cart</span>
            </button>

            <button className="flex items-center space-x-1 hover:text-orange-600">
              <Coins className="h-5 w-5" />
              <span>RunoCoins</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}