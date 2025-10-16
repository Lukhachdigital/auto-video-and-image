
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-white mb-6 text-center">
      <h1 className="text-lg sm:text-xl font-bold">
        Ứng dụng phát triển bởi{' '}
        <span>
          <span className="text-white">AI</span><span className="text-blue-400">Creators</span>
        </span>
        <span className="text-slate-400 font-light"> | </span>
        <span className="text-yellow-400">Chỉ tặng MIỄN PHÍ</span>
      </h1>
    </header>
  );
};

export default Header;
