import React from "react";
import { Link } from "react-router-dom";
import photo from "../assets/error1.jpg";


const Error = () => {



    return <>
        <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="max-h-80vh w-full max-w-lg p-6 bg-white shadow-lg rounded-lg flex flex-col items-center text-center">
        <img
          src={photo}
          alt="404 Not Found"
          className="w-full h-48 object-cover mb-6 rounded"
        />
        <h1 className="text-4xl font-bold text-gray-600 mb-4">404</h1>
        <p className="text-lg text-gray-600 mb-6">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link to={"/"} className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"><button>Go Back Home</button></Link>

        
        
           
        
      </div>
    </div>
    </>
}

export default Error