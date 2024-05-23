(function() {
	// Adding a delay before chacking
	setTimeout(function(){
		// Check if the desktop interstitial is open
		var interstitial = window.document.querySelectorAll("*[class^=\"desktop_app_interstitial\"]")[0]
		if(interstitial) {
			chrome.runtime.sendMessage({closeThis: true});
		}
	}, 8000);
})();
