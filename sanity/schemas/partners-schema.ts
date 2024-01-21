const partners = {
  name: "partners",
  title: "Partners",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "designation",
      title: "Designation",
      type: "string",
    },
    {
      title: "Content",
      name: "content",
      type: "string",
      of: [{ type: "block" }],
    },
  ],
};

export default partners;
