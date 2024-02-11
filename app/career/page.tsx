"use client";
import React, { useEffect, useState } from "react";
import { career } from "@/types/career";
import client from "../sanity/client";
import withPopup from "../../wrapper/withPopup";
const Career = () => {
  const [career, setCareer] = useState<career[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: career[] = await client.fetch(
          `*[_type == "career"]{
            _id,
            _createdAt,
            heading,
            body,
            mail
          }`,
          { next: { revalidate: 60 } }
        );
        setCareer(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-10 py-10 mh-auto">
        {career?.map((data) => (
          <div className="text-center w-full mb-10 sm:mb-20" key={data?._id}>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 sm:mb-4 text-gray-900">
              <q>
                <i>{data?.heading}</i>
              </q>
            </h1>
            <p
              className=" mx-auto leading-relaxed text-base"
              dangerouslySetInnerHTML={{ __html: data?.body }}
            />
            <u>
              <p className="font-bold text-center mt-2 sm:mt-4 lg:w-full sm:w-fit">
                <a
                  href={`mailto:${data?.mail}`}
                  className="text-blue-500 underline block w-full"
                >
                  {data?.mail}
                </a>
              </p>
            </u>
          </div>
        ))}
      </div>
    </div>
  );
};

export default withPopup(Career);
