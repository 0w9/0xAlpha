const axios = require("axios")
const express = require("express");
const fs = require("fs");
const mongoose = require('mongoose');
const pino = require("pino");

const pino_logger = pino({
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: 'true'
        }
    },
});

function fetchTweets() {
    console.time("Fetch tweets");
    
    console.timeEnd("Fetch tweets");
}