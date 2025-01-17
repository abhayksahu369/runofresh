import { useState, useEffect } from "react";
import { FaFish, FaLeaf, FaPepperHot, FaAppleAlt, FaCarrot } from "react-icons/fa";

export default function Hero() {
  const images = [
    "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=1000A",
    "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&q=80&w=1000",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-[600px] bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col lg:flex-row items-center h-full">
          <div className="lg:w-1/2 pr-8 mb-8 lg:mb-0">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Farm Fresh Products Delivered to Your Door
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              From farm-fresh meats to local spices, get the finest quality products sourced directly from verified farmers and suppliers.
            </p>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="bg-orange-100 p-3 rounded-full shadow">
                  <FaPepperHot className="text-orange-600 text-2xl" />
                </div>
                <span className="mt-2 text-sm text-gray-700">Spices</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-orange-100 p-3 rounded-full shadow">
                  <FaFish className="text-orange-600 text-2xl" />
                </div>
                <span className="mt-2 text-sm text-gray-700">Meat</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-orange-100 p-3 rounded-full shadow">
                  <FaLeaf className="text-orange-600 text-2xl" />
                </div>
                <span className="mt-2 text-sm text-gray-700">Vegetables</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-orange-100 p-3 rounded-full shadow">
                  <FaAppleAlt className="text-orange-600 text-2xl" />
                </div>
                <span className="mt-2 text-sm text-gray-700">Fruits</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-orange-100 p-3 rounded-full shadow">
                  <FaCarrot className="text-orange-600 text-2xl" />
                </div>
                <span className="mt-2 text-sm text-gray-700">Organic</span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative overflow-hidden rounded-lg shadow-xl">
            <img
              src={images[currentIndex]}
              alt="Fresh farm products"
              className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
