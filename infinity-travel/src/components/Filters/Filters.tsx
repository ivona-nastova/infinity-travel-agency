import { BiFilterAlt } from "react-icons/bi";
import DatePickerFilter from "./DatePickerFilter";
import DestinationFilter from "./DestinationFilter";
import PriceFilter from "./PriceFilter";
import SearchFilter from "./SearchFilter";
import TypeFilter from "./TypeFilter";
import { useState } from "react";
import MobileFilters from "./MobileFilters";

const Filters = () => {
  const [openFilters, setOpenFilters] = useState(false);

  return (
    <>
      <div className="md:block hidden">
        <div className="rounded-md bg-gray-100 py-5 px-3">
          <SearchFilter />
          <DatePickerFilter />
          <DestinationFilter />
          <PriceFilter />
          <TypeFilter />
        </div>
      </div>

      {/* Mobile design for filters*/}
      <div className="flex items-center mb-4 md:hidden w-full">
        <SearchFilter />
        <span className="ml-2 bg-orange text-white rounded-lg mt-6 p-2 text-24">
          <BiFilterAlt onClick={() => setOpenFilters(!openFilters)} />
        </span>
      </div>
      {openFilters && <MobileFilters />}
    </>
  );
};

export default Filters;
