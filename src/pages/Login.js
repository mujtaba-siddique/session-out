// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (localStorage.getItem("token")) {
//       navigate("/"); // Redirect to home if already logged in
//     }
//   }, [navigate]);

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (username.trim()) {
//       localStorage.setItem("token", "fake-token");
//       navigate("/"); // Force redirect
//     } else {
//       alert("Please enter a username");
//     }
//   };

//   return (
//     <div style={{ padding: "40px", textAlign: "center" }}>
//       <h2>🔐 Login</h2>
//       <form onSubmit={handleLogin}>
//         <input
//           type="text"
//           placeholder="Enter username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           style={{ padding: "10px", width: "200px" }}
//         />
//         <br /><br />
//         <button type="submit" style={{ padding: "10px 20px" }}>Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;



import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Generate UUID if not exists
    let storedId = localStorage.getItem("deviceId");
    if (!storedId) {
      storedId = uuidv4();
      localStorage.setItem("deviceId", storedId);
      console.log("New deviceId generated:", storedId);
    } else {
      console.log("Existing deviceId found:", storedId);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    // hard-coded login check
    if (username === "mujju" && password === "123") {
      const deviceId = localStorage.getItem("deviceId");

      // check if device is already trusted
      const trustedDevices = JSON.parse(localStorage.getItem("trustedDevices")) || [];

      if (trustedDevices.includes(deviceId)) {
        // device is trusted → direct login
        localStorage.setItem("token", "fake-token");
        navigate("/");
      } else {
        // device is new → redirect to OTP
        navigate("/otp");
      }
    } else {
      alert("Invalid username or password");
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
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: "10px", width: "200px" }}
        />
        <br /><br />
        <button type="submit" style={{ padding: "10px 20px" }}>Login</button>
      </form>
    </div>
  );
};

export default Login;

