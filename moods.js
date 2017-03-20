// gives starting point of moods array (0-18 available)
var currentPlaylist = 12; //vibesForWeeks

// Playlist constructor function, determines properties of playlist objects
function Playlist(playlistName, color, songName, songKey, songPreviewUrl) {
  this.playlistName = playlistName;
  this.color = color;
  this.songName = songName;
  this.songKey = songKey;
  this.songPreviewUrl = songPreviewUrl;
}

// initializes each playlist object
var shhhh = new Playlist(
    'Shhhh',
    '#426C99',
    'Angel Olsen - Iota',
    '6PfVYOsL3S9vgGRjZqVV5Z',
    "https://p.scdn.co/mp3-preview/a6eb14a1427ff438e774bfd76fec38d32de047ea?cid=null");
var mhmmmm = new Playlist(
    'Mhmmmm',
    '#FFADA9',
    'Sufjan Stevens - Redford (for Yia-Yia and Pappou)',
    '6c96Nkxc8clVSlWNyvgzdD',
    "https://p.scdn.co/mp3-preview/8e4711e8c7322ad5346e68e9dd2ee279c7f43b7d?cid=null");
var darkBlue = new Playlist(
    'Dark Blue',
    '#0D3556',
    'Dirty Projectors - Spirit-Future Medley',
    '5I0vlenG2spEGJx8UIGI6v',
    "https://p.scdn.co/mp3-preview/d9d0773b1afba19ccab49756c470e7c7858ea7a1?cid=null");
var dreamin = new Playlist(
    'Dreamin',
    '#7A1941',
    'Flying Lotus - Intro//A Cosmic Drama',
    '61z0V2sucJ90PkegVA0up3',
    "https://p.scdn.co/mp3-preview/4f6855ecaf57d2d955e1445c1661d70fc155f526?cid=null");
var mutedYe = new Playlist(
    'Muted, Ye',
    '#ADB7C1',
    'Mndsgn - Hiking',
    '3VOCKz5JZhWloQnapxHfTP',
    "https://p.scdn.co/mp3-preview/c19c90cb21dc0edf5543348d1e8ad3c5a4ed531d?cid=null");
var mellows = new Playlist(
    'Mellows',
    '#DB413F',
    'Mac DeMarco - The Stars Keep on Calling My Name',
    '6B3bNP0x4vyKM9aYWRvzVf',
    "https://p.scdn.co/mp3-preview/91418fe5a85506cd6bc145e850d73a21585ac2bd?cid=null");
var feels = new Playlist(
    'Feels',
    '#E7D4FF',
    'Niko - These Days',
    '2ZRBKVRMQ9OK4EeTaMHHSY',
    "https://p.scdn.co/mp3-preview/365a79c64bf2fde43757dea7ef3b1483329eabe2?cid=null");
var terminallyChill = new Playlist(
    'Terminally Chill',
    '#154A25',
    'Huey - Earl Sweatshirt',
    '3iut542DAj1c44VzyA6CpN',
    "https://p.scdn.co/mp3-preview/f88070ca609d798e3ce1dce89c036c5a4f8ed910?cid=null");
var steadied = new Playlist(
    'Steadied',
    '#FFFCE9',
    'The Beatles - Her Majesty',
    '6UCFZ9ZOFRxK8oak7MdPZu',
    "https://p.scdn.co/mp3-preview/23e262b75073c3dfe735527eaf4aa91eb2e48f2f?cid=null");
var schemin = new Playlist(
    'Schemin',
    '#340054',
    'Clap! Clap! - Rainy Souls, Gloomy Futures',
    '6bSHAd4Nhg0wRsAXl4cZ8S',
    "https://p.scdn.co/mp3-preview/bcb6a652933539b91b47c5551a0c8896a0eb2566?cid=null");
var elevated = new Playlist(
    'Elevated',
    '#FFE766',
    'Photay - No Sass',
    '3ARXsO3ByxhfiFhI4bzohB',
    "https://p.scdn.co/mp3-preview/8b34046d4cf974f84ccc69e6ba5c1d511b8bed53?cid=null");
var groovin = new Playlist(
    'Groovin',
    '#2C2A2D',
    'Already - Anderson .Paak',
    '0YOTE8vEGduSABT8QE55rK',
    "https://p.scdn.co/mp3-preview/dba20eb4e3d3a6dfb8100f607011b988865a5e9d?cid=null");
