# Página de Ecommerce - Librería iFio
___

[ES] Este proyecto es una aplicación web creada como parte de un trabajo práctico estudiantil que desarrollé a lo largo de mi curso de React JS en Coderhouse. Durante la elaboración de este proyecto, el profesor y los tutores a cargo de mi comisión se encargaron de proporcionarnos las consignas, y yo procedí a construirla de acuerdo a las instrucciones proporcionadas.

👉 👉 👉 [Enlace a la página web](https://ifio-library-ecommerce.netlify.app/)

### Funcionamiento
![](https://github.com/fiofiorito/tienda-react-app-CH/blob/main/public/ecommerce-webapp-demo.gif)

El proyecto fue realizado con la finalidad de simular un E-commerce. Es importante destacar que mientras la información que el usuario ingrese a través del formulario de compra se almacena en una base de datos, esta aplicación web no es un E-commerce real, por lo que no se pueden realizar compras. Fue creada con fines demostrativos únicamente. Como se puede observar en el .gif, se trata de un proyecto de E-commerce de una librería que cuenta con productos de oficina, como cuadernos y marcadores, entre otras cosas.

### Navegación
Esta aplicación web de E-commerce tiene 6 rutas principales configuradas, las cuales son:

- "**/**" ⇨ Ruta a la página de inicio
- "**/category**" ⇨ Ruta para navegar a la lista de las categorías posibles y todos los productos debajo.
- "**/category/:id**" ⇨ Ruta para navegar a las categorías de productos: Cuadernos, Marcadores, Washi Tapes y Material de oficina. Esta sección muestra los productos filtrados.
- "**/item/:id**" ⇨ Ruta para navegar a un producto en específico, donde puedes ver el nombre, la descripción, la valoración, el precio y cuenta con el contador para agregar al carrito.
- "**/soporte**" ⇨ Ruta para navegar a la página de soporte, donde puedes visualizar los datos de contacto para recibir asistencia.
- "**/cart**" Ruta para navegar al carrito de compras, en esta página puedes visualizar los productos que has agregado a tu carrito y realizar el pedido.

### Herramientas utilizadas
Esta aplicación web fue creada utilizando React + Vite, junto con ciertos paquetes npm que son cruciales para su funcionamiento, como react-icons, react-router, react-router-dom, react-spinners, sweetalert-2, sweetalert2-react-content y dotenv. Además, como base de datos, incorporé Firestore-Firebase. Para su despliegue, utilicé Netlify.

### Deployment
Como se mencionó anteriormente, el *deployment* se realizó a través de Netlify. Se utiliza el comando: "npm run build" para la compilación de la aplicación web.

### Desafíos
Este proyecto me permitió adquirir muchos conocimientos sobre React a un nivel avanzado. Además, pude familiarizarme con la idea de trabajar en componentes reutilizables para asegurar la escalabilidad de la aplicación web.

Lo que más me costó fue terminar de comprender el flujo de datos unidireccional de la aplicación. Después de haber finalizado, puedo decir que ahora comprendo el paso de datos de un componente a otro y la utilización de un Context cuando es necesario, lo cual antes del curso me resultaba muy difícil de comprender y nunca terminaba de entender cómo funcionaba.
Otra cosa que me costó fue plantear la lógica de algunas funciones para los componentes, como evitar la repetición de un artículo dentro del carrito si se agregaba dos veces y sumar solo la cantidad, por dar un ejemplo.

### Aprendizajes
Si hay algo que este proyecto me enseñó es que nada es imposible; es cuestión de obtener recursos y plantear diferentes soluciones para la tarea en cuestión hasta lograrlo. La sensación de realización que experimenté a lo largo de todo el proyecto al ver que mi perseverancia me permitía no solo hacer que la aplicación sea cada vez más compleja, sino también ver cómo iba adquiriendo conocimientos, es inmensamente gratificante.

### Agradecimientos
Agradezco al profesor Franco Diosquez y a los tutores, especialmente a Ezequiel Ramirez, que me acompañaron durante todo el curso y me enseñaron React. Estoy agradecida por haberme inscrito en el curso y haber tenido un profesor que sabe explicar los temas con sencillez y facilidad, lo que permite que todos podamos entenderlos.
___
___
[EN] This project is a web app that I developed as a final assignment for the React JS course at Coderhouse. Throughout the entire project, both the professor and the tutors in my group were responsible for providing my classmates and me with the assignment instructions. I proceeded to build it accordingly.

👉 👉 👉 [Link to the webpage](https://ifio-library-ecommerce.netlify.app/)

### Functionality 
![](https://github.com/fiofiorito/tienda-react-app-CH/blob/main/public/ecommerce-webapp-demo.gif)

This project was created with the intention of emulating an e-commerce platform. It is important to note that any information provided by the user in the checkout form will be stored in a database. However, this web app is not and will not be an official site where users can make real purchases. As shown in the GIF above, this project is an e-commerce web app for library and school supplies, including products such as notebooks and markers.

### Navigation
The web app has six main routes that I configured:
- "**/**" - Home page route
- "**/category**" - Route displaying all four categories and the products within.
- "**/category/:id**" - Navigation route showing filtered products by category.
- "**/item/:id**" - Route displaying a specific product with details such as name, description, rating, price, and an add-to-cart feature.
- "**/soporte**" - Contact support page route.
- "**/cart**" - Cart summary page, where users can view the items they've added to their cart, the subtotal, the total price, and access the checkout form.

### Dev Tools Implemented
This web app was created using React + Vite, in conjunction with essential npm packages, including react-icons, react-router, react-router-dom, react-spinners, sweetalert-2, sweetalert2-react-content, and dotenv. For the database, I implemented Firestore-Firebase. Additionally, the deployment was done using Netlify.

### Deployment
As mentioned earlier, the deployment was carried out through Netlify. The building command used was "npm run build."

### Challenges
This project allowed me to gain an advanced understanding of React and become more familiar with the concept of working with reusable components to ensure the scalability of a web app.

The most challenging aspect for me was grasping the one-way data flow that React offers. Now that I have completed the course, I can confidently say that I have a much better understanding of it and can implement it effectively, whether it's passing data from one component to another or using Context when necessary.
Another challenge I faced was devising the logic for some component functions, such as preventing item duplication when adding the same item to the cart twice and only increasing the quantity.

### Learnings
One key lesson I've learned throughout this project is that nothing is impossible; it's a matter of gathering resources and finding solutions for the task at hand. The sense of accomplishment I felt as the project became increasingly complex and as I continued to learn was immensely rewarding.

### Special thanks
I would like to express my gratitude to Professor Franco Diosquez and the tutors, especially Ezequiel Ramirez. They supported us throughout the course and taught me React like no one else could. I am thankful for enrolling in this course and having an amazing professor who can explain even the most complex React topics in an easy-to-understand manner.