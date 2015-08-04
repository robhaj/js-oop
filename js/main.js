$(document).ready(function(){
  $('body').append(newSong.create());
  $('body').append(newSong.countName());
  $('body').append(newSong2.create());
  $('body').append(newSong2.countName());

});

var Song = function(songName, bandName){
  this.songName = songName;
  this.bandName = bandName;
};

var newSong = new Song('Tweezer', 'Phish');
var newSong2 = new Song('Sweet Jane', 'The Velvet Underground');

Song.prototype.countName = function() {
  var x = this.songName.split(' ').length;
  switch (x) {
    case 1:
    return ("This song has " +x+ " word in it.");
    default:
    return ("This song has " +x+ " words in it.");
  }
};

Song.prototype.create = function(){
  var element = $('<p></p>');
  element.text(this.songName + ' by ' + this.bandName);
  return element;
};
