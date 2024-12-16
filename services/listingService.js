const axios = require('axios');
require('dotenv').config();

const LISTING_SERVICE_URL = process.env.LISTING_SERVICE_URL;

// Insert a new listing with token
const insertListing = async (data, token) => {
    try {
        const response = await axios.post(
            `${LISTING_SERVICE_URL}/listing/insert_listing`,
            data,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            }
        );
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : { message: 'Service unavailable' };
    }
};

// Get paginated listings
const getListings = async (query) => {
    try {
        const response = await axios.get(`${LISTING_SERVICE_URL}/listing/listings`, { params: query });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : { message: 'Service unavailable' };
    }
};

module.exports = { insertListing, getListings };
