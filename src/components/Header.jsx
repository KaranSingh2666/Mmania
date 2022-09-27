import React from "react";
import Logo from "./headercomp/logo";
import Searchbar from "./headercomp/Searchbar";
import Sidembtn from "./headercomp/Sidembtn";

const Header = ({searchterm, setsearchterm, moviesearch}) => {
  return (
    <div>
      <nav className=" text-white">
        <div className="flex flex-col space-y-8 px-6 py-5 justify-between items-center">
        {/* <Sidembtn /> */}
        <Logo />
        <Searchbar searchterm={searchterm} setsearchterm={setsearchterm} moviesearch={moviesearch}/>
        </div>
      </nav>
    </div>
  );
};

export default Header;
