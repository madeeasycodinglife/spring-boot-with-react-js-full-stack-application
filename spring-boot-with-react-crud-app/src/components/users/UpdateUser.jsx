import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getUserById, updateUser } from "../service/api";

const UpdateUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    state: "",
    country: "",
    imageUrl: "",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const fetchedUser = await getUserById(id);
        setUser(fetchedUser);
        console.log(fetchedUser);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user:", error);
        setError("Error fetching user. Please try again later.");
      }
    };

    fetchUser();
  }, [id]);

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
      await updateUser(id, user);
      console.log("User updated successfully");
      navigate("/get/all/users", { replace: true });
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {loading ? (
          <div className="col-md-6 offset-md-3">Loading...</div>
        ) : error ? (
          <div className="col-md-6 offset-md-3">
            <div className="alert alert-danger">{error}</div>
          </div>
        ) : (
          user &&
          Object.keys(user).length > 0 && (
            <div className="col-md-6 offset-md-3">
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title text-center">Update User</h2>
                  <form onSubmit={handleSubmit}>
                    {/* Name */}
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Name :
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

                    {/* PhoneNumber */}
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
                    </div>

                    {/* State */}
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
                    </div>

                    {/* Country */}
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

                    <button type="submit" className="btn btn-primary">
                      Update User
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default UpdateUser;
