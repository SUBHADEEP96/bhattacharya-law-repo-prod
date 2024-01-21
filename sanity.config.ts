import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";
const config = defineConfig({
  projectId: "3qdha0od",
  dataset: "production",
  title: "bhattacharya",
  apiVersion: "2023-09-03",
  basePath: "/superadmin",
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
