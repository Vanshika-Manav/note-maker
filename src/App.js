//import logo from './logo.svg';
import './App.css';
import{BrowserRouter,Routes,Route} from "react-router-dom";
import Create from './components/Create';
import Read from "./components/Read";

function App() {
  return (

  <div className='container'>
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Create/>}></Route>
      <Route exact path='/read' element={<Read/>}></Route>
    </Routes>

  </BrowserRouter>
 
  </div>
   
    
  );
}

export default App;
