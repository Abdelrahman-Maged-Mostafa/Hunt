const axios = require("axios");
const fs = require("fs");

const { filesName } = require("./burbsuit-gitlab.js");

const TIME_FOR_REQ = 200;
const resultsError = [];
const resultsSuccess = [];
let i = 0;
// const filesName = mood.slice(0, 1);
//${el.toLowerCase()}
console.log(filesName.length);
const headers = {
  Cookie: "WeAreHackerOne",
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:133.0) Gecko/20100101 Firefox/133.0",
  Accept: "*/*",
  "Accept-Language": "en-GB,en;q=0.5",
  "Accept-Encoding": "gzip, deflate, br",
  Referer: "https://gitlab.com/poda.poda/back-end",
  "Content-Type": "application/json",
  "X-Csrf-Token":
    "ukkkLNQeLO0eBoAzXLVKlSPHb3-ROl8BxmO8MiDVY45OIbtU8kWo734N0aGnI-vsvnr764cPlq7mCK0d8RdfqA",
  "X-Gitlab-Feature-Category": "groups_and_projects",
  Origin: "https://gitlab.com",
  "Sec-Fetch-Dest": "empty",
  "Sec-Fetch-Mode": "cors",
  "Sec-Fetch-Site": "same-origin",
  Priority: "u=4",
  Te: "trailers",
};

const url = "https://gitlab.com/api/graphql";

filesName.forEach(async (el, index) => {
  const data = {
    query: `query try($id:BoardsEpicListID!){
      epicBoardList(id: $fullPath){
      __typename
      epics{
      nodes{
      discussions{
      nodes{
        ${el}
      }
      }
      }
      }
  }
 }
`,
    variables: { id: "gid://gitlab/Boards::EpicList/13" },
    operationName: "try",
  };

  // إرسال الطلب باستخدام axios
  setTimeout(function () {
    axios
      .post(url, data, { headers })
      .then((response) => {
        if (
          !JSON.stringify(response.data).includes(
            "doesn't exist on type 'Discussion'"
          )
        ) {
          resultsSuccess.push(
            `${response.status} , ${el} , RES:
${JSON.stringify(response.data)}`
          );
          console.log(`${response.status} , ${el}`);
        } else {
          i++;
          resultsError.push(
            `Error ${i}: ${response.status} , ${el}  , RES:
${JSON.stringify(response.data)}`
          );
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
            console.log(`\n Error ${i}: ${response.status} , ${el}  , RES:
${JSON.stringify(response.data)}\n`);
          }
        }
      })
      .catch((error) => {
        i++;
        resultsError.push(
          `Error ${i}: ${error.status} , ${el} , RES:
${JSON.stringify(error.data)}`
        );
        console.log(error);
      });
  }, index * TIME_FOR_REQ);
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
const lenght2 = filesName.length;
// const lenght2 = 1000;
setTimeout(function () {
  writeToFile("resultsSuccess.txt", resultsSuccess.join("\n"));
  writeToFile("resultsError.txt", resultsError.join("\n"));
  console.log("end Tool");
}, (lenght2 + 20) * TIME_FOR_REQ);
console.log(
  `Will take ${((lenght2 + 20) * TIME_FOR_REQ) / 1000} Secund
`,
  `Start in ${new Date().getHours()}:${new Date().getMinutes()}`,
  `End in ${new Date(
    Date.now() + (lenght2 + 20) * TIME_FOR_REQ
  ).getHours()}:${new Date(
    Date.now() + (lenght2 + 20) * TIME_FOR_REQ
  ).getMinutes()}`
);
