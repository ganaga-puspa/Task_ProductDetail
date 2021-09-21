import React,{useState}  from 'react';
import AddProduct from './Components/AddProduct';
import ProductDetail from './Components/ProductDetail'
import {Product} from './Components/product'
import Nav from './Components/Nav'
import {BrowserRouter , Route ,Routes, useNavigate} from 'react-router-dom';
import Login from './Components/Login';
import Admin from './Components/Admin';


function App() {

  const [auth,setAuth] =useState(false);
  
  const  authHandler = () =>{
    setAuth({ auth : !auth})
    test('/')
  };

    return (
      
      <>
       <div className='container'>
       
         <BrowserRouter>
         < Nav />
        <Routes>

          {/* {
            !Loggedin ? () :  ( )
          } */}


         <Route path='/' element={ <Product/>} />

          {/* <Route path='/addProduct' element={() => <AddProduct authHandler={false} />} /> */}

          <Route path='/addProduct'  element={< AddProduct />} />
            
            {/* {auth === false ?  <OhNo /> : <AddProduct/>}           */}
          {/* </Route> */}

          {/* <Route path='/addProduct' element={ <AddProduct/>} /> */}
           <Route path='/:id/' element={ <ProductDetail/>} />
           <Route  path="/:id/productDetail" element={ <ProductDetail/>}  />
           <Route path='/login' element={ <Login/>} />
           <Route path='/admin' element={ <Admin/>} />
  
          {/* <Route path='/admin' element={() => <Admin handleLoginSubmit={false} />} /> */}
         </Routes>
       
        
       </BrowserRouter>
        
       </div>
      </>
    )
  }
  export default App
  


  



