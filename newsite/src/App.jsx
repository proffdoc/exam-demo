
import './App.css'
import Header from './layouts/Header'
import { Route,  Routes } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Page from './pages/Page'
import Shop from './pages/Shop'
import Promotion from './pages/Promotion'
import Footer from './layouts/Footer'
import NotFound from './pages/NotFound'
import { Cart } from './pages/Cart'

function App() {

  return (<>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/pages' element={<Page/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/promotion' element={<Promotion/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
