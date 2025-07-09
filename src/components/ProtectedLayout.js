import React from "react";
import useAutoLogout from "../hooks/useAutoLogout";
import Navbar from "./Navbar.js";

const ProtectedLayout = ({ children }) => {
  useAutoLogout();
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default ProtectedLayout;
