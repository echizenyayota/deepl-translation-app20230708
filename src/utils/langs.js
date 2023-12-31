const langOptions = [
  { code: "BG",  name: "Bulgarian" },
  { code: "CS",  name: "Czech" },
  { code: "DA",  name: "Danish" },
  { code: "DE",  name: "German" },
  { code: "EL",  name: "Greek" },
  { code: "EN",  name: "English" },
  { code: "ES",  name: "Spanish" },
  { code: "ET",  name: "Estonian" },
  { code: "FI",  name: "Finnish" },
  { code: "FR",  name: "French" },
  { code: "HU",  name: "Hungarian" },
  { code: "ID",  name: "Indonesian" },
  { code: "IT",  name: "Italian" },
  { code: "JA",  name: "Japanese" },
  { code: "KO",  name: "Korean" },
  { code: "LT",  name: "Lithuanian" },
  { code: "LV",  name: "Latvian" },
  { code: "NB",  name: "Norwegian Bokmål" },
  { code: "NL",  name: "Dutch" },
  { code: "PL",  name: "Polish" },
  { code: "PT",  name: "Portuguese" },
  { code: "RO",  name: "Romanian" },
  { code: "RU",  name: "Russian" },
  { code: "SK",  name: "Slovak" },
  { code: "SL",  name: "Slovenian" },
  { code: "SV",  name: "Swedish" },
  { code: "TR",  name: "Turkish" },
  { code: "UK",  name: "Ukrainian" },
  { code: "ZH",  name: "Chinese" }
];

const getNameByCode = code => langOptions.find(lng => lng.code === code)?.name;

export { langOptions, getNameByCode };
