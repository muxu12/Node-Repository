const http = require('http');

const server = http.createServer((req, res) => {
  // res means response from the server to user request
  
  if(req.url === '/'){
    res.end('welcome to my homepage');
  }
  
  else if(req.url === '/about') {
    res.end('Here is our short history');
  }
  else {
  res.end(
    `
    <h1>Oops!!!</h1>
    <p>We can't seem to find that page</p>

    <a href = '/'> back to home </a>
    `
   
    
  )}
  
})

server.listen(5000);