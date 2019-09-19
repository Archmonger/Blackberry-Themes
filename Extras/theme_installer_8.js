// Groot JS themeInstaller
function themeInstaller(tabName, themeUrl) {
	var frameName = "#frame-" + tabName;
	console.log('Searching for ' + frameName + ' to apply stylesheet ' + themeUrl);
	if ($(frameName).contents().find("head").length) {
		console.log(frameName + ' detected. Applying theme.');
		var stylesheet = document.createElement("link");
		stylesheet.rel = "stylesheet";
		stylesheet.href = themeUrl;
		$(frameName).contents().find("head").append(stylesheet);
	} else {
		setTimeout(function() {
			themeInstaller(tabName, themeUrl);
		}, 100);
	}
}