const pupppeteer= require('puppeteer');

async function getBunnies(){
    const browser= await pupppeteer.launch({
        headless:false,
        defaultViewport:null
    });

    const page = await browser.newPage();
    const url= 'https://nh.craigslist.org/search/sss?query=bunnies&sort=rel&hasPic=1';
    await page.goto(url);

    await page.waitFor('.result-row');

    const results = await page.$$eval('.result-row', rows => {
        return rows.map(row=>{
            const properties={};
            const titleElement= row.querySelector('.result-title');
            properties.title= titleElement.innerText;
            properties.url= titleElement.getAttribute('href');
            return properties;
        });
    });

    for (let index = 0; index < results.length; index++) {
        console.log(results[index]['title'] + '.....'+results[index]['url'] ) ;
        
    }
    browser.close();

}

getBunnies();