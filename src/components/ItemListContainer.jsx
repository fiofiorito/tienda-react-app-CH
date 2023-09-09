import "./ItemListContainer.css";

function ItemListContainer({ imgSrc }) {
    return <div className="item-list-container">
        <img src={imgSrc} />
        <div className="item-list-container-text-div">
            <h1 className="item-list-container-h1">Texto</h1>
            <p className="item-list-container-p">lorem lorem lorem lorem lorem</p>
        </div>

    </div>
}

export default ItemListContainer;