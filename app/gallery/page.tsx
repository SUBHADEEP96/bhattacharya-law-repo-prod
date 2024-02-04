"use client";
import React, { useEffect, useState } from "react";
import client, { urlFor } from "../sanity/client";
import { Gallery } from "@/types/Gallery";
import withPopup from "../../wrapper/withPopup";
import Image from "next/image";
import CustomLoader from "../components/CustomLoader";
const SingleImage = (props: any): any => {
  let fallbackImageSrc = "https://dummyimage.com/300x200/000/fff.png";
  return (
    <>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex">
          <Image
            alt="gallery"
            className="img-gallery"
            src={urlFor(props?.image).url()}
            width={400}
            height={200}
            placeholder="blur"
            blurDataURL={urlFor(props?.image).url()}
            onError={({ target }) => {
              if (target instanceof HTMLImageElement) {
                target.src = fallbackImageSrc;
              }
            }}
          />
        </div>
      </div>
    </>
  );
};
const Gallery = () => {
  const [gallery, setGallery] = useState<Gallery[]>([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [totalImages, setTotalImages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (page: number) => {
    setIsLoading(true);
    try {
      const totalData: Gallery[] = await client.fetch(
        `*[_type == "gallery"] {
          _id,
          images
        }`,
        { next: { revalidate: 60 } }
      );
      setTotalImages(totalData?.length);
      const data: Gallery[] = await client.fetch(
        `*[_type == "gallery"] | order(publishedAt desc) {
          _id,
          images
        }[${(page - 1) * pageSize}...${page * pageSize}]`,
        { next: { revalidate: 60 } }
      );
      setGallery([...gallery, ...data]);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollHeight, scrollTop, clientHeight } =
        document.documentElement;
      const distanceFromBottom = scrollHeight - scrollTop - clientHeight;
      if (
        distanceFromBottom < 100 &&
        !isLoading &&
        totalImages > gallery?.length
      ) {
        setPage(page + 1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [gallery, isLoading, totalImages]);

  return (
    <div className="container mx-auto px-10">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              Bhattacharya & Associates Gallery
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            {gallery?.map((pic) => (
              <SingleImage key={pic?._id} image={pic?.images} />
            ))}
            {isLoading && <CustomLoader />}
          </div>
          <div
            style={{ display: "flex", gap: "10px", justifyContent: "center" }}
          >
            {totalImages > gallery?.length &&
              !isLoading &&
              gallery?.length > 0 && (
                <button onClick={() => setPage(page + 1)}>Load More</button>
              )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
