window.addEventListener('load', function()
{
var video = document.getElementById('video'), 
	vendorUrl =window.URL || window.webkitURL;
navigator.getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

navigator.getMedia({
	video: true,
	audio: false
	}, function(stream){
		//
		video.src = vendorUrl.createObjectURL(stream);
		//video.play();
		var playPromise = document.querySelector('video').play();

// In browsers that don’t yet support this functionality,
// playPromise won’t be defined.
if (playPromise !== undefined) {
  playPromise.then(function() {
    // Automatic playback started!
  }).catch(function(error) {
    // Automatic playback failed.
    // Show a UI element to let the user manually start playback.
  });
}
	},function(error)
	{
		//error.code
	});
});
