// import React from 'react';
import whatsupLogo from '../assets/whatsupLogo.jpg';
import { Link } from 'react-router-dom';
import { FaDownload } from 'react-icons/fa';

const Login = () => {
  function handleDownloadWp() {
    alert("Visit https://web.whatsapp.com to download WhatsApp Web.");
  }

  return (
    <>
      <div className="bg-[#1A1A1A]  min-h-screen flex flex-col justify-between">
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


        <div className="flex flex-1 justify-center items-center px-4">
          <div className="bg-[#1A1A1A]  shadow-2xl   rounded-3xl w-full max-w-xl p-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <img
                  src={whatsupLogo}
                  alt="WhatsApp Logo"
                  className="w-24 h-24 rounded-full"
                />
              </div>
              <h2 className="text-2xl font-semibold mb-6 text-white ">Login to WhatsApp Web</h2>
              <Link to="/Home">
                <button className="bg-green-400 w-32 hover:bg-green-600 px-4 py-2 rounded-xl text-white">
                  Login
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center text-stone-600 text-sm p-4">
          Your personal messages are end-to-end encrypted
        </div>
      </div>
    </>
  );
};

export default Login;
