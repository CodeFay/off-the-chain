'use strict';

const yelp = require('yelp-fusion');

//Hide Token later as an environmental variable!
const client = yelp.client("eUu_AJS2XenKGZZrXmgcCfeTZQ7WlepE0eLEXW7Lialmyyv9T-WTey6pVNyyB2eEJ2Q0d8zqaV2zKH3rY5u6N2EZwb3riiGBNcDBAWMoNZhBddCEB3Rq4Z8oHe8NWXYx")

// .click/listen function to get inputs --> API calls

// hardcode for now, but listen for it later
var inputTerm = "Chinese";
var inputLocation = "Houston,TX"

const searchRequest = {
  term: inputTerm,
  location: inputLocation
};

var biz = [];
client.search(
  searchRequest
).then(response => {
  biz = response.jsonBody.businesses;
  // const prettyJson = JSON.stringify(biz[0].name, null, 4);
  // console.log(prettyJson);
  console.log(biz[0].name);
}).catch(e => { // this catches erroes
  console.log(e);
});

// console.log(biz[0].url);
