const express = require('express');
// const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();
const bodyParser = require('body-parser');


router.get('/:q', async (req, res) => {
    console.log("in weather get", req.params);

    try {
        const response = await axios.get(`http://api.weatherapi.com/v1/current.json`, {
            params: {
                key: process.env.WEATHER_API_KEY,
                q: req.params.q,
                aqi: 'no',
            }
        })
        res.send(response.data);
    } catch (err) {
        console.error('in GET weather by location error', err.message);
        res.sendStatus(500)
    }

    // console.log(response.data);
})



module.exports = router;