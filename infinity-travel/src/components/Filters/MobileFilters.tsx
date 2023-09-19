import DestinationFilter from "./DestinationFilter";
import PriceFilter from "./PriceFilter";
import TypeFilter from "./TypeFilter";

const MobileFilters = () => {
  return (
    <div className="block w-full bg-gray-100 mb-5 md:hidden">
      <DestinationFilter />
      <PriceFilter />
      <TypeFilter />
    </div>
  );
};

export default MobileFilters;
