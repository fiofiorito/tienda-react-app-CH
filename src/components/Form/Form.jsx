// hooks
import { useState } from 'react';
// styles
import './Form.css';

const Form = ({ checkout, name, email, setBuyer, buyer }) => {
    const [error, setError] = useState({
        name: "",
        email: ""
    })
    const handleChange = (event) => {
        const { target } = event;
        setBuyer({
            ...buyer,
            [target.name]: target.value
        })
    }

    const validateEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    }

    const handleCheckout = (event) => {
        event.preventDefault();
        const error = {};
        if (!buyer.name) {
            // TERMINAR VERIFICACION
            error.name = "El nombre es obligatorio"
        }
        if (!buyer.email) {
            error.email = "El email es obligatorio"
        } else {
            if (!validateEmail(buyer.email)) {
                error.email = "El mail es incorrecto"
            }
        }

        if (Object.keys(error).length === 0) {
            checkout(buyer)
        } else {
            setError(error);
        }
    }

    return <div className='form-div'>
        <div className='form-div-child'>
            <label className='form-label' htmlFor='name'>
                Tu nombre <span className='required'>*</span>
                {error.name && <span className='fade-in required-txt'>{error.name}</span>}
            </label>
            <input autoComplete='off' className='form-input' onChange={handleChange} type='text' name='name' id='name' value={name} />
        </div>
        <div className='form-div-child'>
            <label className='form-label' htmlFor='email'>
                Tu email <span className='required'>*</span>
                {error.email && <span className='fade-in required-txt'>{error.email}</span>}
            </label>
            <input autoComplete='off' className='form-input' onChange={handleChange} type='email' name='email' id='email' value={email} />
        </div>
        <button className="cart-summ-pay-btn form-btn" onClick={handleCheckout}>Finalizar compra</button>
    </div>
}

export default Form;