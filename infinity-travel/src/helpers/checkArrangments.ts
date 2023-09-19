import { ArrangementType } from "src/types";
import filterByType from "src/helpers/filterByType";

// Function for type page(apartmani, hoteli, izleti)
const CheckArrangments = (
  arrangementsData: ArrangementType[],
  country: string | string[] | undefined,
  type: string | string[] | undefined,
  name: string | string[] | undefined,
  price: string | string[] | undefined
) => {
  const arrangementsInCountry = arrangementsData.filter(
    (arrangement) => arrangement.location.country === country
  );
  let arrangements;
  let typeName;

  // Check and filter by type
  if (type === "apartmani") {
    typeName = "Апартмани";
    arrangements = filterByType(arrangementsInCountry, "Apartment");
  } else if (type === "hoteli") {
    typeName = "Хотели";
    arrangements = filterByType(arrangementsInCountry, "Hotel");
  } else if (type === "izleti") {
    typeName = "Излети";
    arrangements = filterByType(arrangementsInCountry, "Izlet");
  }

  if (name) {
    arrangements = arrangements?.filter((arrangement) =>
      arrangement.name.toLowerCase().includes(name.toString().toLowerCase())
    );
  }

  if (price) {
    arrangements = arrangements?.filter(
      (arrangement) =>
        arrangement.prices.prices[0] >= +price[0] &&
        arrangement.prices.prices[0] <= +price[1]
    );
  }

  return {
    arrangements,
    typeName,
  };
};

export default CheckArrangments;
