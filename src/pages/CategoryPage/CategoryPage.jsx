// components & styles
import ItemListContainer from '../../components/ItemList/ItemListContainer';
import './CategoryPage.css';
// routing
import { Link } from "react-router-dom";

const CategoryPage = () => {
    return <div className="category-div">
        <div className='category-div-nav'>
            <ul>
                <li className="nav-bar-item">
                    <Link className="nav-bar-link" to="/category/men's clothing">Hombres</Link>
                </li>
                <li className="nav-bar-item">
                    <Link className="nav-bar-link" to="/category/women's clothing">Mujeres</Link>
                </li>
                <li className="nav-bar-item">
                    <Link className="nav-bar-link" to="/category/jewelery">Joyitas</Link>
                </li>
                <li className="nav-bar-item">
                    <Link className="nav-bar-link" to="/category/electronics">Electrónicos</Link>
                </li>
            </ul>
        </div>
        <ItemListContainer />
    </div>
}

export default CategoryPage;