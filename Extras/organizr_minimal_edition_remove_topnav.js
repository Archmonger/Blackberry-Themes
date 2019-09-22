/* Created by Blackberry Themes */
$('head').append('<link rel="stylesheet" href="https://archmonger.github.io/Blackberry-Themes/Resources/organizr_minimal_edition_remove_topnav.css" type="text/css" />');
$('.navbar-right').find('.dropdown:last').clone().prependTo($('#side-menu'));
$('a[onclick="reloadCurrentTab();"]').parent().clone().prependTo($('#side-menu .dropdown-menu'));

// Add tooltips to the sidenav profile picture
$("#side-menu>.dropdown").attr("data-tippy-content", $(".dropdown>.profile-pic>b").first().text());
$("#side-menu>.dropdown").attr("class", "dropdown sidenav-profile");
$.getScript("https://archmonger.github.io/Blackberry-Themes/Resources/popper.js", function() {
	$.getScript("https://archmonger.github.io/Blackberry-Themes/Resources/tippy.js", function() {
		tippy(".sidenav-profile", {
			placement: "right-start",
			boundary: "window",
			touch: false,
			theme: "bbf",
			offset: "10, 0"
		});
	});
});