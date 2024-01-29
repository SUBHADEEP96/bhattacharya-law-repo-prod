"use client";

import client from "../../sanity/client";
import { PortableText } from "@portabletext/react";

const NewsContent = async ({ params }: any) => {
  const id = params.id;
  const res = await client.fetch(
    `*[_type == "news" && slug.current =="${id}"]{content}`,
    { next: { revalidate: 60 } }
  );
  return (
    <section className=" body-font ">
      <div className="container px-5  mx-auto portable-text w-[60%] my-4 text-[#020626]">
        <PortableText value={res[0].content} />
      </div>
    </section>
  );
};
export default NewsContent;
