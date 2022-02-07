import './styles/style.css';
import Home from './components/Home';
import Login from './components/Login';
import { Routes, Route} from 'react-router-dom';
import back from './back/index'

function App() {

  back();
  
  return (
    <div className="myContainer">
      

      
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
     
    </div>
  )
}

export default App;
