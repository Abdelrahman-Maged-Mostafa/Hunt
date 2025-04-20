const fs = require("fs");
const crypto = require("crypto");

function generateRandomHash() {
  return crypto.randomBytes(16).toString("hex"); // 32 characters: 16 bytes * 2 (hex)
}

function generateHashes(count) {
  const hashes = new Set();
  while (hashes.size < count) {
    const newHash = generateRandomHash();
    hashes.add(newHash);
  }
  return Array.from(hashes);
}

// توليد مليون تجزئة عشوائية
const hashes = generateHashes(1000000);

// حفظ التجزئات في ملف
fs.writeFileSync("hashes.txt", hashes.join("\n"), "utf8");

console.log("تم توليد مليون تجزئة عشوائية وحفظها في ملف hashes.txt");
