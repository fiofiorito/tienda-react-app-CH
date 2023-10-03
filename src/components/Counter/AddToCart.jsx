const AddToCart = ({ count, onAdd, handleAdd }) => {

    return <div className="add-to-cart-div">
        <button onClick={() => {
            onAdd(count);
            handleAdd(count);
        }} className="add-to-cart-btn">Agregar al carrito</button>
    </div>

}

export default AddToCart;