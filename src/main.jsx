import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Home from './page/Home.jsx'
import Cart from './page/Cart.jsx'
import OrderHistory from './page/OrderHistory.jsx'

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
  <Routes>
    <Route path='/' element={<App/>}>
      <Route index element={<Home/>}></Route>
      <Route path='giohang' element={<Cart/>}></Route>
      <Route path='lichsu' element={<OrderHistory/>}></Route>
    </Route>
  </Routes>
 </BrowserRouter>
)
