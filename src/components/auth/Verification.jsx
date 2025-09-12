import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../ui/Buttons/Mainbtn.jsx";
import { useAuth } from "../../context/AuthProvider.jsx";

const Verification = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const userData = location.state;
  const [otp, setOtp] = useState("");
  const [generatedOtp] = useState("745621"); // static OTP for demo

  const handleVerify = (e) => {
    e.preventDefault();
    if (otp === generatedOtp) {
      let accounts = JSON.parse(localStorage.getItem("accounts")) || [];

      const newUser = {
        name: userData.name,
        email: userData.email,
        password: userData.password,
        role: userData.role,
        profileImg:null,
      };

      accounts.push(newUser);
      localStorage.setItem("accounts", JSON.stringify(accounts));

      const mockToken = `${newUser.email}-token`;
      localStorage.setItem("token", mockToken);
      localStorage.setItem("role", newUser.role);

      login(newUser.role,newUser);
      toast.success("OTP Verified! Account Created");
      const redirectPath = userData?.from?.pathname || "/dashboard";
      navigate(redirectPath, { replace: true });
    } else {
      toast.error("Invalid OTP, try again!");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md p-8 rounded-2xl shadow-xl form border-0">
        <h2 className="text-2xl font-semibold text-center mb-6">
          OTP Verification
        </h2>
        <form onSubmit={handleVerify} className="space-y-4">
          <div>
            <div className="py-4 text-center px-2 capitalize bg-blue-100 text-black rounded">
                <p>A six digits code is sent to registered email</p>
            </div>
            <label className="block mb-1 mt-4">Enter OTP</label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter 6-digit OTP"
              className="w-full p-2 bg-[var(--BackgroundPrimary)] text-[var(--TextNav)] placeholder-[var(--Text)] focus:outline-none focus:ring-0"
            />
          </div>
          <div className="w-full flex justify-center">
            <Button
              type="submit"
              text="Verify OTP"
              className="bg-[var(--Accent)] text-[#fff]"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Verification;
