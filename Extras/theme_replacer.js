// Entry Point
function themeReplacer(tabName, themeInstallString, themeRemoveString) {
	$.getScript('https://archmonger.github.io/Blackberry-Themes/Extras/theme_deleter.js', function() {
		// First variable: Organizr tab name (case sensitive). Second variable: CSS file link or file name.
		$.getScript('https://archmonger.github.io/Blackberry-Themes/Extras/theme_installer.js', function() {
			// First variable: Organizr tab name (case sensitive). Second variable: Theme link or theme name (abbreviated).
			themeDeleter(tabName, themeRemoveString);
			themeInstaller(tabName, themeInstallString);
		});
	});
}
