import React from "react";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from "react-router-dom";
import './App.css';
import Home from './components/Home';
import About from "./components/About";
//import Contact from "./components/Contact";
//import Resume from "./components/Resume";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <BrowserRouter>
       <Switch>
       <Home />
       <Route path="./components/Home" component={Home} />
       <Route path="./components/About" component={About} />
       </Switch>
       </BrowserRouter>
       
      </header>
    </div>
  );
}

export default App;
