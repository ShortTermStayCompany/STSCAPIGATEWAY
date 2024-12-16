const { loginUser, registerUser } = require('../services/authService');

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate input
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        // Call Auth Service
        const result = await loginUser({ email, password });

        // Forward the response directly from Auth Service
        res.status(200).json({
            message: result.message,
            access_token: result.access_token,
            user: result.user,
        });
    } catch (error) {
        res.status(error.status || 500).json({
            message: error.message || 'Internal Server Error',
        });
    }
};



const register = async (req, res) => {
    console.log('Register function called'); // Debug log

    try {
        const { name, email, password, role } = req.body;

        if (!name || !email || !password || !role) {
            return res.status(400).json({ message: 'All fields are required: name, email, password, and role.' });
        }

        const result = await registerUser({ name, email, password, role });

        res.status(201).json({
            message: result.message,
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(error.status || 500).json({
            message: error.message || 'Internal Server Error',
            error: error.error || 'Unknown Error',
        });
    }
};

module.exports = { login, register };


