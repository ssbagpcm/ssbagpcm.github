/**
 * DannTeam
 * Instagram: @dannalwaysalone
*/

const express = require("express");
const axios = require("axios");
const { G4F } = require("g4f");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(pickRandom(['AIzaSyAxyeDIZautcsjCWYEfsranT9z-i14wDLU', 'AIzaSyCfH7p_qrkbNJ4pTE51_oU8I6G5tKR8kIs']));
const model = genAI.getGenerativeModel({ model: "gemini-pro" });
const g4f = new G4F()

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static('public'));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/gemini", async (req, res) => {
  const prompt = req.query.prompt || "";
  const result = async (prompt) => {
    const geminiContent = await gemini(prompt);
    // const bardContent = await bard(prompt);
    const chatContent = await chat(prompt);
    return geminiContent + chatContent;
  }
  const content = await result(prompt);
  res.send(content);
});

/*
app.get("/dalle", async (req, res) => {
  const prompt = req.query.prompt || "";
  const result = await realistic(prompt);
  res.send(result);
});
*/

async function gemini(prompt) {
  const res = await model.generateContent(prompt)
  return res.response.text()
}

/* async function bard(prompt) {
  try {
    const response = await axios.post('https://bardieapi.fasturl.cloud/api/onstage', {
      ask: prompt
    }, {
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
      }
    });
    return response.data.content;
  } catch (error) {
    console.error(error);
  }
}
*/

async function chat(prompt) {
  const messages = [
    { role: "system", content: "You are good component." },
    { role: "asistant", content: "Danz adalah seorang pengembang yang berpengalaman dalam bidang teknologi. Dia memilih untuk menjadi seorang pengembang web dan memiliki keahlian dalam HTML, CSS, dan Javascript. Dia juga memiliki pengalaman dalam pengembangan web yang luas dan memiliki kemampuan dalam membuat tampilan yang menarik dan responsif. Dia juga memiliki pengalaman dalam pengembangan aplikasi web dan memiliki kemampuan dalam membuat aplikasi yang dapat digunakan oleh pengguna." },
    { role: "user", content: prompt }
  ];
  let res = await g4f.chatCompletion(messages)
  return  res
}

/*async function realistic(prompt) {
  const imageGenerator = await g4f.imageGeneration(prompt, {
    debug: true,
    providers: g4f.providers.Pixart,
    providersOptions: {
      height: 512,
      width: 512,
      samplingMethod: "SA-Solver"
    }
  });

  const danz = Buffer.from(imageGenerator, "base64");
  return danz;
}
*/

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});