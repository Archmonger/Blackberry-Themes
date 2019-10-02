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

function themeDeleter(tabName, themeInputString) {
	var frameName = "#frame-" + tabName;
	var stylesheetHref = 'link[href="' + themeInputString + '"]';
	elementReady(frameName).then(
		(loadJS) => {
			// Make sure that the styling will apply through iframe reload
			$(frameName).on("load", function() {
				// Frame has been fully loaded and the theme can be applied
				$(frameName).contents().find(stylesheetHref).prop('disabled', true);
			})
			// Someone closed the iframe, wait for it to exist again.
			$(frameName).on("remove", function() {
				themeDeleter(tabName, themeInputString);
			})
		});
}

// Consider this later
// var sheets = document.styleSheets,
//   stylesheet = sheets[(sheets.length - 1)],
//   frameName = "#frame-" + tabName;
//
// for (var i in document.styleSheets) {
//   if (sheets[i].href && sheets[i].href.indexOf(sheetName + ".css") > -1) {
//     stylesheet = sheets[i];
//     break;
//   }
// }