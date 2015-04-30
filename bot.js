var Nightmare = require('nightmare');
var nightmare = new Nightmare();

var email = 'jamiecollinson@gmail.com';
var password = '';
var type = 'people';
var query = 'recruiter';
var filter = ['United Kingdom'];
var pages = 2;

nightmare

  // Goto linkedin
  .goto('http://linkedin.com')

  // Login to LinkedIn.
  .type('input#session_key-login', email)
  .type('input#session_password-login', password)
  .click('input#signin')
  .wait()
  .exists('.headline', function() {
    console.log('logged in');
  })
  .evaluate(function() {
    console.log(document.getElementById('main-search-box'));
  })

  // Search for something and set the types of results.

  // Filter the search results for 'United States'.

  // Crawl results for two pages.

  // Execute commands.
  .run();
