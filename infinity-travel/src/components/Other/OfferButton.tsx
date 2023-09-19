import React from "react";

type Props = {
  title: string;
  region?: string | string[] | undefined;
  filterArray: (title: string) => void;
};

const OfferButton = ({ title, region, filterArray }: Props) => {
  return (
    <button
      onClick={() => filterArray(title)}
      className={`border-blue 
        w-[calc(50%-1.25rem)] 
       sm:w-[calc(33.333%-1.25rem)] 
        lg:w-[calc(20%-1.25rem)] 
        mr-5 mb-3 border-2 text-24 py-1
        ${region === title ? "bg-blue" : ""}`}
    >
      {title}
    </button>
  );
};

export default OfferButton;
