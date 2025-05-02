
import axios from "axios";
const { createContext, useContext, useState } = require("react");

const AuthenticationContext = createContext();

// custom hook
export const useAuthentication = () => {
  return useContext(AuthenticationContext);
};

export const AuthenticationProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
    emailOrMobile: "",
  });
  const [registerData, setRegisterData] = useState(null);
  const [loginData, setLoginData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission (register)
  const handleSubmitRegister = async (e) => {
    try {
      // Validate that password and confirmPassword match
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }

      const response = await axios.post(
        "http://localhost:7000/api/auth/register",
        formData
      );
      console.log("Register data is: ", response.data);
      setRegisterData(response.data); // Store response data

      return response;

      // setSignupModalOpen(false);
      // setOtpModalOpen(true);
    } catch (error) {
      if (error.response?.data?.message?.includes("already registered")) {
        alert("This email or mobile number is already registered");
      }
      console.error("Error during registration:", error);
    }
  };

  // Handle form submission (Login)
  const handleSubmitLogin = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await axios.post(
        "http://localhost:7000/api/auth/login",
        {
          emailOrMobile: formData.emailOrMobile,
          password: formData.password,
        }
      );

      // if (response.data.token) {
      //   // Store token and user data
      //   localStorage.setItem("token", response.data.token);
      //   localStorage.setItem("user", JSON.stringify(response.data.user));
      //   setLoginData(response.data.user);
      // }

      setLoginData(response.data);

      return response;
    } catch (error) {
      console.error("Login error details:", error.response?.data);
      const errorMsg =
        error.response?.data?.message || "Login failed. Please try again.";
      setError(errorMsg);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthenticationContext.Provider
      value={{
        handleSubmitRegister,
        formData,
        handleChange,
        handleSubmitLogin,
        setError,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
