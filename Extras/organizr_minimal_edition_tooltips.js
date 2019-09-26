/* Created by Blackberry Themes */
var allTabsList = $(".allTabsList");
var allGroupsList = $(".allGroupsList");
for (var i = 0; i < allTabsList.length; i++) {
	allTabsList[i].setAttribute("data-tippy-content", allTabsList[i].getAttribute("data-tab-name"))
}
for (var i = 0; i < allGroupsList.length; i++) {
	allGroupsList[i].setAttribute("data-tippy-content", allGroupsList[i].getAttribute("data-group-name"))
}
$("#side-menu>#sign-out").attr("data-tippy-content", "Sign Out");

function summonTippy(classSelector, tippyValues) {
	$.getScript("https://archmonger.github.io/Blackberry-Themes/Resources/popper.js", function() {
		$.getScript("https://archmonger.github.io/Blackberry-Themes/Resources/tippy.js", function() {
			tippy(classSelector, tippyValues);
		});
	});
};

summonTippy(".allTabsList,#side-menu>#sign-out", {
	placement: "right",
	boundary: "window",
	touch: false,
	theme: "bbf"
})

summonTippy(".allGroupsList", {
	placement: "right-start",
	boundary: "window",
	touch: false,
	theme: "bbf",
	offset: "10, 0",
	hideOnClick: false
})