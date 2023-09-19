import { useState } from "react";
import { ImageType } from "src/types";
import MomentCard from "../Card/MomentCard";
import Title from "../Global/Title";
import Carousel from "../Sliders/Carousel";

type Props = {
  momentsData: ImageType[];
};

const MomentSection = ({ momentsData }: Props) => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [openCarousel, setOpenCarousel] = useState(false);

  function handleCarousel(idx: number) {
    setOpenCarousel(true);
    setCurrentIndex(idx);
  }

  return (
    <>
      <Title title="Ваши моменти" />
      <div className="flex flex-wrap items-center container-sm py-7">
        {momentsData.map((card, idx) => (
          <MomentCard
            key={card.url}
            card={card}
            handleCarousel={() => handleCarousel(idx)}
          />
        ))}
      </div>

      {openCarousel && ( <Carousel momentsData={momentsData}
       currentIndex={currentIndex} 
       setCurrentIndex={setCurrentIndex} 
       setOpenCarousel={setOpenCarousel}/>)}
    </>
  );
};

export default MomentSection;
