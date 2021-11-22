const uri = 'https://api.mercadolibre.com';

const endpoints = {
    search: `${uri}/sites/MLA/search`,
    items: `${uri}/items`,
    categories: `${uri}/categories`,
};

const author = {
    name: 'German',
    lastName: 'Roman',
};

module.exports = { endpoints, author };
