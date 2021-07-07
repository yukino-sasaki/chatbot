import React from 'react';
 import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

export  const OpenEmailForm=()=>{
    return(
         <Router>
      <Switch>
        <Route path='/about'>
          <About />
        </Route>
      </Switch>
      </Router> 
    )
}