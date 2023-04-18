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
  const [isLoading, setIsLoading] = useState(false);

  //functions
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
    } catch (error) {
      console.log(error.message);
    }
  };

  console.log("ip", input);
  console.log("pr", prompt);
  console.log("op", output);

  //reset output
  const resetOutput = () => {
    const output = "";
    setOutput(output);
  };

  const aiInfo = {
    input,
    setInput,
    output,
    resetOutput,
    prompt,
    setPrompt,
    processRequest,
    isLoading,
    setIsLoading,
  };

  return <AiContext.Provider value={aiInfo}>{children}</AiContext.Provider>;
};

export default AiProvider;
