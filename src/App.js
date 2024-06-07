import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from '../src/pages/HomePage'

function App() {

  return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          {/* <Route path="/product" element={<Collections />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/changePassword" element={<ChangePassword />} />
          <Route path="/forgot_password" element={<SendPasswordReset />} />
          <Route element={<UserRoutes/>}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/myOrders" element={<MyOrders/>} /> */}
          {/* </Route> */}

      
          
       
        </Routes>
      </Router>
    
  );
}

export default App;


