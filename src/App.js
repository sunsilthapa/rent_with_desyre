import React from "react";
import {  Routes, Route } from "react-router-dom";
import HomePage from '../src/pages/HomePage';
import HowItWorkPage from "./pages/HowItWorks";
import SellAnAttirePage from "./pages/SellAnAttire";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import OccassionPage from "./pages/OccassionPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import DeliveryPage from "./pages/DeliveryPage";
import PaymentPage from "./pages/PaymentPage";
import FavoritesPage from "./pages/FavoritePage";
import FAQPage from "./pages/FAQPage";
import ProtectedRoute from "./protected_routes/UserRoutes"; // Ensure the correct path
import { AuthProvider } from "./context/authContext"; // Ensure the correct path

function App() {
  return (
    <AuthProvider>
    
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/how_it_works" element={<HowItWorkPage />} />
          <Route path="/sell_an_attire" element={<SellAnAttirePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/products" element={<OccassionPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/product_detail" element={<ProductDetailPage />} />
          <Route path="/faq" element={<FAQPage />} />
          
            {/* Protected Routes */}
            <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/favorite" element={<FavoritesPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/delivery" element={<DeliveryPage />} />
            <Route path="/payment" element={<PaymentPage />} />
          </Route>
        </Routes>
    
    </AuthProvider>
  );
}

export default App;
