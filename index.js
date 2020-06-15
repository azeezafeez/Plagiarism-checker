const puppeteer= require('puppeteer');

async function getBunnies(){
  const browser = await puppeteer.launch({
    headless: false,   
    args: [ '--start-maximized', '--window-size=1920,1080' ],
    defaultViewport: null
});
  const page = await browser.newPage();
  // Pass the User-Agent Test.
  const userAgent = 'Mozilla/5.0 (X11; Linux x86_64)' + 'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Safari/537.36';
  await page.setUserAgent(userAgent);


  // Configure the navigation timeout
  await page.setDefaultNavigationTimeout(0);
  
  // Goto plagriasm checker website
  await page.goto('https://duplichecker.com');

  await page.waitForSelector("#textBox", { visible: true });


  const input =  await page.$$("#textBox");
  
  // Paste our article inside the textarea
  const article = 'BDD stands for Behaviour Driven Development. And TDD stands for Test Driven Development. These are actually not alternatives, even if they are thrown a lot into conversations these days.'+
    'TDD is a way to write code, irrespective of the architecture we implement. BDD is a variation of TDD with Behavioral approach to it. So these are not going to help us in implementing an architecture style.' +
    'Although TDD does help set good standards and forces us to move away from the constraints of MVC as the application grows. We can actually follow TDD with implementing any architecture we want. So they go hand in hand instead of as an alternative.';

  await page.$eval('#textBox', el => el.value = "BDD stands for Behaviour Driv");

  // Click the Check plagiarism button  
  console.log("O' Favour!!  11");

  await page.$eval(".g-recaptcha", el => {
      console.log(el);
      el.click();
  });

  console.log("O' Favour!!");


  // console.log('Submit form');

  // await page.waitForNavigation({waitUntil: 'networkidle2'});  

  // console.log('Wait for nav form');
  
  // await page.$eval('#no_of_rzlt_fond', el => console.log(el.text()));

  
  // Submit the form
  // Get the results from checker
  // Display the results (console.log)

  
  

  // https://www.duplichecker.com/
  // Use headless browser to visit website
  
  // Visit plagiarism checker webiste

  //Paste content from body into plagiarism checker 

  // Submit form on website and get results

  // Render formatted results back as api Response

  //  {
  //      'plagiarismPercent' : 33,
  //      'uniquePercent' : 12,
  //      'sources' : [
  //          "https://scotch.io/tutorials/javascripts-null-coalescing-operator"
  //      ]
  //  }



}

getBunnies();