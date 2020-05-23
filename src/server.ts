import app from "./app";
const {
  env: { port = 3000 },
} = process;
const server = app.listen(port, () => {
  console.log(
    "App is running at http://localhost:%d in %s mode",
    port,
    app.get("env")
  );
  console.log("  Press CTRL-C to stop\n");
});

export default server;
