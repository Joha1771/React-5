import React from "react";
import hart from "../../assets/hart.svg";
import cart from "../../assets/cart.svg";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold">QPICK</div>
        <div className="flex items-center gap-2">
          <select className="px-4 py-2 text-sm bg-transparent border-none outline-none cursor-pointer">
            <option>Выбрать модель телефона</option>
            <option>iPhone 13 Pro Max</option>
            <option>iPhone 14 Pro</option>
            <option>Samsung Galaxy S23</option>
          </select>
        </div>
        <div className="flex items-center gap-6">
          <img src={hart} alt="" />
          <img src={cart} alt="" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
