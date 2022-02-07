import './styles/style.css';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import { Routes, Route} from 'react-router-dom';
import back from './back/index'

function App() {

  back();
  
  return (
    <div className="myContainer">
      

      
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
     
    </div>
  )
}

export default App;
