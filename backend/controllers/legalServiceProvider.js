// const Lawyer = require('../models/legalServiceProvider');

// // Define a function to search for lawyers
// exports.legalServiceProvider = async (req, res) => {
//   try {
//     const { state, city, language, specializations } = req.body;

//     // Perform a database query to find lawyers based on city and language
//     const lawyers = await Lawyer.find({ state, city, language, specializations });

//     res.json({ lawyers });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'An error occurred while searching for lawyers.' });
//   }
// };

const Lawyer = require('../models/legalServiceProvider');

// Define a function to search for lawyers
exports.legalServiceProvider = async (req, res) => {
  try {
    const { state, city, languages, specializations } = req.body;

    // Create an array to hold the conditions for the $or operator
    const orConditions = [];

    if (state) {
      orConditions.push({ state });
    }

    if (city) {
      orConditions.push({ city });
    }

    if (languages) {
      orConditions.push({ languages });
    }

    if (specializations && specializations.length > 0) {
      orConditions.push({ specializations: { $in: specializations } });
    }

    // Build the final query using the $or operator
    const query = { $or: orConditions };

    // Perform a database query to find lawyers based on any matching field
    const lawyers = await Lawyer.find(query);

    res.json({ lawyers });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while searching for lawyers.' });
  }
};




// Controller function to fetch lawyers by specialization
exports.getLawyersBySpecialization = async (req, res) => {
  try {
    const { specializations } = req.params;
    console.log(specializations);
    // Find lawyers with the specified specialization
    const lawyers = await Lawyer.find({ specializations });

    res.json({ lawyers });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
