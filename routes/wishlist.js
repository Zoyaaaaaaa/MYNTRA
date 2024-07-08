// Assuming you have a router defined in your Express setup
const express = require('express');
const router = express.Router();

// Import your Product model
const Product = require('../models/product'); // Adjust the path as per your project structure

// Route to add a product to the wishlist
router.post('/wishlist/add', async (req, res) => {
    const { productId } = req.body;

    try {
        // Find the product by productId
        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        // Here you can add the product to the user's wishlist or handle as needed
        // Example: You might have a User model where you store wishlist items for each user

        // Respond with a success message or data
        return res.status(200).json({ message: 'Product added to wishlist successfully' });
    } catch (err) {
        console.error('Error adding product to wishlist:', err);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
