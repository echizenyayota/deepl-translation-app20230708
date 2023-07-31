const PORT = 8000;
const axios = require("axios").default;
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express()

app.use(cors());

app.get("/translation", async(req, res) => {

  const { outputLanguage, inputLanguage, textToTranslate } = req.query;
  
  const options = {
    method: "GET",
    params: {
      target: outputLanguage,
      source: inputLanguage,
      text: textToTranslate,
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_HOST
    }
  
  }
  
  try {
    const response = await axios("https://deepl-translate-machine.p.rapidapi.com/v1/translate/text", options);
    res.status(200).json(response.data.data.texts[0].text);
  } catch(err) {
    console.log(err);
    res.status.json({message: err});
  }

})


app.listen(PORT, () => console.log("Server running on PORT " + PORT));