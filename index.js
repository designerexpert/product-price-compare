const express = require("express");
const { logger } = require("./server/logger");
const router = require("./server/router");
const server = express();
const PORT = process.env.PORT || 8080;

server.use(express.json());
server.use(router);

server.listen(PORT, e => {
    if (e) logger.error(e);
    logger.info(`> Server Running on Port: [${PORT}]`);
});
