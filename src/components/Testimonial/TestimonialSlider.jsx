import React from "react";
import TestimonialCard from "./TestimonailCard";

const TestimonialSlider = ({ testimonials }) => {
  return (
    <div className="grid grid-flow-row gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className="">
          <TestimonialCard testimonial={testimonial} />
        </div>
      ))}
    </div>
  );
};

export default TestimonialSlider;
