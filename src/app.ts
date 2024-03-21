import ConnectDB from "./db/conn";
import createServer from "./server";

const port = 4011;
const app = createServer()

ConnectDB()

app.listen({ port }, (error) => {
  if (error) {
    console.error(`ERROR: ${error}`);
    process.exit(1);
  }
});
