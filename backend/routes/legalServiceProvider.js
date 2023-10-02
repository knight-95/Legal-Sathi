// Import necessary modules and controllers
const express = require('express');
const router = express.Router();
const { legalServiceProvider, getLawyersBySpecialization } = require('../controllers/legalServiceProvider');


// Define the route and specify the callback function
router.post('/search-lawyers', legalServiceProvider); // Use the correct function name
router.get('/lawyers/:specializations', getLawyersBySpecialization);

module.exports = router;
