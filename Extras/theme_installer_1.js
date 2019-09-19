function themeInstaller(tabName, themeUrl) {
	var frameName = "#frame-" + tabName;
	var styleSheet = '<link rel="stylesheet" href="' + themeUrl + '" type="text/css" />'
	$(frameName).load(function() {
		$(frameName).contents().find("head").append(styleSheet);
	});
}