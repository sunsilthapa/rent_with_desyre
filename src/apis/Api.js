import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

// configuration for axios
const config = {
  headers: {
    authorization: `Bearer ${localStorage.getItem("token")}`,
  },
};

//todo: user api endpoints
// Creating test api
export const testApi = () => Api.get("/test");
// http://localhost:5000//test

//  Creating register api
export const registerApi = (data) => Api.post("/api/user/create", data);

// Create login api
export const loginApi = (data) => Api.post("/api/user/login", data);

//*Change password api
export const changePasswordApi = (data) =>
  Api.post("/api/user/change_password", data);

//* forgot password api
export const forgotPasswordApi = (data) =>
  Api.post("/api/user/forgot_password", data);

//* update user profile
export const updateUserApi = (userId, formData) =>
  Api.put(`/api/user/update_profile/${userId}`, formData);

export const getAllUsersApi = () => Api.get("/api/user/get_all_users");


//todo: cloth api endpoints
// Upload cloth
export const uploadClothApi = (formData) =>
  Api.post('/api/clothes', formData, config);

// Get all clothes
export const getAllClothesApi = () => Api.get('/api/clothes');

// Get specific cloth by ID
export const getClothApi = (clothId) => Api.get(`/api/clothes/${clothId}`);

// Update cloth
export const updateClothApi = (clothId, formData) =>
  Api.put(`/api/clothes/${clothId}`, formData, config);

// Delete cloth
export const deleteClothApi = (clothId) =>
  Api.delete(`/api/clothes/${clothId}`, config);

//todo: rental  api endpoints
// Create rental
export const createRentalApi = (data) =>
  Api.post('/api/rentals', data, config);

// Get all rentals
export const getAllRentalsApi = () => Api.get('/api/rentals', config);

// Get specific rental by ID
export const getRentalApi = (rentalId) =>
  Api.get(`/api/rentals/${rentalId}`, config);

// Update rental status
export const updateRentalApi = (rentalId, data) =>
  Api.put(`/api/rentals/${rentalId}`, data, config);

// Delete rental
export const deleteRentalApi = (rentalId) =>
  Api.delete(`/api/rentals/${rentalId}`, config);

//todo: review api endpoints
// Submit review
export const submitReviewApi = (data) =>
  Api.post('/api/reviews', data, config);

// Get all reviews
export const getAllReviewsApi = () => Api.get('/api/reviews');

// Get specific review by ID
export const getReviewApi = (reviewId) =>
  Api.get(`/api/reviews/${reviewId}`);

// Update review
export const updateReviewApi = (reviewId, data) =>
  Api.put(`/api/reviews/${reviewId}`, data, config);

// Delete review
export const deleteReviewApi = (reviewId) =>
  Api.delete(`/api/reviews/${reviewId}`, config);

//todo: favorite api endpoints
// Add to favorites
export const addToFavoritesApi = (clothId) =>
  Api.post('/api/favorites', { clothId }, config);

// Get user favorites
export const getUserFavoritesApi = () => Api.get('/api/favorites', config);

// Remove from favorites
export const removeFromFavoritesApi = (clothId) =>
  Api.delete(`/api/favorites/${clothId}`, config);

//todo: cart api endpoints
// Add to cart
export const addToCartApi = (data) => Api.post('/api/cart', data, config);

// Get user cart
export const getUserCartApi = () => Api.get('/api/cart', config);

// Remove from cart
export const removeFromCartApi = (clothId) =>
  Api.delete(`/api/cart/${clothId}`, config);

// Clear cart
export const clearCartApi = () => Api.delete('/api/cart', config);

//todo: shipping api endpoints
// Add or update shipping details
export const upsertShippingDetailsApi = (data) =>
  Api.post('/api/shipping', data, config);

// Get user shipping details
export const getShippingDetailsApi = () =>
  Api.get('/api/shipping', config);

//todo: payment api endpoints
// Process payment
export const processPaymentApi = (data) =>
  Api.post('/api/payment/process', data, config);

