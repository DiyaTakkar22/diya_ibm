import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { userLogout } from '../../redux/UserSlice';

const Logout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [afterLogout, setAfterLogout] = useState('');

    const logoutSubmit = () => {
        setAfterLogout(`You've logged out successfully!`);
        setTimeout(() => {
            dispatch(userLogout());
            navigate('/login');
        }, 2000);
    };

    return (
        <div className="container mt-5">
            <div className="card p-4">
                <h1 className="text-center mb-4">Logout</h1>
                <button onClick={logoutSubmit} className="btn btn-danger btn-block">Logout</button>
                {afterLogout && <p className="text-success text-center mt-3">{afterLogout}</p>}
            </div>
        </div>
    );
};

export default Logout;
