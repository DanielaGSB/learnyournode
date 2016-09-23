var http = require('http');
var bl = require('bl');
var count = 0;
var results = [];

function httpGet(index) {
  http.get(process.argv[2 + index], function(response) {
  response.pipe(bl(function (error, data) {
    if (error)
      return console.error(error);

    results[index] = data.toString();
    count++

    if (count==3)
      printResults();
    }));
  });
}

for (var i=0; i<3; i++)
  httpGet(i);

function printResults() {
  for (var i=0; i<3; i++)
    console.log(results[i]);
}
