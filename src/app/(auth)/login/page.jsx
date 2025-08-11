"use client";

import React, { useState } from "react";
import Image from "next/image";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="min-h-screen w-full bg-[#0f0f0f] text-white flex items-center justify-center"
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      }}
    >
      <div className="flex flex-col lg:flex-row w-full max-w-7xl p-4 sm:p-8 gap-8 lg:gap-12 h-full">
        {/* Left: Text + Image - Hidden on small screens if needed */}
        <div className="flex flex-col justify-center items-start space-y-6 lg:space-y-8 w-full lg:w-1/2 lg:min-h-[80vh]">
          <div className="w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-[#A259FF] to-[#6A4CFF] bg-clip-text text-transparent">
                Bustard
              </span>
            </h1>
            <p className="mt-3 sm:mt-4 text-gray-400 max-w-md text-sm sm:text-base">
              Access your Bustard account, manage your preferences, and unlock personalized experiences instantly.
            </p>
          </div>

          <div className="hidden lg:block rounded-xl overflow-hidden shadow-lg w-full max-w-lg">
            <Image
              src="/earbudsgl.jpg"
              alt="Device showcase"
              width={640}
              height={360}
              className="object-cover w-full h-auto"
              priority
            />
          </div>
        </div>

        {/* Right: Login Form - Always centered */}
        <div className="flex items-center justify-center w-full lg:w-1/2 my-8 lg:my-0">
          <div className="bg-[#1E1E1E] rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl w-full max-w-md">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold">Welcome Back</h2>
              <p className="text-gray-400 mt-2 text-sm sm:text-base">
                Access your Bustard account, manage your preferences
              </p>
            </div>

            <form className="space-y-5 sm:space-y-6">
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm mb-2 text-gray-300">
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg py-2.5 sm:py-3 px-4 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm mb-2 text-gray-300">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="Enter your password"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg py-2.5 sm:py-3 px-4 pl-10 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    <span className="material-icons text-base">
                      {showPassword ? "visibility_off" : "visibility"}
                    </span>
                  </button>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-2.5 sm:py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-[#A259FF] to-[#6A4CFF] hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Sign In
              </button>
            </form>

            {/* Forgot password */}
            <div className="text-center mt-4">
              <a href="/forgotpassword" className="text-sm text-purple-400 hover:underline transition-colors">
                Forgot your password?
              </a>
            </div>

            {/* Divider */}
            <div className="flex items-center my-5 sm:my-6">
              <hr className="flex-grow border-gray-700" />
              <span className="px-3 sm:px-4 text-gray-500 text-xs sm:text-sm">OR</span>
              <hr className="flex-grow border-gray-700" />
            </div>

            {/* Google Login */}
            <button
              className="w-full bg-gray-800 border border-gray-700 py-2.5 sm:py-3 px-4 rounded-lg flex items-center justify-center text-sm text-white hover:bg-gray-700 transition duration-300"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" fill="#FFC107" />
                <path d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" fill="#FF3D00" />
                <path d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.222,0-9.617-3.356-11.303-7.918l-6.522,5.025C9.505,39.556,16.227,44,24,44z" fill="#4CAF50" />
                <path d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571l6.19,5.238C43.021,36.251,44,30.338,44,24C44,22.659,43.862,21.35,43.611,20.083z" fill="#1976D2" />
              </svg>
              Continue with Google
            </button>

            {/* Switch to Signup */}
            <p className="text-center text-xs sm:text-sm text-gray-400 mt-6 sm:mt-8">
              Don't have an account?{" "}
              <a href="/signup" className="font-medium text-purple-400 hover:underline transition-colors">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;