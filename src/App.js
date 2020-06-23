import React,{component} from 'react';
import './asset/App.css';
import About from './pages/about';
import Shop from './pages/shop';
import Nav from './pages/nav';
import Home from './pages/home';
import FAQ from './pages/faq';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" component={Shop} />
          <Route path="/faq" component={FAQ} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
