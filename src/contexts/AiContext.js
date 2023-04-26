import React, { createContext, useState } from "react";

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export const AiContext = createContext();

const AiProvider = ({ children }) => {
  //states
  const [input, setInput] = useState("");
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState("");
  const [headlinesOutput, setHeadlinesOutput] = useState("");
  const [finalOutput, setFinalOutput] = useState("");
  const [email, setEmail] = useState("");
  const [documentId, setDocumentId] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
      setOutput(responseCorrect);
      setFinalOutput(responseCorrect);
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
