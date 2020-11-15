import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import LandingPage from './pages/LandigPage'
import ErrorPage from './pages/ErrorPage'


const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path='/error' component={ErrorPage}/>
        <Redirect to='/error'/>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
