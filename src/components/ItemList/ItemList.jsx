
const ItemList = ({ product }) => {
    return <div className="item-list-container">
        <h2>{product.name}</h2>
        <img src={product.img} alt="" />
        <p>{product.stock}</p>
        <p>$ {product.price}</p>
    </div>
}

export default ItemList;

