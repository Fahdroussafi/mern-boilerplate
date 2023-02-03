const asyncHandler = require("express-async-handler");

const Test = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "Test route is working",
  });
});

module.exports = { Test };
