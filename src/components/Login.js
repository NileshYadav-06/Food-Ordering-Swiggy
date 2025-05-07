import React, {  useState } from 'react'


const Login = () => {
 
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="flex items-center justify-center h-[70vh] bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-xs w-full">
        <h2 className="text-2xl font-semibold mb-6 text-center"> 'Login'</h2>
        {isLoggedIn ? (
          <>
          
            <button
              className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <>
          <form >
            <input
              type="text"
              placeholder="Username"
              className="w-full mb-4 p-2 border rounded"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full mb-6 p-2 border rounded"
              required
            />
            <button
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              onClick={handleLogin}
            >
              Login
            </button>
            </form>
          </>
         )} 
      </div>
    </div>
  );
}

export default Login
