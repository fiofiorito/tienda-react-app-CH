export const products = [
    {
        name: "producto 1",
        description: "lorem ipsum loremp ipsum",
        stock: 104,
        price: 2.99,
        id: 1,
        img: "https://picsum.photos/200"
    },
    {
        name: "producto 2",
        description: "lorem ipsum loremp ipsum",
        stock: 11,
        price: 4.99,
        id: 2,
        img: "https://picsum.photos/200"
    },
    {
        name: "producto 3",
        description: "lorem ipsum loremp ipsum",
        stock: 210,
        price: 234.99,
        id: 3,
        img: "https://picsum.photos/200"
    },
    {
        name: "producto 4",
        description: "lorem ipsum loremp ipsum",
        stock: 16,
        price: 245.99,
        id: 4,
        img: "https://picsum.photos/200"
    },
    {
        name: "producto 5",
        description: "lorem ipsum loremp ipsum",
        stock: 160,
        price: 2.49,
        id: 5,
        img: "https://picsum.photos/200"
    },
    {
        name: "producto 6",
        description: "lorem ipsum loremp ipsum",
        stock: 14,
        price: 4.39,
        id: 6,
        img: "https://picsum.photos/200"
    },
    {
        name: "producto 7",
        description: "lorem ipsum loremp ipsum",
        stock: 10,
        price: 24.99,
        id: 7,
        img: "https://picsum.photos/200"
    }
];

export const getProduct = () => new Promise((resolve, reject) => {
    let status = 200;
    setTimeout(() => {
        if (status === 200) {
            resolve(products)
        } else {
            reject(["ups, algo salio mal"]);
        }
    }, 2000);
})