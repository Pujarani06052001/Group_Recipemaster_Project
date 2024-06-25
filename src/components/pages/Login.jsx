import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [btndisable , setbtndisable] = useState(false)
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    setbtndisable(true)
    const url = 'https://fullstack-ecom-render.onrender.com/account/login/';
    const data = {
      username,
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
        toast.error(`HTTP error! status: ${response.status}`);
        setbtndisable(false)
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result && result.token) {
        sessionStorage.setItem('token', result.token);
        console.log('Login successful:', result);
        toast.success('Login successful!');
        setTimeout(() => {
          navigate('/');
        }, 2000);
      } else {
        toast.error(`'Login failed. Invalid token.'`);
        setbtndisable(false)
        throw new Error('Login failed. Invalid token.');
      }
    } catch (error) {
      toast.error('There was a problem with the login:', error);
      setbtndisable(false)
      console.error('There was a problem with the login:', error);
      // Handle error (e.g., show error message to the user)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 bg-cover " style={{ backgroundImage: 'url(/images/41.avif)' }}>
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form className="space-y-4 " onSubmit={handleSubmit} >
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
          className={`w-full py-2 rounded hover:bg-indigo-600 transition duration-200 ${btndisable ? 'bg-gray-300 cursor-not-allowed' : 'bg-indigo-500'}`}
          style={{ backgroundColor: btndisable ? '#CCCCCC' : '#4F46E5' }}
        >
          Login
        </button>
        </form>
        <div className="mt-4 text-center">
          <span
            className="text-indigo-500 hover:underline cursor-pointer"
            onClick={() => navigate('/register')}
          >
            Register
          </span>
        </div>
      </div>
      <ToastContainer position="bottom-right" autoClose={1000}/>
    </div>
  );
};

export default Login;
