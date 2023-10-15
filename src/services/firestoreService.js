// Firebase
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore, doc, getDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDUGANc8RdVHFZe-VK333YZppWKJLeDAh0",
    authDomain: "tienda-react-ifio.firebaseapp.com",
    projectId: "tienda-react-ifio",
    storageBucket: "tienda-react-ifio.appspot.com",
    messagingSenderId: "932913288055",
    appId: "1:932913288055:web:48795e6cef7d2b58a90772"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// get collection
export const getDocuments = (collectionName) => {
    const collectionRef = collection(db, collectionName)
    return collectionRef;
}

export const getCollectionData = (q) => {
    return getDocs(q)
        .then(snapshot => {
            const data = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }))
            return data
        })
        .catch(err => console.log(err))
}

// get document
export const getDocument = (collectionName, id) => {
    const docRef = doc(db, collectionName, id);
    return docRef
}

export const getDocumentData = (itemRef) => {
    return getDoc(itemRef)
        .then(snapshot => {
            const data = {
                id: snapshot.id,
                ...snapshot.data()
            }
            return data
        })
        .catch(err => console.log(err))

}