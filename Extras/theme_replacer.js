// Entry Point
function themeReplacer(tabName, themeInstallString, themeRemoveString) {
    $.getScript('https://archmonger.github.io/Blackberry-Themes/Extras/theme_deleter.js', function() {
        $.getScript('https://archmonger.github.io/Blackberry-Themes/Extras/theme_installer.js', function() {
            themeDeleter(tabName, themeRemoveString);
            themeInstaller(tabName, themeInstallString);
        });
    });
}