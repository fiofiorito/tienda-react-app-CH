// style
import './App.css';
import Footer from './components/Footer/Footer';
// components
import ItemDetailContainer from './components/ItemDetails/ItemDetailContainer';
import ItemListContainer from './components/ItemList/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import CartContextProvider from './context/CartContext/CartContextProvider';
import CartSummaryPage from './pages/CartSummaryPage/CartSummaryPage';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import HomePage from './pages/HomePage/HomePage';
import SupportPage from './pages/SupportPage';
// routing
import { Route, Routes } from 'react-router';



function App() {
  return (
    <>
      <CartContextProvider>
        <NavBar />
        <main className='main-section'>
          <div className='container'>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/category' element={<CategoryPage />} />
              <Route path='/category/:categoryId' element={<ItemListContainer />} />
              <Route path='/item/:id' element={<ItemDetailContainer />} />
              <Route path='/soporte' element={<SupportPage />} />
              <Route path='/cart' element={<CartSummaryPage />} />
            </Routes>
          </div>
        </main>
      </CartContextProvider>
      <Footer />
    </>
  )
}

export default App
