import './index.css';
import React from 'react';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Signin from './components/Signin'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<Signin />} />
      </Routes>      
    </Router>
  );
}

export default App;
