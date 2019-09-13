var children = $(".allTabsList");
for (var i = 0; i < children.length; i++) {
	children[i].setAttribute("data-tippy-content", children[i].getAttribute("data-tab-name"))
}

$.getScript('https://unpkg.com/popper.js@1', function() {
	$.getScript('https://unpkg.com/tippy.js@4', function() {
		tippy(".allTabsList", {
			placement: "right",
			boundary: "window",
			touch: false,
			theme: "bbf"
		});
	});
});