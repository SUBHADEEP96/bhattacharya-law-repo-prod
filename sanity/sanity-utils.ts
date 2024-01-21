import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";

export async function getProjects(): Promise<Project[]> {
  const client = createClient({
    projectId: "3qdha0od",
    dataset: "production",
    apiVersion: "2023-09-05",
    useCdn: false,
  });
  const revalidate = 60; //Time interval
  const query = groq`*[_type == "project"]{
    _id,
    _createdAt,
    name,
    "slug":slug.current,
    "image":image.asset->url,
    url,
    content
}`;

  const data = await client.fetch(query, { next: { revalidate } });
  return data;
  // return await client.fetch(
  //   groq`*[_type == "project"]{
  //       _id,
  //       _createdAt,
  //       name,
  //       "slug":slug.current,
  //       "image":image.asset->url,
  //       url,
  //       content
  //   }`
  // );
}
