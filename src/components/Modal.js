const Modal = ({ setShowModal }) => {
  return (
    <div className="option-list">
      <div className="search-bar">
        <select className="source-language">
          <option value="BG">Bulgarian</option>
          <option value="CS">Czech</option>
          <option value="DA">Danish</option>
          <option value="DE">German</option>
          <option value="EL">Greek</option>
          <option value="EN">English</option>
          <option value="ES">Spanish</option>
          <option value="ET">Estonian</option>
          <option value="FI">Finnish</option>
          <option value="FR">French</option>
          <option value="HU">Hungarian</option>
          <option value="ID">Indonesian</option>
          <option value="IT">Italian</option>
          <option value="JA">Japanese</option>
          <option value="KO">Korean</option>
          <option value="LT">Lithuanian</option>
          <option value="LV">Latvian</option>
          <option value="NB">Norwegian Bokmål</option>
          <option value="NL">Dutch</option>
          <option value="PL">Polish</option>
          <option value="PT">Portuguese</option>
          <option value="RO">Romanian</option>
          <option value="RU">Russian</option>
          <option value="SK">Slovak</option>
          <option value="SL">Slovenian</option>
          <option value="SV">Swedish</option>
          <option value="TR">Turkish</option>
          <option value="UK">Ukrainian</option>
          <option value="ZH">Chinese</option>
        </select>
        <div className="close-button" onClick={() => setShowModal(null)}>
        <svg
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
          </svg>
        </div>
      </div>  
    </div>
  )
}

export default Modal;