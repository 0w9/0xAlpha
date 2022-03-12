const pino = require("pino");
const addressHelper = require("../address_");

const logger = pino({
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: 'true'
        }
    },
});

module.exports.getUserFeed = async function(req, res) {
    try {    
        if(req.headers["address"]) {
            let address = req.headers["address"];

            const nfts = await addressHelper.fetchUserNfts(address);
            res.json({debug_result: nfts.toString()});

        } else {
            res.json({error: "Please define a ethereum address."});

            // Error, if no address is specified
        } 
    } catch(e) {
        logger.info("Fatal error: " + e.message);
        res.json({error: e.message});
        // Prevent any error from crashing the backend. 
    }
}