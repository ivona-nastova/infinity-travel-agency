import React from "react";
import { FiSearch } from "react-icons/fi";

type Props = { image: string };

const Banner = ({ image }: Props) => {
  return (
    <div
      className="h-60vh bg-cover bg-center flex md:justify-start items-start justify-center md:items-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="bg-[url('/images/banner/banner-frame.png')] bg-no-repeat bg-bottom p-10 ml-0 md:ml-20">
        <h2 className="text-20 md:text-26 font-bold mb-2">
          Lorem ipsum dolor sit amet, <br /> consectetur adipisicing
        </h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing</p>
        <div className="hidden lg:flex items-center mt-2">
          <input type="search" className="p-2 rounded-l-lg" />
          <span className="bg-darkPurple text-white p-2 text-24 rounded-r-lg">
            <FiSearch />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
