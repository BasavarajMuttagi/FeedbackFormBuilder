import { CaretDown, User } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="text-white/80 flex flex-col items-end px-[5%]">
      <nav className="flex items-center space-x-14 p-3">
        <ul className="flex items-center space-x-14 font-medium">
          <li className="flex items-center space-x-2 cursor-pointer">
            <span>MOVIES</span>
            <CaretDown size={14} />
          </li>
          <li className="flex items-center space-x-2 cursor-pointer">
            <span>THEATERS</span>
            <CaretDown size={14} />
          </li>
          <li className="flex items-center space-x-2 cursor-pointer">
            <span>FOOD & DRINKS</span>
            <CaretDown size={14} />
          </li>
        </ul>
        <Link
          to={"/admin"}
          className="px-4 py-1 rounded-full border border-white inline-flex items-center space-x-4 font-bold"
        >
          <User size={16} weight="fill" />
          <span>ADMIN</span>
        </Link>
      </nav>
      <div className="w-full border-b border-white/10"></div>
      <ul className="space-x-5 text-xs text-white/50 p-3 inline-flex">
        <li className="cursor-pointer hover:text-white">Now Showing</li>
        <li className="cursor-pointer hover:text-white">Coming Soon</li>
        <li className="cursor-pointer hover:text-white">Promotions</li>
        <li className="cursor-pointer hover:text-white">Gift Cards</li>
      </ul>
    </header>
  );
};

export default Header;
