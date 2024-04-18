const bodyJsonSchema = {
  type: "object",
  required: ["name", "email", "password"],
  properties: {
    name: { type: "string" },
    email: { type: "string" },
    password: { type: "string" },
    vs: {type: "string"},
    project: {type: "string"},
    cargo: {type: "string"},
    birthday: {type: "string"}
  },
};

export const schema = {
  body: bodyJsonSchema,
};