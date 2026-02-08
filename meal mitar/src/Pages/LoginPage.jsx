import { useState } from "react"
import React  from 'react'
import { ShoppingBag } from 'lucide-react';
import { useNavigate  } from 'react-router-dom';
const LoginPage = () => {
    const navigate = useNavigate();
    const [userType, setUserType] = useState('Customer');
  return (
    <div>
      <div className="min-h-screen bg-[#FFFBF5] flex items-center justify-center px-4 font-sans text-gray-900">
      
      {/* Login Card */}
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-8 md:p-10">
        
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4 text-orange-600">
            <ShoppingBag strokeWidth={2.5} size={32} />
            <span className="text-2xl font-bold tracking-tight">MealMitra</span>
          </div>
          <h2 className="text-xl font-semibold text-black">Welcome Back</h2>
          <p className="text-gray-500 text-sm mt-1">
            Sign in to your account to continue
          </p>
        </div>

        {/* User Type Toggle */}
        <div className="bg-gray-100 p-1.5 rounded-full flex justify-between items-center mb-8">
          {['Customer', 'Vendor', 'Admin'].map((type) => (
            <button
              key={type}
              onClick={() => setUserType(type)}
              className={`flex-1 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                userType === type
                  ? 'bg-white text-black shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Form Section */}
        <form className="space-y-5">
          {/* Email Input */}
          <div className="space-y-1.5">
            <label className="block text-sm font-semibold text-gray-900">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full bg-gray-50 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:bg-white transition-all border border-transparent focus:border-orange-300"
            />
          </div>

          {/* Password Input */}
          <div className="space-y-1.5">
            <label className="block text-sm font-semibold text-gray-900">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full bg-gray-50 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:bg-white transition-all border border-transparent focus:border-orange-300"
            />
          </div>

          {/* Submit Button */}
          <button
            type="button"
            className="w-full bg-[#EA580C] hover:bg-orange-700 text-white font-semibold py-3 rounded-lg transition-colors shadow-lg shadow-orange-100"
          >
            Sign In
          </button>
        </form>

        {/* Footer Section */}
        <div className="mt-6 text-center text-sm space-y-4">
          <p className="text-gray-500">
            Don't have an account?{' '}
            <span onClick={() => {
              navigate("/sign_up")
            }} className="text-orange-600 font-semibold hover:underline">
              Sign up
            </span>
          </p> 
          <div>
            <span onClick={() => {
              navigate("/")
            }} className="text-gray-500 font-medium hover:text-gray-900 hover:underline transition-colors">
              Back to Home
            </span>
          </div>
        </div>

      </div>
    </div>
    </div>
  )
}

export default LoginPage
