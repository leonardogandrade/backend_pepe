import {
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
  FastifyPluginOptions,
} from "fastify";
import { createUser, listUsers } from "./controllers/user-controller";

const router = async (
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) => {
  fastify.get("/", listUsers);

  fastify.post("/", createUser);
};

export default router;
