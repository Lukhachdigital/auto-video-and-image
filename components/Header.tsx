import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex flex-col gap-y-4 sm:flex-row sm:justify-between sm:items-center text-white mb-6">
      {/* Left Side: Title */}
      <div className="flex items-center justify-center sm:justify-start text-center sm:text-left">
        <h1 className="text-lg sm:text-xl font-bold">
          <span>
            <span className="text-white">AI</span><span className="text-blue-400">Creators</span>
          </span>
          <span className="text-slate-400 font-light">|</span>
          <span>
            <span className="text-white">Làm </span>
            <span className="text-red-500">Youtube</span>
            <span className="text-white"> AI</span>
          </span>
          {' - '}
          <a href="https://zalo.me/0979007367" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            0979.007.367
          </a>
          <span className="text-yellow-400"> | Tool TẶNG dùng MIỄN PHÍ | Không mua bán!</span>
        </h1>
      </div>
      
      {/* Right Side: New Button */}
      <div className="flex-shrink-0 text-center">
        <a 
          href="https://lamyoutubeai.com/academy" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block px-5 py-3 font-bold text-white text-base rounded-lg shadow-lg transform transition-all duration-300 ease-in-out
                     bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 
                     hover:scale-110 hover:shadow-2xl hover:from-orange-600 hover:via-red-600 hover:to-pink-600
                     focus:outline-none focus:ring-4 focus:ring-red-300"
        >
          ✨ Tham gia khóa học AI ✨
        </a>
      </div>
    </header>
  );
};

export default Header;
