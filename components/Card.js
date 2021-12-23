import Image from "next/image";
import React from "react";

const Card = ({ title, desc, url, code, img }) => {
  return (
    <div className="flex flex-col border transition-all ease-out duration-150 bg-white max-h-[600px] rounded-lg p-8 hover:shadow-lg max-w-sm justify-between">
      <Image
        width={300}
        height={300}
        src={img}
        alt="essentials"
        className="object-cover w-full h-full"
      />
      <div className="flex flex-col mt-5">
        <p className="font-bold text-2xl">{title}</p>
        <p className="font-medium text-base mt-3 text-gray-700">{desc}</p>

        <div className="flex mt-5 space-x-5">
          <a
            href={url}
            target="_blank"
            className="font-bold text-gray-600 border border-neutral-300 p-4 w-full text-center rounded hover:shadow hover:text-black"
          >
            Visit Website
          </a>
          {/* <a
            href={code}
            target="_blank"
            className="font-bold text-gray-600 border border-neutral-300 p-4 w-1/2 text-center rounded hover:shadow hover:text-black"
          >
            Code {"</>"}
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
