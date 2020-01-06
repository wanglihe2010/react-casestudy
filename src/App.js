import React from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './NavBar';
import Home from './Home';
import Cart from './Cart';
import SignIn from './SignIn';
import ProductDisplay from './ProductDisplay';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/cart">
            <Cart/>
          </Route>
          <Route exact path="/signin">
            <SignIn/>
          </Route>
          <Route exact path="/products/:id">
            <ProductDisplay/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
