'use client';

import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle forgot password logic here
    console.log('Reset link sent to:', email);
  };

  return (
    <>
      <Head>
        <title>Forgot Password | Bustard</title>
        {/* <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" /> */}
      </Head>

      <div
        className="min-h-screen flex items-center justify-center p-4"
        style={{
          fontFamily: "'Roboto', sans-serif",
          backgroundColor: '#111015',
          color: '#E0E0E0',
        }}
      >
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 max-w-7xl">
          {/* Left Section - Welcome Content */}
          <div className="w-full lg:w-1/2 p-4 lg:p-8 flex flex-col justify-center">
            <div className="max-w-lg">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Forgot Your <span style={{ color: '#A362FF' }}>Password?</span>
              </h1>
              <p className="text-gray-400 mb-6 sm:mb-8 text-base sm:text-lg">
                Enter your email to receive a password reset link and regain access to your Bustard account.
              </p>
              <div className="relative overflow-hidden rounded-xl aspect-video">
                <Image
                  src="/1.jpeg"
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

          {/* Right Section - Forgot Password Form */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div
              className="w-full max-w-md p-6 sm:p-8 rounded-xl shadow-xl"
              style={{
                backgroundColor: '#1E1C24',
                border: '1px solid #2A2835',
              }}
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">Forgot Password?</h2>
                <p className="text-gray-400 text-sm sm:text-base">
                  Enter your email to reset your password
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="email">
                    Email Address
                  </label>
                  <div className="relative">
                   
                    <input
                      className="w-full pl-10 pr-4 py-3 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-500"
                      style={{
                        backgroundColor: '#2D2A37',
                        border: '1px solid #4A4656',
                        transition: 'all 0.3s ease',
                      }}
                      id="email"
                      placeholder="Enter your email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  className="w-full text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:opacity-95"
                  style={{
                    background: 'linear-gradient(to right, #8A2BE2, #C462FF)',
                    boxShadow: '0 4px 6px rgba(138, 43, 226, 0.2)',
                  }}
                  type="submit"
                >
                  Send Reset Link
                </button>
              </form>

              {/* Back to Login Button */}
              <div className="mt-6 text-center">
                <button
                  type="button"
                  onClick={() => router.push('/login')}
                  className="inline-flex items-center justify-center gap-2 text-sm text-gray-400 hover:text-purple-400 px-4 py-2 rounded-md border border-gray-600 hover:border-purple-500 transition-all duration-300"
                  style={{
                    backgroundColor: '#2D2A37',
                  }}
                >
                  <span className="material-icons"> Back to Login</span>
                  
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordPage;
