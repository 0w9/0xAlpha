const axios = require("axios");
const pino = require("pino");
const collection_info = require("./configs/id_collection.json");

const logger = pino({
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: 'true'
        }
    },
});

module.exports.fetchUserNfts = async (address) => {
    let collections = []
    const res = await axios.get(`https://api.nftport.xyz/v0/accounts/${address}?chain=ethereum`, {
        headers: {
            'Authorization': '1970291d-6325-4d02-956e-bf97900bedd7',
            'Content-Type': 'application/json'
        }
    }).then(res => res.data);

    res.nfts.forEach(nft => {
        Object.values(collection_info).map(x => {
            if (x.contract_address.toLowerCase() === nft.contract_address.toLowerCase()) {

                collections.push(x.contract_address.toLowerCase());
            }
        })

        for (const [name, contract] of Object.entries(collection_info)) {
            console.log(name, contract);
            if (contract.contract_address === nft.contract_address.toLowerCase()) {
                collections.push(contract.toLowerCase());
            }
        }
        });

    return collections;
}