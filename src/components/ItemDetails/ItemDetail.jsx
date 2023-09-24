import Counter from '../Counter/Counter';
import './ItemDetailContainer.css';

const ItemDetail = ({ item }) => {
    return <>
        <div className='detail-div-child'>
            <img className="detail-img" src={item.image} />
        </div>
        <div className='detail-div-child span'>
            <h2 className="detail-h2">{item.title}</h2>
            <p className="detail-p-desc">{item.description}</p>
            <div className="detail-p-div">
                <div>
                    <p className="detail-p">{item.category}</p>
                    <p className="detail-p">Rate: {item.rating.rate} ⭐</p>
                </div>
            </div>
            <div className='detail-price-counter'>
                <h3 className="detail-h3">U${item.price}</h3>
                <Counter />
            </div>
        </div>
    </>
}

export default ItemDetail;