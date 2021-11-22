const { fetchAndDecode } = require('../utils/fetch_utils');

module.exports = function itemsService(config) {
    return {
        getItemById: async (id) => {
            const itemPromise = fetchAndDecode(`${config.endpoints.items}/${id}`, 'json');
            const itemDescriptionPromise = fetchAndDecode(`${config.endpoints.items}/${id}/description`, 'json');
            const [ item, item_description ] = await Promise.all([ itemPromise, itemDescriptionPromise ]);

            return {
                item,
                item_description
            };
        },
    }
};
