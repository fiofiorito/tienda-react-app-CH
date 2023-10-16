// Firebase
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore, doc, getDoc } from "firebase/firestore";
// import 'dotenv/config';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROYECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_API_ID
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