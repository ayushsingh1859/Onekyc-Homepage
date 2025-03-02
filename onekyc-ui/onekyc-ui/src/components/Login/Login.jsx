import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Side */}
        <div className="hidden md:flex flex-col justify-center items-center bg-gray-50 p-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Effortless KYC Simplified
          </h2>
          <p className="mt-4 text-gray-600 text-center">
            Join Us and Complete Your KYC with Ease and Security
          </p>
          <div className="mt-6">
            <img
              src="/src/assets/login.jpg"
              alt="Decor"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Login to OneKyc
          </h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-600 font-medium mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="name@gmail.com"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-600 font-medium mb-2"
              >
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="w-full px-4 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center justify-between mb-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={showPassword}
                  onChange={() => setShowPassword(!showPassword)}
                  className="text-blue-500 focus:ring-blue-500"
                />
                <span className="ml-2 text-gray-600">Show Password</span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-black"
            >
              Log in
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="my-4 text-gray-600">or</p>
            <button className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-black flex items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
                alt="Google"
                className="h-5 w-5 mr-2"
              />
              Sign in with Google
            </button>
          </div>

          <p className="mt-6 text-center text-gray-600">
            Don’t have an account?{" "}
            <Link to={"/signup"} className="text-blue-500 hover:underline">
              Sign up for free
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
