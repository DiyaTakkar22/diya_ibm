// server.js

const express = require('express');
const bodyParser = require('body-parser');
const employeeRoutes = require('./routes/employeeRoutes');

const app = express();
const PORT = process.env.PORT || 9000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/employees', employeeRoutes);
app.get("/",(req,res)=>{
  res.send("hi woe")
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
