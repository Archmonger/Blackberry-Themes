/* Created by Blackberry Themes */
var tippyProfilePicValues = {
	placement: "right-start",
	boundary: "window",
	touch: false,
	theme: "bbf",
	offset: "10, 0",
	hideOnClick: false,
	sticky: true
}
var tippyDropdownValues = {
	placement: "right",
	boundary: "window",
	touch: false,
	theme: "bbf",
	sticky: true
}

// Helper functions
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

function summonTippy(classSelector, tippyValues) {
	$.getScript("https://archmonger.github.io/Blackberry-Themes/Resources/popper.js", function() {
		$.getScript("https://archmonger.github.io/Blackberry-Themes/Resources/tippy.js", function() {
			tippy(classSelector, tippyValues);
		});
	});
};

// Delete the top nav an append the important stuff into the sidenav
$('head').append('<link rel="stylesheet" href="https://archmonger.github.io/Blackberry-Themes/Resources/organizr_minimal_edition_remove_topnav.css" type="text/css" />');
$('.navbar-right').find('.dropdown:last').clone().prependTo($('#side-menu'));
$('i[class="ti-reload"]').parent().parent().clone().prependTo($('#side-menu .dropdown-menu'));

// Add tooltips to all the new sidenav items
$("#side-menu>.dropdown").attr("data-tippy-content", $(".dropdown>.profile-pic>b").first().text()); // Profile Button
$("#side-menu>.dropdown").attr("class", "dropdown ME-tooltips ME-profile-pic");
summonTippy(".ME-tooltips.ME-profile-pic", tippyProfilePicValues);

// Create tooltips for all the instantly available buttons
$("#side-menu>.dropdown>.dropdown-menu>li>.dropdown-toggle>.ti-reload").parent().parent().attr("class", "ME-tooltips ME-fastload") // Reload button
$("#side-menu>.dropdown>.dropdown-menu>li>.dropdown-toggle>.ti-reload").parent().parent().attr("data-tippy-content", "Reload")
$("#side-menu>.dropdown>.dropdown-menu>li>a>.ti-settings").parent().parent().attr("class", "append-menu ME-tooltips ME-fastload") // Settings button
$("#side-menu>.dropdown>.dropdown-menu>li>a>.ti-settings").parent().parent().attr("data-tippy-content", "Account Settings")
$("#side-menu>.dropdown>.dropdown-menu>li>a>.ti-lock").parent().parent().attr("class", "ME-tooltips ME-fastload") // lock button
$("#side-menu>.dropdown>.dropdown-menu>li>a>.ti-lock").parent().parent().attr("data-tippy-content", "Lock Screen")
$("#side-menu>.dropdown>.dropdown-menu>li>a>.fa-sign-out").parent().parent().attr("class", "ME-tooltips ME-fastload") // Logout button
$("#side-menu>.dropdown>.dropdown-menu>li>a>.fa-sign-out").parent().parent().attr("data-tippy-content", "Logout")
summonTippy(".ME-tooltips.ME-fastload", tippyDropdownValues);

// Wait for slow loaders separately
elementReady("#side-menu>.dropdown>.dropdown-menu>li>a>.fa-envelope").then( // Email button
	(elementsAreLoaded) => {
		$("#side-menu>.dropdown>.dropdown-menu>li>a>.fa-envelope").parent().parent().attr("class", "ME-tooltips ME-email")
		$("#side-menu>.dropdown>.dropdown-menu>li>a>.fa-envelope").parent().parent().attr("data-tippy-content", "E-Mail Center")
		summonTippy(".ME-tooltips.ME-email", tippyDropdownValues);
	});
elementReady("#side-menu>.dropdown>.dropdown-menu>li>a>.fa-ticket").then( // Invite button
	(elementsAreLoaded) => {
		$("#side-menu>.dropdown>.dropdown-menu>li>a>.fa-ticket").parent().parent().attr("class", "ME-tooltips ME-invite")
		$("#side-menu>.dropdown>.dropdown-menu>li>a>.fa-ticket").parent().parent().attr("data-tippy-content", "Manage Invites")
		summonTippy(".ME-tooltips.ME-invite", tippyDropdownValues);
	});
elementReady("#side-menu>.dropdown>.dropdown-menu>li>a>.mdi-bug").then( // Debug button
	(elementsAreLoaded) => {
		$("#side-menu>.dropdown>.dropdown-menu>li>a>.mdi-bug").parent().parent().attr("class", "ME-tooltips ME-debug")
		$("#side-menu>.dropdown>.dropdown-menu>li>a>.mdi-bug").parent().parent().attr("data-tippy-content", "Debug Area")
		summonTippy(".ME-tooltips.ME-debug", tippyDropdownValues);
	});
elementReady("#side-menu>.dropdown>.dropdown-menu>li>a>.fa-rocket").then( // Speedtest button
	(elementsAreLoaded) => {
		$("#side-menu>.dropdown>.dropdown-menu>li>a>.fa-rocket").parent().parent().attr("class", "ME-tooltips ME-speedtest")
		$("#side-menu>.dropdown>.dropdown-menu>li>a>.fa-rocket").parent().parent().attr("data-tippy-content", "Test Server Speed")
		summonTippy(".ME-tooltips.ME-speedtest", tippyDropdownValues);
	});
elementReady("#side-menu>.dropdown>.dropdown-menu>li>a>.fa-comments-o").then( // Chat button
	(elementsAreLoaded) => {
		$("#side-menu>.dropdown>.dropdown-menu>li>a>.fa-comments-o").parent().parent().attr("class", "ME-tooltips ME-chat")
		$("#side-menu>.dropdown>.dropdown-menu>li>a>.fa-comments-o").parent().parent().attr("data-tippy-content", "Chat")
		summonTippy(".ME-tooltips.ME-chat", tippyDropdownValues);
	});