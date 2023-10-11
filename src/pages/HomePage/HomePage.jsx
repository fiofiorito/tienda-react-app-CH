// components & styles
import ItemListContainer from '../../components/ItemList/ItemListContainer';
import './HomePage.css';

const HomePage = () => {
    return <div>
        <div className='hero-div'>
            <div>
                <h1 className='hero-h1'>ACA VA EL HERO</h1>
                <p className='hero-p'>⬇ Desliza y mira los productos ⬇</p>
            </div>
            <img src='https://i.pinimg.com/originals/af/e4/86/afe486733b61becbb7e515873ff19544.jpg' alt='aesthetic school supplies' className='hero-img' />
        </div>
        <ItemListContainer />
    </div>
}

export default HomePage;