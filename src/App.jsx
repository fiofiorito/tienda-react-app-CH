import './App.css';
import ItemListContainer from './components/ItemList/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <main className='main-section'>
        <div className='container grid'>
          <ItemListContainer />
        </div>

      </main>

    </>
  )
}

export default App
