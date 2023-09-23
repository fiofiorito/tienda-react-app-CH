import Counter from "../Counter/Counter";

const Items = ({ item }) => {
    const itemDesc = item.description;
    const smItemDesc = itemDesc.substring(0, 120);

    return <div className="items-container">
        <img className="items-img" src={item.image} alt="" />
        <h2 className="items-h2">{item.title}</h2>
        <p className="items-p">{smItemDesc}, <a href="#" className="items-p-link">Ver más...</a></p>
        <Counter />
        {/* AGREGAR EL BOTON DE AGREGAR AL CARRITO */}
    </div>
}

export default Items;