const { insertListing, getListings } = require('../services/listingService');

// Insert a new listing
const insert = async (req, res) => {
    try {
        const token = req.headers.authorization?.split(' ')[1]; // Extract token
        if (!token) {
            return res.status(401).json({ message: 'Authorization token required' });
        }

        const result = await insertListing(req.body, token);
        res.status(201).json(result);
    } catch (error) {
        res.status(error.status || 500).json({
            message: error.message || 'Internal Server Error',
        });
    }
};

// Get all listings
const list = async (req, res) => {
    try {
        const { page, per_page } = req.query;

        // Enforce pagination parameters
        if (!page || !per_page) {
            return res.status(400).json({
                message: 'Pagination required. Use the format: /api/listing/listings?page=1&per_page=5',
            });
        }

        // Validate that page and per_page are numbers and greater than 0
        const pageNum = parseInt(page, 10);
        const perPageNum = parseInt(per_page, 10);
        if (isNaN(pageNum) || isNaN(perPageNum) || pageNum <= 0 || perPageNum <= 0) {
            return res.status(400).json({
                message: 'Both page and per_page must be positive integers.',
            });
        }

        // Fetch listings with pagination
        const result = await getListings({ page: pageNum, per_page: perPageNum });
        res.status(200).json(result);
    } catch (error) {
        res.status(error.status || 500).json({
            message: error.message || 'Internal Server Error',
        });
    }
};

module.exports = { insert, list };
