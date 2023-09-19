import React from "react";
import { BiChevronsRight } from "react-icons/bi";

const SeeMoreLink = () => {
  return (
    <div
      className="my-5 text-gray-400 font-semibold 
   text-26 flex justify-center items-center"
    >
      <span>See more</span>
      <BiChevronsRight />
    </div>
  );
};

export default SeeMoreLink;
