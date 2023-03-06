const express = require("express");
const router = require("./server/exp_router");
const path = require("path");
const morgan = require("morgan");

const port = 3000;
const verbose = false;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use("/api", router);
app.use(express.static(path.resolve(__dirname, "public")));


if (verbose) {
  app.use(morgan("tiny"));
}


app.get("/", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname,"public", "index.html"));
});

app.all("*", (req, res) => {
  res.status(404).send(`<h1>404 Page Not Found</h1>`);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`URL : http://localhost:${port}/`);
});
