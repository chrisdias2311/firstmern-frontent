import './App.css';
import Nav from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './Components/Signup';
import PrivateComponent from './Components/PrivateComponent';
import Login from './Components/Login';
import AddProduct from './Components/AddProduct';
import ProductList from './Components/Products';
import UpdateProduct from './Components/UpdateProduct';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route element={<PrivateComponent/>}>
            <Route path='/' element={<ProductList></ProductList>}></Route>
            <Route path='/addproduct' element={<AddProduct></AddProduct>}></Route>
            <Route path='/updateproduct/:id' element={<UpdateProduct/>}></Route>
            <Route path='/logout' element={<h1>Logout component</h1>}></Route>
          </Route>

          <Route path='/signup' element={<Signup></Signup>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
