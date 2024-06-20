import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [btndisable , setbtndisable] = useState(false)
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setbtndisable(true)

    const url = 'https://fullstack-ecom-render.onrender.com/account/register/';
    const data = {
      username,
      email,
      password,
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        setbtndisable(false)
        toast.error(`HTTP error! status: ${response.status}`);
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const result = await response.json();
      if(result){
        setbtndisable(false)
        // sessionStorage.setItem('token',result.token)
        toast.success('User create successful!');
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      }
      console.log('Registration successful:', result);
    } catch (error) {
      setbtndisable(false)
      toast.error(error);
      console.error('There was a problem with the registration:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 bg-cover" style={{ backgroundImage: 'url(/images/41.avif)'}}>
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-200"
              placeholder="Enter your username"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-200"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-200"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
          type="submit"
          disabled={btndisable}
          className={`w-full py-2 rounded transition duration-200 ${
            btndisable ? 'bg-gray-300 cursor-not-allowed' : 'bg-indigo-500 hover:bg-indigo-600 text-white'
          }`}
        >
          Register
        </button>

        </form>
      </div>
      <ToastContainer position="bottom-right"/>
    </div>
  );
};

export default Register;
