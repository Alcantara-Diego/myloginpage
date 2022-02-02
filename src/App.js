import './styles/style.css';
import Home from './components/Home';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="myContainer">
      

      <Router>
        <Routes>
          <Route path="/" element={ <Home/>}></Route>


          <Route path="/login" element={<Login/>}></Route>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
