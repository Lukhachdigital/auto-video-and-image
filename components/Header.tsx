import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex flex-col gap-y-3 sm:flex-row sm:justify-between sm:items-center text-white mb-6">
      <div className="flex items-center justify-center sm:justify-start text-center sm:text-left">
        <h1 className="text-lg sm:text-xl font-bold">
          Google AI Tool | Lữ Khách - <span className="text-gray-400">0979.007.367</span>
          <span className="text-yellow-400"> | Tool TẶNG dùng MIỄN PHÍ | Không mua bán!</span>
        </h1>
      </div>
    </header>
  );
};

export default Header;