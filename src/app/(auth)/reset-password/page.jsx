"use client";

import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

const ResetPasswordPage = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password reset logic here
  };

  return (
    <>
      <Head>
        <title>Reset Password | Bustard</title>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Head>

      <div className="min-h-screen flex items-center justify-center p-4" style={{
        fontFamily: "'Roboto', sans-serif",
        backgroundColor: '#111015',
        color: '#E0E0E0'
      }}>
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 max-w-7xl">
          {/* Left Section - Welcome Content */}
          <div className="w-full lg:w-1/2 p-4 lg:p-8 flex flex-col justify-center">
            <div className="max-w-lg">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Create New <span style={{ color: '#A362FF' }}>Password</span>
              </h1>
              <p className="text-gray-400 mb-6 sm:mb-8 text-base sm:text-lg">
                Secure your account with a new password. Make sure it's strong and unique.
              </p>
              <div className="relative overflow-hidden rounded-xl aspect-video">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0zXk0ekqCfzZUBiXdcUBza1qyB9hsacAjeJPEaeZ3k8v9DOWk0yaaNG16ZRdrszqU0F4VTBW3WVu2tRgAgUhKulU34pnVp3OmL2NQO-mKZfIwywx9EKSRTzWJhqohN2cMk1W6DKlGFaOVcVFzBey1qQIP0rRQ3-XfCfqYgP9i0BaB3rkxaD-rJBE_DASNMrcF0Cv3dGd_6FcAUoThXkX77J_MHvNRTsNnEUGGc9qKUsRyAuBOIbLyoBBglB-_9PDdBrR-yFyAM64"
                  alt="Secure password reset"
                  width={640}
                  height={360}
                  className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>

          {/* Right Section - Reset Password Form */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-full max-w-md p-6 sm:p-8 rounded-xl shadow-xl" style={{ 
              backgroundColor: '#1E1C24',
              border: '1px solid #2A2835'
            }}>
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">Reset Password</h2>
                <p className="text-gray-400 text-sm sm:text-base">Create a new password for your account</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* New Password Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="new-password">
                    New Password
                  </label>
                  <div className="relative">
                    <span className="material-icons absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      lock
                    </span>
                    <input
                      className="w-full pl-10 pr-10 py-3 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-500"
                      style={{
                        backgroundColor: '#2D2A37',
                        border: '1px solid #4A4656',
                        transition: 'all 0.3s ease'
                      }}
                      id="new-password"
                      placeholder="Enter new password"
                      type={showPassword ? "text" : "password"}
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
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
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="confirm-password">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <span className="material-icons absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      lock
                    </span>
                    <input
                      className="w-full pl-10 pr-10 py-3 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-500"
                      style={{
                        backgroundColor: '#2D2A37',
                        border: '1px solid #4A4656',
                        transition: 'all 0.3s ease'
                      }}
                      id="confirm-password"
                      placeholder="Confirm new password"
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
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

                {/* Password Requirements */}
                <div className="text-xs text-gray-400 p-3 rounded-lg" style={{ backgroundColor: '#2D2A37' }}>
                  <p className="font-medium mb-1">Password Requirements:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li className={newPassword.length >= 8 ? 'text-green-400' : ''}>Minimum 8 characters</li>
                    <li className={/[A-Z]/.test(newPassword) ? 'text-green-400' : ''}>At least one uppercase letter</li>
                    <li className={/[0-9]/.test(newPassword) ? 'text-green-400' : ''}>At least one number</li>
                    <li className={/[^A-Za-z0-9]/.test(newPassword) ? 'text-green-400' : ''}>At least one special character</li>
                  </ul>
                </div>

                {/* Submit Button */}
                <button
                  className="w-full text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:opacity-95"
                  style={{
                    background: 'linear-gradient(to right, #8A2BE2, #C462FF)',
                    boxShadow: '0 4px 6px rgba(138, 43, 226, 0.2)'
                  }}
                  type="submit"
                >
                  Reset Password
                </button>
              </form>

              {/* Back to Login Link */}
              <div className="mt-6 text-center">
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <span className="material-icons align-middle mr-1">arrow_back</span>
                  Back to Login
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPasswordPage;