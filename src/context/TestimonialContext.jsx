import React, { useState, createContext, useEffect } from "react";
import { db, storage } from "../firebase";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export const TestimonialsContext = createContext();

export const TestimonialsProvider = ({ children }) => {
  const [testimonials, setTestimonials] = useState({
    data: [],
    isLoading: false,
    isError: false,
  });

  const addTestimonial = async (inputData) => {
    const { name, message, category, imageFile } = inputData;
    try {
      // Update the status to indicate that data is being added
      setTestimonials((prevState) => ({
        ...prevState,
        isLoading: true,
      }));

      const createdAt = new Date();

      const testimonialRef = await addDoc(collection(db, "testimonials"), {
        name,
        message,
        category,
        createdAt,
      });

      if (imageFile) {
        // Create a storage reference for the image file
        const storageRef = ref(
          storage,
          `testimonial_images/${testimonialRef.id}`
        );

        // Upload the image file to the storage reference
        await uploadBytes(storageRef, imageFile);

        // Get the download URL of the uploaded image
        const imageUrl = await getDownloadURL(storageRef);

        // Update the Firestore document with the image URL
        await updateDoc(doc(db, "testimonials", testimonialRef.id), {
          imageUrl,
        });

        // Update the testimonials state with the image URL
        setTestimonials((prevState) => ({
          ...prevState,
          data: [
            ...prevState.data,
            {
              id: testimonialRef.id,
              name,
              message,
              category,
              imageUrl,
              createdAt,
            },
          ],
          isLoading: false, // Set the status to indicate that data addition is completed
        }));
      } else {
        // Update the testimonials state without the image URL
        setTestimonials((prevState) => ({
          ...prevState,
          data: [
            ...prevState.data,
            {
              id: testimonialRef.id,
              name,
              message,
              category,
              // imageUrl:
              //   "https://images.squarespace-cdn.com/content/v1/5446f93de4b0a3452dfaf5b0/1626904421257-T6I5V5IQ4GI2SJ8EU82M/Above+Avalon+Neil+Cybart",
              createdAt,
            },
          ],
          isLoading: false, // Set the status to indicate that data addition is completed
        }));
      }
    } catch (error) {
      console.error("Error adding testimonial: ", error);

      // Set the status to indicate that an error occurred
      setTestimonials((prevState) => ({
        ...prevState,
        isLoading: false,
        isError: true, // Set the error flag to true
      }));
    }
  };

  const getTestimonials = async () => {
    try {
      const listingRef = collection(db, "testimonials");
      const q = query(listingRef);
      const querySnap = await getDocs(q);

      const testimonialsData = querySnap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      console.log("heyyyyyyyyyyyy", testimonialsData);

      setTestimonials({
        data: testimonialsData,
        isLoading: false,
        isError: false,
      });
    } catch (error) {
      console.log("Error fetching testimonials:", error);
      setTestimonials({
        data: [],
        isLoading: false,
        isError: true,
      });
    }
  };

  useEffect(() => {
    getTestimonials();
  }, []);

  const { data, isLoading, isError } = testimonials;

  return (
    <TestimonialsContext.Provider
      value={{ data, isLoading, isError, addTestimonial }}
    >
      {children}
    </TestimonialsContext.Provider>
  );
};
