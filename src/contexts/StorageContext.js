import React, { createContext } from "react";
import { setDoc, doc, addDoc, collection } from "firebase/firestore";
import { firestoreStorage } from "../firebase/firebase.config";

export const StorageContext = createContext();

const StorageProvider = ({ children }) => {
  //add with id
  const addToDb = async () => {
    try {
      const docRef = await addDoc(
        collection(firestoreStorage, "queryDetails"),
        {
          first: "Ada",
          last: "Lovelace",
          born: 1815,
        }
      );
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  //add with custom id
  const addWithCustomId = async (email) => {
    try {
      await setDoc(doc(firestoreStorage, "queryDetailsCustom", email), {
        first: "Ada",
        last: "Lovelace",
        born: 1815,
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const authInfo = {
    addToDb,
    addWithCustomId,
  };
  return (
    <StorageContext.Provider value={authInfo}>
      {children}
    </StorageContext.Provider>
  );
};

export default StorageProvider;
