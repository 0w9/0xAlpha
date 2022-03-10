const axios = require("axios");
const pino = require("pino");

let contract_addresses = {
    "bayc": "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",
    "nft-worlds": "0x2a52d32b2fb09492dde1ca2c36e1c69531664461",
    "doodles": "",
    "azuki": "0xed5af388653567af2f388e6224dc7c4b3241c544",
    "invisible-friends": "0xd7e5e1c0cb9540669d8f22f71c9540460db23938",
    "cool-cats": "0x4265de963cdd60629d03fee2cd3285e6d5ff6015",
    "3landers": "0x8cbc5c6f260bef0f9edb71219a61a1c52062a586",
    "the-doggies": "0xe19ae8f9b36ca43d12741288d0e311396140df6f",
    "doogies": "0x73a77f5108db8c21041701561e436f0354f632f2"
}

const logger = pino({
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: 'true'
        }
    },
});

async function fetchUserNfts(address) {
    let collections = []
    const res = await axios.get(`https://api.nftport.xyz/v0/accounts/${address}?chain=ethereum`, {
        headers: {
            'Authorization': '1970291d-6325-4d02-956e-bf97900bedd7',
            'Content-Type': 'application/json'
        }
    }).then(res => res.data);
    res.nfts.forEach(nft => {

        console.log(nft.contract_address);
        for (const [name, contract] of Object.entries(contract_addresses)) {
            if (contract.toLowerCase() === nft.contract_address.toLowerCase()) {
                collections.push(contract.toLowerCase());
            }
        }
    });

    return collections;

}

module.exports = fetchUserNfts;