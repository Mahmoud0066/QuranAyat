const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");

const FILE_NAME = "quran.json";
let result = {};

if (fs.existsSync(FILE_NAME)) {
  const content = fs.readFileSync(FILE_NAME, "utf-8");
  result = JSON.parse(content);
}

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  for (let sura = 1; sura <= 114; sura++) {
    console.log(`📖 بدء سورة ${sura}`);
    let aya = 1;
    while (true) {
      const url = `https://quran.ksu.edu.sa/tafseer/katheer/sura${sura}-aya${aya}.html`;

      try {
        await page.goto(url, { waitUntil: "domcontentloaded", timeout: 15000 });

        await page.waitForSelector("div#ayat strong.text-success", { timeout: 5000 });

        const verseText = await page.$eval("div#ayat strong.text-success", el =>
          el.textContent.trim()
        );

        if (result[sura] && result[sura].includes(verseText)) {
          console.log(` Surah ${sura} Done - Ayah ${aya - 1}`);
          break;
        }

        if (!result[sura]) result[sura] = [];
        result[sura].push(verseText);


        fs.writeFileSync(FILE_NAME, JSON.stringify(result, null, 2), "utf-8");

        aya++;
        await new Promise(resolve => setTimeout(resolve, 200));
      } catch (err) {
        break;
      }
    }
  }

  await browser.close();
  console.log("All Done");
})();
