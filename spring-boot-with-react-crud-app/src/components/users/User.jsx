import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteUser, getUsers } from "../service/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenNib, faEye } from "@fortawesome/free-solid-svg-icons";

const User = () => {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const users = await getUsers();
        console.log(users);
        setUser(users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchData();
    return () => {};
  }, []);

  const handleDelete = async (id) => {
    await deleteUser(id);
    // Remove the deleted user from the state [this is for re-rendering the component]
    setUser((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };
  const handleUpdate = (id) => {
    console.log("update", id);
    navigate(`/update/user/by/id/${id}`, { replace: false });
  };
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          {user.length > 0 ? (
            user.map((user) => {
              return (
                <div className="col-sm-6 mb-3" key={user.id}>
                  <div className="card" style={{ backgroundColor: "#3acfc5" }}>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-sm-3">
                          <img
                            src={user.imageUrl}
                            className="img-fluid rounded-circle mt-3"
                          />
                        </div>
                        <div className="col-sm-6 mt-4">
                          <label htmlFor="" className="d-block">
                            Name: {user.name}
                          </label>
                          <label htmlFor="" className="d-block">
                            email: {user.email}
                          </label>{" "}
                          <label htmlFor="" className="d-block">
                            phone: {user.phoneNumber}
                          </label>{" "}
                          <label htmlFor="" className="d-block">
                            state: {user.state}
                          </label>
                          <label htmlFor="" className="d-block">
                            country: {user.country}
                          </label>
                        </div>
                        <div className="col-sm-3 mt-5">
                          <FontAwesomeIcon
                            icon={faEye}
                            className="d-block mb-3"
                          />
                          <FontAwesomeIcon
                            icon={faPenNib}
                            className="d-block mb-3"
                            onClick={() => handleUpdate(user.id)}
                          />
                          <FontAwesomeIcon
                            icon={faTrash}
                            className="d-block"
                            onClick={() => handleDelete(user.id)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="container">
              <div className="row bg-success">
                <div className="card bg-warning shadow-lg">
                  <div className="card-body text-center">
                    No Users in the data base
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default User;