var vibesForWeeks = new Playlist(
    'Vibes for Weeks',
    '#F9FA57',
    'Neon Indian - Deadbeat Summer',
    '0O3YOl3BI4iKDByiTNvk1a',
    "https://p.scdn.co/mp3-preview/427de3ae88745dc35ee9e6737bd10b209b4f5699?cid=null");
var stirThePot = new Playlist(
    'Stir the Pot',
    '#71777F',
    'A$AP Rocky - Excuse Me',
    '3I8MbKRkS2IBDuslhCS3iT',
    "https://p.scdn.co/mp3-preview/587c3681aac2da9736c18e055bbc4afb6d5ee268?cid=null");
var upAndAway = new Playlist(
    'Up & Away',
    '#EA4900',
    'Vampire Weekend - Cousins',
    '1p5fFes80K9IPnZFqNca53',
    "https://p.scdn.co/mp3-preview/bed57f48e889e0142408187ceaadb0036b13cc56?cid=null");
var blurred = new Playlist(
    'Blurred',
    '#AEB88D',
    'Arca - Brokeup',
    '7pQyoXUiVOptxs9FuA6wOX',
    "https://p.scdn.co/mp3-preview/90351beb3a2c4cd26bb65eb8b9db96fbdb4cb14f?cid=null");
var headDancin = new Playlist(
    'Head Dancin',
    '#76FFCB',
    'KAYTRANADA - LITE SPOTS',
    '5NjNYbL0eI1khtqmRRMd5W',
    "https://p.scdn.co/mp3-preview/654e7c82ae94db23940cc2452a03dab8d1605f6b?cid=null");
var twistTheKnife = new Playlist(
    'Twist the Knife',
    '#CC1500',
    'Death Grips - You Might Think He Loves You for Your Money...',
    '6xKQQTR4pQVAKok4J4lzMt',
    "https://p.scdn.co/mp3-preview/1d7b2d3f3202cd0cfc84962e25fa1e8b42e13512?cid=null");
var wooooo = new Playlist(
    'Wooooo',
    '#FF0086',
    'Flux Pavilion, Riff Raff - Who Wants to Rock',
    '56SjL1T75yJ8yzvLUEGUXv',
    "https://p.scdn.co/mp3-preview/f68c70c18158738facd26eb3704cacc2332b5d7a?cid=null");

// initializes moods array of Playlist objects
var moods = [shhhh, mhmmmm, darkBlue, dreamin, mutedYe, mellows, feels,
            terminallyChill, steadied, schemin, elevated, groovin, vibesForWeeks,
            stirThePot, upAndAway, blurred, headDancin, twistTheKnife, wooooo];

// initializes first playlist
setPlaylist();

var plusButton = document.getElementById("plus");
var minusButton = document.getElementById("minus");
plusButton.addEventListener("click", function() { incrementPlaylist(1); });
minusButton.addEventListener("click", function() { incrementPlaylist(-1); });

// increments the playlist up or down based on the magnitude of number
function incrementPlaylist(number) {
  currentPlaylist += number;

  // ensures currentPlaylist does not leave the bounds of the moods array
  if (currentPlaylist < 0) {
    currentPlaylist = 0;
    return;
  } else if (currentPlaylist >= moods.length){
    currentPlaylist = moods.length - 1;
    return;
  }
  // changes HTML to match current playlist
  setPlaylist();
}

function setPlaylist() {
  // sets the playlist text
  document.getElementById('playlist').innerHTML =
    moods[currentPlaylist].playlistName;
  // sets the backgroundColor | Matt, commenting this out so the jQuery below can do its thang.
  // document.getElementById('hi').style.backgroundColor =
  // moods[currentPlaylist].color;

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
  songPlayer.src = moods[currentPlaylist].songPreviewUrl;
  songPlayer.load();
  songPlayer.addEventListener("canplay",
    function() {
      songPlayer.play();
    }, true);
}

$( "#plus, #minus" ).on('click', function() {
  $( "#hi" ).animate({
    color: moods[currentPlaylist].textColor,
    backgroundColor: moods[currentPlaylist].color,
    transition: ".3s ease-in-out"
    
  });
});

