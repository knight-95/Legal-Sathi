const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const LegalServiceProvider = require('../models/legalServiceProvider'); 
const jwt = require('jsonwebtoken');


// Handle POST request to /api/signup
exports.signupController = async (req, res) => {
    try {
        const { firstName, lastName, email, password, } = req.body;
        console.log(firstName, " ", lastName, " ", email, " ", password);
        if (!firstName || !lastName || !email || !password) {
            return res.status(403).json({ message: 'All fields are required.' });
          }
console.log("hello")
        // Check if the email is already registered
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists.' });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user document
        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword,
        });

        // Save the user to the database
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};



// Login Controller
exports.loginController = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if the user with the provided email exists
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Compare the provided password with the stored hash
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Generate a JSON Web Token (JWT)
        const token = jwt.sign({ userId: user._id }, 'mysecretkey123', {
            expiresIn: '1h', // You can adjust the expiration time as needed
        });

        res.status(200).json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};


//registration Controller
exports.registrationController = async (req, res) => {
    try {
        // Extract data from the request body
        const {
            firstName,
            lastName,
            email,
            password,
            city,
            state,
            barCouncilId,
            image,
            rating,
            aadhar,
            gender,
            languages,
            specializations,
            experience,
        } = req.body;

        // Check if the email is already registered
        const existingLSP = await LegalServiceProvider.findOne({ email });
        if (existingLSP) {
            return res.status(400).json({ message: 'Email already exists.' });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user document
        const newLSP = new LegalServiceProvider({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            city,
            state,
            barCouncilId,
            gender,
            languages,
            specializations,
            rating,
            experience,
            image,
            rating,
            aadhar,
        });

        // Save the user to the database
        await newLSP.save();

        res.status(201).json({ message: 'Registration successful.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


