// server.js
import express from "express";
import productRoutes from "./routes/productRoutes.js"; // Importing product routes
import ejs from 'ejs';

const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Middleware for parsing JSON bodies
app.use(express.json());

// Middleware for serving static files
app.use(express.static('public'));

// Using product routes
app.use(productRoutes);

// Define a route
app.get('/', (req, res) => {
    // Render the index.ejs file and pass data
    res.render('index', { name: 'John' });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
