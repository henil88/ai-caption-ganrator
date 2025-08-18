import React, { useContext, useEffect } from "react";
import Modal from "../utils/Modal";
import Login from "../components/Login";
import Register from "../components/Register";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const [showLogin, setShowLogin] = React.useState(false);
  const [showRegister, setShowRegister] = React.useState(false);
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  // Redirect if already logged in
  useEffect(() => {
    if (isAuthenticated) {
      console.log("User already authenticated, redirecting to /");
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4 bg-gray-100 px-4">
      <button
        className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition"
        onClick={() => {
          console.log("Opening login modal");
          setShowLogin(true);
        }}
      >
        Login
      </button>
      <button
        className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition"
        onClick={() => {
          console.log("Opening register modal");
          setShowRegister(true);
        }}
      >
        Register
      </button>

      <Modal isOpen={showLogin} onClose={() => {
        console.log("Closing login modal");
        setShowLogin(false);
      }}>
        <Login onSuccess={() => {
          console.log("Login modal closed after successful login");
          setShowLogin(false);
        }} />
      </Modal>

      <Modal isOpen={showRegister} onClose={() => {
        console.log("Closing register modal");
        setShowRegister(false);
      }}>
        <Register onSuccess={() => {
          console.log("Register modal closed after successful registration");
          setShowRegister(false);
        }} />
      </Modal>
    </div>
  );
};

export default AuthPage;