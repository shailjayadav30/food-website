import React, { useState } from "react";

interface FoodItemProps {
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  rating: number;
}

const FoodItem: React.FC<FoodItemProps> = ({ imageUrl, title, description, price, rating }) => {
  const [quantity, setQuantity] = useState<number>(1);

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = () => setQuantity(quantity + 1);

  return (
    <div className="rounded-2xl bg-white p-6 flex flex-col items-center shadow-lg transition-transform transform hover:scale-105">
      <img
        className="rounded-xl w-40 h-40 object-cover mb-4"
        src={imageUrl}
        alt={title}
        loading="lazy"
      />
      <h5 className="text-xl font-semibold">{title}</h5>
      <div className="flex mt-2">
        {[...Array(5)].map((_, index) => (
          <span key={index} className={`text-lg ${rating > index ? "text-yellow-500" : "text-gray-300"}`}>★</span>
        ))}
      </div>
      <p className="text-sm text-gray-600 mt-3 text-center">{description}</p>
      <h6 className="text-lg font-semibold mt-3">${price.toFixed(2)}</h6>
      <div className="flex items-center mt-4 space-x-4">
        <button onClick={handleDecrease} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-lg">-</button>
        <span className="text-lg">{quantity}</span>
        <button onClick={handleIncrease} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-lg">+</button>
      </div>
    </div>
  );
};

export default FoodItem;
