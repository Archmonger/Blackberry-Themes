/* Created by Blackberry Themes */
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

$('head').append('<link rel="stylesheet" href="https://archmonger.github.io/Blackberry-Themes/Resources/organizr_minimal_edition_remove_topnav.css" type="text/css" />');
$('.navbar-right').find('.dropdown:last').clone().prependTo($('#side-menu'));
$('a[onclick="reloadCurrentTab();"]').parent().clone().prependTo($('#side-menu .dropdown-menu'));

// Add tooltips to the sidenav items

elementReady("#side-menu>.dropdown>.dropdown-menu>li>a>.fa-envelope, #side-menu>.dropdown>.dropdown-menu>li>a>.fa-ticket").then(
	(elementsAreLoaded) => {
		$("#side-menu>.dropdown").attr("data-tippy-content", $(".dropdown>.profile-pic>b").first().text()); // Profile Button
		$("#side-menu>.dropdown>.dropdown-menu>li>.dropdown-toggle>.ti-reload").parent().parent().attr("class", "ME-tooltips") // Reload button
		$("#side-menu>.dropdown>.dropdown-menu>li>.dropdown-toggle>.ti-reload").parent().parent().attr("data-tippy-content", "Reload")
		$("#side-menu>.dropdown>.dropdown-menu>li>a>.ti-settings").parent().parent().attr("class", "append-menu ME-tooltips") // Settings button
		$("#side-menu>.dropdown>.dropdown-menu>li>a>.ti-settings").parent().parent().attr("data-tippy-content", "Account Settings")
		$("#side-menu>.dropdown>.dropdown-menu>li>a>.fa-envelope").parent().parent().attr("class", "ME-tooltips") // Email button
		$("#side-menu>.dropdown>.dropdown-menu>li>a>.fa-envelope").parent().parent().attr("data-tippy-content", "E-Mail Center")
		$("#side-menu>.dropdown>.dropdown-menu>li>a>.fa-ticket").parent().parent().attr("class", "ME-tooltips") // Invite button
		$("#side-menu>.dropdown>.dropdown-menu>li>a>.fa-ticket").parent().parent().attr("data-tippy-content", "Manage Invites")
		$("#side-menu>.dropdown>.dropdown-menu>li>a>.ti-lock").parent().parent().attr("class", "ME-tooltips") // lock button
		$("#side-menu>.dropdown>.dropdown-menu>li>a>.ti-lock").parent().parent().attr("data-tippy-content", "Lock Screen")
		$("#side-menu>.dropdown>.dropdown-menu>li>a>.mdi-bug").parent().parent().attr("class", "ME-tooltips") // Debug button
		$("#side-menu>.dropdown>.dropdown-menu>li>a>.mdi-bug").parent().parent().attr("data-tippy-content", "Debug Area")
		$("#side-menu>.dropdown>.dropdown-menu>li>a>.fa-sign-out").parent().parent().attr("class", "ME-tooltips") // Logout button
		$("#side-menu>.dropdown>.dropdown-menu>li>a>.fa-sign-out").parent().parent().attr("data-tippy-content", "Logout")

		$("#side-menu>.dropdown").attr("class", "dropdown ME-tooltips");
		$.getScript("https://archmonger.github.io/Blackberry-Themes/Resources/popper.js", function() {
			$.getScript("https://archmonger.github.io/Blackberry-Themes/Resources/tippy.js", function() {
				tippy(".ME-tooltips", {
					placement: "right-start",
					boundary: "window",
					touch: false,
					theme: "bbf",
					offset: "10, 0"
				});
			});
		});
	});