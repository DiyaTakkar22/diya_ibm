// import axios from "axios";
// import { useEffect, useState } from "react";

// const EmpList = () => {

//     const [empList, setEmpList] = useState('');

//     useEffect(() => {
//         console.log('useEffect');
//         axios.get('http://localhost:9090/emp/get-all-emps')
//             .then((resp) => {
//                 console.log(resp.data);
//                 setEmpList(resp.data);
//             })
//     }, []);

//     return (
//         <>
//             <h1>Employee list</h1>
//             <table>
//                 <thead>
//                     <th>Name</th> <th>Salary</th> <th>Email</th> 
//                 </thead>
//                 <tbody>
//                     {empList && empList.map(emp =>
//                         <tr key={emp.id}>
//                             <td >{emp.firstName} </td>
//                             <td >{emp.salary} </td>
//                             <td >{emp.email} </td>
//                         </tr>
//                     )}
//                 </tbody>
//             </table>
//         </>
//     );
// };

// export default EmpList;

import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { useEffect, useState } from 'react';
import {useDispatch,useSelector} from "react-redux"
import EmployeeService from '../../services/EmployeeService';
import { showEmpList } from '../../redux/EmpSlice';


const EmpList = () => {
    const [empList, setEmpList] = useState([]);
    const dispatcher=useDispatch();
    const latestData=useSelector(state=>state.emp);
    console.log("latest data in store");

   const fetchEmpList=async()=>{
    try{
     const response=await EmployeeService.getAll();
     console.log(response);
     setEmpList(response);
     dispatcher(showEmpList(response));


    }
    catch(err){
         console.log(err);
    }
   }
   useEffect(() => {
    fetchEmpList();
}, []);

    return (
        <>
            <h1 style={{ textAlign: 'center', marginTop: '30px' }}>Employee List</h1>
            <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', backgroundColor: '#f9f9f9' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Salary</TableCell>
                            <TableCell>Email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {empList.map(emp =>
                            <TableRow key={emp.id}>
                                <TableCell>{emp.firstName}</TableCell>
                                <TableCell>{emp.salary}</TableCell>
                                <TableCell>{emp.email}</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </>
    );
};

export default EmpList;

