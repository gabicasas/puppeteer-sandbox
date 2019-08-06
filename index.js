'use strict';
const vm = require('vm');

/*const code = `
(function(require) {
  const http = require('http');

  http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello World\\n');
  }).listen(8124);

  console.log('Server running at http://127.0.0.1:8124/');
})`;

vm.runInThisContext(code)(require);*/
const http = require('http');
var url = require('url');

http.createServer((req, resp) => {
    var method = req.method;

    // If post.
    if("POST" == method)
    {
        var postData = '';

        // Get all post data when receive data event.
        req.on('data',  (chunk)=>{

            postData += chunk;

        });

        req.on('end', ()=>{

            console.log("Client post data : " + postData);

            // Parse the post data and get client sent username and password.
            var postDataObject = JSON.parse(postData);
            let filename=postDataObject.filename;
            let code=postDataObject.code;
            vm.runInThisContext('(function(require) {'+code+'})')(require);
            resp.end('++'+JSON.stringify(postDataObject)+'++');
        })
    }

  }).listen(8124);

  console.log('Server running at http://127.0.0.1:8124/');
