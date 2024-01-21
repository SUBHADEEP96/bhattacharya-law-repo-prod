"use client";
import React, { useEffect, useState } from "react";
import client from "../sanity/client";
import { practices } from "@/types/practices";
import withPopup from "../../wrapper/withPopup";
const Practices = () => {
  const [practices, setPractices] = useState<practices[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: practices[] = await client.fetch(
          `*[_type == "practices"]{
            _id,
            _createdAt,
            body,
            practice
          }`,
          { next: { revalidate: 60 } }
        );
        setPractices(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="container mx-auto px-10">
      <section className="text-gray-600 body-font">
        <div className="flex flex-col text-center w-full mt-5">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            <q>
              <i>Spot Light...</i>
            </q>
          </h1>
          <p
            className="lg:w-3/3 mx-auto leading-relaxed text-base"
            dangerouslySetInnerHTML={{
              __html: practices[10]?.body.split(".").join("   "),
            }}
          />
        </div>
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          {practices?.map((data, index) => (
            <div className="flex relative pb-12" key={data?._id}>
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-950	 inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>

              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                  PRACTICE {index + 1}
                </h2>
                <p
                  className="leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: data?.practice }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default withPopup(Practices);
