import { BiSupport } from "react-icons/bi";
import './SupportPage.css';

const SupportPage = () => {
    return <section className="support-section">
        <div>
            <div className="support-div">
                <BiSupport className="support-icon" />
                <h2 className="support-h2">Soporte</h2>
            </div>
            <p>Para contactarte con nosotros, manda un mail a:</p>
            <p>support@mail.com</p>
        </div>
        <img className="support-img" src="https://res.cloudinary.com/drhwvqo2m/image/upload/v1697068699/ecommerce/jjwqsgkn0yflhrgntte6.avif" alt="customer support" />

    </section>
}

export default SupportPage;