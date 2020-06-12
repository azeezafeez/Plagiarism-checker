const pupppeteer= require('puppeteer');

async function getBunnies(){
  const browser= await pupppeteer.launch({
      headless:false,
      defaultViewport:null
  });

  const page = await browser.newPage();

  // Configure the navigation timeout
  await page.setDefaultNavigationTimeout(0);
  
  // Goto plagriasm checker website
  await page.goto('https://www.duplichecker.com');

  await page.waitForNavigation({  waitUntil: 'networkidle0' });  

  console.log('Open a new page');

  // Paste our article inside the textarea
  const article = 'BDD stands for Behaviour Driven Development. And TDD stands for Test Driven Development. These are actually not alternatives, even if they are thrown a lot into conversations these days.'+
    'TDD is a way to write code, irrespective of the architecture we implement. BDD is a variation of TDD with Behavioral approach to it. So these are not going to help us in implementing an architecture style.' +
    'Although TDD does help set good standards and forces us to move away from the constraints of MVC as the application grows. We can actually follow TDD with implementing any architecture we want. So they go hand in hand instead of as an alternative.';
   
  await page.type('input[id=textBox]', 'test comment', {delay: 20});  
  console.log('Set the textarea with text')

  // // Click the Check plagiarism button  
  // await page.$eval('input[type=submit]', el => el.click());

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