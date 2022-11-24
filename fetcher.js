const fs = require("fs");
const request = require("request");

const pageFetcher = () => {
  let content = "";
  let number = 0;

  request(process.argv[2], (error, response, body) => {
    for (let letter in body) {
      content += body[letter];
    }
    for (i = 0; i < body.length; i++) {
      number = [i];
    }

    console.log(`Downloaded and saved ${number} bytes to ${process.argv[3]}`);

    fs.writeFile(process.argv[3], content, (err) => {
      if (err) {
        console.error(err);
      }
      // file written successfully
    });
  });
};

pageFetcher();
