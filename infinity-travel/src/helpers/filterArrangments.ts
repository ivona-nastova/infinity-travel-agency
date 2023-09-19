import { ArrangementType } from "src/types";
import filterByType from "src/helpers/filterByType";
import uniqueRegions from "src/helpers/uniqueRegions";

// Function for [drzava] pages, get regions and filter by them
const filterArrangments = (
  arrangementsData: ArrangementType[],
  country: string | string[] | undefined,
  region: string | string[] | undefined
) => {
  let error = false;
  let filteredArrangements = arrangementsData.filter(
    (arrangement) => arrangement.location.country === country
  );

  const regions = uniqueRegions(filteredArrangements);

  if (country && region) {
    if (regions.includes(region as string)) {
      filteredArrangements = filteredArrangements.filter(
        (arrangement) => arrangement.location.region === region
      );
    } else if (region === "Last Minute") {
      filteredArrangements = filteredArrangements.filter(
        (arrangement) => arrangement.isLastMinute
      );
    } else {
      error = true;
    }
  }

  const appartments = filterByType(filteredArrangements, "Apartment");
  const hotels = filterByType(filteredArrangements, "Hotel");

  return {
    regions,
    appartments,
    hotels,
    error,
  };
};

export default filterArrangments;
