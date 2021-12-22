import Link from "next/link";
import React from "react";
const Navbar = () => {
  //nav state
  const [navState, setNavState] = React.useState(false);
  //nav toggle
  const navToggle = () => {
    setNavState(!navState);
  };

  return (
    <header className="sticky top-0 bg-white z-10">
      <div className="h-[10vh] flex justify-between items-center lg:px-32 px-4 shadow">
        <div>
          <h1 className="font-bold text-lg md:text-2xl">Saket Khare</h1>
        </div>
        <div className="flex space-x-2 md:space-x-10 items-center">
          <a className="font-medium md:text-lg lg:text-xl" href="#">
            Home
          </a>
          <a
            className="font-medium md:text-lg lg:text-xl text-gray-500 hover:text-black"
            href="#"
          >
            Projects
          </a>
          <a
            className="font-medium md:text-lg lg:text-xl text-gray-500 hover:text-black"
            href="#"
          >
            Blog
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
