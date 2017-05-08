'use strict';

const yelp = require('yelp-fusion');
var express = require('express');
var app = express();
var path = require('path');

var token = process.env.TOKEN;
const client = yelp.client(token);

// serve static files
app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
app.use('/assets', express.static('assets'));

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
    // ON SUBMIT function needs to have URL that calls /*
});

app.get('/api/*', function(req, res, next) {
    var inputTerm = req.params[0];
    client.search({
        term: inputTerm,
        location: "Houston,TX",
        limit: 15,
    }).then(response => {
        var biz = response.jsonBody.businesses;
        var promises = [];
        var densities = [];
        for (var i = 0; i < 15; i++) {
            var p = densityCalc(inputTerm, biz[i].coordinates.latitude, biz[i].coordinates.longitude);
            promises.push(p);
        };
        Promise.all(promises).then(function(responses) {
            for (var i = 0; i < 15; i++) {
              // now all the biz has a density assigned to it!
                biz[i].density = responses[i].jsonBody.businesses.length;
            }
// so now we are going to try to sort it!
biz.sort(function(a,b){return b.density - a.density});
            // res.send(JSON.stringify(biz, null, 4));
            res.json(biz, null, 4);
        }).catch(e => { // this catches erroes
            console.log(e);
        });
    }).catch(e => { // this catches erroes
        console.log(e);
    });

});

// count length of restaurants nearby
function densityCalc(termIn, latIn, longIn) {
    // return input.name;
    return client.search({
        term: termIn,
        latitude: latIn,
        longitude: longIn,
        radius: 800,
    });
};

// app.listen(8080, function() {
//   console.log('Node app is running on port', app.get('port'));
// });
// const port = 8080;
// app.listen(port, "0.0.0.0");
// console.log('The magic happens on port ' + port);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
