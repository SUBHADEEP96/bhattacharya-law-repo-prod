"use client";
import React, { useEffect, useState, lazy, Suspense } from "react";
import client, { urlFor } from "../sanity/client";
import { Gallery } from "@/types/Gallery";
import withPopup from "../../wrapper/withPopup";
import Image from "next/image";
const SingleImage = (props: any): any => {
  return (
    <>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex">
          <img
            alt="gallery"
            className="img-gallery"
            src={urlFor(props?.image).url()}
          />
        </div>
      </div>
    </>
  );
};
const Gallery = () => {
  const [gallery, setGallery] = useState<Gallery[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: Gallery[] = await client.fetch(
          `*[_type == "gallery"]{
            _id,
            images
          }`,
          { next: { revalidate: 60 } }
        );
        setGallery(data);
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
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Bhattacharya & Associates Gallery
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            {gallery?.map((pic) => (
              <SingleImage key={pic?._id} image={pic?.images} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default withPopup(Gallery);
