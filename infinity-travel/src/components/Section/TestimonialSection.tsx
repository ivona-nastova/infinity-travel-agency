import { TestimonialType } from "src/types";
import TestimonialCard from "../Card/TestimonialCard";
import Title from "../Global/Title";

type Props = {
  testimonialData: TestimonialType[];
};

const TestimonialSection = ({ testimonialData }: Props) => {
  return (
    <>
      <Title title="Тестимониал" />
      <div className="container-sm">
        <div className="bg-[url('/images/bg-testimonial.png')] bg-cover flex flex-wrap items-center justify-center h-60vh p-8">
          {testimonialData.map((testimonial: TestimonialType) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TestimonialSection;
