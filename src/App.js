// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import ProtectedLayout from "./components/ProtectedLayout";
// import Login from "./pages/Login";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Skills from "./pages/Skills";
// import Contact from "./pages/Contact";

// const isAuthenticated = () => !!localStorage.getItem("token");

// const App = () => (
//   <Router>
//     <Routes>
//       <Route path="/login" element={<Login />} />
      
//       <Route
//         path="/"
//         element={
//           isAuthenticated() ? (
//             <ProtectedLayout><Home /></ProtectedLayout>
//           ) : (
//             <Navigate to="/login" />
//           )
//         }
//       />
//       <Route
//         path="/about"
//         element={
//           isAuthenticated() ? (
//             <ProtectedLayout><About /></ProtectedLayout>
//           ) : (
//             <Navigate to="/login" />
//           )
//         }
//       />
//       <Route
//         path="/skills"
//         element={
//           isAuthenticated() ? (
//             <ProtectedLayout><Skills /></ProtectedLayout>
//           ) : (
//             <Navigate to="/login" />
//           )
//         }
//       />
//       <Route
//         path="/contact"
//         element={
//           isAuthenticated() ? (
//             <ProtectedLayout><Contact /></ProtectedLayout>
//           ) : (
//             <Navigate to="/login" />
//           )
//         }
//       />
//     </Routes>
//   </Router>
// );

// export default App;




import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ProtectedLayout from "./components/ProtectedLayout";
import Login from "./pages/Login";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import OtpPage from "./pages/OtpPage.js";

const isAuthenticated = () => !!localStorage.getItem("token");

const App = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/otp" element={<OtpPage />} />

      <Route
        path="/"
        element={
          isAuthenticated() ? (
            <ProtectedLayout><Home /></ProtectedLayout>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route
        path="/about"
        element={
          isAuthenticated() ? (
            <ProtectedLayout><About /></ProtectedLayout>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route
        path="/skills"
        element={
          isAuthenticated() ? (
            <ProtectedLayout><Skills /></ProtectedLayout>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route
        path="/contact"
        element={
          isAuthenticated() ? (
            <ProtectedLayout><Contact /></ProtectedLayout>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
    </Routes>
  </Router>
);

export default App;
