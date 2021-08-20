const request = require('request');
const fs = require('fs');


const path = process.argv.slice()[3];
const domain = process.argv.slice()[2];



request(domain, (error, response, body) => {
  // Print the error if one occurred
  if (error) {
    console.log('error:', error);
  }
  fs.writeFile(`${path}`, body, function(error) {
    if (error) {
      console.log("error:", error);
    } else {
      console.log(`Downloaded and saved ${response.headers["content-length"]} bytes to ${path}`);
    }
  });
});


/* Run the code with 

  node fetcher.js http://www.example.edu/ ./index.html

on the command line.
*/