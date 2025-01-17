import React, { useState, useEffect } from "react";

export default function Runocoin() {
  const totalOrdersForReward = 20; // Total orders needed to complete the reward
  const [completedOrders, setCompletedOrders] = useState(0);
  const progressPercentage = (completedOrders / totalOrdersForReward) * 100;

  useEffect(() => {
    // Simulated API call
    setTimeout(() => setCompletedOrders(6), 1000); // Replace with real API logic
  }, []);

  return (
    <div className="min-h-screen bg-orange-50">
      {/* Header */}
      <header className="bg-orange-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-orange-600">RunoCoins</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Status Bar */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Earn RunoCoins for Your Orders
          </h2>
          <div className="bg-gray-200 rounded-full h-4 overflow-hidden">
            <div
              className="bg-orange-600 h-full transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <p className="mt-2 text-gray-600">
            You have completed <b>{completedOrders}</b> out of <b>{totalOrdersForReward}</b> orders. Earn RunoCoins for
            every order you place. Keep going!
          </p>
          <p className="mt-1 text-orange-600 font-semibold">
            {progressPercentage.toFixed(1)}% completed out of 100%.
          </p>
        </section>

        {/* Rule Section */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-2">
            How RunoCoins Work
          </h3>
          <p className="text-gray-600">
            For every order you place, you will earn 5 RunoCoins. Once you
            complete 20 orders, you will reach 100% and unlock exclusive rewards
            or discounts on future purchases. Start earning now and enjoy the
            benefits of RunoCoins!
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-orange-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-600">
            © 2025 RunoFresh. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
