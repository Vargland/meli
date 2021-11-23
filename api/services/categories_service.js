const { fetchAndDecode } = require('../utils/fetch_utils');

module.exports = function getCategories(config) { 
    return {
        getCategories: async (id) => {
            const categories = fetchAndDecode(`${config.endpoints.categories}/${id}`, 'json');

            return await categories;
        }
    }
}
