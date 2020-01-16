import React from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './NavBar';
import Home from './Home';
import Cart from './Cart';
import SignInModal from './SignInModal';
import ProductDisplay from './ProductDisplay';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/cart">
            <Cart/>
          </Route>
          <Route  path="/products/:id" component={ProductDisplay}></Route>
          <Route  path="/" component={Home}></Route>
        </Switch>
        <SignInModal/>
      </div>
    </Router>
  );
}

export default App;
