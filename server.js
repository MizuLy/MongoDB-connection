require("dotenv").config();

const express = require("express");

const connectDB = require("./config/db");
const blogRoutes = require("./routes/blogRoutes");

const app = express();
const PORT = process.env.PORT || 6969;

app.use(express.json());

app.use("/api", blogRoutes);

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
