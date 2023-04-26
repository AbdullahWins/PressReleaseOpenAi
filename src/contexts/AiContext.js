import React, { createContext, useEffect, useState } from "react";
import Geocode from "react-geocode";

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

Geocode.setApiKey(`${process.env.REACT_APP_GOOGLE_MAP_API_KEY}`);
Geocode.setLanguage("en");

export const AiContext = createContext();

const AiProvider = ({ children }) => {
  //states
  const [input, setInput] = useState("");
  const [prompt, setPrompt] = useState("");
  const [userTime, setUserTime] = useState("");
  const [userDomain, setUserDomain] = useState("");
  const [userLocation, setUserLocation] = useState("");
  const [output, setOutput] = useState("");
  const [headlinesOutput, setHeadlinesOutput] = useState("");
  const [finalOutput, setFinalOutput] = useState("");
  const [email, setEmail] = useState("");
  const [documentId, setDocumentId] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Get address from latitude & longitude.
  const getUserLocationFromGoogle = (geoLocation) => {
    if (geoLocation) {
      Geocode.fromLatLng(
        geoLocation[0]?.latitude,
        geoLocation[1]?.longitude
      ).then(
        (response) => {
          const formattedAddress =
            response?.results[0]?.address_components[2]?.long_name;
          setUserLocation(formattedAddress);
        },
        (error) => {
          console.error(error);
        }
      );
    }
  };

  useEffect(() => {
    // getting current geolocation and converting it to get city
    const successCallback = (position) => {
      const geoLocation = [
        { latitude: `${position?.coords?.latitude}` },
        { longitude: `${position?.coords?.longitude}` },
      ];
      getUserLocationFromGoogle(geoLocation);
    };
    const errorCallback = (error) => {
      console.log(error);
    };

    //getting current time
    const current = new Date();
    const time = current.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
    setUserTime(time);

    //setting user domain address
    setUserDomain(process.env.REACT_APP_CompanyWebsite.toUpperCase());

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }, []);
  // console.log(userLocation, userTime, userDomain);
  console.log(output, finalOutput);

  //news creation
  const processRequest = async () => {
    setOutput("");
    try {
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${prompt}:\n\n ${input}`,
        temperature: 0,
        max_tokens: 1300,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      });
      if (response.status === 200) {
        setIsLoading(false);
      }
      const responseCorrect = response?.data?.choices[0]?.text;
      const formattedResponse = responseCorrect.replace(/\\r\\n/g, "<br />");
      const finalResponse = `FOR IMMEDIATE RELEASE <br />${userLocation} <br />${userTime} <br />${userDomain}<br /> \n ${formattedResponse}`;
      // const finalResponse = `${
      //   (userLocation, userTime, userDomain, responseCorrect)
      // }`;
      setOutput(finalResponse);
      setFinalOutput(finalResponse);
    } catch (error) {
      console.log(error.message);
    }
  };

  //title creation
  const processHeadlinesRequest = async () => {
    setOutput("");
    try {
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `privide 3 alternative headlines for: \n\n ${prompt}`,
        temperature: 0,
        max_tokens: 500,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      });
      if (response.status === 200) {
        setIsLoading(false);
      }
      const responseCorrect = response?.data?.choices[0]?.text;
      setHeadlinesOutput(responseCorrect);
    } catch (error) {
      console.log(error.message);
    }
  };

  //reset output
  const resetOutput = () => {
    const output = "";
    setOutput(output);
  };

  //exports
  const aiInfo = {
    input,
    setInput,
    output,
    headlinesOutput,
    resetOutput,
    prompt,
    setPrompt,
    email,
    setEmail,
    userLocation,
    finalOutput,
    setFinalOutput,
    processRequest,
    processHeadlinesRequest,
    isLoading,
    setIsLoading,
    documentId,
    setDocumentId,
  };

  return <AiContext.Provider value={aiInfo}>{children}</AiContext.Provider>;
};

export default AiProvider;
