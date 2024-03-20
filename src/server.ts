import Fastify from "fastify";
import router from "./routes";
import ConnectDB from "./db/conn";

const server = Fastify({ logger: true });
const port = 4011;

ConnectDB()

server.register(router);

server.listen({ port }, (error) => {
  if (error) {
    console.error(`ERROR: ${error}`);
    process.exit(1);
  }
});
