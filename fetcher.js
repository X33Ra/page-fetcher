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

    if (response.statusCode !== 200) {
      console.log('Error:', response.statusMessage);
      return;
    }
    fs.writeFile(filePath, body, (error) => {
      if (error) {
        console.log('Error:', error);
        return;
      }
      
      const fileSize = Buffer.byteLength(body);
      console.log(`Downloaded and saved ${fileSize} bytes to ${filePath}`);
    });
    
  });
};

downloadResource(url, filePath);
