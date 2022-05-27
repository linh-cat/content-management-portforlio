const express = require("express");
const app = express();
const cors = require("cors");

// import router
const blog_router = require("./src/routes/blog/blog.route");

const PORT = process.env.PORT || 3000;

// cor
app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (_req, res) => {
  res.send("Server is running");
});

app.use("/blog", blog_router);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
