import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// pages
import Home from './pages/Home';
import Product from './pages/Product';
import Favorites from './pages/Favorites';
import Cart from './pages/Cart';
import Account from './pages/Account';
import Login from './pages/Login';
import Register from './pages/Register';
import Search from './pages/Search';
import Shipping from './pages/Shipping';
import Payment from './pages/Payment';
import PlaceOrder from './pages/PlaceOrder';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/product/:id" component={Product} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/cart/:id?" component={Cart} />
        <Route path="/account" component={Account} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/search" component={Search} />
        <Route path="/shipping" component={Shipping} />
        <Route path="/payment" component={Payment} />
        <Route path="/place-order" component={PlaceOrder} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;