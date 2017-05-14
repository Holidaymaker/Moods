// initializes moods array of Playlist objects
var moods = [shhhh, morningTea, dreamin, darkBlue, feels, mutedYe, mellows,
            terminallyChill, steadied, groovin, vibesForWeeks, schemin, elevated,
            stirThePot, upAndAway, blurred, headDancin, twistTheKnife, wooooo];

// gives starting point of moods array (0-18 available)
var currentPlaylist = 12; //vibesForWeeks
/*
* index of song being played
* resets to 0 for each playlist
* resets to 0 when end of songList array is met
*/
var songNumber = 0;

// creates <audio> element
var songPlayer = document.createElement('audio');
document.body.appendChild(songPlayer);
songPlayer.id = 'songPlayer';
songPlayer.loop = true;

setPlaylist(); // initializes first playlist

var plusButton = document.getElementById("plus");
var minusButton = document.getElementById("minus");
var spotifyLinkButton = document.getElementById("spotify");
var nextSongButton = document.getElementById("nextSong");

plusButton.addEventListener("click", function() { incrementPlaylist(1); });
minusButton.addEventListener("click", function() { incrementPlaylist(-1); });
nextSongButton.addEventListener("click", function() { nextSong(); });
spotifyLinkButton.addEventListener("click", function() { // opens Spotify playlist
  var win = window.open(moods[currentPlaylist].playlistURL, '_blank');
  win.focus();
});

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
  songNumber = 0;
  // changes HTML to match current playlist
  setPlaylist();
}

function setPlaylist() {
  // sets the playlist text
  document.getElementById('playlist').innerHTML =
    moods[currentPlaylist].playlistName;
    // sets song to play
    setSong();
    setClass();
}

// plays the new song preview
function setSong() {
  songPlayer.src = moods[currentPlaylist].songList[songNumber].songSource;
  songPlayer.load();
  songPlayer.addEventListener("canplay",
    function() {
      songPlayer.play();
    }, true);
}

function setClass() {
    document.getElementById('hi').className =
    moods[currentPlaylist].cssClass;
}
