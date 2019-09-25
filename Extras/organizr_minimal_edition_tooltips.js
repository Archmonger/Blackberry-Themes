/* Created by Blackberry Themes */
var sidenavElements = $(".allTabsList");
for (var i = 0; i < sidenavElements.length; i++) {
	sidenavElements[i].setAttribute("data-tippy-content", sidenavElements[i].getAttribute("data-tab-name"))
}
$("#side-menu>#sign-out").attr("data-tippy-content", "Sign Out");

$.getScript("https://archmonger.github.io/Blackberry-Themes/Resources/popper.js", function() {
	$.getScript("https://archmonger.github.io/Blackberry-Themes/Resources/tippy.js", function() {
		tippy(".allTabsList,#side-menu>#sign-out", {
			placement: "right",
			boundary: "window",
			touch: false,
			theme: "bbf"
		});
	});
});