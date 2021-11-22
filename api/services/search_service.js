const { fetchAndDecode } = require('../utils/fetch_utils');

module.exports = function search(config) { 
    return {
        getItem: async (queryString, queryLimit) => {
            const searchResult = fetchAndDecode(`${config.endpoints.search}?q=${queryString}&limit=${queryLimit || 4}`, 'json');

            return await searchResult;
        }
    }
}
