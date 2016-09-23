var net = require('net');

function getDateTime() {

  var date = new Date();

  var hour = date.getHours();
  hour = (hour < 10 ? "0" : "") + hour;

  var min  = date.getMinutes();
  min = (min < 10 ? "0" : "") + min;

  var year = date.getFullYear();

  var month = date.getMonth() + 1;
  month = (month < 10 ? "0" : "") + month;

  var day  = date.getDate();
  day = (day < 10 ? "0" : "") + day;

  return year + "-" + month + "-" + day + " " + hour + ":" + min;

}

var server = net.createServer(function (socket) {
  socket.end(getDateTime() + '\n')
})

server.listen(Number(process.argv[2]))
