'use strict';
const vm = require('vm');
const fs = require('fs');

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
var events = require('events');
var eventEmitter = new events.EventEmitter(); 

const PUPPETEER_OPTS = {
    headless: false,
    slowMo: { default: 300, click: 200, keyup: 10 },
    devtools: true,
}

let paramToSaveData={};

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
            
            vm.runInThisContext('(function(require,paramToSaveData,eventEmitter) {const PUPPETEER_OPTS='+JSON.stringify(PUPPETEER_OPTS)+'; '+code+''+postDataObject.functionName+'(paramToSaveData,eventEmitter)}); ')(require,paramToSaveData);
            //vm.runInThisContext('model()')
            resp.end('++'+JSON.stringify(postDataObject)+'++');
            fs.writeFile(filename, code, function(err) {
                if(err) {
                    return console.log(err);
                }
            
                console.log("The file was saved!");
            }); 
        })
    }

  }).listen(8124);

  setInterval(() => {console.log(paramToSaveData)},10000);

  console.log('Server running at http://127.0.0.1:8124/');
