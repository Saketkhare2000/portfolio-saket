import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { NavAnim } from "../animation";
const Navbar = () => {
  //nav state
  const [navState, setNavState] = React.useState(false);
  //nav toggle
  const navToggle = () => {
    setNavState(!navState);
  };

  return (
    <motion.header
      initial="hidden"
      animate="show"
      variants={NavAnim}
      className="sticky top-0 bg-white z-10"
    >
      <div className="h-[10vh] flex justify-between items-center lg:px-32 px-4 shadow">
        <div>
          <h1 className="font-bold text-lg md:text-2xl">Saket Khare</h1>
        </div>
        <div className="flex space-x-6 md:space-x-10 items-center">
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
    </motion.header>
  );
};

export default Navbar;
