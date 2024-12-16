const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');

console.log('Auth routes loaded');



//
// {
//     "email": "host@host.com",
//     "password": "host"
// }

// access_toke: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTczNDI1NjQzOSwianRpIjoiMTA2N2Q3N2YtNWJjNC00YzdiLWJjNjgtMDRjZGE3ZGE2YzljIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6IjEyIiwibmJmIjoxNzM0MjU2NDM5LCJjc3JmIjoiM2I5ODkwNGEtYjE5Yy00M2Q0LWFlNDAtOGQ2NWI0M2JkMmMxIiwiZXhwIjoxNzM0MzQyODM5fQ.YNI8eIGckqno9P4TPJm1h5yVRLzwVqJ8bvI1mXoaPCg


router.post('/login', (req, res) => {
    console.log('POST /login hit');
    login(req, res);
});

//
// {
//     "name": "host host",
//     "email": "host@host.com",
//     "password": "host",
//     "role": "host"
// }

router.post('/register', (req, res) => {
    console.log('POST /register hit');
    register(req, res);
});

module.exports = router;
