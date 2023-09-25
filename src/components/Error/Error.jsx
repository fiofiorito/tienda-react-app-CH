import './Error.css'
import { BiSolidErrorCircle } from 'react-icons/bi';

const Error = () => {
    return <div className="error-div">
        <div className="error-svg">
            <BiSolidErrorCircle />
        </div>
        <p className="error-p">¡Ups, algo salio mal!</p>
    </div>
}

export default Error;