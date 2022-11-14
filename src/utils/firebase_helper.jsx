import { db,auth } from '../firebaseConfig';
import { getDocs,getDoc,collection,deleteDoc,updateDoc,doc } from 'firebase/firestore';

export const getSingleUser = async ()=>{
        try{
            const id=localStorage.getItem('userid')
            if (!id) return;
            const docRef = doc(db, "add-user", id.toString());
            const userData = await getDoc(docRef)
            return userData.data();
        }catch(err){
            console.log("err:",err)
        }
}

export const getAllUsers = async ()=>{
    const collections = collection(db,"add-user");
    const allDocumnets = await getDocs(collections)
    const resultArray = []
    const userList = allDocumnets.docs.map(doc => {
        console.log("Data:",doc.data())
        return {id:doc.id,...doc.data()}
    });
    return userList;
}

export const deleteDocument = async (id)=>{
    try{
    return await deleteDoc(doc(db, "add-user", id.toString()));
 }catch(err){
    console.log("deleteDocument:",err)
 }
}


export const updateSingleUser = async (data)=>{
    const id=localStorage.getItem('userid')
    const documentRef = doc(db,"add-user", id)
    return await updateDoc(documentRef,data )
}


export const updateCurrentUser = async (data)=>{
   try {
    const { uid } = auth.currentUser;
    const documentRef = doc(db,"user-registration", uid)
    return await updateDoc(documentRef,data )
   } catch (error) {
    console.log(error)
   }
}



export const getCurrentUser = async()=>{
    try{
        const { uid } = auth.currentUser;
        if (!uid) return;
        const docRef = doc(db, "user-registration", uid.toString());
        const userData = await getDoc(docRef)
        return userData.data();
    }catch(err){
        console.log("err:",err)
    }
}




