import React from "react";
import { BsChevronDown } from "react-icons/bs";
import ToggleSelect from "src/helpers/ToggleSelect";

const TypeFilter = () => {
  const { toggle, handleTogle } = ToggleSelect();

  return (
    <div className="border-b border-blue py-1">
      <span
        className="text-gray-600 flex justify-between cursor-pointer py-1 items-center"
        onClick={handleTogle}
      >
        Tип на сместување
        <BsChevronDown />
      </span>
      {toggle && (
        <div>
          <div>
            <input
              type="checkbox"
              id="apartment"
              name="apartment"
              className="accent-blue"
            />
            <label htmlFor="apartment" className="text-gray-600">
              Апартман
            </label>
          </div>

          <div>
            <input
              type="checkbox"
              id="hotel"
              name="hotel"
              className="accent-blue"
            />
            <label htmlFor="hotel" className="text-gray-600">
              Хотел
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default TypeFilter;
