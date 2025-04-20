const axios = require("axios");
const http = require("http");
const https = require("https");
const fs = require("fs");

const { filesName: ports } = require("./targetHost.js");
const { filesName } = require("./ports.js");

const agent = new https.Agent({
  keepAlive: true,
  maxSockets: Infinity,
});

const TIME_FOR_REQ = 20;
const resultsError = [];
const resultsSuccess = [];
let i = 0;
//${el.toLowerCase()}
console.log(ports.length);
ports.forEach(async (port) => {
  filesName.forEach(async (el, index) => {
    const URL = `http://${port}${el}`;
    const instance = axios.create({
      baseURL: URL,
      httpsAgent: agent,
    });
    const config = {
      method: "get",
    };
    setTimeout(function () {
      instance(config)
        .then((response) => {
          resultsSuccess.push(`${response.status} , ${URL}${config.url}`);
          console.log(`${response.status} , ${URL}${config.url}`);
        })
        .catch((error) => {
          i++;
          resultsError.push(`Error ${i}: ${error.status} , ${URL}`);
        });
    }, index * TIME_FOR_REQ);
  });
});

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(`Error writing to file ${fileName}:`, err);
    } else {
      console.log(`Successfully wrote to file ${fileName}`);
    }
  });
}

setTimeout(function () {
  writeToFile("resultsSuccess.txt", resultsSuccess.join("\n"));
  writeToFile("resultsError.txt", resultsError.join("\n"));
  console.log("end Tool");
}, ports.length * 120000);
console.log(
  `Will take ${120 * ports.length}  Secund\n`,
  `Start in ${new Date().getHours()}:${new Date().getMinutes()}`,
  `End in ${new Date(Date.now() + ports.length * 120000).getHours()}:${new Date(
    Date.now() + ports.length * 120000
  ).getMinutes()}`
);
