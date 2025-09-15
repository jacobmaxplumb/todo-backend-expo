const express = require('express');
const cors = require('cors');
const todosRouter = require('./routes/todosRoute');
const server = express();

server.use(express.json());
server.use(cors());

server.use('/todos', todosRouter);

module.exports = server;