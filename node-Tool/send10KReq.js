const axios = require("axios");
const fs = require("fs");

const { filesName } = require("./burbsuit-Hone.js");

const TIME_FOR_REQ = 300;
const resultsError = [];
const resultsSuccess = [];
let i = 0;
// const filesName = mood.slice(0, 1);
//${el.toLowerCase()}
console.log(filesName.length);
const headers = {
  Cookie:
    "mutiny.user.token=bd5f4652-688a-49c1-af70-698a90e088b0; _biz_uid=1705f2d25c414aedff4c22c6cec0b6b3; _biz_nA=22; _biz_pendingA=%5B%5D; _biz_flagsA=%7B%22Version%22%3A1%2C%22ViewThrough%22%3A%221%22%2C%22Mkto%22%3A%221%22%2C%22XDomain%22%3A%221%22%2C%22Frm%22%3A%221%22%7D; _mkto_trk=id:194-VVC-221&token:_mch-gitlab.com-cceeda93e9899cca5abad35eb850c01e; OptanonConsent=isGpcEnabled=0&datestamp=Sun+Dec+29+2024+18%3A55%3A00+GMT%2B0200+(Eastern+European+Standard+Time)&version=202407.2.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=f47dd499-616d-4fe6-a78a-142f7a06918b&interactionCount=1&isAnonUser=1&landingPath=NotLandingPage&groups=C0001%3A1%2CC0003%3A1%2CC0002%3A1%2CC0004%3A1&AwaitingReconsent=false; __q_state_q2kjzSUxjtgnCEEB=eyJ1dWlkIjoiYTdiYmQyM2ItYzdiMy00NDZmLTkzOWMtNjg5YTUxZjI4OTk2IiwiY29va2llRG9tYWluIjoiZ2l0bGFiLmNvbSIsImFjdGl2ZVNlc3Npb25JZCI6bnVsbCwic2NyaXB0SWQiOiIxNTUwMDkyMTY2NDI2MTI1MzU5Iiwic3RhdGVCeVNjcmlwdElkIjp7IjE1NTAwOTIxNjY0MjYxMjUzNTkiOnsiZGlzbWlzc2VkIjpudWxsLCJzZXNzaW9uSWQiOm51bGx9fSwibWVzc2VuZ2VyRXhwYW5kZWQiOm51bGwsInByb21wdERpc21pc3NlZCI6dHJ1ZSwiY29udmVyc2F0aW9uSWQiOiIxNTU2NDU4MDQ5NTc1MzMwODQ0In0=; _sp_id.6b85=91b94ff9-6584-43a1-abc4-adc58302a4c1.1733615547.61.1735491569.1735425859.20d6ab30-e147-4c58-95c4-1c4642e6e482.e4e6ea2f-1b33-4f52-9c32-95690286dd08.8a35e7e5-fe77-4524-9f68-bd4e4277f9f4.1735491287574.17; _ga_ENFH3X7M5Y=GS1.1.1735491301.16.0.1735491355.0.0.0; _ga=GA1.1.1881317030.1733615547; _gcl_au=1.1.560418084.1733615547; _ga_EVTFNG2S5Z=GS1.1.1735491300.10.1.1735491355.5.0.0; _fbp=fb.1.1733615549683.194861728337897065; QuantumMetricUserID=69a8acf6867b31cf1c3fd5f391ffd252; _sp_id.e54d=b958d5af-f713-455e-8f17-5cac23535bd1.1734872945.17.1735491569.1735425851.23d050e3-975f-4950-b0e6-e6a7a241ead4.4af333cc-7df8-4c9f-8e78-32d7029512a7.8d0046cc-9a22-4ae5-ab80-3eeed15ade4f.1735491284261.17; known_sign_in=am1kK1VheXEyUm5BNUx2SHdodHNxb1oxKzlUTVRlTFJFbGRNL3JEZjh5Uy81V2R1UHdNVXNxRk05UTl6Y2xIWTJoc2lOSHg2ak1IeUptYUIxZFdSRW05SldGYWYrSUVqeElqbFlhQ2toTlZ0eFFyUE9uWTArUVl3T0hESk5PZzlVQUJ3SkpXUS9aZndQNThCU0dEVWxnPT0tLU9qRHVaaFlac1FkK2ZhdDVNN1dOVmc9PQ%3D%3D--8a0b135ff48614f3ccf119a5738706c73db9ebd5; ph_phc_14SWLen9KrmOgEyG0IBxnHJjggvNt9tQCFO1W2Vzpyx_posthog=%7B%22distinct_id%22%3A%220193f032-3f99-7a57-8549-ab6bd2b45e76%22%2C%22%24sesid%22%3A%5B1734901736229%2C%220193f032-3f97-7df5-b8ce-5275d6e51609%22%2C1734901645207%5D%7D; _cfuvid=UjFBi5966.pKr.QDVYk6DZrjPH6xzI_UnB0es_f9NA0-1735491298065-0.0.1.1-604800000; _rdt_uuid=1733615547359.c97be6f6-168e-4099-a791-13b17580f4c1; _rdt_em=0000000000000000000000000000000000000000000000000000000000000001; preferred_language=en; event_filter=all; _sp_ses.e54d=*; _sp_ses.6b85=*; cf_clearance=s0qM2dgUDU6RMfjlMEPNZPeXcMLOBFU9jSSg4u47h4k-1735491288-1.2.1.1-vao9_xFkYE2rHBOiYMbkNKgmjEhBaU8nvpFF8v_axQGg3eYbgdJ9LfUihOhtUoSue3VdazDIpaqN3VXQlcrlfQHUenp.yGnUs73Drqzn10uiYO3jX6TOH2F.TItOLpqo3bkAOgbmRBsi2PSeU4cbfeJw.h_5jp1D_lny6vK79pkgqpeexvApMFbHViMVpudQ_48eMb8PYJqsPDcFJ6_USo1b5isAe_6ko_L.8xnxx8BFP9J2T8r5EW7GQ2oeM1mpN54V0R1.SjdVygYXizzaTKYlaUsT14PeBBmiVAxlgg.ObmKx23UBYvANGFRGanAIBtJv4glYWGlUfi_FM4Ka.IdHoEEYOYdYQE.DA5fHtCNLHhd0wt3pIeiDIz2vFkTo2eS2y0olL6TOI_ln2hEwPg; _gitlab_session=0a827a25ce9d9c1271c43f60a472e814; _uetsid=304528a0c55511efb6204f74f7408723; _uetvid=51a13020b4f611ef97193573033750aa",
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

const url = "https://gitlab.com/pedo.pedo/kont/-/branches";

filesName.forEach(async (el, index) => {
  const data = {
    authenticity_token:
      "DqiEHl7zE7oO-JGzxGMN6e9QKkC5eYBqF6zH4PodeMvEt4-DBFEjgD_YI9K4YIpHxj0abcOk9TBuAEPHLcQrWw",
    branch_name: `poor-branch-for-big-name-to-try-git-more-data-branch-poor-branch-for-big-name-to-try-git-more-data-branch-poor-branch-for-big-name-to-try-git-more-data-branch-poor-branch-for-big-name-to-try-git-more-data-branch${
      index + 1002
    }`,
    ref: "main",
  };

  // إرسال الطلب باستخدام axios
  setTimeout(function () {
    axios
      .post(url, data, { headers })
      .then((response) => {
        if (!JSON.stringify(response.data).includes("errors")) {
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
            console.log(`Error ${i}: ${response.status} , ${el}  , RES:
${JSON.stringify(response.data)}`);
          }
        }
      })
      .catch((error) => {
        i++;
        resultsError.push(
          `Error ${i}: ${error.status} , ${el} , RES:
${JSON.stringify(error.data)}`
        );
        console.log(error.status, el);
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
