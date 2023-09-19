import {
  CarouselProvider,
  ButtonBack,
  Slider,
  ButtonNext,
} from "pure-react-carousel";
import React from "react";
import Image from "next/image";
import { ImageType } from "src/types";

type Props = { gallery: ImageType[] };

const GallerySlider = ({ gallery }: Props) => {
  return (
    <>
      <div id="galerija">
        <div className="hidden lg:block">
          <CarouselProvider
            naturalSlideHeight={200}
            naturalSlideWidth={200}
            isIntrinsicHeight={true}
            totalSlides={gallery.length}
            visibleSlides={5}
            step={1}
            dragEnabled={false}
            touchEnabled={false}
          >
            <div className="relative flex items-center">
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
                {gallery.map((image, idx) => (
                  <div className="pr-4" key={idx}>
                    <Image
                      src={image.url}
                      width={250}
                      height={183}
                      alt="gallery-image"
                      unoptimized={true}
                    />
                  </div>
                ))}
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
        {/* Mobile cards design */}
        <div className="flex container-fluid flex-wrap lg:hidden">
          {gallery.map((image, idx) => (
            <div className="pr-4 md:w-1/4 w-1/2 my-2" key={idx}>
              <Image
                src={image.url}
                width={250}
                height={183}
                alt="gallery-image"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GallerySlider;
