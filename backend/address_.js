const axios = require("axios");
const pino = require("pino");
const collection_info = require("./id_collection.json");

const logger = pino({
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: 'true'
        }
    },
});

module.exports.fetchUserNfts = async(address) => {
    let collections = []
    const res = await axios.get(`https://api.nftport.xyz/v0/accounts/${address}?chain=ethereum`, {
        headers: {
            'Authorization': '1970291d-6325-4d02-956e-bf97900bedd7',
            'Content-Type': 'application/json'
        }
    }).then(res => res.data);

    res.nfts.forEach(nft => {
        //console.log(nft);

        Object.entries(collection_info).map(x => {
            console.log(x[0].twitter);
            /*if(x.contract_address == nft.contract_address) {
                collections.push(x.contract_address.toLowerCase());
            }*/
        })

        /*for (const [name, contract] of Object.entries(collection_info)) {
            console.log(name, contract);
            if (contract.contract_address === nft.contract_address.toLowerCase()) {
                collections.push(contract.toLowerCase());
            }*/
    //}
    });

    return collections;
}