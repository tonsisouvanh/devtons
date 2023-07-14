import React, { useState, useEffect, createContext } from "react";
import { db } from "../firebase";
import { collection, getDocs, query } from "firebase/firestore";

const getInitialTestimonials = () => {
  const testimonials = {
    data: [],
    isLoading: true,
    isError: false,
  };
  return testimonials;
};

export const TestimonialsContext = createContext();

export const TestimonialsProvider = ({ children }) => {
  const [testimonials, setTestimonials] = useState(getInitialTestimonials);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const listingRef = collection(db, "testimonials");
        const q = query(listingRef);
        const querySnap = await getDocs(q);

        const testimonialsData = [];
        querySnap.docs.forEach((doc) => {
          return testimonialsData.push({
            id: doc.id,
            ...doc.data(),
          });
        });

        setTestimonials({ data: testimonialsData, isLoading: false, isError: false });
      } catch (error) {
        console.log("Could not fetch listing");
      }
    };

    fetchData();
  }, []);

  const { data, isLoading, isError } = testimonials;

  return (
    <TestimonialsContext.Provider value={{ data, isLoading, isError, setTestimonials }}>
      {children}
    </TestimonialsContext.Provider>
  );
};
