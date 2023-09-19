import Image from "next/image";
import Link from "next/link";
import { SlLocationPin } from "react-icons/sl";
import StarsRating from "src/helpers/StarsRating";
import CheckArrangmentType from "src/helpers/checkArrangmentType";
import { ArrangementType } from "src/types";

type Props = { offer: ArrangementType };

const OfferCard = ({ offer }: Props) => {

  const { id, name, rating, location, type, miscellanies, prices, coverPhoto } = offer;

  // Stars and type for arrangment
  const stars = StarsRating(rating!);
  const arrangementType = CheckArrangmentType(type);

  return (
    <div className="w-full">
      <div className="border-2 rounded-b-lg min-[425px]:mr-2 sm:mr-6 mb-6">
        <Image
          src={coverPhoto}
          width={275}
          height={183}
          alt={name}
          className="w-full h-full"
        />

        <div className="flex flex-col text-gray-500 p-7">
          <div className="flex justify-between text-black">
            <h3 className="text-16">{name} </h3>
            <span>{stars}</span>
          </div>

          <div className="flex justify-between">
            <div>
              <span className="flex items-center my-1">
                <SlLocationPin className={"text-lg"} /> {location.region}
              </span>
              {miscellanies?.map((miscellanie) => (
                <span className="block text-11" key={miscellanie}>
                  {miscellanie}
                </span>
              ))}
            </div>

            <span className="self-end text-right text-black">
              од <br />€{prices.prices[0]}
            </span>
          </div>
        </div>
        <Link
          href={`/${location.country}/${arrangementType}/${id}`}
          className="border-orange border-2 shadow-md font-bold
           hover:bg-orange block text-center rounded-md px-4 py-2 uppercase w-full transition ease-in delay-100">
          Повеќе
        </Link>
      </div>
    </div>
  );
};

export default OfferCard;
