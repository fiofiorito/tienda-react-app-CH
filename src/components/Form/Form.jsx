const Form = ({ fieldKey, error, handleChange, buyer }) => {
    return <div className='form-div-child'>
        <label className='form-label' htmlFor={fieldKey}>
            Ingresa tu {fieldKey} <span className='required'>*</span>
            {error[fieldKey] && <span className='fade-in required-txt'>{error[fieldKey]}</span>}
        </label>
        <input autoComplete='off' className='form-input' onChange={handleChange} type='text' name={fieldKey} id={fieldKey} value={buyer[fieldKey]} />
    </div>
}

export default Form;