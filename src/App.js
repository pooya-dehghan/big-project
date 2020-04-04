import React from 'react';
import Layout from './components/Layout/Layout'
import BurgerBuilder from './container/BurgerBuilder/BurgerBuilder'
import {BrowserRouter} from 'react-router-dom'
import Checkout from './components/Checkout/Checkout'
import { Route,Switch } from 'react-router-dom'
import Orders from './components/Checkout/Orders/Orders'
function App() {
  return (
    <BrowserRouter>
        <Layout>
          <Switch>
            <Route component={BurgerBuilder} path={'/'} exact />
            <Route component={Checkout} path={'/checkout/'}  />
            <Route component={Orders} path={'/Orders/'} exact />
        </Switch>
        </Layout>
    </BrowserRouter>
    
  );
}

export default App;
