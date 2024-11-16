

import React, { useState } from 'react';
import item1 from "../images/items1.png";
import item2 from "../images/item2.png";
import item3 from "../images/item3.png";
import item4 from "../images/item4.png";
import item5 from "../images/item5.png";
import item6 from "../images/item6.png";
import CategoryTabs from '../components/Categorytabs';

interface MenuItemProps {
  title: string;
  description: string;
  price: string;
  category: string;
  imageSrc: string;
}

const Menu: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All Category');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const menuItems: MenuItemProps[] = [
    { title: 'Spaghetti', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Egestas consequat mi eget auctor aliquam, diam.', price: '$12.05', category: 'Dinner', imageSrc: item1 },
    { title: 'Gnocchi', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Egestas consequat mi eget auctor aliquam, diam.', price: '$10.50', category: 'Lunch', imageSrc: item2 },
    { title: 'Pasta', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Egestas consequat mi eget auctor aliquam, diam.', price: '$11.00', category: 'All Category', imageSrc: item3 },
    { title: 'Penne Alla Vodka', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Egestas consequat mi eget auctor aliquam, diam.', price: '$11.00', category: 'All Category', imageSrc: item4 },
    { title: 'Risotto', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Egestas consequat mi eget auctor aliquam, diam.', price: '$11.00', category: 'All Category', imageSrc: item5 },
    { title: 'Splitza Signature', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Egestas consequat mi eget auctor aliquam, diam.', price: '$11.00', category: 'All Category', imageSrc: item6 },
  ];

  const filteredItems = activeTab === 'All Category' ? menuItems : menuItems.filter(item => item.category === activeTab);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const displayedItems = filteredItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div id="menu-section" className="flex flex-col items-center">
      <div className="max-w-[69.63rem] sm:gap-[2.19rem] md:px-[1.25rem] md:gap-[3.25rem] gap-[4.38rem] mx-auto flex w-full flex-col items-center">
        <h2 className="sm:text-[2.38rem] md:text-[2.75rem] text-[3.25rem] font-['Open_Sans'] text-[#311f09] font-bold">
          Our Popular Menu
        </h2>

        <CategoryTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="gap-[2.13rem] grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-center">
          {displayedItems.map((item) => (
            <MenuItem
              key={item.title}
              title={item.title}
              description={item.description}
              price={item.price}
              imageSrc={item.imageSrc}
              category={''}
            />
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex mt-4 space-x-2 mb-4">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span className="px-4 py-2 text-lg font-semibold">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

const MenuItem: React.FC<MenuItemProps> = ({ title, description, price, imageSrc }) => {
  return (
    <div className="rounded-[40px] bg-[#ffffff] sm:p-[1.25rem] py-[2.25rem] px-[1.88rem] gap-[2.13rem] flex w-full flex-col items-center">
      <img className="max-w-[16.88rem] h-[16.88rem] mx-auto w-full object-cover" src={imageSrc} alt={`${title} Image`} loading="lazy" />
      <div className="max-w-[17.88rem] mx-auto flex w-full flex-col items-center self-stretch">
        <div className="gap-[0.63rem] flex flex-col items-center self-stretch">
          <h3 className="text-[1.88rem] text-[#311f09] font-semibold">{title}</h3>
          <p className="leading-[200%] text-[0.88rem] text-[#59442b] self-stretch text-center font-normal">{description}</p>
        </div>
        <div className="gap-[0.63rem] mt-[0.75rem] flex" style={{ overflow: 'hidden', position: 'relative' }}>
          {[...Array(5)].map((_, index) => (
            <span key={index} style={{ color: '#f54748', fontSize: '24px' }}>★</span>
          ))}
        </div>
        <div className="mx-[0.50rem] gap-[1.25rem] mt-[1.88rem] flex items-center justify-between self-stretch">
          <h4 className="text-[1.56rem] text-[#311f09] font-semibold">{price}</h4>
          <button className="min-w-[9.88rem] sm:px-[1.25rem] px-[2.13rem] rounded-lg font-semibold flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap h-[3.38rem] bg-[#f54748] text-[#ffffff]">
            Order now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
