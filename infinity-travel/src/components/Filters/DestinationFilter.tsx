import { useRouter } from "next/router";
import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import ToggleSelect from "src/helpers/ToggleSelect";

const DestinationFilter = () => {
  const { toggle, handleTogle } = ToggleSelect();
  const router = useRouter();
  const country = router.query.drzava;

  return (
    <div className="border-b border-blue py-1">
      <span
        className="text-gray-600 flex justify-between cursor-pointer py-1 items-center"
        onClick={handleTogle}
      >
        Дестинација <BsChevronDown />
      </span>
      {toggle && (
        <div>
          <div>
            <input
              type="checkbox"
              id="grcija"
              name="grcija"
              className="accent-blue"
            />
            <label htmlFor="grcija" className="text-gray-600">
              Грција
            </label>
          </div>

          <div>
            <input
              type="checkbox"
              id="hrvatska"
              name="hrvatska"
              className="accent-blue"
            />
            <label className="text-gray-600" htmlFor="hrvatska">
              Хрватска
            </label>
          </div>

          <div>
            <input
              type="checkbox"
              id="albanija"
              name="albanija"
              className="accent-blue"
            />
            <label className="text-gray-600" htmlFor="albanija">
              Албанија
            </label>
          </div>

          <div>
            <input
              type="checkbox"
              id="turcija"
              name="turcija"
              className="accent-blue text-white"
            />
            <label className="text-gray-600" htmlFor="turcija">
              Турција
            </label>
          </div>

          <div>
            <input
              type="checkbox"
              id="egipet"
              name="egipet"
              className="accent-blue"
            />
            <label className="text-gray-600" htmlFor="egipet">
              Египет
            </label>
          </div>

          <div>
            <input
              type="checkbox"
              id="italija"
              name="italija"
              className="accent-blue"
            />
            <label className="text-gray-600" htmlFor="italija">
              Италија
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default DestinationFilter;
