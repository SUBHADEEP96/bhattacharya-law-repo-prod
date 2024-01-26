import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
const Body = () => {
  const items = [
    {
      id: 1,
      imageUrl: "/wide-hero.jpg",
      title: "BA images",
    },
    {
      id: 2,
      imageUrl: "/thumb.jpg",
      title: "BA images",
    },
    {
      id: 3,
      imageUrl: "/body.jpg",
      title: "BA images",
    },
  ];
  const [active, setActive] = useState(0);

  const handleNext = () => {
    if (active === items.length - 1) {
      setActive(0);
    } else {
      setActive((prev) => prev + 1);
    }
  };
  useEffect(() => {
    let timer = setTimeout(() => {
      handleNext();
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [active]);
  return (
    <div className="container mx-auto">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-15 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg h-64 overflow-hidden">
              <Image
                alt="content"
                className="object-cover object-center h-full w-full"
                src={items[active].imageUrl}
                width={1200}
                height={500}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <Image
                    src="/profile.jpg"
                    alt=""
                    width={100}
                    height={100}
                    style={{ borderRadius: "50%" }}
                  />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                    Adv Boudhayan Bhattacharyya
                  </h2>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  <p className="text-base">
                    <i>
                      <q>Navigating Legal Horizons, Advocating Your Rights.</q>
                    </i>
                  </p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4">
                  "We at "Bhattacharyyas & Associates" have a very strong
                  infrastructure in terms of library and quite a few agile, able
                  young junior advocates who love to take up your challenges! We
                  have our Head Office at Kolkata and two branch offices in
                  North-Eastern India. We work profusely in most of the states
                  of the country. We have the right kind of balance --
                  experience in terms of age and enthusiasm in terms of youth,
                  to cater for all your needs. What we do can be found under the
                  "Services" tab. In doing so, we provide onsite legal help
                  anywhere in India and in select few countries abroad. If you
                  want we can arrange for Virtual Conferences/Webinars/Online
                  Private Consultancy/Online Workshops to suite your needs ....
                </p>
                <Link
                  className="text-indigo-500 inline-flex items-center"
                  href="/about"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Body;
