import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { NavAnim } from "../animation";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
const Navbar = () => {
  //nav state
  const [navState, setNavState] = useState(false);
  //nav toggle
  const navToggle = () => {
    setNavState(!navState);
  };

  //nav links
  const [navLinks, setNavLinks] = useState([]);

  useEffect(() => {
    getDocs(collection(db, "navbar"))
      .then((querySnapshot) => {
        //order by descending order
        const navLinks = [];
        querySnapshot.forEach((doc) => {
          navLinks.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setNavLinks(navLinks.reverse());
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
          {navLinks.map((link) => {
            return (
              <a
                href={link.url}
                target="_blank"
                className="font-medium md:text-lg lg:text-xl text-gray-500 hover:text-black"
              >
                {link.name}
              </a>
            );
          })}
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
