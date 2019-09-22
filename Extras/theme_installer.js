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

/* Special thanks to 3limin4t0r and Tom Gullen on StackOverflow for this function */
function validURL(str) {
	var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
		'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
		'((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
		'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
		'(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
		'(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
	return !!pattern.test(str);
}

function themeInstallerHelper(frameName, tabName, theme) {
	elementReady(frameName).then(
		(loadJS) => {
			// Make sure that the styling will apply through iframe reload
			$(frameName).on("load", function() {
				// Frame has been fully loaded and the theme can be applied
				console.log(frameName + " detected. Applying theme: " + theme);
				var stylesheet = document.createElement("link");
				stylesheet.rel = "stylesheet";
				stylesheet.href = theme;
				$(frameName).contents().find("body").append(stylesheet);
			})
			// Someone closed the iframe, wait for it to exist again.
			$(frameName).on("remove", function() {
				themeInstaller(tabName, theme);
			})
		});
}

function themeInstaller(tabName, themeInputString) {
	var frameName = "#frame-" + tabName;
	// If a string inputted is a URL
	if (validURL(themeInputString)) {
		// Install the the theme
		themeInstallerHelper(frameName, tabName, themeInputString);
	}
	// If a string inputted is not a URL, check if it exists as a known theme.
	else {
		// Check values stored within Theme Installer's json file to see if the string exists
		let xhr = new XMLHttpRequest();
		xhr.open('GET', 'https://archmonger.github.io/Blackberry-Themes/Resources/theme_installer.json');
		xhr.onreadystatechange = function() {
			if (xhr.readyState !== 4) return;
			if (xhr.status === 200) {
				var themesList = Object.entries(JSON.parse(xhr.responseText));
				var discoveredLink = "";
				for (theme of themesList) {
					if (theme[0] == themeInputString.toLowerCase()) {
						discoveredLink = theme[1];

						// Install the theme
						themeInstallerHelper(frameName, tabName, discoveredLink);
					}
				}
			} else {
				// request error
				console.log('HTTP error', xhr.status, xhr.statusText);
			}
		};
		xhr.send();
	}
}