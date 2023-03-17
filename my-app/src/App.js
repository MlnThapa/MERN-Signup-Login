import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
