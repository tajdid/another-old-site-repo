$(".header-fixed").headroom();

$(document).ready(function(){
  // Target your .container, .wrapper, .post, etc.
  $(".post").fitVids();
});

function recentTrack(e){var t=(new Array).concat(e.recenttracks.track)[0];document.getElementById("recentTrackArtist").innerHTML=t.artist["#text"],document.getElementById("recentTrackTitle").href=t.url,document.getElementById("recentTrackTitle").innerHTML=t.name}