import React from 'react';
import { 
  ShoppingCart, Package, TrendingUp, Clock, Star 
} from 'lucide-react';

const CustomerDashboard = () => {
  return (
    <>
      {/* Dashboard Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500">Welcome back! Here's your overview</p>
      </div>

      {/* Stats Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard 
          title="Active Subscriptions" 
          value="1" 
          icon={<ShoppingCart size={24} className="text-orange-400" />} 
        />
        <StatsCard 
          title="Total Orders" 
          value="2" 
          icon={<Package size={24} className="text-green-400" />} 
        />
        <StatsCard 
          title="This Month" 
          value="₹3,000" 
          icon={<TrendingUp size={24} className="text-blue-400" />} 
        />
        <StatsCard 
          title="Upcoming" 
          value="Today" 
          icon={<Clock size={24} className="text-purple-400" />} 
        />
      </div>

      {/* Middle Section: Active Subscription & Recent Orders */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        
        {/* Left: Active Subscriptions */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold">Active Subscriptions</h2>
            <button className="text-sm font-semibold text-gray-500 hover:text-black">View All</button>
          </div>
          <p className="text-gray-400 text-sm mb-4">Your current meal subscriptions</p>

          <div className="border border-gray-100 rounded-xl p-4 flex gap-4 items-center">
            <img 
              src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80" 
              alt="Tiffin" 
              className="w-20 h-20 rounded-lg object-cover"
            />
            <div className="flex-1">
              <h3 className="font-bold text-lg">Maharaja Tiffin Service</h3>
              <p className="text-gray-500 text-sm">Monthly Plan</p>
              <p className="text-gray-500 text-sm">₹3000/month</p>
            </div>
            <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
              active
            </span>
          </div>
        </div>

        {/* Right: Recent Orders */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold">Recent Orders</h2>
            <button className="text-sm font-semibold text-gray-500 hover:text-black">View All</button>
          </div>
          <p className="text-gray-400 text-sm mb-4">Your latest meal orders</p>

          <div className="space-y-4">
            {/* Order Item 1 */}
            <div className="border-b border-gray-50 pb-4 last:border-0 last:pb-0">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-semibold">Maharaja Tiffin Service</h3>
                <span className="bg-black text-white text-xs px-2 py-0.5 rounded">delivered</span>
              </div>
              <p className="text-gray-500 text-sm mb-2">Dal Tadka, Roti (4), Rice, Salad</p>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">2026-01-03</span>
                <span className="font-bold">₹120</span>
              </div>
            </div>

            {/* Order Item 2 */}
            <div className="border-b border-gray-50 pb-4 last:border-0 last:pb-0">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-semibold">South Indian Express</h3>
                <span className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded">confirmed</span>
              </div>
              <p className="text-gray-500 text-sm mb-2">Idli Sambhar, Coconut Chutney, Filter Coffee</p>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">2026-01-04</span>
                <span className="font-bold">₹100</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Homemade Products Section */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-lg font-bold">Homemade Products</h2>
            <p className="text-gray-400 text-sm">Discover authentic homemade items</p>
          </div>
          <button className="border border-gray-200 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-50">View All</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProductCard 
            image="https://images.unsplash.com/photo-1596450523098-751079d7f02b?auto=format&fit=crop&w=600&q=80"
            title="Mango Pickle"
            vendor="Grandma's Kitchen"
            price="₹150"
            rating="4.8"
          />
          <ProductCard 
            image="https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
            title="Masala Papad"
            vendor="Home Delights"
            price="₹80"
            rating="4.5"
          />
          <ProductCard 
            image="https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=600&q=80"
            title="Garam Masala"
            vendor="Traditional Treats"
            price="₹120"
            rating="4.9"
          />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mb-4">
        <h2 className="text-lg font-bold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <QuickActionBtn icon={<ShoppingCart size={20} />} label="Browse Services" />
          <QuickActionBtn icon={<Calendar size={20} />} label="Mark Holidays" />
          <QuickActionBtn icon={<Package size={20} />} label="Track Orders" />
          <QuickActionBtn icon={<Star size={20} />} label="Write Review" />
        </div>
      </div>
    </>
  );
};

// --- Helper Components (Internal to this page) ---

const StatsCard = ({ title, value, icon }) => (
  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
    <div>
      <p className="text-gray-500 text-sm mb-1">{title}</p>
      <h3 className="text-2xl font-bold">{value}</h3>
    </div>
    <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center">
      {icon}
    </div>
  </div>
);

const ProductCard = ({ image, title, vendor, price, rating }) => (
  <div className="border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
    <div className="h-48 overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="p-4">
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-gray-500 text-sm mb-3">{vendor}</p>
      <div className="flex justify-between items-center">
        <div>
          <span className="text-orange-600 font-bold text-lg">{price}</span>
          <p className="text-gray-400 text-xs">Delivery in 1-2 days</p>
        </div>
        <div className="flex items-center gap-1 text-sm font-semibold">
          <Star size={16} className="fill-yellow-400 text-yellow-400" />
          {rating}
        </div>
      </div>
    </div>
  </div>
);

const QuickActionBtn = ({ icon, label }) => (
  <button className="bg-white border border-gray-200 p-6 rounded-xl flex flex-col items-center gap-3 hover:border-orange-500 hover:text-orange-600 transition-all shadow-sm">
    <div className="text-gray-900">
      {icon}
    </div>
    <span className="font-semibold text-sm">{label}</span>
  </button>
);

const Calendar = ({ size }) => (
    // Re-importing specific Lucide icons if they were only used in the removed sidebar
    // Note: Lucide icons should be imported from 'lucide-react' at the top.
    // I added 'Calendar' to the QuickActionBtn but forgot to import it in the top import list.
    // I've fixed this in the top import statement now.
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
);

export default CustomerDashboard;