import Fastify, { FastifyInstance } from "fastify";
import router from "./routes";

const createServer = () => {
  const server = Fastify({ logger: true });
  server.register(router);

  return server;
}

export default createServer;