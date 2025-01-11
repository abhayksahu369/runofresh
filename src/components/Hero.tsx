import React from 'react';

export default function Hero() {
  return (
    <>
      <div className="relative h-[600px]  bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center h-full">
            <div className="w-1/2 pr-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Farm Fresh Products Delivered to Your Door
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                From farm-fresh meats to local spices, get the finest quality products sourced directly from verified farmers and suppliers.
              </p>
              <button className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition">
                Shop Now
              </button>
            </div>
            <div className="w-1/2">
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1000"
                alt="Fresh farm products"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
      <section className="max-w-6xl mx-auto mt-16 mb-16">
        <h2 className="text-2xl font-bold mb-8">Popular Categories</h2>
        <div className="grid grid-cols-3 gap-8">
          <div className="bg-white p-4 rounded-lg shadow flex flex-col h-full">
            <img src="https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&q=80&w=1000" alt="Fresh Chicken" className="w-full h-48 object-cover rounded mb-4" />
            <h3 className="text-xl font-bold mb-2">Fresh Chicken</h3>
            <p className="text-gray-600 mb-4 flex-grow">Farm-fresh chicken sourced from verified suppliers</p>
            <button className="bg-orange-600 text-white px-4 py-2 rounded w-full mt-auto">Browse</button>
          </div>

          <div className="bg-white p-4 rounded-lg shadow flex flex-col h-full">
            <img src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=1000A" alt="Country Spices" className="w-full h-48 object-cover rounded mb-4" />
            <h3 className="text-xl font-bold mb-2">Country Spices</h3>
            <p className="text-gray-600 mb-4 flex-grow">Authentic local spices for your kitchen</p>
            <button className="bg-orange-600 text-white px-4 py-2 rounded w-full mt-auto">Browse</button>
          </div>

          <div className="bg-white p-4 rounded-lg shadow flex flex-col h-full">
            <img src="https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&q=80&w=1000" alt="Local Fish" className="w-full h-48 object-cover rounded mb-4" />
            <h3 className="text-xl font-bold mb-2">Local Fish</h3>
            <p className="text-gray-600 mb-4 flex-grow">Fresh local fish varieties daily</p>
            <button className="bg-orange-600 text-white px-4 py-2 rounded w-full mt-auto">Browse</button>
          </div>
        </div>
      </section>

 
    </>
  );
}