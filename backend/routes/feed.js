const pino = require("pino");

const logger = pino({
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: 'true'
        }
    },
});

module.exports.getUserFeedback = function(req, res) {
    
    try {    
        if(req.headers["address"]) {
            let address = req.headers["address"];

            // Check for users NFTs by address,
            // defined in the header.

        } else {
            res.json({error: "Please define a ethereum address."});

            // Error, if no address is specified
        } 
    } catch(e) {
        logger.alert("Fatal error: " + e.message);

        // Prevent any error from crashing the backend. 
    }
}