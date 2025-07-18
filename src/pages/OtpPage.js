import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const OtpPage = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleOtpVerify = () => {
    const correctOtp = "123456";

    if (otp === correctOtp) {
      // device id fetch karo
      const deviceId = localStorage.getItem("deviceId");

      // trustedDevices array local storage me save karo
      let trustedDevices = JSON.parse(localStorage.getItem("trustedDevices")) || [];

      // agar nahi hai tabhi add karo
      if (!trustedDevices.includes(deviceId)) {
        trustedDevices.push(deviceId);
        localStorage.setItem("trustedDevices", JSON.stringify(trustedDevices));
      }

      // token set karo
      localStorage.setItem("token", "fake-token");

      // turant home page par navigate karo
      navigate("/");
    } else {
      alert("Invalid OTP! Please enter 123456.");
    }
  };

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2>🔒 OTP Verification</h2>
      <p>Enter the 6-digit OTP (hint: 123456)</p>
      <input
        type="text"
        value={otp}
        maxLength={6}
        onChange={(e) => setOtp(e.target.value)}
        style={{
          padding: "10px",
          width: "120px",
          textAlign: "center",
          letterSpacing: "4px",
          fontSize: "18px",
        }}
      />
      <br /><br />
      <button
        onClick={handleOtpVerify}
        style={{ padding: "10px 20px", fontSize: "16px" }}
      >
        Verify OTP
      </button>
    </div>
  );
};

export default OtpPage;
