import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  const cartItems = [
    {
      id: 1,
      name: "Premium Kashmiri Saffron",
      quantity: 1,
      price: 999,
      image:
        "https://via.placeholder.com/80", // Replace with actual image URL
    },
    {
      id: 2,
      name: "Organic Black Cardamom",
      quantity: 2,
      price: 299,
      image:
        "https://via.placeholder.com/80", // Replace with actual image URL
    },
  ];

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6 flex items-center">
        <span className="text-orange-600 text-3xl mr-2">📦</span> My Cart
      </h1>
      <div className="bg-white rounded-md shadow-md p-6">
        <p className="text-sm text-gray-600 mb-4">
          Order #ORD123456 <br />
          Placed on 2024-03-15
        </p>
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center py-4 border-b">
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 rounded-md mr-4"
            />
            <div className="flex-1">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
              <p className="text-lg font-bold text-orange-600">
                ₹{item.price * item.quantity}
              </p>
            </div>
          </div>
        ))}
        <div className="flex items-center justify-between mt-6">
          <h2 className="text-xl font-semibold">Total: ₹{totalPrice}</h2>
          <span className="px-4 py-1 text-sm bg-red-100 text-red-600 rounded-full">
            Payment pending
          </span>
        </div>
        <button
          onClick={() => navigate("/payment")}
          className="mt-6 w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default Cart;
