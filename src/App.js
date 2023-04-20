
import { BrowserRouter,Routes, Route } from 'react-router-dom';

import SLayout from "./components/Home";
import Flight from "./components/Flight";
import Info from "./components/Info";
import Invoice from "./components/Invoice";
import Login from './components/Login';
import SignUp from './components/SignUp';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SLayout/>}></Route>
        <Route path='/flight' element={<Flight/>}></Route>
        <Route path='/info' element={<Info/>}></Route>
        <Route path='/invoice' element={<Invoice/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
