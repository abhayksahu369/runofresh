import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';

const wishlistItems = [
  {
    id: 1,
    name: "Premium Kashmiri Saffron",
    price: "₹999",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d",
  },
  {
    id: 2,
    name: "Organic Black Cardamom",
    price: "₹299",
    image: "https://img3.exportersindia.com/product_images/bc-full/2019/7/6370017/organic-black-cardamom-1562585757-4987985.jpeg",
  },
];

export default function Wishlist() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center space-x-2 mb-8">
        <Heart className="h-6 w-6 text-orange-600" />
        <h1 className="text-2xl font-bold">My Wishlist</h1>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {wishlistItems.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <button
                className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-md hover:bg-gray-100"
                aria-label="Remove from wishlist"
              >
                <Heart className="h-5 w-5 text-red-500" fill="currentColor" />
              </button>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
              <p className="text-orange-600 font-bold mt-2">{item.price}</p>
              <button className="mt-4 w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700 flex items-center justify-center space-x-2">
                <ShoppingCart className="h-5 w-5" />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}