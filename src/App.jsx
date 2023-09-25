// style
import './App.css';
import Footer from './components/Footer/Footer';
// components
import ItemDetailContainer from './components/ItemDetails/ItemDetailContainer';
import ItemListContainer from './components/ItemList/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import CartSummaryPage from './pages/CartSummaryPage';
import SupportPage from './pages/SupportPage';
// routing
import { Route, Routes } from 'react-router';



function App() {
  return (
    <>
      <NavBar />
      <main className='main-section'>
        <div className='container'>
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/soporte' element={<SupportPage />} />
            <Route path='/carrito' element={<CartSummaryPage />} />
          </Routes>
        </div>
      </main>
      <Footer />

    </>
  )
}

export default App
