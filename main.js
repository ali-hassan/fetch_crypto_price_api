// main.js
const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname)));

app.get('/api/prices', async (req, res) => {
    try {
        const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum,binancecoin&vs_currencies=usd');
        const prices = response.data;
        res.json({
            eth: prices.ethereum.usd,
            bnb: prices.binancecoin.usd
        });
    } catch (error) {
        console.error('Error fetching prices:', error);
        res.status(500).json({ error: 'Failed to fetch prices' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
