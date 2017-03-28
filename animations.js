$( "#plus, #minus" ).on('click', function() {
  $( "#hi" ).animate({
    color: moods[currentPlaylist].textColor,
    backgroundColor: moods[currentPlaylist].color,
    transition: ".3s ease-in-out"
  });
});
