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

// Entry Point
function themeDeleter(tabName, themeDeleteString) {
    var frameName = "#frame-" + tabName;
    elementReady(frameName).then(
        (loadCSS) => {
            // Make sure that the bg removal will apply through iframe reload
            $(frameName).on("load", function() { // Frame has been fully loaded and the theme can be removed
                    // If the input was a URL, remove theme.
                    if (urlPatternValid(themeDeleteString)) {
                        var stylesheetHref = 'link[href="' + themeDeleteString + '"]';
                        $(frameName).contents().find(stylesheetHref).prop('disabled', true);
                    }
                    // If the input was a string, check if it exists as a stylesheet
                    else {
                        var sheets = document.getElementById("frame-" + tabName).contentWindow.document.styleSheets,
                            stylesheet = sheets[(sheets.length - 1)],
                            frameName = "#frame-" + tabName;
                        for (var i in document.styleSheets) {
                            if (sheets[i].href && sheets[i].href.indexOf(themeDeleteString) > -1) {
                                console.log(sheets[i].href.toString());
                                var stylesheetHref = 'link[href="' + sheets[i].href.toString() + '"]';

                                // Remove theme
                                $(frameName).contents().find(stylesheetHref).prop('disabled', true);
                                break;
                            }
                        }
                    }
                })
                // Someone closed the iframe, wait for it to exist again.
            $(frameName).on("remove", function() {
                themeDeleter(tabName, themeDeleteString);
            })
        });
}