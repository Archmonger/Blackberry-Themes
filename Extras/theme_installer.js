function elementReady(selector) {
	return new Promise((resolve, reject) => {
		let el = document.querySelector(selector);
		if (el) {
			resolve(el);
		}
		new MutationObserver((mutationRecords, observer) => {
				// Query for elements matching the specified selector
				Array.from(document.querySelectorAll(selector)).forEach((element) => {
					resolve(element);
					// Once we have resolved we don't need the observer anymore.
					observer.disconnect();
				});
			})
			.observe(document.documentElement, {
				childList: true,
				subtree: true
			});
	});
}

function themeInstaller(tabName, themeUrl) {
	var frameName = "#frame-" + tabName;
	// Wait for Organizr to create the iframe
	elementReady(frameName).then(
		(loadJS) => {
			// Make sure that the styling will apply through iframe reload
			$(frameName).on("load", function() {
				// Frame has been fully loaded and the theme can be applied
				console.log(frameName + " detected. Applying theme.");
				var stylesheet = document.createElement("link");
				stylesheet.rel = "stylesheet";
				stylesheet.href = themeUrl;
				$(frameName).contents().find("body").append(stylesheet);
			})
			// iFrame has been deleted, wait for it to exist again.
			$(frameName).on("remove", function() {
				themeInstaller(tabName, themeUrl);
			})
		});
}