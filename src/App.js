import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from '../src/pages/HomePage'
import HowItWorkPage from "./pages/HowItWorks";
import SellAnAttirePage from "./pages/SellAnAttire";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";

function App() {

  return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/how_it_works" element={<HowItWorkPage/>} />
          <Route path="/sell_an_attire" element={<SellAnAttirePage/>} />
          <Route path="/signup" element={<SignUpPage/>} />
          <Route path="/login" element={<LoginPage />} />
          {/* <Route path="/product" element={<Collections />} />
          <Route path="/product/:id" element={<ProductDetail />} />
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


