import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 h-30">
      <div className="flex text-white p-4 items-center justify-between w-full">
        <h3 className="text-4xl font-semibold text-shadow-2xs">
          <Link href="/">ALX</Link>
        </h3>
        <nav>
          <ul className="flex space-x-6 px-4">
            <li className="font-semibold">Home</li>
            <li className="font-semibold">About</li>
            <li className="font-semibold">Services</li>
            <li className="font-semibold">Contact Us</li>
          </ul>
        </nav>
        <div className="flex space-x-6 font-semibold">
          <button
            type="button"
            className="text-center bg-green-500 rounded-lg px-4 py-2 cursor-pointer"
          >
            Log In
          </button>
          <button
            type="button"
            className="text-center bg-green-500 rounded-lg px-4 py-2 cursor-pointer"
          >
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
