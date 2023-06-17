/**
 * Rules:
It should take two command line arguments:
1. a URL
2. a local file path
3. It should download the resource at the URL to the local path on your machine.
4. Upon completion, it should print out a message like Downloaded and saved 1235 bytes to ./index.html.
*/
const fs = require('fs');
const { get } = require('request');

const [url, filePath] = process.argv.slice(2);

const downloadResource = (url, filePath) => {
  get(url, (error, response, body) => {
    if (error) {
      console.log('Error:', error);
      return;
    }


  });
};

downloadResource(url, filePath);
