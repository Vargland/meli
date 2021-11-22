const express = require('express');
const router = express.Router();
const config = require('../config/config');
const search = require('../services/search_service')(config)

module.exports = router.get('/search', async function (req, res, next) {
    const { q, limit } = req.query;

    try {
        if (!q) throw {
            status: 400,
            message: 'A query parameter is required',
        }
        const results = await search.getItem(q, limit);
        
        res.send(results);
    } catch (err) {
        next(err);
    }
});
