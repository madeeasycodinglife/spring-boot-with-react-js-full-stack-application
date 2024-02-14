import React, { useState } from "react";
import { addUser } from "../service/api";
import { useNavigate } from "react-router-dom";
const AddUser = () => {
  //  note imageUrl :- https://bootdey.com/img/Content/avatar/avatar1.png
  const initialUser = {
    name: "",
    email: "",
    phoneNumber: "",
    state: "",
    country: "",
    imageUrl: "",
  };

  const [user, setUser] = useState(initialUser);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Assuming there's an 'addUser' function in your API service
      await addUser(user);
      // Reset the form after successful submission
      setUser({
        name: "",
        email: "",
        phoneNumber: "",
        state: "",
        country: "",
        imageUrl: "",
      });
      navigate("/get/all/users", { replace: true });
      // Optional: Add logic to handle success, e.g., redirect to user list page
      console.log("User added successfully");
    } catch (error) {
      // Optional: Add logic to handle errors, e.g., show an error message
      console.error("Error adding user:", error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card shadow-lg bg-primary-subtle">
            <div className="card-body">
              <h2 className="card-title text-center">Add User</h2>
              <form onSubmit={handleSubmit}>
                {/* Name */}
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                {/* Email */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                {/* ImageUrl */}
                <div className="mb-3">
                  <label htmlFor="imageUrl" className="form-label">
                    Image Url
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="imageUrl"
                    name="imageUrl"
                    value={user.imageUrl}
                    onChange={handleChange}
                    required
                  />
                </div>
                {/* Additional fields like phoneNumber, state, country can be added similarly */}
                {/* Phone Number*/}
                <div className="mb-3">
                  <label htmlFor="phoneNumber" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={user.phoneNumber}
                    onChange={handleChange}
                    required
                  />
                </div>{" "}
                <div className="mb-3">
                  <label htmlFor="state" className="form-label">
                    State
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="state"
                    name="state"
                    value={user.state}
                    onChange={handleChange}
                    required
                  />
                </div>{" "}
                <div className="mb-3">
                  <label htmlFor="country" className="form-label">
                    Country
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="country"
                    name="country"
                    value={user.country}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Add User
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
