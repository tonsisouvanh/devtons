import React, { useState, useEffect, createContext } from "react";
// import firebase from "firebase/app";
// import "firebase/firestore";

import { db } from "../firebase";
import { collection, getDocs, query } from "firebase/firestore";

const getInitialProjects = () => {
  const projects = {
    data: [],
    isLoading: true,
    isError: false,
  };
  return projects;
};

export const ProjectsContext = createContext();

export const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState(getInitialProjects);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const listingRef = collection(db, "projects");
        const q = query(listingRef);
        const querySnap = await getDocs(q);

        const projectsData = [];
        querySnap.docs.forEach((doc) => {
          return projectsData.push({
            id: doc.id,
            ...doc.data(),
          });
        });

        setProjects({ data: projectsData, isLoading: false, isError: false });
      } catch (error) {
        console.log("Could not fetch listing");
      }
    };

    fetchData();
  }, []);

  const { data, isLoading, isError } = projects;

  return (
    <ProjectsContext.Provider value={{ data, isLoading, isError, setProjects }}>
      {children}
    </ProjectsContext.Provider>
  );
};
