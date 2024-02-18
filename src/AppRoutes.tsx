import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home'
import { Provider } from 'react-redux';
import { store } from './store/store';
import RegisterForm from './pages/register/register';
import LoginForm from './pages/login/login';
import BookList from './pages/bookList/BookList';
import Cart from './pages/cart/Cart';

const AppRoutes: React.FC = () => {
  return (
    <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/cart" element={<Cart />} />

      </Routes>
    </Router>
    </Provider>
 
  );
};

export default AppRoutes;