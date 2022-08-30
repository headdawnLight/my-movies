const server = require("./app");
const port = process.env.SERVER_PORT || 5000;
server.listen(port, function () {
  console.log(`Server is listening on ${port}`);
});
