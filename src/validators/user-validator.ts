const bodyJsonSchema = {
  type: "object",
  required: ["name", "email", "password"],
  properties: {
    name: { type: "string" },
    email: { type: "string" },
    password: { type: "string" },
  },
};

export const schema = {
  body: bodyJsonSchema,
};