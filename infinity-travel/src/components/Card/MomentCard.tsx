import Image from "next/image";
import { ImageType } from "src/types";

type Props = {
  card: ImageType;
  handleCarousel: () => void;
};
const MomentCard = ({ card, handleCarousel }: Props) => {
  
  const { url } = card;

  return (
    <>
      <div className="moment-card">
        <Image
          onClick={handleCarousel}
          className="pr-4 cursor-pointer pb-3 w-full"
          src={url}
          width={174}
          height={183}
          alt="moment"
        />
      </div>
    </>
  );
};

export default MomentCard;
