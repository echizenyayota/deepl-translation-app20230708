import TextBox from "./components/TextBox";
import Arrows from "./components/Arrows";
import Button from "./components/Button";
import Modal from "./components/Modal";
import { useState } from "react";
import axios from "axios";


const App = () => {
  const [showModal, setShowModal] = useState(null);
  const [inputLanguage, setInputLanguage] = useState("EN");
  const [outputLanguage, setOutputLanguage] = useState("JA");
  const [textToTranslate, setTextToTranslate] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const translate = async () => {
    const data = {
      outputLanguage, 
      inputLanguage, 
      textToTranslate
    }

    const response = await axios("http://localhost:8000/translation", {
      params: data
    });
    
    setTranslatedText(response.data);
  }

  const handleClick = () => {
    setInputLanguage(outputLanguage);
    setOutputLanguage(inputLanguage);
  }

  return (
    <div className="app">
      {!showModal && <>
        <TextBox
          selectedLanguage={inputLanguage}
          style='input'
          setShowModal={setShowModal}
          textToTranslate={textToTranslate}
          setTextToTranslate={setTextToTranslate}
          setTranslatedText={setTranslatedText}
        />
        <div className="arrow-container" onClick={handleClick}>
          <Arrows />
        </div>
        <TextBox 
          selectedLanguage={outputLanguage}
          style='output'
          setShowModal={setShowModal}
          translatedText={translatedText}
        />
        <div className="button-container" onClick={translate}>
          <Button />
        </div> 
      </>}

      {showModal && 
        <Modal 
          setShowModal={setShowModal}
          chosenLanguage={showModal === "input" ? inputLanguage : outputLanguage}
          setChosenLanguage={showModal === "input" ? setInputLanguage : setOutputLanguage}
      />}
    </div>
  );
}

export default App;
