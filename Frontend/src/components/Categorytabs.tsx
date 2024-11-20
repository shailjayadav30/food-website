// import React from "react";

// interface CategoryTabsProps {
//   activeTab: string;
//   setActiveTab: React.Dispatch<React.SetStateAction<string>>;
// }

// const CategoryTabs: React.FC<CategoryTabsProps> = ({ activeTab, setActiveTab }) => {
//   const categories = ['All Category', 'Dinner', 'Lunch', 'Dessert', 'Drink'];

//   return (
//     <ul className="flex flex-wrap justify-center gap-4 mt-6 text-gray-800" role="tablist">
//       {categories.map((category) => (
//         <li
//           key={category}
//           role="tab"
//           aria-selected={activeTab === category}
//           className={`cursor-pointer px-4 py-2 rounded-lg text-lg font-semibold transition-colors 
//             ${activeTab === category ? 'bg-red-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
//           onClick={() => setActiveTab(category)}
//         >
//           {category}
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default CategoryTabs;




import React from "react";

interface CategoryTabsProps {
  activeTab: string;
  setActiveTab: (category: string) => void;
}

const categories = ["All Category", "Dinner", "Lunch", "Dessert", "Drink"];

const CategoryTabs: React.FC<CategoryTabsProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex justify-center space-x-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveTab(category)}
          className={`px-4 py-2 rounded-lg ${
            activeTab === category ? "bg-yellow-500 text-white" : "bg-gray-200"
          } hover:bg-yellow-400`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
