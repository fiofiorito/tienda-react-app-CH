// routing
import { Link } from "react-router-dom";

const Items = ({ item }) => {
    const itemDesc = item.description;
    const smItemDesc = itemDesc.substring(0, 70);

    return <div className="items-container">
        <img className="items-img" src={item.image} alt="" />
        <h2 className="items-h2"><Link to={`/item/${item.id}`}>{item.title}</Link></h2>
        <h3 className="items-h3"><Link to={`/item/${item.id}`}><span>U$D</span> {item.price}</Link></h3>
        <p className="items-p">{smItemDesc}, <Link to={`/item/${item.id}`} className="items-p-link">Ver más...</Link></p>
    </div>
}

export default Items;