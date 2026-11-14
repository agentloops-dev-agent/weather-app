import { createServer } from "node:http";

// Cloud Run says the port in PORT.
const port = Number(process.env.PORT ?? 8080);

const server = createServer((request, response) => {
  if (request.url === "/healthz") {
    response.writeHead(200, { "content-type": "text/plain" });
    response.end("ok\n");
    return;
  }
  response.writeHead(200, { "content-type": "text/html; charset=utf-8" });
  response.end("<!doctype html><title>Weather</title><h1>Weather</h1>\n");
});

server.listen(port, () => {
  console.log(`weather listens on ${port}`);
});
