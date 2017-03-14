
// Use an external Vimeo API jquery plugin to play/pause/mute/unmute and etc 
// Here's the link : https://github.com/jrue/Vimeo-jQuery-API

$(document).ready(function(){

    // initial setup
    // - audio muted/unmuted 
    var isAuidoMuted = true;


    if ( isAuidoMuted === true ){
      $('#vi-video-1-container').attr('data-audio-volume', 0);
      $("#vi-banner-video").vimeo("setVolume", 0);
      $(".audio-control.js-audio-control").removeClass('unmuted').addClass('muted');
    }
    else{
      $('#vi-video-1-container').attr('data-audio-volume', 1);
      $("#vi-banner-video").vimeo("setVolume", 1);
    }
  });
  function muteAudio() {

      audioStatus = $("#vi-video-1-container").attr('data-audio-volume');

      if (audioStatus == 0) {
          // Mute the audio
          $('#vi-video-1-container').attr('data-audio-volume', 1);
          $("#vi-banner-video").vimeo("setVolume", 1);
          $(".audio-control.js-audio-control").removeClass('muted').addClass('unmuted');
      }
      else if (audioStatus == 1){
          // Play the audio
          $('#vi-video-1-container').attr('data-audio-volume', 0);
          $("#vi-banner-video").vimeo("setVolume", 0);
          $(".audio-control.js-audio-control").removeClass('unmuted').addClass('muted');
      }
  }
  $(document).on('click', '.js-audio-control', function(e) {
    muteAudio($(this));
    e.preventDefault();
  });