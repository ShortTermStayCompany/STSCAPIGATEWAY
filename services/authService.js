const axios = require('axios');
require('dotenv').config();

const AUTH_SERVICE_URL = process.env.AUTH_SERVICE_URL;

const loginUser = async (data) => {
    try {
        const response = await axios.post(`${AUTH_SERVICE_URL}/auth/login`, data);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : { message: 'Service unavailable' };
    }
};

module.exports = { loginUser };

const registerUser = async (data) => {
    try {
        const response = await axios.post(`${AUTH_SERVICE_URL}/auth/users`, data);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : { message: 'Service unavailable' };
    }
};

module.exports = { loginUser, registerUser };
