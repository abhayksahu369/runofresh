

export default function DealOfTheDay() {
  const deals = [
    {
      id: 1,
      name: "Ginger",
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d",
      price: "₹999",
      originalPrice: "₹1499",
    },
    {
      id: 2,
      name: "Organic Black Cardamom",
      image: "https://img3.exportersindia.com/product_images/bc-full/2019/7/6370017/organic-black-cardamom-1562585757-4987985.jpeg",
      price: "₹299",
      originalPrice: "₹499",
    },
    {
      id: 3,
      name: "Black Pepper",
      image: "https://www.redshipexgroup.com/wp-content/uploads/2023/09/black-milled-pepper-corns-as-background-high-quality-photo-1024x683.jpg",
      price: "₹199",
      originalPrice: "₹299",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Deal of the Day</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {deals.map((deal) => (
            <div key={deal.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={deal.image}
                alt={deal.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{deal.name}</h3>
                <div className="mt-2 flex items-center">
                  <span className="text-xl font-bold text-orange-600">{deal.price}</span>
                  <span className="ml-2 text-sm text-gray-500 line-through">
                    {deal.originalPrice}
                  </span>
                </div>
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
