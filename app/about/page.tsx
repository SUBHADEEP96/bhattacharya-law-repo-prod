"use client";
import React, { useEffect, useState } from "react";
import { About } from "@/types/About";
import client from "../sanity/client";
import withPopup from "../../wrapper/withPopup";
const About = () => {
  const [about, setAbout] = useState<About[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: About[] = await client.fetch(
          `*[_type == "about"]{
            _id,
            _createdAt,
            heading,
            body
          }`,
          { next: { revalidate: 60 } }
        );
        setAbout(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="container   w-full">
        <div className="  mb-20">
          <h1 className="sm:text-3xl text-2xl text-center font-medium title-font mb-4 mt-8 text-gray-900">
            {about[0]?.heading}
          </h1>
          <p className="px-10 mx-auto leading-relaxed text-base">
            {about[0]?.body}
          </p>
        </div>
      </div>
    </div>
  );
};

export default withPopup(About);
