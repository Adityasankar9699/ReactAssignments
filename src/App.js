
import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Base from './defect_tracker/Base';
import AddDefect from './defect_tracker/AddDefect';
import ViewDefects from './defect_tracker/ViewDefects';
import Login from './defect_tracker/Login';
import AuthenticationService from './service/AuthenticationService';
import Register from './defect_tracker/Register';


function App() {
  const login=(username)=>{
    AuthenticationService.login(username)
  }

  return (
    <Base>
    <BrowserRouter>
     <Routes>
      <Route path="login" element={<Login login={login}/>}></Route>
      <Route path="register" element={<Register/>}></Route>
      <Route path="addefect" element={<AddDefect/>}></Route>
      <Route path="viewdefects" element={<ViewDefects/>}></Route>
      
     </Routes>
     </BrowserRouter>
    </Base>
  );
}

export default App;
