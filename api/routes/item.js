const express = require('express');
const router = express.Router();
const config = require('../config/config');
const itemsService = require('../services/item_service')(config);

module.exports = router.get('/:id', async function (req, res, next) {
    try {
        const results = await itemsService.getItemById(req.params.id);
        res.send(results);
    } catch (err) {
        next(err);
    }
});
