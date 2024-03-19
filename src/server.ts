import Fastify from "fastify";
import router from "./routes";

const server = Fastify({ logger: true });
const port = 4011;

server.register(router);

server.listen({ port }, (error) => {
  if (error) {
    console.error(`ERROR: ${error}`);
    process.exit(1);
  }
});
