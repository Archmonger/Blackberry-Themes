// Special thanks to jwilson8767 on Github for this function.
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

// Special thanks to Altay Mazlum and Arun Kumar on StackOverflow for this function.
function urlExists(url) {
	var http = new XMLHttpRequest();
	http.open('HEAD', url, false);
	http.send();
	return http.status != 404;
}

// Special thanks to 3limin4t0r and Tom Gullen on StackOverflow for this function
function urlPatternValid(str) {
	var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
		'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
		'((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
		'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
		'(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
		'(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
	return !!pattern.test(str);
}

// Sets the theme to connect to a tab
function installOrganizrTabTheme(frameName, tabName, theme) {
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
			// Someone closed the iframe, wait for it to exist again
			$(frameName).on("remove", function() {
				themeInstaller(tabName, theme);
			})
		});
}

// Generates the URL for Blackberry themes
function blackberryUrlGenerator(frameName, tabName, themeQuery) {
	var cssFile = themeQuery.slice(2, themeQuery.length).join("_");
	var blackberryUrl = "https://archmonger.github.io/Blackberry-Themes/Themes/Blackberry-" + themeQuery[1].charAt(0).toUpperCase() + themeQuery[1].substring(1).toLowerCase() + "/" + cssFile.toLowerCase() + ".css";
	if (urlPatternValid(blackberryUrl) && urlExists(blackberryUrl)) {
		installOrganizrTabTheme(frameName, tabName, blackberryUrl);
	} else {
		console.log('Theme "' + themeQuery[1] + ' ' + themeQuery[2] + '" does not exist within Blackberry Themes.');
	}
}

// Generates the URL for ThemePark themes
function themeparkUrlGenerator(frameName, tabName, themeQuery) {
	var themeparkUrl = "https://gilbn.github.io/theme.park/CSS/themes/" + themeQuery[2].toLowerCase() + "/" + themeQuery[1].toLowerCase() + ".css";
	if (urlPatternValid(themeparkUrl) && urlExists(themeparkUrl)) {
		installOrganizrTabTheme(frameName, tabName, themeparkUrl);
	} else {
		console.log('Theme "' + themeQuery[2] + ' ' + themeQuery[1] + '" does not exist within Theme Park.');
	}
}

// Entry Point
function themeInstaller(tabName, themeInstallString) {
	var frameName = "#frame-" + tabName;
	// If a string inputted is a URL, install it
	if (urlPatternValid(themeInstallString) && urlExists(themeInstallString)) {
		installOrganizrTabTheme(frameName, tabName, themeInstallString);
	}
	// If the URL is 404, let the user know.
	else if (urlPatternValid(themeInstallString) && !urlExists(themeInstallString)) {
		console.log('The URL "' + themeInstallString + '" resulted in 404 (does not exist).');
	}
	// Not a URL: Check if it exists as a known theme pack
	else {
		themeQuery = themeInstallString.split(" ");
		if (themeQuery[0].toLowerCase() == "blackberry" && themeQuery.length >= 3) {
			blackberryUrlGenerator(frameName, tabName, themeQuery);
		} else if (themeQuery[0].toLowerCase() == "themepark" && themeQuery.length >= 3) {
			themeparkUrlGenerator(frameName, tabName, themeQuery);
		} else if (!(themeQuery.length >= 3)) {
			console.log('"' + themeInstallString + '" is an invalid input. Try again in the <theme_pack> <theme> <service> format.');
		} else {
			console.log('Theme pack "' + themeQuery[0] + '" is an unknown theme pack.');
		}
	}
}
