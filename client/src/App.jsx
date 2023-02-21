import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import GlobalStyles from './styles/Global';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/Theme';

import Home from './pages/Home';
import Products from './pages/Products';
import Product from './pages/Product';
import LogInPage from './pages/LogInPage';
import SignInPage from './pages/SignInPage';
import CartPage from './pages/CartPage';
import CategoriesPage from './pages/CategoriesPage';

const App = () => {
  const toggle = useSelector((state) => state.toggle.active);
  const user = false;

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles toggle={toggle} />
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/products/:category" element={<Products />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/login" element={user ? <Navigate to="/" replace /> : <LogInPage />} />

            <Route path="/register" element={user ? <Navigate to="/" replace /> : <SignInPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </Router>
      </>
    </ThemeProvider>
  );
};

export default App;
