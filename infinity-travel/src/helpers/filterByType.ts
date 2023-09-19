import { ArrangementType } from "src/types";

const filterByType = (arrangementsData: ArrangementType[], type: string) => {
  const arrangements = arrangementsData.filter(
    (arrangement) => arrangement.type === type
  );

  return arrangements;
};

export default filterByType;
