// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import UserService from "../../services/UserService";
// import { useDispatch } from "react-redux";
// import { userRegister } from "../../redux/UserSlice";

// const Register = () => {

//     const [registerData, setRegisterData] = useState({ username: '', password: '' });
//     const [afterRegisterMessage, setAfterRegisterMessage] = useState('');
//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     const handleChange = (evt) => {
//         console.log(evt.target.name);
//         console.log(evt.target.value);
//         setRegisterData({
//             ...registerData,
//             [evt.target.name]: evt.target.value
//         });
//     };

//     const handleRegisterSubmit = async (evt) => {
//         evt.preventDefault();
//         console.log(registerData);
//         UserService.registerUser(registerData)
//             .then((response) => {
//                 console.log(response);
//                 dispatch(userRegister(response));
//                 setRegisterData({ username: '', password: '' });
//                 setAfterRegisterMessage(`Hi ${response.username}! You've registered successfully!`);
//                 setTimeout(() => {
//                     navigate('/login');
//                 }, 2000);
//             })
//             .catch((error) => {
//                 console.log(error);
//                 setAfterRegisterMessage(`Invalid credentials!`);
//             });

//     };

//     return (
//         <>
//             <h1>Register Component</h1>
//             <p>Register here</p>
//             <form onSubmit={handleRegisterSubmit}>
//                 <input type="text" name="username" value={registerData.username}
//                     onChange={handleChange} autoFocus required />
//                 <br />
//                 <input type="password" name="password" value={registerData.password}
//                     onChange={handleChange} required />
//                 <br />
//                 <input type="submit" value="Register" />
//             </form>
//             <>
//                 <p>{afterRegisterMessage && afterRegisterMessage} </p>
//             </>
//             <p>Already registered? <Link to={'/login'}>Login</Link> </p>

//         </>
//     );
// };
// export default Register;

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserService from "../../services/UserService";
import { useDispatch } from "react-redux";
import { userRegister } from "../../redux/UserSlice";
import "./register.css"; // Import the CSS file

const Register = () => {

    const [registerData, setRegisterData] = useState({ username: '', password: '' });
    const [afterRegisterMessage, setAfterRegisterMessage] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (evt) => {
        setRegisterData({
            ...registerData,
            [evt.target.name]: evt.target.value
        });
    };

    const handleRegisterSubmit = async (evt) => {
        evt.preventDefault();
        UserService.registerUser(registerData)
            .then((response) => {
                dispatch(userRegister(response));
                setRegisterData({ username: '', password: '' });
                setAfterRegisterMessage(`Hi ${response.username}! You've registered successfully!`);
                setTimeout(() => {
                    navigate('/login');
                }, 2000);
            })
            .catch((error) => {
                setAfterRegisterMessage(`Invalid credentials!`);
            });

    };

    return (
        <div className="register-container">
            <h1>Register Component</h1>
            <p>Register here</p>
            <form onSubmit={handleRegisterSubmit}>
                <div className="form-group">
                    <input type="text" name="username" value={registerData.username}
                        onChange={handleChange} autoFocus required />
                </div>
                <div className="form-group">
                    <input type="password" name="password" value={registerData.password}
                        onChange={handleChange} required />
                </div>
                <button type="submit" className="register-button">Register</button>
            </form>
            {afterRegisterMessage && <p className="success-message">{afterRegisterMessage}</p>}
            {afterRegisterMessage && <p className="error-message">{afterRegisterMessage}</p>}
            <p>Already registered? <Link to={'/login'}>Login</Link></p>
        </div>
    );
};
export default Register;