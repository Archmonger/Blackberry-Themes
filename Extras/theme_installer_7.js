function themeInstaller(tabName, themeUrl) {
	console.log('resetting for the ' + reset + ' time');
	reset++;
	var frameName = "#frame-" + tabName;
	var styleSheet = '<link rel="stylesheet" href="' + themeUrl + '" type="text/css" />'
	if ($(frameName).contents().find("head").length) {
		$(frameName).contents().find("head").append(styleSheet);
	} else if (reset <= 200000) {
		setTimeout(function() {
			themeInstaller(tabName, themeUrl);
		}, 250);
	}
}