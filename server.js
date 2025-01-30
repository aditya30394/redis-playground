const express = require('express');
const axios = require('axios').default;

const client = require('./client');
const app = express();

app.get('/', async (req, res) => {
    const cacheValue = await client.get('photos');
    if (cacheValue) return res.json(JSON.parse(cacheValue));

    const {data} = await axios.get('https://jsonplaceholder.typicode.com/photos');
    
    await client.set('photos', JSON.stringify(data));
    await client.expire('photos', 10);
    return res.json(data);
});

app.listen(9000)