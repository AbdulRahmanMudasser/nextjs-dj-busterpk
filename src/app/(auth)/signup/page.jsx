"use client";

import { useState } from 'react';
import Head from 'next/head';

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <>
      <Head>
        <title>Join Bustard</title>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Head>

      <div className="min-h-screen flex items-center justify-center" style={{
        fontFamily: "'Roboto', sans-serif",
        backgroundColor: '#111015',
        color: '#E0E0E0'
      }}>
        <div className="container mx-auto p-4 flex flex-col lg:flex-row items-center justify-center gap-8">
          {/* Left Section - Welcome Content */}
          <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center">
            <div className="max-w-lg">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Welcome to <span style={{ color: '#A362FF' }}>Bustard</span>
              </h1>
              <p className="text-gray-400 mb-8 text-lg">
                Access your Bustard account, manage your preferences, and unlock personalized experiences instantly
              </p>
              <div className="relative overflow-hidden rounded-xl">
                <img
                  alt="A collection of electronic devices including a hard drive, laptop, and smartphone, all displaying futuristic interfaces."
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0zXk0ekqCfzZUBiXdcUBza1qyB9hsacAjeJPEaeZ3k8v9DOWk0yaaNG16ZRdrszqU0F4VTBW3WVu2tRgAgUhKulU34pnVp3OmL2NQO-mKZfIwywx9EKSRTzWJhqohN2cMk1W6DKlGFaOVcVFzBey1qQIP0rRQ3-XfCfqYgP9i0BaB3rkxaD-rJBE_DASNMrcF0Cv3dGd_6FcAUoThXkX77J_MHvNRTsNnEUGGc9qKUsRyAuBOIbLyoBBglB-_9PDdBrR-yFyAM64"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>

          {/* Right Section - Signup Form */}
          <div className="w-full lg:w-1/2 p-4 flex justify-center">
            <div className="w-full max-w-md" style={{ backgroundColor: '#1E1C24', borderRadius: '12px' }}>
              <div className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-white mb-2">Join Bustard</h2>
                  <p className="text-gray-400">Unlock personalized Bustard experiences instantly</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Full Name Field */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300" htmlFor="full-name">
                      Full Name
                    </label>
                    <div className="relative">
                      <span className="material-icons absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        
                      </span>
                      <input
                        className="w-full pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        style={{
                          backgroundColor: '#2D2A37',
                          border: '1px solid #4A4656',
                          transition: 'all 0.3s ease'
                        }}
                        id="full-name"
                        placeholder="Enter your full name"
                        type="text"
                        required
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300" htmlFor="email">
                      Email
                    </label>
                    <div className="relative">
                     
                      <input
                        className="w-full pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        style={{
                          backgroundColor: '#2D2A37',
                          border: '1px solid #4A4656',
                          transition: 'all 0.3s ease'
                        }}
                        id="email"
                        placeholder="Enter your email"
                        type="email"
                        required
                      />
                    </div>
                  </div>

                  {/* Password Field */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300" htmlFor="password">
                      Password
                    </label>
                    <div className="relative">
                     
                      <input
                        className="w-full pl-10 pr-10 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        style={{
                          backgroundColor: '#2D2A37',
                          border: '1px solid #4A4656',
                          transition: 'all 0.3s ease'
                        }}
                        id="password"
                        placeholder="Enter your password"
                        type={showPassword ? "text" : "password"}
                        required
                      />
                      <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                      >
                        <span className="material-icons">
                          {showPassword ? "visibility_off" : "visibility"}
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* Confirm Password Field */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300" htmlFor="confirm-password">
                      Confirm Password
                    </label>
                    <div className="relative">
                    
                      <input
                        className="w-full pl-10 pr-10 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        style={{
                          backgroundColor: '#2D2A37',
                          border: '1px solid #4A4656',
                          transition: 'all 0.3s ease'
                        }}
                        id="confirm-password"
                        placeholder="Confirm your password"
                        type={showConfirmPassword ? "text" : "password"}
                        required
                      />
                      <button
                        type="button"
                        onClick={toggleConfirmPasswordVisibility}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                      >
                        <span className="material-icons">
                          {showConfirmPassword ? "visibility_off" : "visibility"}
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    className="w-full text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 hover:shadow-lg"
                    style={{
                      background: 'linear-gradient(to right, #8A2BE2, #C462FF)',
                      boxShadow: '0 4px 6px rgba(138, 43, 226, 0.2)'
                    }}
                    type="submit"
                  >
                    Create Account
                  </button>
                </form>

                {/* Divider */}
                <div className="flex items-center my-6">
                  <div className="flex-1 border-t border-gray-600"></div>
                  <span className="px-3 text-gray-400 text-sm">OR</span>
                  <div className="flex-1 border-t border-gray-600"></div>
                </div>

                {/* Google Sign In Button */}
                <button
                  className="w-full flex items-center justify-center py-3 px-4 rounded-lg transition-all duration-300 hover:bg-opacity-90"
                  style={{
                    backgroundColor: '#2D2A37',
                    border: '1px solid #4A4656'
                  }}
                >
                  <img
                    alt="Google icon"
                    className="w-5 h-5 mr-3"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWd4Ji3ZxXyGr4IP-dRjP0fb7NMmhyj7XfvkMoV3DL_D0rJrpXTe1QJXAny6knt78OpEwVdSQhvtC8HaBRSH4p9mSaoo1gN_Dw_Pt276rhHY1mVh6bC3gpgpOZLzACJgR_onpnF5cki2Z0BJ6JOjf8KQq0PSRwd8GOq0aB_FepyPbL4lv925cbYl56Pi9_fS_Tfw3FTtXlJi-sCG8gU9YTKgc0BycJ9pijspCQoKx3iNtehWkxyRXJ59dtGHQ4J7SsPR8UALT5E2o"
                  />
                  <span>Continue with Google</span>
                </button>

                {/* Sign In Link */}
                <p className="mt-8 text-center text-gray-400">
                  Already have an account?{' '}
                  <a
                    className="font-medium hover:underline"
                    style={{ color: '#A362FF' }}
                    href="/login"
                  >
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;