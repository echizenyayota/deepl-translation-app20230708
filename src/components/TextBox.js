import SelectDropDown from "./SelectDropDown";

const TextBox = ({ 
  selectedLanguage, 
  style, 
  setShowModal,
  textToTranslate,
  setTextToTranslate,
  translatedText,
  setTranslatedText
}) => {
  return (
    <div>
      <SelectDropDown
        style={style}
        setShowModal={setShowModal}
        selectedLanguage={selectedLanguage}
      />
      <textarea
        placeholder={style === "input" ? "Enter text" : "Translation"}
        disabled={style === "output"}
        onChange={(e) => setTextToTranslate(e.target.value)}
        value={style === "input" ? textToTranslate : translatedText }
      />
    </div>
  )
}

export default TextBox;