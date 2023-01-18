import puppeteer from "puppeteer";

const takeScreenshot = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://soundcloud.com/prodmxle");
  await page.screenshot({ path: "soundcloud.png" });

  await page.waitForSelector(".infoStats__statLink");
  const followers = await page.evaluate(() => {
    return document
      ?.querySelector(".infoStats__statLink")
      ?.getAttribute("title");
  });

  await browser.close();
  return followers;
};

export default takeScreenshot;
