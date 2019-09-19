// Groot JS themeInstaller
var firstLaunch = 1;

function themeInstaller(tabName, themeUrl) {
	var frameName = "#frame-" + tabName;
	if (firstLaunch) {
		console.log('Searching for ' + frameName + ' to apply stylesheet ' + themeUrl);
		firstLaunch = 0;
	}

	if ($(frameName).contents().find("head>style").length && $(frameName).contents().find("html>body").length) {
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