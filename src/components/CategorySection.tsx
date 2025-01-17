import React, { useState, useEffect } from 'react';
import { Flame, FishIcon, CarrotIcon } from 'lucide-react';

const categories = [
  { id: 'spices', name: 'Spices', icon: Flame },
  { id: 'meat', name: 'Meat', icon: FishIcon },
  { id: 'vegetables', name: 'Vegetables', icon: CarrotIcon },
];

const getLocationBasedProducts = (location) => {
  const allProducts = {
    Mumbai: {
      spices: [
        { id: 1, name: 'Red Chilli Powder', price: '₹199', image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d' },
        { id: 2, name: 'Turmeric Powder', price: '₹149', image: 'https://cdn.shopaccino.com/refresh/articles/turmeric2-901357_l.jpg' },
      ],
      meat: [
        { id: 3, name: 'Chicken Breast', price: '₹349', image: 'https://klcode-images.imgix.net/MwUmAeTjSgOoLS8mavM6_breast.jpeg?auto=compress' },
        { id: 4, name: 'Pork Ribs', price: '₹499', image: 'https://www.charlesfrazer.co.uk/wp-content/uploads/2020/07/B56F03EB-8970-41C2-9FF8-FA78391CC108-scaled.jpeg' },
      ],
      vegetables: [
        { id: 5, name: 'Carrots', price: '₹49', image: 'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2018/4/25/3/shutterstock_440493100_5-second-Studio_carrots.jpg.rend.hgtvcom.1280.853.suffix/1524688181811.jpeg' },
        { id: 6, name: 'Broccoli', price: '₹89', image: 'https://tse4.mm.bing.net/th?id=OIP.Pe9yumMzSSbLHoOYTVLb8wHaE9&pid=Api&P=0&h=180' },
      ],
    },
    Delhi: {
      spices: [
        { id: 1, name: 'Garam Masala', price: '₹199', image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d' },
        { id: 2, name: 'Coriander Powder', price: '₹149', image: 'https://cdn.shopaccino.com/refresh/articles/turmeric2-901357_l.jpg' },
      ],
      meat: [
        { id: 3, name: 'Lamb Chops', price: '₹349', image: 'https://klcode-images.imgix.net/MwUmAeTjSgOoLS8mavM6_breast.jpeg?auto=compress' },
        { id: 4, name: 'Goat Meat', price: '₹499', image: 'https://www.charlesfrazer.co.uk/wp-content/uploads/2020/07/B56F03EB-8970-41C2-9FF8-FA78391CC108-scaled.jpeg' },
      ],
      vegetables: [
        { id: 5, name: 'Spinach', price: '₹49', image: 'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2018/4/25/3/shutterstock_440493100_5-second-Studio_carrots.jpg.rend.hgtvcom.1280.853.suffix/1524688181811.jpeg' },
        { id: 6, name: 'Cauliflower', price: '₹89', image: 'https://tse4.mm.bing.net/th?id=OIP.Pe9yumMzSSbLHoOYTVLb8wHaE9&pid=Api&P=0&h=180' },
      ],
    },
  };

  return allProducts[location] || allProducts.Mumbai;
};

export default function CategorySection({ selectedLocation }) {
  const [selectedCategory, setSelectedCategory] = useState('spices');
  const [products, setProducts] = useState(getLocationBasedProducts(selectedLocation));

  useEffect(() => {
    setProducts(getLocationBasedProducts(selectedLocation));
  }, [selectedLocation]);

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center space-x-8 mb-12">
          {categories.map(({ id, name, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setSelectedCategory(id)}
              className={`flex flex-col items-center p-4 rounded-full mb-4 ${selectedCategory === id ? 'bg-orange-100 text-orange-600' : 'text-gray-600'}`}
            >
              <div className="p-3 bg-white rounded-full shadow-md mb-2">
                <Icon className="h-6 w-6" />
              </div>
              <span className="text-sm font-medium">{name}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
  );
}
