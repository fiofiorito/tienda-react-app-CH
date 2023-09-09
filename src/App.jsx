import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <main className='main-section'>
        <div className='container grid'>
          <ItemListContainer imgSrc="assets/kettlebelts.jpg" />
          <ItemListContainer imgSrc="assets/kettlebelts.jpg" />
          <ItemListContainer imgSrc="assets/kettlebelts.jpg" />
          <ItemListContainer imgSrc="./assets/kettlebelts.jpg" />
          <ItemListContainer imgSrc="./assets/kettlebelts.jpg" />
          <ItemListContainer imgSrc="./assets/kettlebelts.jpg" />
        </div>

      </main>

    </>
  )
}

export default App
