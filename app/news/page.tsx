"use client";
import React, { useEffect, useState, lazy, Suspense } from "react";
import client from "../sanity/client";
import withPopup from "../../wrapper/withPopup";
import { News } from "@/types/News";
import Link from "next/link";
const NewsCard = (props: any): any => {
  return (
    <>
      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-gray-700">Dated</span>
          <span className="mt-1 text-gray-500 text-sm">
            {props?.date?.slice(0, 10)}
          </span>
        </div>
        <div className="md:flex-grow">
          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
            {props?.title}
          </h2>
          <p className="leading-relaxed">{props?.description}</p>
          <Link
            className="text-indigo-500 inline-flex items-center mt-4"
            href={"news/" + props?.slug}
          >
            Learn More
            <svg
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
};
const News = () => {
  const [News, setNews] = useState<News[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: News[] = await client.fetch(
          `*[_type == "news"]{
            _id,
            _createdAt,
            title,
            description,
            slug,
            content
          }`,
          { next: { revalidate: 60 } }
        );
        setNews(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="container mx-auto px-10">
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
            {News?.map((n) => (
              <NewsCard
                key={n?._id}
                title={n?.title}
                description={n?.description}
                slug={n?.slug?.current}
                date={n?._createdAt}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
