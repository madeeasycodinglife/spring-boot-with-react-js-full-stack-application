import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/header/Header";
import User from "../components/users/User";
import AddUser from "../components/users/AddUser";
import UpdateUser from "../components/users/UpdateUser";
const AppRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<h1>This is Home</h1>} />
        <Route path="/get/all/users" element={<User />} />
        <Route path="/add/new/user" element={<AddUser />} />
        <Route path="/update/user/by/id/:id" element={<UpdateUser />} />
        <Route
          path="/delete/user/by/id/:id"
          element={<h1>delete new user</h1>}
        />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </>
  );
};

export default AppRoutes;
