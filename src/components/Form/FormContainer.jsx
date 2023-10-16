// hooks
import { useState } from 'react';
// styles
import './FormContainer.css';
import Form from './Form';

const FormContainer = ({ checkout, setBuyer, buyer }) => {
    const [error, setError] = useState({})
    const handleChange = (event) => {
        const { target } = event;
        setBuyer({
            ...buyer,
            [target.name]: target.value
        })
    }

    const validateEmail = (email) => {
        // regex validation
        return /\S+@\S+\.\S+/.test(email);
    }

    const handleCheckout = (event) => {
        event.preventDefault();
        const newError = {};

        Object.keys(buyer).forEach(key => {
            if (!buyer[key]) {
                newError[key] = `El ${key} es obligatorio`
            } else if (key === "email" && !validateEmail(buyer[key])) {
                newError[key] = `El ${key} es incorrecto`
            }
        });
        setError(newError);

        if (Object.keys(newError).length === 0) {
            checkout(buyer)
        }
    }

    return <form className='form-div'>
        {
            Object.keys(buyer)
                .map(fieldKey => (
                    <Form key={fieldKey} handleChange={handleChange} fieldKey={fieldKey} error={error} buyer={buyer} />
                ))
        }
        <button className="cart-summ-pay-btn form-btn" onClick={handleCheckout}>Finalizar compra</button>
    </form>
}

export default FormContainer;