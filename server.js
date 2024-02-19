const express = require("express");
const app = express();
const routes = require("./routes/app");
const path = require("path");
app.use("/", routes);

// Serve static assets if in production
app.use(express.static("build"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html")); // relative path
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
