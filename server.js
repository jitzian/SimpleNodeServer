//Just a simple request

var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!');
  res.end();
}).listen(3000);


var request = require('request-promise')

//POST
const options = {
  method: 'GET',
  uri: 'https://risingstack.com/'
}

const optionsADS = {
  method: 'POST',

}

// request(optionsADS)
//     .then(function (htmlString) {
//         // Process html...
//         console.log(htmlString);
//     })
//     .catch(function (err) {
//         // Crawling failed...
//         console.log(err);
//     });

function intervalFunction(param){
  console.log('arg was => ' + param);

  request(options)
      .then(function (htmlString) {
          // Process html...
          console.log(htmlString);
      })
      .catch(function (err) {
          // Crawling failed...
          console.log(err);
      });

}
setInterval(intervalFunction, 60000, 'MSG')

function sendMail(){
  var nodemailer = require('nodemailer');


}
