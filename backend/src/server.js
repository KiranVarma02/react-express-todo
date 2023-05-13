const express = require('express');
const cors = require('cors');
const todoRouter = require("./routes/todo");

const server = () => {
  const server = express();
  server.use(express.json());
  server.use(cors());

  server.use(todoRouter);

  return server;
};
module.exports = server;