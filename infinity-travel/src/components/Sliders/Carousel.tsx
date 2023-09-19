import Image from "next/image";
import "pure-react-carousel/dist/react-carousel.es.css";
import { RiCloseFill } from "react-icons/ri";
import { SlLocationPin } from "react-icons/sl";
import { ImageType } from "src/types";

type Props = {
  setCurrentIndex: (value: number) => void;
  setOpenCarousel: (value: boolean) => void;
  momentsData: ImageType[];
  currentIndex: number;
};

const Carousel = ({
  setCurrentIndex,
  setOpenCarousel,
  momentsData,
  currentIndex,
}: Props) => {
  const image = momentsData[currentIndex];

  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex items-center 
justify-center z-30 bg-black bg-opacity-50"
    >
      <div className="relative w-4/5 h-4/5">
        <button
          onClick={() => setOpenCarousel(false)}
          className="absolute top-0 right-0 md:right-40 lg:right-80 text-5xl text-gray-800
       bg-gray-200 bg-opacity-70"
        >
          <RiCloseFill />
        </button>
        <Image
          className="w-full h-full object-contain"
          src={image.url}
          width={543}
          height={661}
          alt="carousel image"
        />
        <div
          className="absolute flex justify-center items-center max-[640px]:top-10 sm:top-0 
      lg:left-80 lg:w-1/5 w-1/2 sm:w-1/3 sm:left-36 font-semibold bg-[url('/images/icons/moment-vector.svg')]
       h-12 bg-cover bg-no-repeat"
        >
          <span className="flex items-center text-20">
            <SlLocationPin />
            {image.location?.city}, {image.location?.country}
          </span>
        </div>
        <button
          id="prevBtn"
          className="w-1/12 absolute bottom-1/2 translate-y-1/2 left-0"
          onClick={() => setCurrentIndex(currentIndex - 1)}
          disabled={currentIndex === 0}
        >
          <Image
            className="w-auto h-auto"
            src="/images/icons/carousel-prev-icon.svg"
            width={73}
            height={140}
            alt="carousel prev icon"
          />
        </button>

        <button
        id="nextBtn"
          className="w-1/12 absolute bottom-1/2
     translate-y-1/2 right-0"
          onClick={() => setCurrentIndex(currentIndex + 1)}
          disabled={currentIndex === momentsData.length - 1}
        >
          <Image
            className="w-auto h-auto"
            src="/images/icons/carousel-next-icon.svg"
            width={73}
            height={140}
            alt="carousel next icon"
          />
        </button>
      </div>
    </div>
  );
};
export default Carousel;
