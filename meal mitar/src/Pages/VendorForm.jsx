import React from 'react'
import { Store, ArrowLeft } from 'lucide-react';
import { useNavigate  } from 'react-router-dom';
const VendorForm = () => {
  const navigate = useNavigate();
  return (
   <div className="min-h-screen bg-[#F0FDF4] flex items-center justify-center py-12 px-4 font-sans text-gray-900">
      
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
        <div className="mt-10 text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
            <Store size={32} strokeWidth={2.5} />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Vendor Registration</h1>
          <p className="text-gray-500 text-sm mt-1">
            Join MealMitra to grow your food business
          </p>
        </div>

        {/* Form Section */}
        <form className="space-y-5">
          
          {/* Vendor / Business Name */}
          <div className="space-y-1.5">
            <label className="block text-sm font-bold text-gray-700">
              Vendor Name / Business Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter your business name"
              className="w-full bg-gray-50 border border-transparent px-4 py-3 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition-all"
            />
          </div>

          {/* Contact Person Name */}
          <div className="space-y-1.5">
            <label className="block text-sm font-bold text-gray-700">
              Contact Person Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Your full name"
              className="w-full bg-gray-50 border border-transparent px-4 py-3 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition-all"
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
              className="w-full bg-gray-50 border border-transparent px-4 py-3 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition-all"
            />
          </div>

          {/* Email */}
          <div className="space-y-1.5">
            <label className="block text-sm font-bold text-gray-700">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="business@example.com"
              className="w-full bg-gray-50 border border-transparent px-4 py-3 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition-all"
            />
          </div>

          {/* Service Type */}
          <div className="space-y-1.5">
            <label className="block text-sm font-bold text-gray-700">
              Service Type <span className="text-red-500">*</span>
            </label>
            <select className="w-full bg-gray-50 border border-transparent px-4 py-3 rounded-lg text-gray-500 focus:text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition-all appearance-none cursor-pointer">
              <option value="" disabled selected>Select service type</option>
              <option value="tiffin">Daily Tiffin Service</option>
              <option value="products">Homemade Products (Pickles, etc.)</option>
              <option value="both">Both</option>
            </select>
          </div>

          {/* Service Area / Location */}
          <div className="space-y-1.5">
            <label className="block text-sm font-bold text-gray-700">
              Service Area / Location <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter your service area"
              className="w-full bg-gray-50 border border-transparent px-4 py-3 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition-all"
            />
          </div>

          {/* Food Type */}
          <div className="space-y-1.5">
            <label className="block text-sm font-bold text-gray-700">
              Food Type <span className="text-red-500">*</span>
            </label>
            <select className="w-full bg-gray-50 border border-transparent px-4 py-3 rounded-lg text-gray-500 focus:text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition-all appearance-none cursor-pointer">
              <option value="" disabled selected>Select food type</option>
              <option value="veg">Pure Veg</option>
              <option value="nonveg">Non-Veg Only</option>
              <option value="mix">Veg & Non-Veg</option>
            </select>
          </div>

          {/* Delivery Type */}
          <div className="space-y-1.5">
            <label className="block text-sm font-bold text-gray-700">
              Delivery Type <span className="text-red-500">*</span>
            </label>
            <select className="w-full bg-gray-50 border border-transparent px-4 py-3 rounded-lg text-gray-500 focus:text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition-all appearance-none cursor-pointer">
              <option value="" disabled selected>Select delivery type</option>
              <option value="delivery">Home Delivery Only</option>
              <option value="pickup">Pickup Only</option>
              <option value="both">Delivery & Pickup</option>
            </select>
          </div>

          {/* Password */}
          <div className="space-y-1.5">
            <label className="block text-sm font-bold text-gray-700">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              placeholder="Minimum 6 characters"
              className="w-full bg-gray-50 border border-transparent px-4 py-3 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition-all"
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
              className="w-full bg-gray-50 border border-transparent px-4 py-3 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition-all"
            />
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-start gap-3 pt-2">
            <div className="flex items-center h-5">
              <input
                id="terms"
                type="checkbox"
                className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500 focus:ring-2 cursor-pointer"
              />
            </div>
            <label htmlFor="terms" className="text-sm text-gray-600">
              I agree to the{' '}
              <a href="#" className="text-green-600 hover:underline font-medium">Terms and Conditions</a>
              {' '}and{' '}
              <a href="#" className="text-green-600 hover:underline font-medium">Privacy Policy</a>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="button"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 rounded-lg transition-colors shadow-lg shadow-green-200 mt-6"
          >
            Create Vendor Account
          </button>
        </form>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            Already have an account?{' '}
            <h1 onClick={()=>{
            navigate("/login")
          }} className="text-green-600 font-bold hover:underline">
              Sign in
            </h1>
          </p>
        </div>

      </div>
    </div>
  )
}

export default VendorForm
