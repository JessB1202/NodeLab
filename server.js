const http = require("http");
const ranQuotes = require("./randomQuotes.js");

http.createServer((req, res) => {

  var randomQuote = ranQuotes[Math.floor(Math.random()*ranQuotes.length)]

  res.setHeader("Content-Type", "application/json");
  res.writeHead(200);
  res.write(JSON.stringify(randomQuote));
  res.end()
}).listen(3000);