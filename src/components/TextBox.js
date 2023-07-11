import SelectDropDown from "./SelectDropDown";

const TextBox = ({ selectedLanguage, style }) => {
  return (
    <div>
      <SelectDropDown 
        selectedLanguage={selectedLanguage}
      />
      <textarea
        placeholder={style === "input" ? "Enter text" : "Translation"}
        disabled={style === "output"}
      />
    </div>
  )
}

export default TextBox;