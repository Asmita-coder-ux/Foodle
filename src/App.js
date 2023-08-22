
import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';
import { CartProvider } from './components/ContextReducer';
import MyOrder from './screens/MyOrder';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
function App() {
  return (
    <>
    <CartProvider>
       <BrowserRouter>
        <div>
          <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route exact path='/login' element={<Login/>}></Route>
            <Route exact path='/createuser' element={<Signup/>}></Route>
            <Route exact path='/myorder' element={<MyOrder/>}></Route>
          </Routes>
        </div>
       </BrowserRouter>
       </CartProvider>
    </>

  
  );
}

export default App;
