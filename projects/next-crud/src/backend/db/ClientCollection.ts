import {doc, collection, addDoc, setDoc, deleteDoc, getDocs} from "firebase/firestore"
import Client from "../../core/Client";
import db from "./config";
import { ClientConverter } from "../../core/Client";



export async function DbSave(client: Client) {
    if(client.id){
        const ref = doc(db, "clients", client.id).withConverter(ClientConverter);

        await setDoc(ref, client)
        console.log("Alterado")

    }else{
        const ref = collection(db, "clients").withConverter(ClientConverter);

        await addDoc(ref, client)
        console.log("Criado")
    }
}

export async function DbDelete(client: Client) {
    await deleteDoc(doc(db, "clients", client.id))
    console.log("Deletado")
}

export async function DbShow() {
    const ref = collection(db, "clients").withConverter(ClientConverter);

    const querySnapshot = await getDocs(ref);

    return querySnapshot.docs.map(doc => doc.data()) ?? []
}

