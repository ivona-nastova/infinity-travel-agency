import React, { useState } from "react";
import { TfiEmail } from "react-icons/tfi";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const GetMoreOffers = () => {

  const [toggleButton, setToggleButton] = useState(false);

  return (
    <div className="bg-blue p-5 flex flex-col justify-center items-center">
      <div
        className="flex items-center text-center cursor-pointer md:text-20"
        onClick={() => setToggleButton(!toggleButton)}
      >
        <TfiEmail className={"text-4xl"} />
        <h5 className="mx-4">
          Пријави се и добивај актуелни <br />
          понуди на твојот маил
        </h5>

        {toggleButton ? (
          <BsChevronUp className="text-3xl" />
        ) : (
          <BsChevronDown className="text-3xl" />
        )}
      </div>
      
      <div className={`${toggleButton ? "block" : "hidden"}`}>
        <form className="flex flex-wrap justify-center my-6">
          <div className="flex flex-col mb-3 pr-5 w-full sm:w-1/3">
            <label htmlFor="name">Име</label>
            <input
              type="text"
              id="name"
              aria-describedby="yourName"
              className="p-2 rounded-md focus:border-gray-400"
            />
          </div>

          <div className="flex flex-col mb-3 pr-5 w-full sm:w-1/3">
            <label htmlFor="email">Е-маил</label>
            <input
              type="email"
              id="email"
              aria-describedby="yourEmail"
              className="p-2 rounded-md"
            />
          </div>

          <div className="flex justify-end flex-col mb-3 pr-5 w-full sm:w-1/3">
            <button
              type="submit"
              className="bg-orange p-2 uppercase font-bold 
                         rounded-md"
            >
              Пријави ме
            </button>
          </div>
        </form>

        <span>
          Со кликнување на Пријави ме се зачленуваш за добивање на маилови за
          нашите актуелни понуди и промоции
        </span>
      </div>
    </div>
  );
};

export default GetMoreOffers;
