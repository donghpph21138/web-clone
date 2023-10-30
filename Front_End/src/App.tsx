import HomePage from './components/HomePage'
import LoginPage from './components/LoginPage';
import BlogPage from './components/BlogPage';
import Contactpage from './components/ContactPage';
import DetailPage from './components/DetailPage';
import CategoryPage from './components/CategoryPage';
import Websitelayout from "./pages/Websitelayout";
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path='/products' element={<DetailPage />} />  
      <Route path="/blog" element={<BlogPage/>} />
      <Route path="/contact" element={<Contactpage/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path='/category' element={<CategoryPage />} />  
        <Route path='/' element={<Websitelayout/>}>
            <Route index element={<HomePage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
