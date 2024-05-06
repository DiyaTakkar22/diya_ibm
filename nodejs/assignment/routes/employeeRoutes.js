// routes/employeeRoutes.js

const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');
const authMiddleware = require('../middleware/authMiddleware');

// Public routes
router.get('/', employeeController.getAllEmployees);
router.get('/:id', employeeController.getEmployeeById);

// Protected routes
router.post('/', authMiddleware, employeeController.createEmployee);
router.put('/:id', authMiddleware, employeeController.updateEmployee);
router.delete('/:id', authMiddleware, employeeController.deleteEmployee);

module.exports = router;
