// @flow

export function routes(server: Object) {
  server.app.get("/api", homeHandler);
}

function homeHandler(res, req) {
  return res.send({ hello: "Hi" });
}
