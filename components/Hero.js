import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col space-y-8 md:flex md:flex-row md:space-y-0 justify-between pt-24 md:items-center lg:px-24 px-4">
      <div className="md:w-3/4">
        <h1 className="font-bold text-5xl">I Am Saket Khare</h1>
        <p className="font-medium text-lg text-gray-800 mt-8 w-3/4">
          I like to design stuff and build things.
        </p>
        <button className="mt-8 py-3 px-4 border-gray-800 font-bold border-2 text-gray-700">
          Get In Touch
        </button>
      </div>
      <div className="md:w-1/4 w-52">
        <img
          src="https://media.discordapp.net/attachments/848339989838037002/922949089656709150/269691474_3176938395873561_1036562070662507754_n.jpg"
          className="h-full w-full object-cover rounded-lg shadow-lg"
          alt="hero"
        />
      </div>
    </div>
  );
};

export default Hero;
