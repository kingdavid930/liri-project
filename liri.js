require("dotenv").config();
const Spotify = require("node-spotify-api");
const keys= require("./keys")
console.log("keys"+JSON.stringify(keys))
const liri = {
  validCommands: [
    "spotify-this-song",
    "movie-this",
    "do-what-it-says",
    "my-tweets",
  ],
  convertCommandToCall: (command) => command.replace(/-/g, ""),
  captureInput: function () {
    [node, script, action, ...options] = process.argv
    this.action = action;
    this.option = options.join(" ")
  },
  validateCommands: function (command, arr) {
    return arr.includes(command)
  },
  spotifythissong: () => {
    let options = {
      type: 'track',
      query: 'All the Small Things'
    }
    console.log("here"+JSON.stringify(keys.spotify))
    let spotify = new Spotify(keys.spotify);
    spotify.search(options, function (error, data) {
      if (error) throw error
      console.log(data);
    });
  },
  moviethis: () => "movie this went off",
  mytweets: () => "my tweets went off",
  dowhatitsays: () => "do what it says went",
}

liri.captureInput();

if (liri.validateCommands(liri.action, liri.validCommands)) {
  let functor = liri.convertCommandToCall(liri.action)
  let response = liri[functor]()
  console.log(response)
} else {
  console.log("invalid command")
}

let title = process.argv[2];
var request = require('request');

request('http://www.omdbapi.com/?t=' + title + '&apikey=trilogy&r=json', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  console.log('release date:', JSON.parse(body).Year); // Print the HTML for the Google homepage.
});












