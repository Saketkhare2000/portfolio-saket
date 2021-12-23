import Image from "next/image";
import React, { useEffect, useState } from "react";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import Card from "./Card";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const querySnapshot = getDocs(collection(db, "projects"))
      .then((querySnapshot) => {
        const projects = [];
        querySnapshot.forEach((doc) => {
          projects.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setProjects(projects);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1 className="font-bold text-4xl text-center p-4 lg:px-32">Projects</h1>
      <div className="flex flex-col justify-between p-4 md:flex md:flex-row md:space-y-0 flex-wrap lg:px-32 ">
        {projects.map((project) => {
          return (
            <>
              <Card {...project} key={project.id} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
