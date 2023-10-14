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
- setear environment variables
-hacer verificacion del formulario previo a checkout
*/