const express = require("express");
const app = express();
const routes = require("./routes/app");
const path = require("path");
app.use("/", routes);

const buildPath = path.join(__dirname, "build");

// gets the static files from the build folder
app.get("*", (req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
