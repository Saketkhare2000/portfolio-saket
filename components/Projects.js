import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <div>
      <h1 className="font-bold text-4xl text-center p-4 lg:px-32">Projects</h1>
      <div className="flex flex-col justify-between p-4 md:flex md:flex-row md:space-y-0 flex-wrap lg:px-32 ">
        <div className="flex flex-col border transition-all ease-out duration-150 bg-white max-h-[600px] rounded-lg p-8 hover:shadow-lg max-w-sm ">
          <Image
            width={300}
            height={300}
            src="/images/Essentails.png"
            alt="essentials"
            className="object-cover w-full h-full"
          />
          <div className="flex flex-col mt-5">
            <p className="font-bold text-2xl">Essential Softwares</p>
            <p className="font-medium text-base mt-3 text-gray-700">
              Download all the Essential Softwares, now with a single click
            </p>

            <div className="flex mt-5 space-x-5">
              <a
                href="https://csb-8iiui.netlify.app/"
                target="_blank"
                className="font-bold text-gray-600 border border-neutral-300 p-4 w-1/2 text-center rounded hover:shadow hover:text-black"
              >
                Visit Website
              </a>
              <a
                href="https://csb-8iiui.netlify.app/"
                target="_blank"
                className="font-bold text-gray-600 border border-neutral-300 p-4 w-1/2 text-center rounded hover:shadow hover:text-black"
              >
                Code {"</>"}
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col border transition-all ease-out duration-150 bg-white max-h-[600px] rounded-lg p-8 hover:shadow-lg max-w-sm mt-4">
          <Image
            width={300}
            height={300}
            src="/images/Sources.png"
            alt="essentials"
            className="object-cover w-full h-full"
          />
          <div className="flex flex-col mt-5">
            <p className="font-bold text-2xl">Sources - News App</p>
            <p className="font-medium text-base mt-3 text-gray-700">
              Get the news you want without having to deal with advertisements.
            </p>

            <div className="flex mt-5 space-x-5">
              <a
                href="https://sources-lemon.vercel.app/"
                target="_blank"
                className="font-bold text-gray-600 border border-neutral-300 p-4 w-1/2 text-center rounded hover:shadow hover:text-black"
              >
                Visit Website
              </a>
              <a
                href="https://csb-8iiui.netlify.app/"
                target="_blank"
                className="font-bold text-gray-600 border border-neutral-300 p-4 w-1/2 text-center rounded hover:shadow hover:text-black"
              >
                Code {"</>"}
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col border transition-all ease-out duration-150 bg-white max-h-[600px] rounded-lg p-8 hover:shadow-lg max-w-sm mt-4">
          <Image
            width={300}
            height={300}
            src="/images/Weatherly.png"
            alt="essentials"
            className="object-cover w-full h-full"
          />
          <div className="flex flex-col mt-5">
            <p className="font-bold text-2xl">WeatherLy - Weather App</p>
            <p className="font-medium text-base mt-3 text-gray-700">
              Get the weather deatils with a single seach.
            </p>

            <div className="flex mt-5 space-x-5">
              <a
                href="https://saketkhare2000.github.io/WeatherLy/"
                target="_blank"
                className="font-bold text-gray-600 border border-neutral-300 p-4 w-1/2 text-center rounded hover:shadow hover:text-black"
              >
                Visit Website
              </a>
              <a
                href="https://csb-8iiui.netlify.app/"
                target="_blank"
                className="font-bold text-gray-600 border border-neutral-300 p-4 w-1/2 text-center rounded hover:shadow hover:text-black"
              >
                Code {"</>"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
