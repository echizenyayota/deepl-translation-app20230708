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

    const options = {
      method: 'GET',
      url: 'https://deepl-translate-machine.p.rapidapi.com/v1/translate/text',
      params: {
        target: outputLanguage,
        source: inputLanguage,
        text: textToTranslate
      },
      headers: {
        // https://create-react-app.dev/docs/adding-custom-environment-variables/
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_HOST
      }
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      setTranslatedText(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const handleClick = () => {
    setInputLanguage(outputLanguage);
    setOutputLanguage(inputLanguage);
  }

  // console.log(process.env.REACT_APP_RAPID_API_KEY);

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
