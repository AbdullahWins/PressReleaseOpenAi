import React, { createContext, useContext } from "react";
import { setDoc, doc, addDoc, collection } from "firebase/firestore";
import { firestoreStorage } from "../firebase/firebase.config";
import { AiContext } from "./AiContext";

export const StorageContext = createContext();

const StorageProvider = ({ children }) => {
  const { input, prompt, finalOutput, email, setDocumentId } =
    useContext(AiContext);

  //add with id
  const addToDb = async () => {
    try {
      const docRef = await addDoc(
        collection(firestoreStorage, "queryDetails"),
        { email, input, prompt, finalOutput }
      );
      console.log("Document written with ID: ", docRef.id);
      setDocumentId(docRef.id);
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
