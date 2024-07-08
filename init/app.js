const mongoose=require("mongoose");
const initData=require("./data.js");
const Product=require("../models/product.js");
const MONGO_URL="mongodb://127.0.0.1:27017/myntra";

main()
.then(()=>{
console.log("MongoDb is successfully connected");
})
.catch((err)=>{
console.log(err);
});
async function main(){
    await mongoose.connect(MONGO_URL);
}
const productsToAdd = [
    {
        name: 'Product One',
        price: 29.99,
        description: 'This is the description for Product One.',
        image: {
            url: 'https://example.com/product1.jpg',
            filename: 'product1.jpg',
        },
    },
    {
        name: 'Product Two',
        price: 39.99,
        description: 'This is the description for Product Two.',
        image: {
            url: 'https://example.com/product2.jpg',
            filename: 'product2.jpg',
        },
    },
];

async function addProducts() {
    try {
        // Loop through productsToAdd array and create Product documents
        for (let productData of productsToAdd) {
            let product = new Product(productData);
            await product.save(); // Save each product document to MongoDB
            console.log(`Product "${product.name}" added successfully.`);
        }
    } catch (error) {
        console.error('Error adding products:', error);
    } finally {
        mongoose.disconnect(); // Disconnect from MongoDB after adding products
    }
}

// Execute the function to add products
addProducts();