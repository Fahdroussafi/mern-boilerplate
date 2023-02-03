const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
require("colors");
const startServer = require("./config/database");
const { errorHandler } = require("./middleware/error.middleware");
const { notFound } = require("./middleware/route.middleware");

const app = express();

// init db with mongoose
startServer();

// global middlewares
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(express.json());

// routes
app.use("/api/test", require("./admin-service/admin.route"));

app.get("/", (req, res) => {
  console.log("health check");
  res.json({
    healthCheck: "system is ready",
  });
});

// 404
app.use(notFound);

// Error handler
app.use(errorHandler);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🚀 Server ready at ${PORT} 🚀`.blue.underline.bold);
});

module.exports = app;
