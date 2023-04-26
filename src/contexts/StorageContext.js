import React, { createContext, useContext, useState } from "react";
import { firestoreStorage } from "../firebase/firebase.config";
import { AiContext } from "./AiContext";
import emailjs from "@emailjs/browser";
import { addDoc, collection, doc, getDoc, setDoc } from "@firebase/firestore";

export const StorageContext = createContext();

const StorageProvider = ({ children }) => {
  const [documentData, setDocumentData] = useState(null);
  const { input, prompt, finalOutput, headlinesOutput, email, setDocumentId } =
    useContext(AiContext);

  //email sender
  const sendEmail = (documentId) => {
    const applicationName = `${process.env.REACT_APP_ApplicationName}`;
    const applicationURL = `${process.env.REACT_APP_applicationURL}`;
    try {
      const result = emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        {
          applicationURL: applicationURL,
          applicationName: applicationName,
          documentId: documentId,
          email: email,
        },
        process.env.REACT_APP_PUBLIC_KEY
      );
      console.log(result);
    } catch (error) {
      console.log(error.text);
    }
  };

  // //fetch document
  const getDocumentFromFirestore = async (authCode) => {
    setDocumentData("");
    try {
      const ref = doc(firestoreStorage, "queryDetails", authCode);
      const docSnap = await getDoc(ref);
      if (docSnap.exists()) {
        const rowDocumentData = docSnap.data();
        console.log(rowDocumentData);
        setDocumentData(rowDocumentData);
      } else {
        console.log("No such doCUMent!");
      }
    } catch (error) {
      console.error("Error fetching doCUMent!", error);
    }
  };

  //add with id
  const addToDb = async () => {
    try {
      const docRef = await addDoc(
        collection(firestoreStorage, "queryDetails"),
        { email, input, prompt, finalOutput, headlinesOutput }
      );
      setDocumentId(docRef.id);
      sendEmail(docRef.id);
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

  //exports
  const authInfo = {
    addToDb,
    addWithCustomId,
    documentData,
    getDocumentFromFirestore,
  };
  return (
    <StorageContext.Provider value={authInfo}>
      {children}
    </StorageContext.Provider>
  );
};

export default StorageProvider;
