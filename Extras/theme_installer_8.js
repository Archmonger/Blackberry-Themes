// Groot JS themeInstaller
reset = 0;
console.log('Starting check');
window.onload = themeInstaller("Plex", "https://archmonger.github.io/Blackberry-Themes/Themes/Blackberry-Shadow/bbs_plex_in_organizr.css");

function themeInstaller(tabName, themeUrl) {
	console.log('resetting for the ' + reset + ' time');
	reset++;
	var frameName = "#frame-" + tabName;
	if ($(frameName).contents().find("head").length) {
		console.log('found frame');
		console.log('setting theme now');
		var link = document.createElement("link");
		link.rel = "stylesheet";
		link.href = themeUrl;
		console.log(link);
		$(frameName).contents().find("head").append(link);
	} else if (reset <= 20000000) {
		console.log('resetting for: ' + frameName + ' using url: ' + themeUrl);
		setTimeout(function() {
			themeInstaller(tabName, themeUrl);
		}, 250);
	}
}