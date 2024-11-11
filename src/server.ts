import { Server } from "http";
import app from "./app";

const port = 3000;

async function main() {
  try {
    const server: Server = app.listen(port, () => {
      console.log("Library is on server ", port);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
