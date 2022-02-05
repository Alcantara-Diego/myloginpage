import './styles/style.css';
import Home from './components/Home';
import Login from './components/Login';
import { Route} from 'react-router-dom';

function App() {
  return (
    <div className="myContainer">
      

      
      <Route exact path="/" element={ <Home/>}/>

      <Route path="/login" element={<Login/>}/>
     
    </div>
  );
}

export default App;
