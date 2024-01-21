import { PortableTextBlock } from "sanity";

export type News = {
  _id: string;
  _createdAt: Date;
  title: string;
  description: string;
  slug: any;
  content: string;
};
