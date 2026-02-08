// components/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, Search, ShoppingCart, Calendar, CreditCard, 
  MessageSquare, Star, Bell, User, LogOut, Package 
} from 'lucide-react';

const Sidebar = ({ isOpen, closeSidebar }) => {
  return (
    <>
      {/* Sidebar Container */}
      <aside 
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-100 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col p-6">
          {/* Logo */}
          <div className="flex items-center gap-2 text-orange-600 mb-8">
            <ShoppingCart size={28} strokeWidth={2.5} />
            <span className="text-2xl font-bold tracking-tight">MealMitra</span>
          </div>

          {/* User Profile */}
          <div className="mb-8">
            <h3 className="font-bold text-lg">suraj</h3>
            <p className="text-gray-400 text-sm">you@example.com</p>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 space-y-1">
            <SidebarItem to="/dashboard" icon={<Home size={20} />} label="Home" />
            <SidebarItem to="/dashboard/browse" icon={<Search size={20} />} label="Browse Tiffins" />
            <SidebarItem to="/dashboard/subscriptions" icon={<ShoppingCart size={20} />} label="Subscriptions" />
            <SidebarItem to="/dashboard/orders" icon={<Package size={20} />} label="Orders" />
            <SidebarItem to="/dashboard/calendar" icon={<Calendar size={20} />} label="Calendar" />
            <SidebarItem to="/dashboard/payments" icon={<CreditCard size={20} />} label="Payments" />
            <SidebarItem to="/dashboard/messages" icon={<MessageSquare size={20} />} label="Messages" />
            <SidebarItem to="/dashboard/reviews" icon={<Star size={20} />} label="Reviews" />
            <SidebarItem to="/dashboard/notifications" icon={<Bell size={20} />} label="Notifications" />
            <SidebarItem to="/dashboard/profile" icon={<User size={20} />} label="Profile" />
          </nav>

          {/* Logout */}
          <button className="flex items-center gap-3 text-gray-600 hover:text-black font-medium mt-auto px-4 py-3 rounded-lg transition-colors">
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeSidebar}
        ></div>
      )}
    </>
  );
};

// Helper Component for Links
const SidebarItem = ({ to, icon, label }) => (
  <NavLink
    to={to}
    end={to === "/dashboard"} // Prevents "Home" from always being active
    className={({ isActive }) =>
      `w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${
        isActive
          ? "bg-orange-50 text-orange-600"
          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
      }`
    }
  >
    {icon}
    <span>{label}</span>
  </NavLink>
);

export default Sidebar;