import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore, query, where, documentId } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAITOUbyW99o4LmueZz9ND4xug-CRdBucM",
    authDomain: "baloo-home.firebaseapp.com",
    projectId: "baloo-home",
    storageBucket: "baloo-home.appspot.com",
    messagingSenderId: "978296136955",
    appId: "1:978296136955:web:a2b9863d25cd04790bbc5e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getProducts = () => {

    const colRef = query(collection(db, 'products'));

    return getDocs(colRef);
};

export const getProductDetail = (id) => {

    const docRef = query(collection(db, 'products'),
        where(documentId(), '==', id),
    );

    return getDocs(docRef);
};

export const getProductsByCategory = (category) => {

    const productsCollection = query(collection(db, 'products'),
        where('categoryId', '==', category)
    );

    return getDocs(productsCollection);
}