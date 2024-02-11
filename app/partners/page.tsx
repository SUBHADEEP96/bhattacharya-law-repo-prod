"use client";
import React, { useEffect, useState, lazy, Suspense } from "react";
import client from "../sanity/client";
import { Partners } from "@/types/Partners";
import withPopup from "../../wrapper/withPopup";
import Image from "next/image";
import Refresh from "../refresh/page";

interface PageProps {
  agreed: boolean | null;
}
const Partners = ({ agreed }: PageProps) => {
  const [partners, setPartners] = useState<Partners[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: Partners[] = await client.fetch(
          `*[_type == "partners"]{
            _id,
            _createdAt,
            name,
            designation,
            content
          }`,
          { next: { revalidate: 60 } }
        );
        setPartners(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-10">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
            Partners
          </h1>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-100 p-8 rounded flex flex-col">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="block w-5 h-5 text-gray-400 mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p
                  className="leading-relaxed mb-6"
                  dangerouslySetInnerHTML={{ __html: partners[0]?.content }}
                />
                <a className="flex items-center mt-auto flex-col sm:flex-row">
                  <div>
                    <Image
                      src="/profile.jpg"
                      alt="Bhudhayan"
                      width={100}
                      height={100}
                      className="rounded-full w-20 h-20 object-cover sm:w-16 sm:h-16"
                    />
                  </div>

                  <span className="flex-grow flex flex-col sm:pl-4">
                    <span className="title-font font-medium text-gray-900">
                      {partners[1]?.name}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {partners[1]?.designation.toUpperCase()}
                    </span>
                  </span>
                </a>
              </div>
            </div>
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-100 p-8 rounded flex flex-col">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="block w-5 h-5 text-gray-400 mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="leading-relaxed mb-6">{partners[1]?.content}</p>
                <a className="flex items-center mt-auto flex-col sm:flex-row">
                  <div>
                    <Image
                      src="/sougata.jpeg"
                      alt="Sougata"
                      width={100}
                      height={100}
                      className="rounded-full w-20 h-20 object-cover sm:w-16 sm:h-16"
                    />
                  </div>

                  <span className="flex-grow flex flex-col sm:pl-4">
                    <span className="title-font font-medium text-gray-900">
                      {partners[1]?.name}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {partners[1]?.designation.toUpperCase()}
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default withPopup(Partners);
