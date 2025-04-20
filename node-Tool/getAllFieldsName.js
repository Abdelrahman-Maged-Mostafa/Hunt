const fs = require("fs");

const { filesName } = require("./burbsuit-gitlab.js");

function extractKeysAndValues(obj) {
  const result = [];

  function recursiveExtract(o) {
    for (const key in o) {
      if (o.hasOwnProperty(key)) {
        result.push({ key, value: o[key] });

        if (typeof o[key] === "object" && o[key] !== null) {
          recursiveExtract(o[key]);
        }
      }
    }
  }

  recursiveExtract(obj);
  return result;
}

function filterNames(arr) {
  return arr.filter((item) => item.key === "name");
}

const allKeysAndValues = extractKeysAndValues(filesName);
const filteredNames = filterNames(allKeysAndValues);
const nameValues = filteredNames.map((item) => item.value);
const filteredNames2 = [...new Set(nameValues)];
console.log(filteredNames2);

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(`Error writing to file ${fileName}:`, err);
    } else {
      console.log(`Successfully wrote to file ${fileName}`);
    }
  });
}
writeToFile("resultsFiledsName.txt", filteredNames2.join("\n"));
// Output: [{ key: 'name', value: 'Root' }, { key: 'name', value: 'Detail 1' }, { key: 'name', value: 'Detail 2' }, { key: 'name', value: 'Detail 3' }, { key: 'name', value: 'Extra Info' }]
