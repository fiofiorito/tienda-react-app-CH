// components & styles
import ItemListContainer from '../../components/ItemList/ItemListContainer';
import './HomePage.css';

const HomePage = () => {
    const handleScroll = () => {
        const element = document.getElementById("products");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }
    return <div>
        <div className='hero-div-parent slide-from-bottom'>
            <div className='hero-div'>
                <div>
                    <h1 className='hero-h1'>Los mejores artículos de librería en un solo lugar</h1>
                    <div className='hero-p-div'>
                        <p className='hero-p'>Explora una selección excepcional de productos de alta
                            calidad diseñados para inspirar la creatividad y mejorar la eficiencia
                            en tu lugar de trabajo.
                        </p>
                    </div>
                    <div className='hero-div-btn'>
                        <button className='hero-btn' onClick={handleScroll}>Conocé los productos</button>
                    </div>
                </div>
            </div>
            <div className='hero-div-img'>
                <img className='hero-img' src='https://res.cloudinary.com/drhwvqo2m/image/upload/v1697045748/ecommerce/p454gs31p12bwh7iseu7.png' alt='libreria' />
            </div>
        </div>
        <div id='products'>
            <ItemListContainer />
        </div>
    </div>
}

export default HomePage;