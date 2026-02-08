import React from 'react';
import { Calendar, Pause, X } from 'lucide-react';

const SubscriptionsPage = () => {
  return (
    <>
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">My Subscriptions</h1>
        <p className="text-gray-500 mt-1">Manage your active tiffin subscriptions</p>
      </div>

      {/* Subscription Card */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8 shadow-sm">
        <div className="flex flex-col md:flex-row gap-6">
          
          {/* Image Section */}
          <div className="shrink-0">
            <img
              src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
              alt="Maharaja Tiffin Service"
              className="w-full md:w-64 h-48 object-cover rounded-xl"
            />
          </div>

          {/* Content Section */}
          <div className="flex-1">
            
            {/* Top Row: Title, Status, Price */}
            <div className="flex flex-col sm:flex-row justify-between items-start mb-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">Maharaja Tiffin Service</h2>
                <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Active
                </span>
              </div>
              
              <div className="mt-4 sm:mt-0 text-left sm:text-right">
                <p className="text-gray-500 text-xs mb-1">Total Amount</p>
                <h3 className="text-3xl font-bold text-orange-600">₹3000</h3>
                <p className="text-gray-400 text-xs">Per Monthly</p>
              </div>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {/* Plan Details */}
              <div>
                <p className="text-gray-400 text-xs mb-1">Plan Details</p>
                <p className="font-semibold text-gray-900 text-base">Monthly Plan</p>
                <p className="text-gray-500 text-sm">Lunch + Dinner (2 meals/day)</p>
              </div>

              {/* Duration */}
              <div>
                <p className="text-gray-400 text-xs mb-1 flex items-center gap-1">
                  <Calendar size={12} /> Duration
                </p>
                <p className="font-semibold text-gray-900 text-base">1 Jan 2026 - 31 Jan 2026</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <button className="flex items-center gap-2 px-5 py-2.5 border border-gray-300 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-black transition-colors shadow-sm">
                <Pause size={16} />
                Pause Subscription
              </button>
              <button className="flex items-center gap-2 px-5 py-2.5 border border-red-100 bg-white text-red-600 rounded-lg text-sm font-semibold hover:bg-red-50 hover:border-red-200 transition-colors shadow-sm">
                <X size={16} />
                Cancel Subscription
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-[#FFF7ED] border border-orange-100 rounded-xl p-8">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Subscription Benefits</h3>
        <ul className="space-y-3 text-gray-600 text-sm">
          <BenefitItem text="Save up to 20% with monthly subscriptions" />
          <BenefitItem text="Pause your subscription anytime during holidays" />
          <BenefitItem text="Get priority delivery and customer support" />
          <BenefitItem text="Flexible meal customization options" />
        </ul>
      </div>
    </>
  );
};

// --- Helper Component ---
const BenefitItem = ({ text }) => (
  <li className="flex items-start gap-3">
    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 shrink-0"></div>
    <span>{text}</span>
  </li>
);

export default SubscriptionsPage;