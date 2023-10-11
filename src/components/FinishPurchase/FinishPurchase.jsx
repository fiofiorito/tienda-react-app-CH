// routing
import { Link } from "react-router-dom"
// styles
import './FinishPurchase.css'

const FinishPurchase = () => {
    return <div className="finish-purchase-div">
        <button className="finish-purchase-btn"><Link to="/cart" >Terminar compra</Link></button>
        <Link to="/"><p className="finish-purchase-p">Seguir comprando</p></Link>
    </div>
}

export default FinishPurchase;