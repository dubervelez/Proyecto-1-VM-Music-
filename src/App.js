import './styles/App.scss';
import Login from "./components/Login";
import Index from './pages/Index';
import Admin from './pages/Admin/IndexAdm';


import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Proyecto-1-VM-Music-/login' element={ <Login/> } />
        <Route path='/Proyecto-1-VM-Music-/admin' element={ <Index/> } />
        <Route path='/Proyecto-1-VM-Music-/' element={ <Admin/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
