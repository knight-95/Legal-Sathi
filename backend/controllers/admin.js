const LegalServiceProvider = require('../models/legalServiceProvider'); 


exports.getUnapprovedServiceProviders = async (req, res) => {
  try {
    // Find all legal service providers with 'approved' set to false
    const unapprovedProviders = await LegalServiceProvider.find({ approved: false });

    res.status(200).json({ unapprovedProviders });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching unapproved service providers.' });
  }
};


// Admin can approve or reject an approval request controllers/legalServiceProvidersController.js
exports.approveServiceProvider = async (req, res) => {
  const { id } = req.params; // Assuming you pass the service provider ID as a route parameter
  try {
    // Find the legal service provider by ID and update the 'approved' field to true
    const serviceProvider = await LegalServiceProvider.findByIdAndUpdate(
      {_id:id},
      { approved: true },
      { new: true } // This option returns the updated document
    );

    if (!serviceProvider) {
      return res.status(404).json({ error: 'Legal service provider not found' });
    }

    res.status(200).json({ message: 'Service provider approved successfully', serviceProvider });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while approving the service provider.' });
  }
};
