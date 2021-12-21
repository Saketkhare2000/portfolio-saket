import Link from "next/link";
import React from "react";
import { MenuIcon } from "@heroicons/react/outline";
const Navbar = () => {
  //nav state
  const [navState, setNavState] = React.useState(false);
  //nav toggle
  const navToggle = () => {
    setNavState(!navState);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="h-[10vh]  flex justify-between items-center lg:px-24 px-4 shadow">
        <div>
          <h1 className="font-bold text-lg md:text-2xl">Saket Khare</h1>
        </div>
        <div className="flex space-x-2 md:space-x-10 items-center">
          <a className="font-medium md:text-lg lg:text-xl" href="#">
            Home
          </a>
          <a className="font-medium md:text-lg lg:text-xl" href="#">
            About
          </a>
          <a className="font-medium md:text-lg lg:text-xl" href="#">
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
