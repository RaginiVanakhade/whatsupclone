import { useState } from "react";
import axios from "axios";
import whatsupLogo from '../assets/whatsupLogo.jpg';
import { FaDownload } from 'react-icons/fa';
import Signup from "./Signup";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false);

  async function handleLogin() {
    try {
      await axios.post("http://localhost:3001/api/auth/login", {
        phone,
        password,
      });

      alert("Login success!");
      window.location.href = "/Home";
    } catch (error) {
      alert(error.response?.data?.msg || "Login failed");
    }
  }

  function handleDownloadWp() {
    alert("Visit https://web.whatsapp.com to download WhatsApp Web.");
  }

  return (
    <div className="bg-[#1A1A1A] min-h-screen flex flex-col justify-between text-white">
      
      {/* Header */}
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center gap-2 text-green-600 font-bold">
          <img src={whatsupLogo} alt="WhatsApp Logo" className="w-10 h-10" />
          <div className="text-lg">WhatsApp</div>
        </div>

        <button
          className="rounded-3xl border border-black flex items-center gap-2 px-6 py-2 bg-green-500 hover:bg-black hover:text-white"
          onClick={handleDownloadWp}
        >
          Download <FaDownload />
        </button>
      </div>

      {/* Main Card */}
      <div className="flex flex-1 justify-center items-center px-4">
        <div className="bg-[#1A1A1A] shadow-2xl rounded-3xl w-full max-w-xl p-8">
          
          {/* Logo */}
          <div className="text-center">
            <img src={whatsupLogo} alt="WhatsApp Logo" className="w-24 h-24 rounded-full mx-auto" />
            <h2 className="text-2xl font-semibold text-white mb-6">
              {isSignup ? "Create Your Account" : "Login to WhatsApp Web"}
            </h2>
          </div>

          {/* Toggle view */}
          {isSignup ? (
            <Signup onBack={() => setIsSignup(false)} />
          ) : (
            <>
              <label className='block mb-1'>Phone Number</label>
              <input
                type="text"
                className="w-full mb-3 pl-4 py-2 border rounded-3xl outline-none text-black"
                placeholder="Enter your contact number"
                onChange={(e) => setPhone(e.target.value)}
              />

              <label className='block mb-1'>Password</label>
              <input
                type="password"
                className="w-full mb-4 pl-4 py-2 border rounded-3xl outline-none text-black"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />

              <button className="bg-green-400 w-full hover:bg-green-600 py-2 rounded-xl text-white mb-4" onClick={handleLogin}>
                Login
              </button>

              <div className="text-center">
                Don&apos;t have an account?{" "}
                <button className="text-green-400 underline" onClick={() => setIsSignup(true)}>
                  Signup here
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="text-center text-stone-600 text-sm p-4">
        Your personal messages are end-to-end encrypted
      </div>
    </div>
  );
};

export default Login;
