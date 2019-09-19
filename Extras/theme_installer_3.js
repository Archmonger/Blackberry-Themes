function themeInstaller(tabName, themeUrl) {
	var frameName = "#frame-" + tabName;
	var styleSheet = '<link rel="stylesheet" href="' + themeUrl + '" type="text/css" />'
	if ($(frameName).length) {
		$(frameName).contents().find("head").append(styleSheet);
	} else {
		setTimeout(function() {
			themeInstaller(tabName, themeUrl);
		}, 250);
	}
};