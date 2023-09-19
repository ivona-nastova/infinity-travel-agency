import { useRouter } from "next/router";
import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import ReactSlider from "react-slider";
import ToggleSelect from "src/helpers/ToggleSelect";

const PriceFilter = () => {

  const router = useRouter();
  const { toggle, handleTogle } = ToggleSelect();

  const defaultPriceValues = [50, 300];
  let price = router.query.price;
  let value;

  if (price) {
    // Price change from string to number
    value = (router.query.price! as string[]).map((price) => +price);
  }
  const [priceValues, setPriceValues] = useState(
    value ? value : defaultPriceValues
  );

  // Get prices and push like query
  function filterByPrice(values: number[]) {
    setPriceValues([values[0], values[1]]);

    router.push(
      {
        pathname: router.pathname,
        query: { ...router.query, price: values },
      },
      undefined,
      {
        scroll: false,
        shallow: true,
      }
    );
  }

  return (
    <div className="flex flex-col border-b border-blue py-1">
      <span
        className="text-gray-600 flex justify-between cursor-pointer py-1 items-center"
        onClick={handleTogle}
      >
        Цена EUR
        <BsChevronDown />
      </span>

      {toggle && (
        <>
          <ReactSlider
            className="horizontal-slider"
            thumbClassName="example-thumb"
            trackClassName="example-track"
            ariaLabel={["Lower thumb", "Upper thumb"]}
            pearling
            min={50}
            step={50}
            max={300}
            value={priceValues}
            onChange={filterByPrice}
          />
        </>
      )}
    </div>
  );
};

export default PriceFilter;
