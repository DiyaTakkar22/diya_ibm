// UpdateProfile.js 

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userUpdateProfile } from "../../redux/UserSlice";
import UserService from "../../services/UserService";

const UpdateProfile = () => {
    console.log('UpdateProfile');
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.user.loggedInUser);
    const token = useSelector(store => store.user.jwtToken);
    console.log(userData);
    const [formData, setFormData] = useState(userData);

    const handleChange = (evt) => {
        console.log(evt.target);
        console.log(formData);
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
        });
    };

    const handleSubmit = async (evt) => {
        console.log(formData);
        evt.preventDefault();
        try {
            const user = await UserService.updateUserProfile(formData, token);
            console.log(user);
            dispatch(userUpdateProfile(user));
        }
        catch (error) {
            console.log(error);
            if (error.code === 'ERR_BAD_REQUEST')
                alert(error.message);
        }
    };

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Update Your Profile</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">First Name:</label>
                    <input type="text" className="form-control" name="firstName" value={formData.firstName}
                        onChange={handleChange} autoFocus required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Last Name:</label>
                    <input type="text" className="form-control" name="lastName" value={formData.lastName}
                        onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Phone:</label>
                    <input type="tel" className="form-control" name="phone" value={formData.phone}
                        onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email:</label>
                    <input type="email" className="form-control" name="email" value={formData.email}
                        onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Avatar:</label>
                    <input type="text" className="form-control" name="avatar" value={formData.avatar}
                        onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Update Your Profile</button>
            </form>
        </div>
    );
};


export default UpdateProfile;
