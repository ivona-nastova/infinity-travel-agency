import Image from "next/image";
import StarsRating from "src/helpers/StarsRating";
import { TestimonialType } from "src/types";

type Props = {
  testimonial: TestimonialType;
};

const TestimonialCard = ({ testimonial }: Props) => {

  const { image, rating, title, description, arrangement } = testimonial;
  const stars = StarsRating(rating);

  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 relative mb-5">
      <div className="mr-10 bg-white">
        <Image
          className="w-full"
          src={image}
          width={390}
          height={250}
          alt="testimonial"
        />

        <Image
          className="absolute z-30 -top-3 left-1/4"
          src="/images/icons/testimonial-ribbon.svg"
          width={136}
          height={8}
          alt="testimonial-ribbon"
        />

        <div className="flex flex-col p-8">
          <h4 className="text-24 font-semibold">{title}</h4>
          {stars}
          <p className="text-18 my-3">{description}</p>
          <span className="text-20 font-semibold">{arrangement}</span>
          <Image
            src="/images/icons/testimonial-vector.svg"
            width={136}
            height={8}
            alt="testimonial-vector"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
