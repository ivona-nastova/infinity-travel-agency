import OfferCard from "src/components/Card/OfferCard";
import { ArrangementType } from "src/types";

const renderOfferCards = (arrangements: ArrangementType[]) => {
  const cards = arrangements.map((arrangement) => (
    <div
      key={arrangement.id}
      className="offer-card w-1/2 sm:w-1/3 md:w-1/4 mb-3">
      <OfferCard offer={arrangement} />
    </div>
  ));
  return cards;
};

export default renderOfferCards;
