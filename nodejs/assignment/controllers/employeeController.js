// controllers/employeeController.js

const fs = require('fs');
const bcrypt = require('bcrypt');
const Employee = require('../models/Employee');

const saltRounds = 10;

const readEmployeesFromFile = () => {
  const data = fs.readFileSync('C:\\Users\\DiyaTakkar\\Desktop\\diya\\nodejs\\assignment\\employee.json', 'utf8');
  return JSON.parse(data);
};

const writeEmployeesToFile = (employees) => {
  fs.writeFileSync('employees.json', JSON.stringify(employees, null, 2));
};

const employeeController = {
  getAllEmployees: (req, res) => {
    const employees = readEmployeesFromFile();
    res.json(employees);
  },
  getEmployeeById: (req, res) => {
    const employees = readEmployeesFromFile();
    const employee = employees.find((emp) => emp.id === req.params.id);
    if (employee) {
      res.json(employee);
    } else {
      res.status(404).json({ error: 'Employee not found' });
    }
  },
  createEmployee: (req, res) => {
    const { name, email, password } = req.body;
    const employees = readEmployeesFromFile();
    const id = Date.now().toString(); // Simple ID generation (not recommended for production)
    bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
      if (err) {
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      const newEmployee = new Employee(id, name, email, hashedPassword);
      employees.push(newEmployee);
      writeEmployeesToFile(employees);
      res.status(201).json(newEmployee);
    });
  },
  updateEmployee: (req, res) => {
    const { name, email, password } = req.body;
    const employees = readEmployeesFromFile();
    const employeeIndex = employees.findIndex((emp) => emp.id === req.params.id);
    if (employeeIndex !== -1) {
      bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
        if (err) {
          return res.status(500).json({ error: 'Internal Server Error' });
        }
        employees[employeeIndex] = {
          id: req.params.id,
          name,
          email,
          password: hashedPassword,
        };
        writeEmployeesToFile(employees);
        res.json(employees[employeeIndex]);
      });
    } else {
      res.status(404).json({ error: 'Employee not found' });
    }
  },
  deleteEmployee: (req, res) => {
    const employees = readEmployeesFromFile();
    const filteredEmployees = employees.filter((emp) => emp.id !== req.params.id);
    if (filteredEmployees.length !== employees.length) {
      writeEmployeesToFile(filteredEmployees);
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Employee not found' });
    }
  },
};

module.exports = employeeController;
