import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// context
import { SearchProvider } from './utils/context/SearchContext';

// components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// pages
import Home from './pages/Home';
import Product from './pages/Product';
import Favorites from './pages/Favorites';
import Cart from './pages/Cart';
import Account from './pages/Account';

const App = () => {
  return (
    <Router>
      <SearchProvider>
        <Header />
      </SearchProvider>
      <Route exact path="/" component={Home} />
      <Route path="/product/:id" component={Product} />
      <Route path="/favorites" component={Favorites} />
      <Route path="/cart/:id?" component={Cart} />
      <Route path="/account" component={Account} />
      <Footer />
    </Router>
  );
}

export default App;