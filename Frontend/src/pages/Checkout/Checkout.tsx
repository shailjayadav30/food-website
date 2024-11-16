import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const CheckoutForm = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className="max-w-lg mx-auto rounded-lg shadow-lg bg-white p-6">
      <div className="flex items-center justify-between mb-6">
        <button
          className="rounded-full w-10 h-10 bg-[#311f09] text-white flex items-center justify-center"
          onClick={handleGoBack}
          aria-label="Go Back"
        >
          <AiOutlineArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-2xl font-bold text-[#311f09]">Checkout</h1>
      </div>

      {/* Shipping Address */}
      <div className="mb-6">
        <label className="text-lg text-[#311f09] font-medium mb-2 block">
          Shipping Address
        </label>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="8502 Preston Rd. Inglewood, Maine 98380"
            className="flex-grow rounded-lg border border-[#c4c4c4] py-3 px-4 text-lg text-[#311f09]"
          />
          <button
            className="min-w-[10.38rem] px-4 py-3 rounded-lg bg-[#739fe0] text-white text-lg"
          >
            Change
          </button>
        </div>
      </div>

      {/* Order Data */}
      <div className="mb-6">
        <p className="text-lg text-[#311f09] font-medium mb-2">Order Data</p>
        <div className="grid gap-4">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="First name"
              className="flex-grow rounded-lg border border-[#c4c4c4] py-3 px-4 text-lg text-[#311f09]"
            />
            <input
              type="text"
              placeholder="Last name"
              className="flex-grow rounded-lg border border-[#c4c4c4] py-3 px-4 text-lg text-[#311f09]"
            />
          </div>

          <div className="flex gap-4">
            <select
              className="flex-grow rounded-lg border border-[#c4c4c4] py-3 px-4 text-lg text-[#311f09]"
              defaultValue=""
            >
              <option value="" disabled>
                Select country
              </option>
              {/* Add country options here */}
            </select>
            <input
              type="tel"
              placeholder="Phone number"
              className="flex-grow rounded-lg border border-[#c4c4c4] py-3 px-4 text-lg text-[#311f09]"
            />
          </div>

          <input
            type="email"
            placeholder="Email address"
            className="w-full rounded-lg border border-[#c4c4c4] py-3 px-4 text-lg text-[#311f09]"
          />

          <textarea
            placeholder="Message"
            className="w-full rounded-lg border border-[#c4c4c4] py-3 px-4 text-lg text-[#311f09] h-24"
          />
        </div>
      </div>

      {/* Payment Method Section */}
      <div className="mb-6">
        <p className="text-lg text-[#311f09] font-medium mb-2">Payment Method</p>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <input
              id="cod_option_1"
              type="radio"
              name="paymentMethod"
              className="h-5 w-5 border-[#311f09]"
            />
            <label htmlFor="cod_option_1" className="text-lg text-[#311f09] cursor-pointer">
              Cash On Delivery
            </label>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        {/* Go Back Button */}
        <button
          className="flex-1 rounded-lg px-4 py-3 bg-gray-300 text-[#311f09] text-lg"
          onClick={handleGoBack}
        >
          Go Back
        </button>

        {/* Submit Button */}
        <button
          type="submit"
          className="flex-1 rounded-lg px-4 py-3 bg-[#739fe0] text-white text-lg"
        >
          Submit Order
        </button>
      </div>
    </div>
  );
};

export default CheckoutForm;
