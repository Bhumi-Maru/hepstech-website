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
      console.error("Error during registration:", error);
    }
  };

  // Handle form submission (Login)
  const handleSubmitLogin = async (e) => {
    e?.preventDefault(); // Add e.preventDefault() safely

    try {
      setLoading(true);
      setError("");

      // Here we only send email/mobileNumber and password
      const loginPayload = {
        emailOrMobile: formData.email || formData.mobileNumber,
        password: formData.password,
      };

      const response = await axios.post(
        "http://localhost:7000/api/auth/login",
        loginPayload
      );
      console.log("Login successful:", response.data);
      setLoginData(response.data);

      return response;
    } catch (error) {
      console.error("Error during login:", error);
      setError(error.response?.data?.message || "Login failed");
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
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
