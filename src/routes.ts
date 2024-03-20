import {
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
  FastifyPluginOptions,
} from "fastify";
import { createUser, deleteUser, getUserByID, getUserByName, listUsers, updateUser } from "./controllers/user-controller";
import { schema } from "./validators/user-validator";

const router = async (
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) => {
  fastify.get("/user", listUsers);

  fastify.post("/user", { schema }, createUser);

  fastify.get("/user/:id", getUserByID);
  fastify.get("/user/name/:name", getUserByName);

  fastify.delete("/user/:id", deleteUser);

  fastify.put('/user/:id', updateUser)
};

export default router;
