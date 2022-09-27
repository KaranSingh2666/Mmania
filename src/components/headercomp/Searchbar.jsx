import React from "react";
import { FaSearch } from "react-icons/fa";

const Searchbar = ({ searchterm,setsearchterm, moviesearch }) => {
  return (
    <div
      className=" flex  justify-between w-[71%]  items-center space-x-2 px-3 py-1 rounded-lg shadow-2xl bg-black"
    >
      <input
        type="text"
        className=" bg-transparent border-none outline-none w-full text-2xl p-2"
        value={searchterm}
        placeholder="search movies..."
        onChange={(e) => setsearchterm(e.target.value)  }
      />
      <FaSearch className=" cursor-pointer text-3xl" onClick={()=>moviesearch(searchterm)} />
    </div>
  );
};

export default Searchbar;
