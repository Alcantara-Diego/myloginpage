import './styles/style.css';
import Home from './components/Home';
import Login from './components/Login';
import { Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="myContainer">
      

      
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/#/login" element={<Login/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
