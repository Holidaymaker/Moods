// initializes moods array of Playlist objects
var moods = [shhhh, mhmmmm, darkBlue, dreamin, mutedYe, mellows, feels,
            terminallyChill, steadied, schemin, elevated, groovin, vibesForWeeks,
            stirThePot, upAndAway, blurred, headDancin, twistTheKnife, wooooo];

// gives starting point of moods array (0-18 available)
var currentPlaylist = 12; //vibesForWeeks

/*
* index of song being played
* resets to 0 for each playlist
* resets to 0 when end of songList array is met
*/
var songNumber = 0;

// initializes first playlist
setPlaylist();

var plusButton = document.getElementById("plus");
var minusButton = document.getElementById("minus");
//var shuffleSongButton = document.getElementById("shuffleSong");
plusButton.addEventListener("click", function() { incrementPlaylist(1); });
minusButton.addEventListener("click", function() { incrementPlaylist(-1); });
//shuffleSongButton.addEventListener("click", function() { nextSong(); });

// increases the songNumber
function nextSong() {
  songNumber++;
  if (songNumber == moods[currentPlaylist].songList.length) {
    songNumber = 0;
  }
  setSong();
}

// increments the playlist up or down based on the magnitude of number
function incrementPlaylist(incrementAmount) {
  currentPlaylist += incrementAmount;

  // ensures currentPlaylist does not leave the bounds of the moods array
  if (currentPlaylist < 0) {
    currentPlaylist = 0;
    return;
  } else if (currentPlaylist >= moods.length){
    currentPlaylist = moods.length - 1;
    return;
  }
  //

  // changes HTML to match current playlist
  setPlaylist();
}

function setPlaylist() {
  songNumber = 0;
  // sets the playlist text
  document.getElementById('playlist').innerHTML =
    moods[currentPlaylist].playlistName;

  // sets song & creates <audio> element if it doesn't already exist
  var songPlayer = document.getElementById('songPlayer');
  if (!songPlayer) {
    var songPlayer = document.createElement('audio');
    document.body.appendChild(songPlayer);
    songPlayer.id = 'songPlayer';
    songPlayer.loop = true;
    setSong(songPlayer);
  } else {
    setSong(songPlayer);
  }
}

function setSong(songPlayer) {
  songPlayer.src = moods[currentPlaylist].songList[songNumber].songSource;
  songPlayer.load();
  songPlayer.addEventListener("canplay",
    function() {
      songPlayer.play();
    }, true);
}

/* function shufflePlaylist(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
*/

/*
$( "#plus, #minus" ).on('click', function() {
  $( "#hi" ).animate({
    color: moods[currentPlaylist].textColor,
    backgroundColor: moods[currentPlaylist].color,
    transition: ".3s ease-in-out"
  });
});
*/
