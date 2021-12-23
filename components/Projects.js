import React, { useEffect, useState } from "react";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import Card from "./Card";
import { motion } from "framer-motion";
import { revealAnim2 } from "../animation";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getDocs(collection(db, "projects"))
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
    <motion.div
      initial="hidden"
      animate="show"
      variants={revealAnim2}
      className="mt-16"
    >
      <h1 className="font-bold text-4xl text-left p-4 lg:px-32 md:text-center">
        Projects
      </h1>
      <div className="flex flex-col justify-center p-4 md:flex md:flex-row md:justify-between md:space-y-0 flex-wrap lg:px-32 ">
        {projects.map((project) => {
          return (
            <>
              <Card {...project} key={project.id} />
            </>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Projects;
