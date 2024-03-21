import {
  FastifyInstance,
  FastifyPluginOptions,
} from "fastify";
import { createUser, deleteUser, getUserByID, getUserByName, listUsers, updateUser } from "./controllers/user-controller";
import { schema } from "./validators/user-validator";
import { userIdSchema } from "./validators/userId-validator";
import { userPutSchema } from "./validators/userPut-validator";
import { userNameSchema } from "./validators/userName-validator";

const router = async (
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) => {
  fastify.get("/user", listUsers);

  fastify.post("/user", { schema }, createUser);

  fastify.get("/user/:id", userIdSchema, getUserByID);
  
  fastify.get("/user/name/:name", userNameSchema,getUserByName);

  fastify.delete("/user/:id", userIdSchema, deleteUser);

  fastify.put('/user/:id', userPutSchema, updateUser)
};

export default router;
