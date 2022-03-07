const axios = require("axios")
const express = require("express");
const fs = require("fs");
const mongoose = require('mongoose');
const pino = require("pino");

const twitter = require("./scrapers/twitter");

const logger = pino({
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: 'true'
        }
    },
});

const app = express()
let port = 1234;

// Scraping algorithm 

function intervalScraping() {
    setInterval(twitter, 3600000); // Fetches tweets every 60 minutes / 3.600.000 ms
}

function start() {
    intervalScraping();
    logger.info(`Started interval scraping!`);
}
app.listen(port, () => {
    logger.info(`Running scraping on port ${port}`);
    start();
});