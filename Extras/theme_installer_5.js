function themeInstaller(tabName, themeUrl) {
	var frameName = "#frame-" + tabName;
	var styleSheet = '<link rel="stylesheet" href="' + themeUrl + '" type="text/css" />'
	let checkExist = setInterval(() => {
		if ($(frameName).length) {
			$(frameName).contents().find("head").append(styleSheet);
			clearInterval(checkExist);
		}
	}, 100);
};