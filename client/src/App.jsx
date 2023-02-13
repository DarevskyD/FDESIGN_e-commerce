import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { useState } from 'react';
import GlobalStyles from './styles/Global';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/Theme';

import Home from './pages/Home';
import Products from './pages/Products';
import Product from './pages/Product';
import LogInPage from './pages/LogInPage';
import SignInPage from './pages/SignInPage';
import CartPage from './pages/CartPage';

const App = () => {
  const [toggle, setToggle] = useState(false);

  const user = true;

  const toggleClick = () => {
    setToggle(!toggle);
  };

  const handleClick = (e) => {
    if (e.target.classList.value === 'sc-cwSeag dzwSZS' && window.innerWidth <= '800') {
      setToggle(!toggle);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles toggle={toggle} />
        <Router>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Home
                  toggle={toggle}
                  toggleClick={toggleClick}
                  handleClick={(e) => handleClick(e)}
                />
              }
            />
            <Route
              path="/products/:category"
              element={
                <Products
                  toggle={toggle}
                  toggleClick={toggleClick}
                  handleClick={(e) => handleClick(e)}
                />
              }
            />
            <Route
              path="/product/:id"
              element={
                <Product
                  toggle={toggle}
                  toggleClick={toggleClick}
                  handleClick={(e) => handleClick(e)}
                />
              }
            />
            <Route
              path="/login"
              element={
                user ? (
                  <Navigate to="/" replace />
                ) : (
                  <LogInPage
                    toggle={toggle}
                    toggleClick={toggleClick}
                    handleClick={(e) => handleClick(e)}
                  />
                )
              }
            />

            <Route
              path="/register"
              element={
                user ? (
                  <Navigate to="/" replace />
                ) : (
                  <SignInPage
                    toggle={toggle}
                    toggleClick={toggleClick}
                    handleClick={(e) => handleClick(e)}
                  />
                )
              }
            />
            <Route
              path="/cart"
              element={
                <CartPage
                  toggle={toggle}
                  toggleClick={toggleClick}
                  handleClick={(e) => handleClick(e)}
                />
              }
            />
          </Routes>
        </Router>
      </>
    </ThemeProvider>
  );
};

export default App;
