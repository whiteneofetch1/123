const { chromium, devices } = require("playwright");

const headlessMode = process.env.headlessMode
const url1 = process.env.site;

const devices1 = [
    "Blackberry PlayBook",
    "Blackberry PlayBook landscape",
    "BlackBerry Z30",
    "BlackBerry Z30 landscape",
    "Galaxy Note 3",
    "Galaxy Note 3 landscape",
    "Galaxy Note II",
    "Galaxy Note II landscape",
    "Galaxy S III",
    "Galaxy S III landscape",
    "Galaxy S5",
    "Galaxy S5 landscape",
    "Galaxy S8",
    "Galaxy S8 landscape",
    "Galaxy S9+",
    "Galaxy S9+ landscape",
    "Galaxy Tab S4",
    "Galaxy Tab S4 landscape",
    "iPad (gen 5)",
    "iPad (gen 5) landscape",
    "iPad (gen 6)",
    "iPad (gen 6) landscape",
    "iPad (gen 7)",
    "iPad (gen 7) landscape",
    "iPad Mini",
    "iPad Mini landscape",
    "iPad Pro 11",
    "iPad Pro 11 landscape",
    "iPhone 6",
    "iPhone 6 landscape",
    "iPhone 6 Plus",
    "iPhone 6 Plus landscape",
    "iPhone 7",
    "iPhone 7 landscape",
    "iPhone 7 Plus",
    "iPhone 7 Plus landscape",
    "iPhone 8",
    "iPhone 8 landscape",
    "iPhone 8 Plus",
    "iPhone 8 Plus landscape",
    "iPhone SE",
    "iPhone SE landscape",
    "iPhone X",
    "iPhone X landscape",
    "iPhone XR",
    "iPhone XR landscape",
    "iPhone 11",
    "iPhone 11 landscape",
    "iPhone 11 Pro",
    "iPhone 11 Pro landscape",
    "iPhone 11 Pro Max",
    "iPhone 11 Pro Max landscape",
    "iPhone 12",
    "iPhone 12 landscape",
    "iPhone 12 Pro",
    "iPhone 12 Pro landscape",
    "iPhone 12 Pro Max",
    "iPhone 12 Pro Max landscape",
    "iPhone 12 Mini",
    "iPhone 12 Mini landscape",
    "iPhone 13",
    "iPhone 13 landscape",
    "iPhone 13 Pro",
    "iPhone 13 Pro landscape",
    "iPhone 13 Pro Max",
    "iPhone 13 Pro Max landscape",
    "iPhone 13 Mini",
    "iPhone 13 Mini landscape",
    "Kindle Fire HDX",
    "Kindle Fire HDX landscape",
    "LG Optimus L70",
    "LG Optimus L70 landscape",
    "Microsoft Lumia 550",
    "Microsoft Lumia 550 landscape",
    "Microsoft Lumia 950",
    "Microsoft Lumia 950 landscape",
    "Nexus 10",
    "Nexus 10 landscape",
    "Nexus 4",
    "Nexus 4 landscape",
    "Nexus 5",
    "Nexus 5 landscape",
    "Nexus 5X",
    "Nexus 5X landscape",
    "Nexus 6",
    "Nexus 6 landscape",
    "Nexus 6P",
    "Nexus 6P landscape",
    "Nexus 7",
    "Nexus 7 landscape",
    "Nokia Lumia 520",
    "Nokia Lumia 520 landscape",
    "Nokia N9",
    "Nokia N9 landscape",
    "Pixel 2",
    "Pixel 2 landscape",
    "Pixel 2 XL",
    "Pixel 2 XL landscape",
    "Pixel 3",
    "Pixel 3 landscape",
    "Pixel 4",
    "Pixel 4 landscape",
    "Pixel 4a (5G)",
    "Pixel 4a (5G) landscape",
    "Pixel 5",
    "Pixel 5 landscape",
    "Moto G4",
    "Moto G4 landscape",
    "Desktop Chrome HiDPI",
    "Desktop Edge HiDPI",
    "Desktop Firefox HiDPI",
    "Desktop Safari",
    "Desktop Chrome",
    "Desktop Edge"
];


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

(async () => {
    const randomize = getRandomInt(devices1.length);
    const devices2 = devices1[randomize];
    const device = devices[devices2];
    const randomize1 = getRandomInt(8900) / 100;
    const randomize2 = getRandomInt(8900) / 100;

    const browser = await chromium.launch({
        headless: headlessMode,
    });
    const context = await browser.newContext({
        ...device,
        permissions: ["geolocation"],
        geolocation: {
            latitude: randomize1,
            longitude: randomize2,
        },
        colorScheme: "dark",
        locale: "en-EN",
    });
    const page = await context.newPage();

    
    await page.goto(url1);
    console.log(device.viewport.height)
    console.log(device.viewport.width)


    console.log("start");
    await page.waitForTimeout(2000);

    for await (num of asyncGenerator()) {
        await page.locator(`a >> nth=${num}`).click()

        for await (num of asyncGenerator1()) {
            const randomizeWidth = getRandomInt(device.viewport.width);
            const randomizeHeight = getRandomInt(device.viewport.height);
            await page.waitForTimeout(500);
            for await (num of asyncGenerator()) {
                await page.mouse.move(randomizeWidth, randomizeHeight);
                await page.mouse.down();
                await page.mouse.move(randomizeWidth + num, randomizeHeight + num);
                await page.mouse.up();
                await page.waitForTimeout(20);
            }
     
            await page.waitForTimeout(2000);
        }
    }

    await context.close();
    await browser.close();
})();

async function* asyncGenerator() {
    let i = 0;
    while (i < 50) {
        yield i++;
    }
}


async function* asyncGenerator1() {
    let i = 0;
    while (i < 5) {
        yield i++;
    }
}

