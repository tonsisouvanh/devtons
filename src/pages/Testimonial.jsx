import React, { useState } from "react";
import TestimonialCard from "../components/Testimonial/TestimonailCard";
import TestimonialFilter from "../components/Testimonial/TestimonialFilter";
import TestimonialSlider from "../components/Testimonial/TestimonialSlider";
const Testimonial = () => {
  const categories = [
    "Web Development",
    "Customer Service",
    "Graphic Design",
    "Product Quality",
  ];
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: "John Doe",
      company: "ABC Inc.",
      category: "Web Development",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Jane Smith",
      company: "XYZ Corp.",
      category: "Graphic Design",
      content:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      rating: 5.0,
    },
    {
      id: 3,
      name: "Sarah Johnson",
      company: "Design Studio",
      category: "Graphic Design",
      content:
        "Vivamus vestibulum, tellus in tincidunt varius, sapien massa tempus est, non vestibulum mauris metus sit amet ligula.",
      rating: 4.2,
    },
    {
      id: 4,
      name: "Michael Anderson",
      company: "Tech Solutions",
      category: "Web Development",
      content:
        "Sed feugiat, magna at feugiat vehicula, lacus neque scelerisque quam, at gravida neque dolor sed magna.",
      rating: 4.8,
    },
    {
      id: 5,
      name: "Emily Wilson",
      company: "Marketing Agency",
      category: "Marketing",
      content:
        "Cras ac magna id enim pulvinar ullamcorper. Nam gravida diam non risus luctus, vel iaculis lectus bibendum.",
      rating: 4.6,
    },
    // Add more testimonials...
  ]);

  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredTestimonials =
    selectedCategory === "All"
      ? testimonials
      : testimonials.filter(
          (testimonial) => testimonial.category === selectedCategory
        );

  return (
    <div className="py-20">
      <div className="rounded-div flex flex-col gap-10">
        <div className="text-center text-md">
          <h1 className="font-bold mb-4 text-primary ">
            Friendship and collaboration at its finest
          </h1>
          <h1 className="font-bold mb-4 text-primary ">
            Hear what they have to say
          </h1>
        </div>
        <TestimonialFilter
          categories={[
            "All",
            "Web Development",
            "Graphic Design",
            "Customer Service",
          ]}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <TestimonialSlider testimonials={filteredTestimonials} />

        {/* Testimonial pagination */}
        {/* Implement pagination component to display testimonials on different pages */}

        {/* Testimonial rating system */}
        {/* Add a rating component to allow users to rate testimonials */}

        {/* Testimonial author details */}
        {/* Add author details like profile picture, job title, location, social media links */}

        {/* Testimonial tags or categories */}
        {/* Display tags or categories associated with testimonials */}

        {/* Additional content or components */}
        {/* Add any additional content or components specific to your testimonial page */}
      </div>
    </div>
  );
};

export default Testimonial;
