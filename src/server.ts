import Fastify from "fastify";
import { router } from "./routes/router";

const createServer = () => {
  const server = Fastify({ logger: true });
  server.register(router)

  return server;
}

export default createServer;