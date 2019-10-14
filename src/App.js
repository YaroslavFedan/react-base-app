import React from 'react';
import { Switch, Route } from "react-router-dom";


import { Main, Auth, Home, Error404 } from "./pages";

class App extends React.Component{
  
  render() {
    
    return (
      <div className="wrapper"> 
      
       <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path={['/sign-in','/sign-up']} component={Auth} />
          <Route exact path='/im' component={Home} />
          <Route path='*' exact={true} component={Error404} />
        </Switch>
      </div> 
    );
  }

}


export default App;
