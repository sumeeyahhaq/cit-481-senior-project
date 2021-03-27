//If iframe player is playing and user scrolls away player stops
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//Youtube iframe API
var player;
function onYouTubeIframeAPIReady() {
	player = new YT.Player("player", {
		events: {
			onStateChange: onPlayerStateChange,
		},
	});
}

//Gets the status of the player
function onPlayerStateChange(event) {
	getPlayStatus(event.data);
}

//Checks if player playing or stopped and adds event listener
function getPlayStatus(playerStatus) {
	if (playerStatus === 1) {
		videoPause();
		document.addEventListener("scroll", videoPause);
	}

	//Checks if player is in viewpoint and pauses video
	function videoPause() {
		var inView = youtubeVideoViewPoint();
		if (!inView) player.pauseVideo();
	}
}

//Checks if player is in view point
function youtubeVideoViewPoint() {
	const playerID = document.getElementById("player");
	if (typeof jQuery === "function" && playerID instanceof jQuery)
		playerID = playerID[0];
	var rect = playerID.getBoundingClientRect();
	if (
		rect.top >= 0 &&
		rect.bottom <=
			(window.innerHeight + 1 || document.documentElement.clientHeight + 1)
	) {
		return true;
	} else {
		return false;
	}
}
