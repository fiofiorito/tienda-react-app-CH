// style
import './App.css';
// components
import ItemDetailContainer from './components/ItemDetails/ItemDetailContainer';
import ItemListContainer from './components/ItemList/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
// routing
import { Route, Routes } from 'react-router';
import { Link, NavLink } from 'react-router-dom';


function App() {
  return (
    <>
      <NavBar />
      <main className='main-section'>
        <div className='container'>
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:id' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
          </Routes>
        </div>

        <footer>Footer de prueba</footer>
      </main>

    </>
  )
}

export default App
