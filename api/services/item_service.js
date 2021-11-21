const { fetchAndDecode } = require('../utils/fetch_utils');

module.exports = function itemsService(config) {
    return {
        searchItems: async (queryString, queryLimit) => {
            const searchItemsPromise = fetchAndDecode(`${config.endpoints.search}?q=${queryString}&limit=${queryLimit || 4}`, 'json');

            const [searchItems ] = await Promise(searchItemsPromise);
            console.log('searchItems', searchItems)

            return searchItems;
        },
        getItemById: async (id) => {
            const itemPromise = fetchAndDecode(`${config.endpoints.items}/${id}`, 'json');
            const itemDescriptionPromise = fetchAndDecode(`${config.endpoints.items}/${id}/description`, 'json');

            const [item, itemDescription] = await Promise.all([ itemPromise, itemDescriptionPromise ]);

            return {
                item,
                itemDescription
            };
        },
    }
};
