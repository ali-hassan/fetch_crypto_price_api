// priceFetcher.js
const axios = require('axios');

async function getPrices() {
    try {
        const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum,binancecoin&vs_currencies=usd');
        const prices = response.data;
        return {
            eth: prices.ethereum.usd,
            bnb: prices.binancecoin.usd
        };
    } catch (error) {
        console.error('Error fetching prices:', error);
        return null;
    }
}

module.exports = getPrices;
