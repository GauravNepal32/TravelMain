import React from "react";
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Navbar from './Components/Navbar/Navbar'
import Footer from "./Components/Footer/Footer";
import Package from "./Pages/Package/Package";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import SearchResult from "./Pages/SearchResult/SearchResult";
import UserDashboard from "./Pages/UserDashboard/UserDashboard";
import { AuthProvider } from "./Components/Auth/auth";
import { ProtectedRoute } from "./Components/Auth/ProtectedRoute";
import Dashboard from "./Pages/UserDashboard/Dashboard/Dashboard";
import ChangePassword from "./Pages/UserDashboard/ChangePassword/ChangePassword";
import Wishlist from "./Pages/UserDashboard/Wishlist/Wishlist";
import Booking from "./Pages/UserDashboard/Booking/Booking";

function App() {
  return (
    <AuthProvider>
    <div className="">
      <Router>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
            <Route path='/package/:id' element={<Package />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/searchResult' element={<SearchResult />} />
            <Route path='/user' element={
              <ProtectedRoute>
                <UserDashboard />
              </ProtectedRoute>
            } >
              <Route index element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } />
              <Route path='dashboard' element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } />
              <Route path='edit-password' element={
                <ProtectedRoute>
                  <ChangePassword />
                </ProtectedRoute>
              } />
              <Route path='wishlist' element={
                <ProtectedRoute>
                  <Wishlist />
                </ProtectedRoute>
              } />
              <Route path='booking' element={
                <ProtectedRoute>
                  <Booking />
                </ProtectedRoute>
              } />

            </Route>

        </Routes>
        <Footer />
      </Router>
    </div>
    </AuthProvider>
  );
}

export default App;
