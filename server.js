// Import necessary modules
const express = require('express');
const crypto = require('crypto'); // Using crypto for encoding/decoding as an example

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

// Current algorithm default
let currentAlgorithm = 'aes-256-cbc'; // Default algorithm
const secretKey = crypto.randomBytes(32); // Generate a random secret key (for AES)
const iv = crypto.randomBytes(16); // Initialization vector

// GET route for the root path
app.get('/', (req, res) => {
    res.send('Welcome to the Authentication Service!');
});

// Encoding endpoint for POST request
app.post('/api/encode', (req, res) => {
    const { message } = req.body;
    const cipher = crypto.createCipheriv(currentAlgorithm, secretKey, iv);
    let encrypted = cipher.update(message, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    res.json({ encoded_message: encrypted });
});

// Decoding endpoint for POST request
app.post('/api/decode', (req, res) => {
    const { encoded_message } = req.body;
    try {
        const decipher = crypto.createDecipheriv(currentAlgorithm, secretKey, iv);
        let decrypted = decipher.update(encoded_message, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        res.json({ message: decrypted });
    } catch (error) {
        console.error("Decryption error:", error);
        res.status(500).json({ error: 'Decryption failed', details: error.message });
    }
});

// Endpoint to set the current algorithm via POST request
app.post('/api/algorithm', (req, res) => {
    const { algorithm } = req.body;
    currentAlgorithm = algorithm; // Update the algorithm used
    res.json({ message: `Algorithm set to ${algorithm}` });
});

// Server configuration
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});