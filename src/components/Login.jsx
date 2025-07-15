import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <div className="login">
      <h2>Admin Login</h2>
      <button onClick={handleLogin}>Login as Admin</button>
    </div>
  );
}

export default Login;
