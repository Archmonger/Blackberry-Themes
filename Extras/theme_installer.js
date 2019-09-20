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
					//Once we have resolved we don't need the observer anymore.
					observer.disconnect();
				});
			})
			.observe(document.documentElement, {
				childList: true,
				subtree: true
			});
	});
}

var retries = 0; // Amount of times the script has checked if the tab is fully loaded
var retryTime = 1; // Time in MS for how often to check if the tab is loaded.

function themeInstaller(tabName, themeUrl) {
	var frameName = "#frame-" + tabName;
	console.log('Searching for ' + frameName + ' to apply stylesheet ' + themeUrl);

	elementReady(frameName).then(
		(loadJS) => {
			if ($(frameName).contents().find("head>title").length && $(frameName).contents().find("html>body").length) {
				// Frame is fully loaded and the theme can be applied
				console.log(frameName + ' detected. Applying theme.');
				var stylesheet = document.createElement("link");
				stylesheet.rel = "stylesheet";
				stylesheet.href = themeUrl;
				$(frameName).contents().find("body").append(stylesheet);
			} else if (retries < 1500) {
				setTimeout(function() {
					// Wait for the tab to be loaded before attempting to apply the theme
					retries++;
					themeInstaller(tabName, themeUrl);
					if (retries == 500) {
						// Slow down upon excessive retry attempts
						retryTime = 250;
					}
				}, retryTime);
			} else {
				console.log("Blackberry Theme Installer has reached the maximum amount of retries for " + tabName + ". Giving up.");
			}
		});
};