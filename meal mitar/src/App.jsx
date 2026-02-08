import React from 'react'
import LandingPage from './Pages/LandingPage.jsx'
import LoginPage from './Pages/LoginPage.jsx'
import Sign_up from './Pages/Sign_up.jsx'
import CustomerForm from './Pages/CoustomerForm.jsx'
import VendorForm from './Pages/VendorForm.jsx'
import CustomerDashboard from './Pages/Customer_Dashboard_Pages/CustomerDashboard.jsx'
import BrowseTiffinsPage from './Pages/Customer_Dashboard_Pages/BrowseTiffinsPage.jsx'
import SubscriptionsPage from './Pages/Customer_Dashboard_Pages/SubscriptionsPage.jsx'
import OrdersPage from './Pages/Customer_Dashboard_Pages/Orderspage.jsx'
import DashboardLayout from './Layouts/DashboardLayout.jsx';
import HolidayCalendarPage from './Pages/Customer_Dashboard_Pages/HolidayCalendarPage.jsx'
import PaymentsPage from './Pages/Customer_Dashboard_Pages/PaymentsPage.jsx'
import MessagesPage from './Pages/Customer_Dashboard_Pages/MessagesPage.jsx'
import ReviewsPage from './Pages/Customer_Dashboard_Pages/ReviewsPage.jsx'
import NotificationsPage from './Pages/Customer_Dashboard_Pages/NotificationsPage.jsx'
import ProfilePage from './Pages/Customer_Dashboard_Pages/ProfilePage.jsx'
import { Route , Routes } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign_up" element={<Sign_up />} />
        <Route path="/customer_form" element={<CustomerForm />} />
        <Route path="/vendor_form" element={<VendorForm />} />
        <Route path="/customer_dashboard" element={<CustomerDashboard />} />

        <Route path="/dashboard" element={<DashboardLayout />}>
          {/* Default path: /dashboard -> renders CustomerDashboard */}
          <Route index element={<CustomerDashboard />} />
          <Route path="browse" element={<BrowseTiffinsPage />} />
          <Route path="subscriptions" element={<SubscriptionsPage />} />
          <Route path="orders" element={<OrdersPage />} />
          <Route path="calendar" element={<HolidayCalendarPage />} />
          <Route path="payments" element={<PaymentsPage />} />
          <Route path="messages" element={<MessagesPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
          <Route path="notifications" element={<NotificationsPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
