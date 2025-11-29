import { useState } from "react";
import axios from "axios";

const Signup = ({ onBack }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignup() {
    try {
      await axios.post("http://localhost:3001/api/auth/signup", {
        name,
        phone,
        email,
        password,
      });

      alert("Signup successful!");
      onBack(); // go back to login
      window.location.href = "/Home";
    } catch (error) {
      alert(error.response?.data?.msg || "Signup failed");
    }
  }

  return (
    <div>
      <label className='block mb-1'>Name</label>
      <input
        className="w-full mb-3 pl-4 py-2 border rounded-3xl text-black"
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
      />

      <label className='block mb-1'>Phone</label>
      <input
        className="w-full mb-3 pl-4 py-2 border rounded-3xl text-black"
        placeholder="Enter phone"
        onChange={(e) => setPhone(e.target.value)}
      />

      <label className='block mb-1'>Email</label>
      <input
        className="w-full mb-3 pl-4 py-2 border rounded-3xl text-black"
        placeholder="Enter email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <label className='block mb-1'>Password</label>
      <input
        type="password"
        className="w-full mb-4 pl-4 py-2 border rounded-3xl text-black"
        placeholder="Enter password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        className="bg-green-400 w-full hover:bg-green-600 py-2 rounded-xl text-white mb-4"
        onClick={handleSignup}
      >
        Signup
      </button>

      <button className="text-green-400 underline w-full" onClick={onBack}>
        Back to Login
      </button>
    </div>
  );
};

export default Signup;
