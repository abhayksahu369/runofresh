import React, { useState } from "react";

const Payment = () => {
  const [selectedOption, setSelectedOption] = useState("card");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handlePayment = () => {
    alert(`Payment option selected: ${selectedOption}`);
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6 flex items-center">
        <span className="text-orange-600 text-3xl mr-2">💳</span> Payment Options
      </h1>
      <div className="bg-white rounded-md shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4">Select Payment Method</h2>

        {/* Payment Options */}
        <div className="space-y-6">
          {/* Card Payment */}
          <div
            className={`border rounded-md p-4 cursor-pointer transition-all duration-300 ${
              selectedOption === "card" ? "border-orange-600 bg-orange-50" : ""
            }`}
            onClick={() => handleOptionChange("card")}
          >
            <div className="flex items-center">
              <input
                type="radio"
                name="payment"
                id="card"
                checked={selectedOption === "card"}
                onChange={() => handleOptionChange("card")}
                className="mr-4"
              />
              <label htmlFor="card" className="flex-1">
                <h3 className="text-md font-semibold">Card Payment</h3>
                <p className="text-sm text-gray-600">Pay securely using your credit or debit card.</p>
              </label>
            </div>
            {/* Card Payment Input Fields */}
            {selectedOption === "card" && (
              <div className="mt-4 space-y-4">
                <input
                  type="text"
                  placeholder="Card Number"
                  className="w-full border rounded-md p-2"
                />
                <div className="flex space-x-4">
                  <input
                    type="text"
                    placeholder="Expiry Date (MM/YY)"
                    className="w-1/2 border rounded-md p-2"
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    className="w-1/2 border rounded-md p-2"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Cardholder Name"
                  className="w-full border rounded-md p-2"
                />
              </div>
            )}
          </div>

          {/* UPI Payment */}
          <div
            className={`border rounded-md p-4 cursor-pointer transition-all duration-300 ${
              selectedOption === "upi" ? "border-orange-600 bg-orange-50" : ""
            }`}
            onClick={() => handleOptionChange("upi")}
          >
            <div className="flex items-center">
              <input
                type="radio"
                name="payment"
                id="upi"
                checked={selectedOption === "upi"}
                onChange={() => handleOptionChange("upi")}
                className="mr-4"
              />
              <label htmlFor="upi" className="flex-1">
                <h3 className="text-md font-semibold">UPI</h3>
                <p className="text-sm text-gray-600">Pay using UPI apps like Google Pay, PhonePe, etc.</p>
              </label>
            </div>
            {/* UPI Input Field */}
            {selectedOption === "upi" && (
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Enter UPI ID (e.g., username@bank)"
                  className="w-full border rounded-md p-2"
                />
              </div>
            )}
          </div>

          {/* Cash on Delivery */}
          <div
            className={`border rounded-md p-4 cursor-pointer transition-all duration-300 ${
              selectedOption === "cod" ? "border-orange-600 bg-orange-50" : ""
            }`}
            onClick={() => handleOptionChange("cod")}
          >
            <div className="flex items-center">
              <input
                type="radio"
                name="payment"
                id="cod"
                checked={selectedOption === "cod"}
                onChange={() => handleOptionChange("cod")}
                className="mr-4"
              />
              <label htmlFor="cod" className="flex-1">
                <h3 className="text-md font-semibold">Cash on Delivery</h3>
                <p className="text-sm text-gray-600">Pay in cash when your order is delivered.</p>
              </label>
            </div>
            {/* COD Message */}
            {selectedOption === "cod" && (
              <div className="mt-4 text-sm text-gray-600">
                <p>Cash on Delivery is available for orders under ₹5,000.</p>
              </div>
            )}
          </div>
        </div>

        {/* Payment Button */}
        <button
          onClick={handlePayment}
          className="mt-6 w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition"
        >
          Confirm Payment
        </button>
      </div>
    </div>
  );
};

export default Payment;
