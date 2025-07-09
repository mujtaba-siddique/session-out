import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const useAutoLogout = (timeout = 30000) => {
  const timer = useRef(null);
  const navigate = useNavigate();

  const logout = () => {
    console.log("🔒 Session expired");
    localStorage.removeItem("token");
    navigate("/login");
  };

  const resetTimer = () => {
    clearTimeout(timer.current);
    timer.current = setTimeout(logout, timeout);
  };

  useEffect(() => {
    const events = ["mousemove", "keydown", "scroll", "click"];
    events.forEach((e) => window.addEventListener(e, resetTimer));
    resetTimer();

    return () => {
      events.forEach((e) => window.removeEventListener(e, resetTimer));
      clearTimeout(timer.current);
    };
  }, []);
};

export default useAutoLogout;
