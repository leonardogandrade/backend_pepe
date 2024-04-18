import {
  FastifyInstance,
  FastifyPluginOptions,
} from "fastify";
import { createUser, deleteUser, getUserByID, getUserByName, listUsers, updateUser } from "../controllers/userController";
import { schema } from "../validators/userValidators/user-validator";
import { userIdSchema } from "../validators/userValidators/userId-validator";
import { userPutSchema } from "../validators/userValidators/userPut-validator";
import { userNameSchema } from "../validators/userValidators/userName-validator";

const userRoutes = async (
  fastify: FastifyInstance, // how its this instace passed 
  options: FastifyPluginOptions
) => {
  fastify.get("/user", listUsers);

  fastify.post("/user", { schema }, createUser);

  fastify.get("/user/:id", userIdSchema, getUserByID);
  
  fastify.get("/user/name/:name", userNameSchema,getUserByName);

  fastify.delete("/user/:id", userIdSchema, deleteUser);

  fastify.put('/user/:id', userPutSchema, updateUser)
};

export default userRoutes;
