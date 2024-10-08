import './App.css';
import Contacto from './components/Contacto/Contacto.jsx'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout.jsx';
import Error404 from './components/Error404/Error404.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import CartContextProvider from './Context/CartContext.jsx';
import Cart from "./components/Cart/Cart.jsx"


function App() {

  return (
    <CartContextProvider> 
      <BrowserRouter>
          <div className="navbar-imagen">
            <img src="https://binahdeco.com.ar/cdn/shop/files/binah-logo.svg?v=1695153268&width=140" alt="" />
          </div>
        <Layout>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/Categorias/:categoriasDeId" element={<ItemListContainer />}/>
            <Route path="/Producto/:id" element={<ItemDetailContainer />}/>
            <Route path="/Contacto" element={<Contacto />}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="*" element={<Error404 />}/>
          </Routes>
        </Layout>
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App;
