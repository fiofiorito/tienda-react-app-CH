// style
import './App.css';
import Footer from './components/Footer/Footer';
// components
import NavBar from './components/NavBar/NavBar';
import Routing from './components/Routing';
import CartContextProvider from './context/CartContext/CartContextProvider';

function App() {
  return (
    <>
      <CartContextProvider>
        <NavBar />
        <main className='main-section'>
          <div className='container'>
            <Routing />
          </div>
        </main>
      </CartContextProvider>
      <Footer />
    </>
  )
}

export default App


/* TO DO LIST:
- user info form for "payment"
- updateDB para el stock del producto una vez q se hace una compra
- conseguir hacer la animacion de loading dentro de ItemListContainer de nuevo

*/