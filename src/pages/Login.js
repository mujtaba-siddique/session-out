import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/"); // Redirect to home if already logged in
    }
  }, [navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim()) {
      localStorage.setItem("token", "fake-token");
      navigate("/"); // Force redirect
    } else {
      alert("Please enter a username");
    }
  };

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2>🔐 Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: "10px", width: "200px" }}
        />
        <br /><br />
        <button type="submit" style={{ padding: "10px 20px" }}>Login</button>
      </form>
    </div>
  );
};

export default Login;
