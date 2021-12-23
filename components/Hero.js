import { motion } from "framer-motion";
import React from "react";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import { imgAnim, revealAnim, titleAnim } from "../animation";
const Hero = () => {
  return (
    <div className="h-[60vh] flex flex-col space-y-8 justify-between px-4 md:flex md:flex-row md:space-y-0 md:items-center lg:px-32 mt-10">
      <motion.div className="md:w-3/4">
        <motion.div className="overflow-hidden">
          <motion.h1
            initial="hidden"
            animate="show"
            variants={titleAnim}
            className="font-bold text-5xl"
          >
            Saket Khare
          </motion.h1>
        </motion.div>
        <motion.div className="overflow-hidden">
          <motion.h3
            initial="hidden"
            animate="show"
            variants={titleAnim}
            className="text-2xl mt-2 font-bold text-gray-400"
          >
            Web Developer &middot; UI/UX Designer &middot; Motion Designer
          </motion.h3>
        </motion.div>
        {/* <p className="font-medium text-lg text-gray-500 mt-6 w-3/4">
          I like to design stuff and build things.
        </p> */}
        <motion.div className="mt-6 flex space-x-5 items-center ">
          <motion.a
            initial="hidden"
            animate="show"
            variants={revealAnim}
            href="https://twitter.com/SaketKhare9"
            target="_blank"
          >
            <AiOutlineTwitter className="text-gray-500 h-8 w-8 hover:text-black cursor-pointer" />
          </motion.a>
          <motion.a
            initial="hidden"
            animate="show"
            variants={revealAnim}
            href="https://github.com/Saketkhare2000"
            target="_blank"
          >
            <AiOutlineGithub className="text-gray-500 h-8 w-8 hover:text-black cursor-pointer" />
          </motion.a>
          <motion.a
            initial="hidden"
            animate="show"
            variants={revealAnim}
            href="https://www.linkedin.com/in/saketkhare2000/"
            target="_blank"
          >
            <AiFillLinkedin className="text-gray-500 h-8 w-8 hover:text-black cursor-pointer" />
          </motion.a>
          <motion.a
            initial="hidden"
            animate="show"
            variants={revealAnim}
            href="https://www.linkedin.com/in/saketkhare2000/"
            target="_blank"
          >
            <AiOutlineInstagram className="text-gray-500 h-8 w-8 hover:text-black cursor-pointer" />
          </motion.a>
        </motion.div>
      </motion.div>
      <motion.div className="overflow-hidden rounded-lg">
        <motion.img
          initial="hidden"
          animate="show"
          variants={imgAnim}
          src="https://media.discordapp.net/attachments/848339989838037002/922949089656709150/269691474_3176938395873561_1036562070662507754_n.jpg"
          className="object-cover w-48 h-48 rounded-lg"
          alt="hero"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
