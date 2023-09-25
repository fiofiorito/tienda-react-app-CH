// Components
import Counter from "../Counter/Counter";
// routing
import { Link } from "react-router-dom";

const Items = ({ item }) => {
    const itemDesc = item.description;
    const smItemDesc = itemDesc.substring(0, 120);

    return <div className="items-container">
        <img className="items-img" src={item.image} alt="" />
        <h2 className="items-h2">{item.title}</h2>
        <p className="items-p">{smItemDesc}, <Link to={`/item/${item.id}`} className="items-p-link">Ver más...</Link></p>
        <Counter />
    </div>
}

export default Items;