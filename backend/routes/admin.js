const express = require('express');
const router = express.Router();
const {getUnapprovedServiceProviders, approveServiceProvider} = require('../controllers/admin');

// Admin can view all approval requests
router.get('/approval-requests', getUnapprovedServiceProviders);

// Admin can approve or reject an approval request
router.put('/approval-requests/:id', approveServiceProvider);

module.exports = router;
