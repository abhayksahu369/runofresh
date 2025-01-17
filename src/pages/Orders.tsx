
import { Package } from 'lucide-react';

const orders = [
  {
    id: "ORD123456",
    date: "2024-03-15",
    status: "Delivered",
    total: "₹1,499",
    items: [
      {
        id: 1,
        name: "Premium Kashmiri Saffron",
        price: "₹999",
        quantity: 1,
        image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d",
      },
      {
        id: 2,
        name: "Organic Black Cardamom",
        price: "₹299",
        quantity: 2,
        image: "https://img3.exportersindia.com/product_images/bc-full/2019/7/6370017/organic-black-cardamom-1562585757-4987985.jpeg",
      },
    ],
  },
];

export default function Orders() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center space-x-2 mb-8">
        <Package className="h-6 w-6 text-orange-600" />
        <h1 className="text-2xl font-bold">My Orders</h1>
      </div>

      <div className="space-y-6">
        {orders.map((order) => (
          <div key={order.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Order Summary Section */}
            <div className="border-b border-gray-200 p-4">
              <div className="flex justify-between items-start sm:items-center sm:flex-row flex-col">
                <div className="mb-4 sm:mb-0">
                  <p className="text-sm text-gray-600">Order #{order.id}</p>
                  <p className="text-sm text-gray-600">Placed on {order.date}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">Total: {order.total}</p>
                  <p className="text-sm">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {order.status}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Order Items List */}
            <div className="p-4">
              {order.items.map((item) => (
                <div key={item.id} className="flex items-center py-4 border-b last:border-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-20 w-20 object-cover rounded"
                  />
                  <div className="ml-4 flex-1">
                    <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                    <p className="text-sm font-medium text-gray-900">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* View Order Button */}
            <div className="bg-gray-50 px-4 py-3">
              <button className="text-orange-600 hover:text-orange-700 text-sm font-medium">
                View Order Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
