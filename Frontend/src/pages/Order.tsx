import { useState } from "react";
import CategoryTabs from "../components/Categorytabs";
import FoodItem from "../components/Items";
import item1 from "../images/items1.png";
import item2 from "../images/item2.png";
import item3 from "../images/item3.png";

const Order = () => {
  const [activeTab, setActiveTab] = useState<string>('All Category');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 3;

  const foodItems = [
    { imageUrl: item1, title: "Spaghetti", description: "Delicious pasta.", price: 12.05, rating: 5, category: "Dinner" },
    { imageUrl: item2, title: "Lasagna", description: "Cheesy lasagna layers.", price: 14.99, rating: 4, category: "Lunch" },
    { imageUrl: item3, title: "Fettuccine", description: "Creamy Alfredo pasta.", price: 13.50, rating: 4, category: "Dinner" },
    { imageUrl: item1, title: "Tiramisu", description: "Coffee-flavored dessert.", price: 8.99, rating: 5, category: "Dessert" },
    { imageUrl: item2, title: "Iced Coffee", description: "Caramel iced coffee.", price: 4.50, rating: 4, category: "Drink" },
    { imageUrl: item1, title: "Spaghetti", description: "Delicious pasta.", price: 12.05, rating: 5, category: "Dinner" },
    { imageUrl: item2, title: "Lasagna", description: "Cheesy lasagna layers.", price: 14.99, rating: 4, category: "Lunch" },
    { imageUrl: item3, title: "Fettuccine", description: "Creamy Alfredo pasta.", price: 13.50, rating: 4, category: "Dinner" },
    { imageUrl: item1, title: "Tiramisu", description: "Coffee-flavored dessert.", price: 8.99, rating: 5, category: "Dessert" },
    { imageUrl: item2, title: "Iced Coffee", description: "Caramel iced coffee.", price: 4.50, rating: 4, category: "Drink" },
  ];

  const filteredItems = activeTab === "All Category"
    ? foodItems
    : foodItems.filter(item => item.category === activeTab);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const currentItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleCategoryChange = (category: string) => {
    setActiveTab(category);
    setCurrentPage(1);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Menu</h1>
      <CategoryTabs activeTab={activeTab} setActiveTab={handleCategoryChange} />
      
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {currentItems.map((item, index) => (
          <FoodItem key={index} {...item} />
        ))}
      </div>

      <div className="flex justify-center items-center mt-6 space-x-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 rounded-lg disabled:opacity-50 hover:bg-gray-400"
        >
          Previous
        </button>
        <span className="font-semibold">Page {currentPage} of {totalPages}</span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 rounded-lg disabled:opacity-50 hover:bg-gray-400"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Order;
