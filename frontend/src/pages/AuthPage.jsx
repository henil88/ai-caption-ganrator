import React, { useState } from "react";
import Modal from "../utils/Modal";
import Login from "../components/Login";
import Register from "../components/Register";

const AuthPage = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4 bg-gray-100 px-4">
      <button
        className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition"
        onClick={() => setShowLogin(true)}
      >
        Login
      </button>
      <button
        className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition"
        onClick={() => setShowRegister(true)}
      >
        Register
      </button>

      <Modal isOpen={showLogin} onClose={() => setShowLogin(false)}>
        <Login />
      </Modal>

      <Modal isOpen={showRegister} onClose={() => setShowRegister(false)}>
        <Register />
      </Modal>
    </div>
  );
};

export default AuthPage;
