import { useState } from "react";
import EmployeeService from "../../services/EmployeeService";
import { useDispatch,useSelector } from 'react-redux';
import { addEmployee } from "../../redux/EmpSlice";

const AddEmployee = () => {
    const [empData, setEmpData] = useState({ firstName: '', email: '', salary: '', aadhar:''});
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch(); // Initialize useDispatch hook
    console.log('hello');
    const latestData = useSelector((state) => state.emp); 
    console.log(latestData);

    const handleChange = (evt) => {
        setEmpData({ ...empData, [evt.target.name]: evt.target.value });
        setErrors({ ...errors, [evt.target.name]: '' });
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = {};

        if (!empData.firstName.trim()) {
            newErrors.firstName = "First name is required";
            isValid = false;
        }

        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(empData.email)) {
            newErrors.email = "Invalid email address";
            isValid = false;
        }

        if (!/^\d{12}$/.test(empData.aadhaar)) {
            newErrors.aadhaar = "Aadhaar must be a 12-digit number";
            isValid = false;
        }

        if (empData.salary <= 0 || isNaN(empData.salary)) {
            newErrors.salary = "Salary must be a positive number";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    
    const handleSubmit =async (evt) => {
        evt.preventDefault();
        if (validateForm()) {
            try {
                const user = await EmployeeService.add(empData);
                console.log(user);
               setEmpData(user);
              
               dispatch(addEmployee(user));
        
            }
            catch (error) {
                console.log(error);
                if (error.code === 'ERR_BAD_REQUEST')
                    alert(error.message);
            }
        }
    };

    return (
        <div className="container">
            <h2>Add Employee</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">First Name:</label>
                    <input type="text" id="firstName" name="firstName" value={empData.firstName} onChange={handleChange} className="form-control" placeholder="Enter first name" required autoFocus />
                    {errors.firstName && <span className="error">{errors.firstName}</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input type="email" id="email" name="email" value={empData.email} onChange={handleChange} className="form-control" placeholder="Enter email" />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="aadhaar" className="form-label">Aadhaar:</label>
                    <input type="number" id="aadhaar" name="aadhaar" value={empData.aadhaar} onChange={handleChange} className="form-control" placeholder="Enter aadhaar" />
                    {errors.aadhaar && <span className="error">{errors.aadhaar}</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="salary" className="form-label">Salary:</label>
                    <input type="number" id="salary" name="salary" value={empData.salary} onChange={handleChange} className="form-control" placeholder="Enter salary" />
                    {errors.salary && <span className="error">{errors.salary}</span>}
                </div>
                <button type="submit" className="btn btn-primary">Add Employee</button>
            </form>
        </div>
    );
};

export default AddEmployee;
