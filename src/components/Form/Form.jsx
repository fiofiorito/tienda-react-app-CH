// styles
import './Form.css';

const Form = () => {

    const handleChange = (e) => {
        const { target } = e
        console.log(target.name, target.email)
    }
    return <div>
        <label htmlFor='name'>Tu nombre</label>
        <input type='text' name='name' value="" />
    </div>
}

export default Form;