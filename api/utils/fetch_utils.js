const fetch = require('node-fetch');
const errorUtils = require('./fetch_error_utils');

module.exports = {
    fetchAndDecode: async (url, type) => {
        let response = await fetch(url);
        let content = await response.json();

        if (response.status !== 200) {
            if (response.status === 404) {
                throw errorUtils.createError({
                    status: 404,
                    message: 'Resource not found on external application',
                });
            }

            if (response.status === 400) {
                throw errorUtils.createError({
                    status: 400,
                    message: 'There was an error calling the external application',
                });
            }

            if (response.status === 500) {
                throw errorUtils.createError({
                    status: 500,
                    response,
                });
            }

            throw new Error('An unexpected error ocurred calling the external application');
        } else {
            return content;
        }
    }
}
