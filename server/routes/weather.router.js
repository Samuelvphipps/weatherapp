const express = require('express');
// const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
    console.log("in weather get", req.params);
    res.sendStatus(200);
})



module.exports = router;