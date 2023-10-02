const AddToCart = ({ count, onAdd }) => {

    return <div className="add-to-cart-div">
        <button onClick={() => onAdd(count)} className="add-to-cart-btn">Agregar al carrito</button>
    </div>

}

export default AddToCart;