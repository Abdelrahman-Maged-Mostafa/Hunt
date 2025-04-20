const axios = require("axios");
const http = require("http");
const https = require("https");
const fs = require("fs");
// const { filesName } = require("./arkoselabs.com subdomains.js");
const { filesName } = require("./common.js");
// const { filesName } = require("./targetHost.js");
// const { filesName } = require("./WordPress.js");
// const { filesName } = require("./burbsuit-gitlab.js");
// const { filesName } = require("./commonVars.js");

// const { filesName } = require("./someFiles.js");
// const {
//   filesName,
// } = require("./bug-bounty-program-subdomains-trickest-inventory.js");

const agent = new https.Agent({
  keepAlive: true,
  maxSockets: Infinity,
});

const TIME_FOR_REQ = 100;
const resultsError = [];
const resultsSuccess = [];
let i = 0;
//${el.toLowerCase()}
console.log(filesName.length);
filesName.forEach(async (el, index) => {
  const URL = `https://h1.brainhq.com`;
  const instance = axios.create({
    baseURL: URL,
    httpsAgent: agent,
  });
  const config = {
    method: "get",
    url: `/api/v2/${el}`,
    // url: `/wig2m2qX718yTDpbAhYwxtfg/7b1awV1YwYhc/HjY1HVUB/dAZ/-QQkYEQkB"${el}`,
    headers: {
      //Authorization: ` Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkQ2RUNFQjAwNzNEMkRBRTNGN0Q4QzlCNEIzMEMzM0VBNTZFMjNDNzJSUzI1NiIsIng1dCI6IjF1enJBSFBTMnVQMzJNbTBzd3d6NmxiaVBISSIsInR5cCI6ImF0K2p3dCJ9.eyJpc3MiOiJodHRwczovL2xvZ2luLjNjeC5jb20iLCJuYmYiOjE3MzUwMDU0NDIsImlhdCI6MTczNTAwNTQ0MiwiZXhwIjoxNzM1MDA5MDQyLCJhdWQiOiJzZXJ2aWNlc2FwaSIsInNjb3BlIjpbIm9wZW5pZCIsInByb2ZpbGUiLCJzZXJ2aWNlc2FwaSJdLCJhbXIiOlsicHdkIl0sImNsaWVudF9pZCI6InNlcnZpY2VzIiwic3ViIjoicGFydG5lcjoxOTc0ODk4IiwiYXV0aF90aW1lIjoxNzM1MDA1MjU5LCJpZHAiOiJsb2NhbCIsInNpZCI6IkM5RjcxQUE4MzFEOThGNDU3MEY1RTFFQTE5M0MzN0REIiwianRpIjoiRTVDNTJEM0FCNjA4OEU2QUYzNjJBNkZDQkJBQkM2NjcifQ.jJNQM_f4x-xKxWGNkqjdPHs2mDM2vE79b3NPXn7EjiUlBVHjJrI0PZeHkZnOJ5Ei936oWrtbOybMAihiQWBOLcz_nRN09wSVmMSzHT5eB4m5TfeHLWv6OFfaZ4x4I2YHgfCy8aoX66pFlPN6ZOFGGOG8zjxuuyYKI6SDK8gLSpstN3NY2-bkJ0_CSREK5pftfCZVzOZjhSRQ3GF2kOTKS284DnfwhXqK2TbPsofmIuuYYWvfcBRddBZtwQ7kaS3zq4d7UMUKC7q5P0qhzPhWq2GCgwEl9VReriiChWFRui-LkKmNQq3cYqPdBiFs4scNxLGCtGRVkAallo2bpqVz8w`,
      Cookie: ` _ga_LHZM2PPFPR=GS1.1.1737015543.3.1.1737016131.47.0.0; _ga=GA1.2.919514691.1734995012; _fbp=fb.1.1734995014129.48050249279703140; _ga_43K5QLVHNM=GS1.2.1737015544.3.1.1737016118.60.0.0; cf_clearance=o90BG0vZRFL5eAPHHqHsR9KbBnuS2Uk2L3T2sYZb6Hk-1737015274-1.2.1.1-SPvUtDqtPHMRZy6GjXB3rbwxcRYSyiYj8lld0uCauF9F0ZwRmL7_VJsf9jMxFsvbd5KiRxywIoGVS6VVk5j1Vh6H6Xqma9RwwzpJ6BRW4ixuMCYC9dOp9uRhYUfyXcKwCwXxYNw5gBCfAYnbfc_m7POsbiw1zCnHUp080eUoB4KnRkZ1xRFl1UnPVF.8oYS.ipJiLBIQCTrIOIM2E5zsmDTKTIg2FPHlRAw6Iz1FD3LAQFsj2K.NOFYy.EOB1rJ_uoOMyx4hcDwAceZ0xylYvVc_w39ZrF0MAaz3H2Abea0AAQTK5THiCBf8oaWFxF_fHW.t0_aQAR0LIft.mZINyg; _gid=GA1.2.641656554.1737015544`,
      Accept: "application/json, text/plain, */*",
      "X-Csrf-Token":
        "IbhB_nOPLvsYBioDnJNjffT4v7-elHmcdEKfrURkvynrp0pjKS0ewSkmmGLgkOTT3ZWPkuRJDMYN7huKk73suQ",
      Te: "trailers",
    },
  };
  setTimeout(function () {
    instance(config)
      .then((response) => {
        if (
          response.data &&
          response.request._redirectable._options.path === config.url &&
          !response.data.includes(`<h3>Error.</h3>`)
          //  &&
          // !response.data.includes(`Error establishing a database connection`) &&
          // !response.data.includes(
          //   `Fatal error: Uncaught Error: Undefined constant "ABSPATH"`
          // )
        ) {
          resultsSuccess.push(`${response.status} , ${URL}${config.url}`);
          console.log(`${response.status} , ${URL}${config.url}`);
        } else {
          i++;
          resultsError.push(
            `Error ${i}: ${response.status} , ${URL}${config.url}`
          );
          // console.log(response.request._redirectable._options.path);
        }
      })
      .catch((error) => {
        if (
          i === 10 ||
          i === 100 ||
          i === 1000 ||
          i === 2000 ||
          i === 3000 ||
          i === 4000 ||
          i === 8000 ||
          i === 4000 ||
          i === 5000 ||
          i === 6000 ||
          i === 7000 ||
          i === 10000
        ) {
          console.log(`\nError ${i}: ${error.status} , ${el}  , RES:
${JSON.stringify(error.data)}\n`);
        }
        i++;
        resultsError.push(`Error ${i}: ${error.status} , ${URL}${config.url}`);
        // console.log(error);
      });
  }, index * TIME_FOR_REQ);
});
//("0 Results")

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(`Error writing to file ${fileName}:`, err);
    } else {
      console.log(`Successfully wrote to file ${fileName}`);
    }
  });
}
const lenght2 = filesName.length;
// const lenght2 = filesName.slice(0, 20).length * words.length;
// const lenght2 = 1000;
setTimeout(function () {
  writeToFile("resultsSuccess.txt", resultsSuccess.join("\n"));
  writeToFile("resultsError.txt", resultsError.join("\n"));
  console.log("end Tool");
}, (lenght2 + 2) * TIME_FOR_REQ);
console.log(
  `Will take ${((lenght2 + 2) * TIME_FOR_REQ) / 1000} Secund\n`,
  `Start in ${new Date().getHours()}:${new Date().getMinutes()}`,
  `End in ${new Date(
    Date.now() + (lenght2 + 2) * TIME_FOR_REQ
  ).getHours()}:${new Date(
    Date.now() + (lenght2 + 2) * TIME_FOR_REQ
  ).getMinutes()}`
);
