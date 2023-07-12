import React from "react";
import { projectData } from "../data";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

const Test = () => {
  const inputData = projectData.map(({ desc, imgs, github,name,techStack,website }) => ({
    name: name,
    description: desc,
    images: imgs,
    techStack: techStack,
    github: github,
    website: website
  }));

  console.log(inputData);

  const handleClick = async () => {
    try {
      const projectsCollectionRef = collection(db, "projects");

      for (const project of inputData) {
        await addDoc(projectsCollectionRef, project);
      }

      console.log("Projects added to Firestore successfully");
    } catch (error) {
      console.error("Error adding projects to Firestore:", error);
    }
  };

  return (
    <div className="bg-white w-full h-screen flex items-center justify-center">
      <button className="bg-blue-500 px-10 py-5 text-white" onClick={handleClick}>
        INSERT DATA
      </button>
    </div>
  );
};

export default Test;
