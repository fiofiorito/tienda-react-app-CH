import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <main className='main-section'>
        <div className='container grid'>
          <ItemListContainer greeting="Bienvenidos!" />
        </div>

      </main>

    </>
  )
}

export default App
