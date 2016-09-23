var http = require('http');
var bl = require('bl');

http.get(process.argv[2], function(response) {
  response.pipe(bl(function (error, data) {
    if (error)
      return console.error(error);
    data = data.toString();
    console.log(data.length);
    console.log(data);
  }));
});
