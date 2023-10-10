import ItemListContainer from '../../components/ItemList/ItemListContainer';
import './HomePage.css';
import { db } from '../../hooks/useDatabase';
import { addDoc, collection } from 'firebase/firestore';

const HomePage = () => {
    const data = [
        {
            "categoryId": "Cuadernos y Journals",
            "title": "Cuaderno de Notas Ecológico",
            "description": "Cuaderno de notas con cubierta de papel reciclado. Perfecto para tomar apuntes o hacer bocetos.",
            "price": 5.99,
            "stock": 100,
            "rate": 4.5,
            "image": "imagen_cuaderno1.jpg"
        },
        {
            "categoryId": "Cuadernos y Journals",
            "title": "Journal de Viaje",
            "description": "Journal de viaje con páginas en blanco y mapas. Ideal para documentar tus aventuras.",
            "price": 12.99,
            "stock": 50,
            "rate": 4.7,
            "image": "imagen_cuaderno2.jpg"
        },
        {
            "categoryId": "Cuadernos y Journals",
            "title": "Cuaderno de Tapa Dura",
            "description": "Cuaderno de tapa dura con hojas rayadas. Adecuado para uso escolar y profesional.",
            "price": 8.99,
            "stock": 75,
            "rate": 4.6,
            "image": "imagen_cuaderno3.jpg"
        },
        {
            "categoryId": "Cuadernos y Journals",
            "title": "Cuaderno de Arte",
            "description": "Cuaderno de arte con papel de dibujo de alta calidad. Perfecto para artistas y dibujantes.",
            "price": 14.99,
            "stock": 60,
            "rate": 4.8,
            "image": "imagen_cuaderno4.jpg"
        },
        {
            "categoryId": "Marcadores",
            "title": "Set de Marcadores de Colores",
            "description": "Set de marcadores de colores vibrantes, ideales para resaltar y tomar notas.",
            "price": 7.99,
            "stock": 80,
            "rate": 4.4,
            "image": "imagen_marcadores1.jpg"
        },
        {
            "categoryId": "Marcadores",
            "title": "Marcadores de Punta Fina",
            "description": "Marcadores de punta fina para dibujos y escritura precisa. Incluye variedad de colores.",
            "price": 9.99,
            "stock": 65,
            "rate": 4.5,
            "image": "imagen_marcadores2.jpg"
        },
        {
            "categoryId": "Marcadores",
            "title": "Marcadores de Pizarra",
            "description": "Marcadores borrables para pizarras blancas. Fáciles de borrar y duraderos.",
            "price": 6.99,
            "stock": 70,
            "rate": 4.3,
            "image": "imagen_marcadores3.jpg"
        },
        {
            "categoryId": "Marcadores",
            "title": "Marcadores de Arte",
            "description": "Marcadores de arte de alta calidad con tintas pigmentadas. Ideales para ilustraciones.",
            "price": 11.99,
            "stock": 55,
            "rate": 4.6,
            "image": "imagen_marcadores4.jpg"
        },
        {
            "categoryId": "Washi Tapes",
            "title": "Set de Washi Tapes Decorativas",
            "description": "Set de washi tapes decorativas con patrones variados. Perfectas para proyectos de manualidades.",
            "price": 3.99,
            "stock": 120,
            "rate": 4.8,
            "image": "imagen_washi1.jpg"
        },
        {
            "categoryId": "Washi Tapes",
            "title": "Washi Tapes Metálicas",
            "description": "Washi tapes con acabado metálico. Agrega brillo a tus proyectos creativos.",
            "price": 5.99,
            "stock": 90,
            "rate": 4.7,
            "image": "imagen_washi2.jpg"
        },
        {
            "categoryId": "Washi Tapes",
            "title": "Set de Washi Tapes de Temporada",
            "description": "Set de washi tapes con diseños temáticos para cada temporada del año.",
            "price": 4.99,
            "stock": 100,
            "rate": 4.6,
            "image": "imagen_washi3.jpg"
        },
        {
            "categoryId": "Washi Tapes",
            "title": "Washi Tapes Brillantes",
            "description": "Washi tapes brillantes con colores vivos. Agrega un toque de alegría a tus proyectos.",
            "price": 4.49,
            "stock": 110,
            "rate": 4.5,
            "image": "imagen_washi4.jpg"
        },
        {
            "categoryId": "Librería",
            "title": "Calculadora Científica",
            "description": "Calculadora científica con funciones avanzadas para estudiantes y profesionales.",
            "price": 19.99,
            "stock": 60,
            "rate": 4.4,
            "image": "imagen_calculadora.jpg"
        },
        {
            "categoryId": "Librería",
            "title": "Juego de Reglas",
            "description": "Juego de reglas de plástico de alta calidad en diferentes tamaños.",
            "price": 6.99,
            "stock": 80,
            "rate": 4.5,
            "image": "imagen_reglas.jpg"
        },
        {
            "categoryId": "Librería",
            "title": "Portaminas Profesional",
            "description": "Portaminas profesional con grip ergonómico. Incluye minas de repuesto.",
            "price": 9.99,
            "stock": 70,
            "rate": 4.6,
            "image": "imagen_portaminas.jpg"
        },
        {
            "categoryId": "Librería",
            "title": "Carpeta de Archivo",
            "description": "Carpeta de archivo resistente para organizar documentos importantes.",
            "price": 3.99,
            "stock": 100,
            "rate": 4.7,
            "image": "imagen_carpeta.jpg"
        }
    ]

    const addData = () => {
        const collectionRef = collection(db, "ItemCollection");
        for (let item of data) {
            addDoc(collectionRef, item)
                .then(res => console.log(res.id, "insertada"))
                .catch(err => console.log(err))
        }
    }
    return <div>
        <button onClick={addData}>insert data</button>
        <ItemListContainer />
    </div>
}

export default HomePage;