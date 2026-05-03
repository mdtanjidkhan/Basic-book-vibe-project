import React from "react"
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 px-4">
      <div className="text-center bg-white/10 backdrop-blur-lg p-10 rounded-3xl shadow-2xl border border-white/20 max-w-lg w-full">
        
        {/* Error Code */}
        <h3 className="text-7xl font-extrabold text-white drop-shadow-lg">
          404
        </h3>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-white mt-4">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="text-white/80 mt-2">
          The page you're looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <Link to="/">
          <button className="mt-6 px-6 py-3 bg-white text-purple-600 font-semibold rounded-xl shadow-md hover:bg-purple-100 transition duration-300">
            Go Back Home
          </button>
        </Link>

        {/* Optional small text */}
        <p className="text-xs text-white/60 mt-6">
          Error code: 404 | Lost in space 🚀
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;