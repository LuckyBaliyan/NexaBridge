import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthProvider.jsx";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../ui/Buttons/Mainbtn.jsx";

const FREE_EMAIL_DOMAINS = [
  "gmail.com",
  "yahoo.com",
  "outlook.com",
  "hotmail.com",
  "live.com",
  "gmx.com",
  "aol.com",
];

const Login = () => {
  const location = useLocation();
  const defaultState = location.state?.currentState || "Login"; 
  const [currentState, setCurrentState] = useState(defaultState);

  const [role, setRole] = useState("student");
  const { login } = useAuth();
  const navigate = useNavigate();
  const [valid, setValid] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [token, setToken] = useState(localStorage.getItem("token") || null);

  const [passwordChecks, setPasswordChecks] = useState({
    length: false,
    letter: false,
    number: false,
    symbol: false,
  });

  const checkPassword = (pw) => {
    setPasswordChecks({
      length: pw.length >= 6,
      letter: /[A-Za-z]/.test(pw),
      number: /\d/.test(pw),
      symbol: /[@$!%*?&^#()_\-+=[\]{};:'",.<>\\/|`~]/.test(pw),
    });
  };

  const validateStudentEmail = (email) => {
    return /@([a-z0-9-]+\.)*(edu|ac|college|university)(\.[a-z]{2,})?$/i.test(email);
  };

  const validateAlumniEmail = (email) => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return false;
    const domain = email.split("@")[1].toLowerCase();
    const isFree = FREE_EMAIL_DOMAINS.some(
      (free) => domain === free || domain.endsWith("." + free)
    );
    return !isFree;
  };

  const validateEmailByRole = (emailValue, currentRole) => {
    if (!emailValue) return false;
    if (currentRole === "student") return validateStudentEmail(emailValue);
    return validateAlumniEmail(emailValue);
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));

    if (name === "password") checkPassword(value);
    if (name === "email") setValid(validateEmailByRole(value, role));
  };


  const requirementLabels = {
    length: "At least 6 characters",
    letter: "At least 1 letter (A–Z)",
    number: "At least 1 number (0–9)",
    symbol: "At least 1 special character (e.g. @ $ ! % *)",
  };

  const unmetRequirements = Object.keys(passwordChecks).filter(
    (k) => !passwordChecks[k]
  );


  const handleSubmit = (e) => {
    e.preventDefault();

    const isEmailValid = validateEmailByRole(formData.email, role);
    const isPasswordValid = Object.values(passwordChecks).every(Boolean);

    if (!isEmailValid || !isPasswordValid) {
      toast.error("Please fill valid credentials!");
      return;
    }

    let accounts = JSON.parse(localStorage.getItem("accounts")) || [];

    if (currentState === "SignUp") {
      const existingUser = accounts.find((u) => u.email === formData.email);

      if (existingUser) {
        toast.warn("Account already exists, please Login");
        setCurrentState("Login");
        return;
      }

      {/*used to avoid the condition of nested or skipping of route as we are going trough the login to signUp */}

      const originalFrom = location.state?.from || location; 
      navigate("/verify", { state: { ...formData, role, from: originalFrom } });
    } else {
      const existingUser = accounts.find(
        (u) => u.email === formData.email && u.password === formData.password
      );

      if (existingUser) {
        const mockToken = `${existingUser.email}-token`;
        setToken(mockToken);
        localStorage.setItem("token", mockToken);
        localStorage.setItem("role", existingUser.role);
        localStorage.setItem("currentUser", existingUser.email);
        localStorage.setItem('currentUser',JSON.stringify(existingUser));

        login(existingUser.role,existingUser);
        toast.success("Successfully Logged In");

          const redirectPath = location.state?.from?.pathname || "/dashboard";
          navigate(redirectPath, { replace: true });
      } else {
        toast.warn("Account not found. Please Sign Up.");
        setCurrentState("SignUp");
      }
    }
  };

/*useEffect(() => {
  if (token) {
    const redirectPath = location.state?.from?.pathname || "/"; // redirect to last visited page from where we initiate login
    navigate(redirectPath, { replace: true });
  }
}, [token, navigate, location.state]);*/

useEffect(() => {
  if (token) {
    // only redirect if we are not already on login/signup/verify pages
    const pathname = location.pathname;
    if (pathname !== "/login" && pathname !== "/verify") {
      const redirectPath = location.state?.from?.pathname || "/";
      navigate(redirectPath, { replace: true });
    }
  }
}, [token, navigate, location]);


  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md p-8 rounded-2xl shadow-xl form border-0">
        <h2 className="text-2xl font-semibold text-center mb-6">
          {currentState}
        </h2>

        <div className="mb-4">
          <label className="block mb-2">Select Role</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full p-2 cursor-pointer font-bold bg-[var(--Accent)] text-[#fff] focus:outline-none focus:ring-0"
          >
            <option value="student">Student</option>
            <option value="alumni">Alumni</option>
          </select>
        </div>

   
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          {currentState === "SignUp" && (
            <div>
              <label className="block text-[var(--TextNav)] mb-1">Name</label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={formData.name}
                required
                placeholder="Enter your full name"
                className="w-full p-2 bg-[var(--BackgroundPrimary)] text-[var(--TextNav)] placeholder-[var(--Text)] focus:outline-none focus:ring-0"
              />
            </div>
          )}

       
          <div>
            <label className="block text-[var(--TextNav)] mb-1">Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              placeholder={
                role === "student"
                  ? "Enter your University Email"
                  : "Enter your Work/Professional Email"
              }
              className="w-full p-2 bg-[var(--BackgroundPrimary)] text-[var(--TextNav)] placeholder-[var(--Text)] focus:outline-none focus:ring-0"
            />
          </div>
          {!valid && (
            <p className="text-gray-800 text-sm">
              Must be in required format...
            </p>
          )}

     
          <div>
            <label className="block text-[var(--TextNav)] mb-1">Password</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={formData.password}
              placeholder="Enter your password"
              className="w-full p-2 bg-[var(--BackgroundPrimary)] text-[var(--TextNav)] placeholder-[var(--Text)] focus:outline-none focus:ring-0"
            />
          </div>

   
          {formData.password && unmetRequirements.length > 0 && (
            <div className="p-3 rounded-md text-sm bg-[#7660ccfd] border border-none">
              <strong className="block text-gray-800 mb-1">Required</strong>
              <ul className="mt-1 space-y-1">
                {unmetRequirements.map((key) => (
                  <li key={key} className="text-[#fff]">
                    • {requirementLabels[key]}
                  </li>
                ))}
              </ul>
            </div>
          )}

     
          <div className="w-full flex justify-center">
            <Button
              type="submit"
              text={currentState}
              className="bg-[var(--Accent)] text-[#fff]"
            />
          </div>


          <p
            onClick={() =>
              setCurrentState((prev) =>
                prev === "Login" ? "SignUp" : "Login"
              )
            }
            className="cursor-pointer text-sm text-center text-[var(--Accent)] hover:opacity-70 mt-2"
          >
            {currentState === "Login"
              ? "Don't have an account? Register"
              : "Already have an account? Login"}
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
