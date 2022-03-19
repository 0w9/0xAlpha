const axios = require("axios")
const express = require("express");
const fs = require("fs");
const mongoose = require('mongoose');
const pino = require("pino");

const Sentry = require('@sentry/node');
const Tracing = require("@sentry/tracing");

const twitter = require("./scrapers/twitter");

const feedHelper = require("./routes/feed");

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

app.get("/feed", feedHelper.getUserFeed);
// Scraping algorithm 

function intervalScraping() {
	setInterval(twitter, 3600000); // Fetches tweets every 60 minutes / 3.600.000 ms
    //twitter();
}

function start() {
    intervalScraping();
    logger.info(`Started interval scraping!`);
}

app.get("/debug-sentry", function mainHandler(req, res) {
    throw new Error("My first Sentry error!");
  });   

app.listen(port, () => {
    logger.info(`Running scraping on port ${port}`);
    start();
});
