import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center bg-white justify-between p-6 border-b-2 border-gray-400 sticky top-0">
      <div>
        <p>Evently</p>
      </div>

      <div className="flex gap-5">
        <Link
          to="/events"
          className="hover:text-[#7C3AED] hover:border-b-2 border-[#7c3aed] text-gray-500 font-bold"
        >
          Discover
        </Link>
        <Link className="hover:text-[#7C3AED] hover:border-b-2 border-[#7c3aed] text-gray-500 font-bold">
          Category
        </Link>
        <Link className="hover:text-[#7C3AED] hover:border-b-2 border-[#7c3aed] text-gray-500 font-bold">
          Popular
        </Link>
        <Link className="hover:text-[#7C3AED] hover:border-b-2 border-[#7c3aed] text-gray-500 font-bold">
          This Week
        </Link>
      </div>

      <div className="flex gap-3">
        <button className="bg-amber-100 cursor-pointer p-3 rounded-xl px-8 text-[#7C3AED] font-bold">
          Sign In
        </button>
        <button className="bg-amber-100 cursor-pointer p-3 rounded-xl px-8 text-[#7C3AED] font-bold">
          Create Event
        </button>
      </div>
    </div>
  );
};

export default Navbar;
