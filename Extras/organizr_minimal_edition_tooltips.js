/* Created by Blackberry Themes */
var allTabsList = $(".allTabsList");
var allGroupsList = $(".allGroupsList");

// Provide all the things with tippy content values
for (var i = 0; i < allTabsList.length; i++) {
	allTabsList[i].setAttribute("data-tippy-content", allTabsList[i].getAttribute("data-tab-name"))
}
for (var i = 0; i < allGroupsList.length; i++) {
	allGroupsList[i].setAttribute("data-tippy-content", allGroupsList[i].getAttribute("data-group-name"))
}
$("#side-menu>#sign-out").attr("data-tippy-content", "Sign Out");

// Helper function
function summonTippy(classSelector, tippyValues) {
	$.getScript("https://archmonger.github.io/Blackberry-Themes/Resources/popper.js", function() {
		$.getScript("https://archmonger.github.io/Blackberry-Themes/Resources/tippy.js", function() {
			tippy(classSelector, tippyValues);
		});
	});
};

// Put Tippys on the logout btns, tab btns, and group btns.
summonTippy(".allTabsList,#side-menu>#sign-out", {
	placement: "right",
	boundary: "window",
	touch: false,
	theme: "bbf",
	sticky: true
})
summonTippy(".allGroupsList", {
	placement: "right-start",
	boundary: "window",
	touch: false,
	theme: "bbf",
	offset: "10, 0",
	hideOnClick: false,
	sticky: true
})