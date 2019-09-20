/* Created by Blackberry Themes */
var sidenavElements = $(".allTabsList");
for (var i = 0; i < sidenavElements.length; i++) {
	sidenavElements[i].setAttribute("data-tippy-content", sidenavElements[i].getAttribute("data-tab-name"))
}
$.getScript("https://archmonger.github.io/Blackberry-Themes/Resources/popper.js", function() {
	$.getScript("https://archmonger.github.io/Blackberry-Themes/Resources/tippy.js", function() {
		tippy(".allTabsList", {
			placement: "right",
			boundary: "window",
			touch: false,
			theme: "bbf"
		});
	});
});