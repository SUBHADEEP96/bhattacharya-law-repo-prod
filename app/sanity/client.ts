import { SanityClient, createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
const client: SanityClient = createClient({
  projectId: "3qdha0od",
  dataset: "production",
  apiVersion: "2023-09-05",
  useCdn: false,
});
const builder: ImageUrlBuilder = imageUrlBuilder(client);
export function urlFor(source: SanityImageSource): ImageUrlBuilder {
  return builder.image(source);
}

export default client;
