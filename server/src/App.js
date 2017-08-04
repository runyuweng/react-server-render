import React from 'react';
import { Route, Switch } from 'react-router';
import Index from './component/Index';
import Home from './component/Home';
import Page1 from './component/Page1';
import Page2 from './component/Page2';
import Error from './component/Error';

const App = () => (
  <Switch>
    <Route path='/' exact component={Index}/>
    <Home>
      <Route path='/page1' component={Page1}/>
      <Route path='/page2' component={Page2}/>
    </Home>
    <Route component={Error}/>
  </Switch>
)

export default App;