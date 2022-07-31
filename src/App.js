/* eslint-disable */
import Featured from './components/Featured'
import Hero from './components/Hero'
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Coinlist from './components/Coinlist';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
    <Router forceRefresh = {true} >

    <Route path = "/" exact>
    <Navbar />
      <Hero />

      <Featured />
      <Signup />
    </Route>
    <Route path = "/coins">
      <Navbar/>
      <Coinlist/>
      </Route>
    </Router>
    

  );
}

export default App;
