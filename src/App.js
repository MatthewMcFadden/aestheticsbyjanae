import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (    
    <div className="App">
      <main>
        <Navbar/>
          <Switch>
            <Route path="/" component={Home} exact />
            {/* <Route path="/schedule" component={Schedule} />
            <Route path="/contact" component={Contact} /> */}
          </Switch>
      </main>
    </div>    
  );
}

export default App;
