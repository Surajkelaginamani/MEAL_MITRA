import React from 'react'
import { User, ArrowLeft } from 'lucide-react';
import { useNavigate  } from 'react-router-dom';
const CoustomerForm = () => {
    const navigate = useNavigate();
  return (
   <div className="min-h-screen bg-[#FFFBF5] flex items-center justify-center py-12 px-4 font-sans text-gray-900">
      
      {/* Registration Card */}
      <div className="bg-white w-full max-w-xl rounded-2xl shadow-xl p-8 md:p-10 relative">
        
        {/* Back Link */}
        <button onClick={()=>{
            navigate("/sign_up")
          }} className="absolute top-8 left-8 text-gray-500 hover:text-gray-900 flex items-center gap-2 text-sm font-medium transition-colors">
          <ArrowLeft size={18} />
          Back to role selection
        </button>

        {/* Header Section */}
        <div className="mt-8 text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mb-4">
            <User size={32} strokeWidth={2.5} />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Customer Registration</h1>
          <p className="text-gray-500 text-sm mt-1">
            Create your account to start ordering delicious meals
          </p>
        </div>

        {/* Form Section */}
        <form className="space-y-5">
          
          {/* Full Name */}
          <div className="space-y-1.5">
            <label className="block text-sm font-bold text-gray-700">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full bg-gray-50 border border-transparent px-4 py-3 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all"
            />
          </div>

          {/* Mobile Number */}
          <div className="space-y-1.5">
            <label className="block text-sm font-bold text-gray-700">
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              placeholder="+91 9876543210"
              className="w-full bg-gray-50 border border-transparent px-4 py-3 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all"
            />
          </div>

          {/* Email (Optional) */}
          <div className="space-y-1.5">
            <label className="block text-sm font-bold text-gray-700">
              Email (Optional)
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full bg-gray-50 border border-transparent px-4 py-3 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all"
            />
          </div>

          {/* Location / Area */}
          <div className="space-y-1.5">
            <label className="block text-sm font-bold text-gray-700">
              Location / Area <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter your area or landmark"
              className="w-full bg-gray-50 border border-transparent px-4 py-3 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all"
            />
          </div>

          {/* Password */}
          <div className="space-y-1.5">
            <label className="block text-sm font-bold text-gray-700">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              placeholder="Minimum 6 characters"
              className="w-full bg-gray-50 border border-transparent px-4 py-3 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all"
            />
          </div>

          {/* Confirm Password */}
          <div className="space-y-1.5">
            <label className="block text-sm font-bold text-gray-700">
              Confirm Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              placeholder="Re-enter your password"
              className="w-full bg-gray-50 border border-transparent px-4 py-3 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all"
            />
          </div>

          {/* Submit Button */}
          <button
            type="button"
            className="w-full bg-[#EA580C] hover:bg-orange-700 text-white font-bold py-3.5 rounded-lg transition-colors shadow-lg shadow-orange-200 mt-6"
          >
            Create Account
          </button>
        </form>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            Already have an account?{' '}
            <h1  onClick={()=>{
            navigate("/login")
          }} className="text-orange-600 font-bold hover:underline">
              Sign in
            </h1>
          </p>
        </div>

      </div>
    </div>
  )
}

export default CoustomerForm
