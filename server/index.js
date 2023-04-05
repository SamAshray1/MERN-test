// server/index.js

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

if (true) {
  app.use(express.static(path.join(__dirname, "../client/build")));

  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "client", "build", "index.html")
    )
  );
} else {
  app.get("/", (req, res) => res.send("Please set to production"));
}
  
  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });