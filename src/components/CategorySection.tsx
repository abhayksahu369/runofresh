import React, { useState } from 'react';
import { Flame, FishIcon,CarrotIcon} from 'lucide-react';

const categories = [
  { id: 'spices', name: 'Spices', icon: Flame },
  { id: 'meat', name: 'Meat', icon: FishIcon },
  { id: 'vegetables', name: 'Vegetables', icon: CarrotIcon },
];

const products = {
  spices: [
    { id: 1, name: 'Red Chilli Powder', price: '₹199', image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d' },
    { id: 2, name: 'Turmeric Powder', price: '₹149', image: 'https://cdn.shopaccino.com/refresh/articles/turmeric2-901357_l.jpg' },
  ],
  meat: [
    { id: 3, name: 'Chicken Breast', price: '₹349', image: 'https://klcode-images.imgix.net/MwUmAeTjSgOoLS8mavM6_breast.jpeg?auto=compress' },
    { id: 5, name: 'Pork Ribs', price: '₹499', image: 'https://www.charlesfrazer.co.uk/wp-content/uploads/2020/07/B56F03EB-8970-41C2-9FF8-FA78391CC108-scaled.jpeg' },
  ],
  vegetables: [
    { id: 6, name: 'Carrots', price: '₹49', image: 'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2018/4/25/3/shutterstock_440493100_5-second-Studio_carrots.jpg.rend.hgtvcom.1280.853.suffix/1524688181811.jpeg' },
    { id: 7, name: 'Broccoli', price: '₹89', image: 'https://tse4.mm.bing.net/th?id=OIP.Pe9yumMzSSbLHoOYTVLb8wHaE9&pid=Api&P=0&h=180' },
  ],
};

export default function CategorySection() {
  const [selectedCategory, setSelectedCategory] = useState('spices');

  return (
    <>
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-8 mb-12">
          {categories.map(({ id, name, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setSelectedCategory(id)}
              className={`flex flex-col items-center p-4 rounded-full ${
                selectedCategory === id ? 'bg-orange-100 text-orange-600' : 'text-gray-600'
              }`}
            >
              <div className="p-3 bg-white rounded-full shadow-md mb-2">
                <Icon className="h-6 w-6" />
              </div>
              <span className="text-sm font-medium">{name}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-4 gap-6">
          {products[selectedCategory].map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                <p className="text-orange-600 font-bold mt-2">{product.price}</p>
                <button className="mt-4 w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  
      <section className="max-w-6xl mx-auto mt-16 mb-16">
        <div className="grid grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow text-center">
            <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">FRESH AND HYGIENIC PRODUCTS</h3>
            <p className="text-gray-600">Each product is tested for quality and hygiene multiple times to ensure the best quality.</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow text-center">
            <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3L4 9v12h16V9l-8-6zm0 14.5L6.5 12 12 6.5l5.5 5.5-5.5 5.5z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">DIRECT FROM FARM</h3>
            <p className="text-gray-600">We only source our products from farms. All products are collected from farms after we receive orders.</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow text-center">
            <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zm-7 1H5V6h8v3zm4 0h-2V6h2v3z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">FREE & FAST DELIVERY</h3>
            <p className="text-gray-600">With Runofresh, Orders are sourced, processed and delivered within 12 hours of placing with best quality.</p>
          </div>
        </div>
      </section>
      </>
  );
}