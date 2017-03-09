// gives starting point of moods array (0-18 available)
var currentPlaylist = 0;

// Playlist constructor function, determines properties of playlist objects
function Playlist(playlistName, color) {
  this.playlistName = playlistName;
  this.color = color;
}

// initializes each playlist object
var shhhh = new Playlist('Shhhh', '#426C99');
var mhmmmm = new Playlist('Mhmmmm', '#FFADA9');
var darkBlue = new Playlist('Dark Blue', '#0D3556');
var dreamin = new Playlist('Dreamin', '#7A1941');
var mutedYe = new Playlist('Muted, Ye', '#ADB7C1');
var mellows = new Playlist('Mellows', '#DB413F');
var feels = new Playlist('Feels', '#E7D4FF');
var terminallyChill = new Playlist('Terminally Chill', '#154A25');
var steadied = new Playlist('Steadied', '#FFFCE9');
var schemin = new Playlist('Schemin', '#340054');
var elevated = new Playlist('Elevated', '#FFE766');
var groovin = new Playlist('Groovin', '#2C2A2D');
var vibesForWeeks = new Playlist('Vibes for Weeks', '#F9FA57');
var stirThePot = new Playlist('Stir the Pot', '#71777F');
var upAndAway = new Playlist('Up & Away', '#EA4900');
var blurred = new Playlist('Blurred', '#AEB88D');
var headDancin = new Playlist('Head Dancin', '#76FFCB');
var twistTheKnife = new Playlist('Twist the Knife', '#CC1500');
var wooooo = new Playlist('Wooooo', '#FF0086');

// initializes moods array of Playlist objects
var moods = [shhhh, mhmmmm, darkBlue, dreamin, mutedYe, mellows, feels,
            terminallyChill, steadied, schemin, elevated, groovin, vibesForWeeks
            stirThePot, upAndAway, blurred, headDancin, twistTheKnife, wooooo];

// increments the playlist up or down based on the magnitude of number
function incrementPlaylist(number) {
  currentPlaylist += number;

  // ensures currentPlaylist does not leave the bounds of the moods array
  if (currentPlaylist < 0) {
    currentPlaylist = 0;
  } else if (currentPlaylist >= moods.length){
    currentPlaylist = moods.length - 1;
  }

  // sets new playlist title and color 
  document.getElementById('playlist').innerHTML = moods[currentPlaylist];
  document.getElementById('hi').style.backgroundColor = moods[currentPlaylist];
}
