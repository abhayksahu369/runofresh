import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, User, Coins, Menu, X, MapPin } from 'lucide-react';

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);

  const cities = ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad', 'Ahmedabad'];

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown')) {
        setIsDropdownOpen(false);
        setIsLocationDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center flex-1">
            <span className="text-xl font-bold text-orange-600">
              <Link to="/">RunoFresh</Link>
            </span>

            {/* Toggleable Search Bar */}
            <div className={`ml-6 flex-1 max-w-lg ${isSearchVisible ? '' : 'hidden'} sm:block`}>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for Fresh Farm Products..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:border-orange-500"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Search button for mobile */}
            <button
              className="ml-4 sm:hidden text-gray-600 hover:text-orange-600"
              onClick={() => setIsSearchVisible(!isSearchVisible)}
            >
              <Search className="h-5 w-5" />
            </button>
          </div>

          <div className="flex items-center space-x-4">
            {/* Hamburger menu for mobile */}
            <button
              className="lg:hidden text-gray-600 hover:text-orange-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            {/* Desktop account menu */}
            <div className="relative hidden lg:block dropdown">
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

            {/* Desktop buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link to="/cart" className="flex items-center space-x-1 hover:text-orange-600">
                <ShoppingCart className="h-5 w-5" />
                <span>Cart</span>
              </Link>

              <Link to="/runocoin" className="flex items-center space-x-1 hover:text-orange-600">
                <Coins className="h-5 w-5" />
                <span>RunoCoins</span>
              </Link>

              {/* Location Icon and Dropdown */}
              <div className="relative dropdown">
                <button
                  className="flex items-center space-x-1 hover:text-orange-600"
                  onClick={() => setIsLocationDropdownOpen(!isLocationDropdownOpen)}
                >
                  <MapPin className="h-5 w-5" />
                  <span>Location</span>
                </button>
                {isLocationDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                    {cities.map((city) => (
                      <a
                        key={city}
                        href={`/${city.toLowerCase()}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50"
                      >
                        {city}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-md py-2">
          <div className="flex flex-col items-center space-y-4">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center space-x-1 hover:text-orange-600"
            >
              <User className="h-5 w-5" />
              <span>Account</span>
            </button>

            <Link to="/cart" className="flex items-center space-x-1 hover:text-orange-600">
              <ShoppingCart className="h-5 w-5" />
              <span>Cart</span>
            </Link>

            <Link to="/runocoins" className="flex items-center space-x-1 hover:text-orange-600">
              <Coins className="h-5 w-5" />
              <span>RunoCoins</span>
            </Link>

            {/* Location Dropdown for Mobile */}
            <div className="relative dropdown">
              <button
                className="flex items-center space-x-1 hover:text-orange-600"
                onClick={() => setIsLocationDropdownOpen(!isLocationDropdownOpen)}
              >
                <MapPin className="h-5 w-5" />
                <span>Location</span>
              </button>
              {isLocationDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  {cities.map((city) => (
                    <a
                      key={city}
                      href={`/${city.toLowerCase()}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50"
                    >
                      {city}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
