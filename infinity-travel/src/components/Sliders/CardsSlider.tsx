import Image from "next/image";
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slider,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { useEffect, useState } from "react";
import renderOfferCards from "src/helpers/renderOfferCards";
import { ArrangementType } from "src/types";
type Props = {
  arrangements: ArrangementType[];
};

export default function CardsSlider({ arrangements }: Props) {
  const arrangementsLength = arrangements.length;
  const [widthSize, setWidthSize] = useState(false);

  useEffect(() => {
    const checkViewport = () => {
      setWidthSize(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", checkViewport);

    checkViewport();

    return () => {
      window.removeEventListener("resize", checkViewport);
    };
  }, []);

  if (widthSize && arrangementsLength > 4) {
    return (
      <div className="hidden lg:block py-4">
        <CarouselProvider
          naturalSlideHeight={200}
          naturalSlideWidth={200}
          isIntrinsicHeight={true}
          totalSlides={arrangementsLength}
          visibleSlides={4}
          step={1}
        >
          <div className="relative flex">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="w-1/12"
              id="prev"
            >
              <Image
                src={"/images/icons/chevron-up.svg"}
                width={90}
                height={70}
                alt="chevron-up"
                className="w-auto h-auto"
              />
            </ButtonBack>
            <Slider className="container-sm">
              {renderOfferCards(arrangements)}
            </Slider>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="w-1/12"
              id="next"
            >
              <Image
                src={"/images/icons/chevron-down.svg"}
                width={90}
                height={70}
                alt="chevron-down"
                className="w-auto h-auto"
              />
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-wrap container-fluid">
        {renderOfferCards(arrangements)}
      </div>

      {arrangementsLength === 0 && (
        <p className="text-center sm:text-20">
          Нема достапни аранжмани во избраниот регион.
        </p>
      )}
    </>
  );
}
