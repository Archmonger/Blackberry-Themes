function waitToExist(selector, callback) {
	if ($(selector).length) {
		callback();
	} else {
		setTimeout(function() {
			waitForEl(selector, callback);
		}, 100);
	}
};

function themeInstaller(tabName, themeUrl) {
	var frameName = "#frame-" + tabName;
	var styleSheet = '<link rel="stylesheet" href="' + themeUrl + '" type="text/css" />'
	waitToExist(frameName, function() {
		$(frameName).contents().find("head").append(styleSheet);
	});
}