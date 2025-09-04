import React, { useState } from "react";
import { useAuth } from "../../context/AuthProvider.jsx";
import { useNavigate } from "react-router-dom";
import Transition from "../../animations/pageTransitions/Transition.jsx";

const Login = () => {
  const [role, setRole] = useState("student");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(role);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-8 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <select value={role} onChange={e => setRole(e.target.value)} className="input mb-4 w-full">
        <option value="student">Student</option>
        <option value="alumni">Alumni</option>
      </select>
      <button type="submit" className="btn bg-blue-600 text-white w-full">Login</button>
    </form>
  );
};

export default Transition(Login);