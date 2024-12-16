const express = require('express');
const router = express.Router();
const { insert, list } = require('../controllers/listingController');

console.log('Listing routes loaded');
//
// {
//     "title": "Modern Apartment",
//     "numberOfPeople": 4,
//     "country": "UAE",
//     "city": "Dubai",
//     "price": 200.0,
//     "availableFrom": "2024-12-01",
//     "availableTo": "2025-01-15"
// }

router.post('/insert', (req, res) => {
    console.log('POST /listing/insert hit');
    insert(req, res);
});

// http://localhost:3000/api/listing/listings?page=1&per_page=5
router.get('/listings', (req, res) => {
    console.log('GET /listing/listings hit');
    list(req, res);
});

module.exports = router;
