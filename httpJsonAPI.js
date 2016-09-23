var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {
  var parts = url.parse(req.url, true);

  if (req.method =! 'GET')
    return res.end;
  parseTime(time);  
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify);

});

function parseTime(time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  };
}

server.listen(Number(process.argv[2]));
