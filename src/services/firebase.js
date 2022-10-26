
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCnWVDCVZiSvf5h-cnjMw7-qfTPRCXqvZo",
	authDomain: "pc-power-shop.firebaseapp.com",
	projectId: "pc-power-shop",
	storageBucket: "pc-power-shop.appspot.com",
	messagingSenderId: "615736568457",
	appId: "1:615736568457:web:63609bf5d9732e4f5ff458"
};

const firebaseApp = initializeApp(firebaseConfig);
const dataBase = getFirestore(firebaseApp);

export async function getProducts() {
	const collectionRef = collection(dataBase, "Productos");
	let results = await getDocs(collectionRef);
	
	let dataProductos = results.docs.map( doc => {
		return { id: doc.id, ...doc.data()};
	});
	return dataProductos;
}

export async function getProduct(idParams) {
	const docRef = doc(dataBase, "Productos", idParams);
	const docResult = await getDoc(docRef);
	if (docResult.exists()) {
		return { id: docResult.id,  ...docResult.data()};
	}
	else {
		throw new Error("El item no se encontro en la base de datos.");
	}
}

export async function getProductsByCategory(idCategoryParams) {
	const collectionRef = collection(dataBase, "Productos");
	const queryCat = query(collectionRef, where("category", "==", idCategoryParams ));

	let results = await getDocs(queryCat);

	let dataProductos = results.docs.map( doc => {
		return { id: doc.id, ...doc.data()};
	});
	return dataProductos;
}

export async function sendOrder(order){
	const collectionRef = collection(dataBase, "Ordenes");
	const docResult = await addDoc(collectionRef, order);
	return { id: docResult.id };
}

export default firebaseApp;
