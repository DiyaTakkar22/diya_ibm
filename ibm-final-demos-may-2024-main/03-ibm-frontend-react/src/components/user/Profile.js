import React from "react";
import { useSelector } from "react-redux";
import UpdateProfile from "./UpdateProfile";

const Profile = () => {
    const userData = useSelector((state) => state.user.loggedInUser);

    return (
        <div className="container mt-5">
            <div className="card p-4">
                <h1 className="text-center mb-4">User Profile</h1>
                {userData && (
                    <div className="mb-4">
                        <p><strong>Username:</strong> {userData.username}</p>
                        <p><strong>First Name:</strong> {userData.firstName}</p>
                        <p><strong>Last Name:</strong> {userData.lastName}</p>
                        <p><strong>Phone:</strong> {userData.phone}</p>
                        <p><strong>Email:</strong> {userData.email}</p>
                        {userData.avatar && <img className="img-fluid rounded-circle mx-auto d-block" src={userData.avatar} alt="Avatar" />}
                    </div>
                )}
                <UpdateProfile />
            </div>
        </div>
    );
};

export default Profile;
