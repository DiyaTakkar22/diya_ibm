import express from 'express';
import { authenticateJWT, generateToken } from './auth.js';
import { Employee } from './db-con.js';
import multer from 'multer';
import {sendEmail} from './sendEmail.js'
export {app};

const app = express();
const port = process.env.PORT || 3000;
const upload = multer({ dest: 'uploads/' }); // file upload 

app.use(express.json());
app.use(authenticateJWT);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
// request in this way 
 //  http://localhost:3000/employees?page=1&limit=2&sortBy=name
app.get('/employees',async (req, res) => {

    try{
        
        const page=parseInt(req.query.page) ||1;
        const limit=parseInt(req.query.limit) ||10;
        const skip=(page-1)*limit;

        const sortField=req.query.sortBy || "firstName";
        const sortOrder = req.query.sortOrder && req.query.sortOrder.toLowerCase() === 'desc' ? -1 : 1;
        const employees = await Employee.find()
        .sort({ [sortField]: sortOrder })
        .skip(skip)
        .limit(limit);
        res.status(200).json(employees);

        Employee.find()
        .sort({[req.query.sortBy]:'asc'})
        .skip(req.query.page)
        .limit(req.query.limit)
        .then(employees => {
            res.json(employees);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to fetch employees', error: err.message });
        });
    }
    catch(err){
      console.log("err",err);
      res.status(500).json({message:"failed to fecth employees",Error:err.message});
    }
   
});

app.get('/employees/:id', (req, res) => {
    const employeeId = req.params.id;
    Employee.findById(employeeId)
        .then(employee => {
            if (employee) {
                res.json(employee);
            } else {
                res.status(404).json({ message: 'Employee not found' });
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to fetch employee', error: err.message });
        });
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'sonu' && password === 'sonu') {
        const token = generateToken({ username });
        res.json({ message: 'Login successful', token });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

// app.post('/employees', (req, res) => {
    
//     const newEmployee = req.body;
//     Employee.create(newEmployee)
//         .then(employee => {
//             res.status(201).json({ message: 'Employee created successfully', employee });
//         })
//         .catch(err => {
//             res.status(500).json({ message: 'Failed to create employee', error: err.message });
//         });
// });

// upload image file 
app.post('./employees',upload.single('avatar'),async (req,res)=>{
      try{
         const avatar=(req.file &&req.file.filename) ? req.file.fieldname :null;
         const { firstName, email, aadhaar, salary } = req.body;
         const newEmployee=new Employee({ firstName, email, aadhaar, salary, avatar  })
         newEmployee.save();
         res.status(201).json({message:"file uploaded successfully",employee:newEmployee})
      }
      catch(err){
        res.status(500).json({ message: 'Failed to create employee', error: err.message });
      }
})

app.put('/employees/:id', (req, res) => {
    const employeeId = req.params.id;
    const updatedEmployee = req.body;
    Employee.findByIdAndUpdate(employeeId, updatedEmployee, { new: true })
        .then(employee => {
            if (employee) {
                res.json({ message: 'Employee updated successfully', employee });
            } else {
                res.status(404).json({ message: 'Employee not found' });
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to update employee', error: err.message });
        });
});

app.delete('/employees/:id', (req, res) => {
    const employeeId = req.params.id;
    Employee.findByIdAndDelete(employeeId)
        .then(employee => {
            if (employee) {
                res.json({ message: 'Employee deleted successfully' });
            } else {
                res.status(404).json({ message: 'Employee not found' });
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to delete employee', error: err.message });
        });
});

app.get('./email',(req,res)=>{
    sendEmail();
    console.log('done');
    res.send('done');
})


app.post('/email', (req, res) => {
    console.log(req.body);
    sendEmail(req.body)
        .then((response) => {
            console.log(response);
            res.status(201).json({ message: response });
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ message: error });
        })
});


