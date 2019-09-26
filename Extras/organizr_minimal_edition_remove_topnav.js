/* Created by Blackberry Themes */
var tippyProfilePicValues = {
	placement: "right-start",
	boundary: "window",
	touch: false,
	theme: "bbf",
	offset: "10, 0",
	hideOnClick: false
}
var tippyDropdownValues = {
	placement: "right",
	boundary: "window",
	touch: false,
	theme: "bbf"
}

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
$('a[onclick="reloadCurrentTab();"]').parent().clone().prependTo($('#side-menu .dropdown-menu'));

// Add tooltips to all the new sidenav items
$("#side-menu>.dropdown").attr("data-tippy-content", $(".dropdown>.profile-pic>b").first().text()); // Profile Button
$("#side-menu>.dropdown").attr("class", "dropdown ME-tooltips ME-Profile-Pic");
summonTippy(".ME-tooltips.ME-Profile-Pic", tippyProfilePicValues);

// Create tooltips for all the instantly available buttons
$("#side-menu>.dropdown>.dropdown-menu>li>.dropdown-toggle>.ti-reload").parent().parent().attr("class", "ME-Tooltips ME-EasyLoad") // Reload button
$("#side-menu>.dropdown>.dropdown-menu>li>.dropdown-toggle>.ti-reload").parent().parent().attr("data-tippy-content", "Reload")
$("#side-menu>.dropdown>.dropdown-menu>li>a>.ti-settings").parent().parent().attr("class", "append-menu ME-Tooltips ME-EasyLoad") // Settings button
$("#side-menu>.dropdown>.dropdown-menu>li>a>.ti-settings").parent().parent().attr("data-tippy-content", "Account Settings")
$("#side-menu>.dropdown>.dropdown-menu>li>a>.ti-lock").parent().parent().attr("class", "ME-Tooltips ME-EasyLoad") // lock button
$("#side-menu>.dropdown>.dropdown-menu>li>a>.ti-lock").parent().parent().attr("data-tippy-content", "Lock Screen")
$("#side-menu>.dropdown>.dropdown-menu>li>a>.fa-sign-out").parent().parent().attr("class", "ME-Tooltips ME-EasyLoad") // Logout button
$("#side-menu>.dropdown>.dropdown-menu>li>a>.fa-sign-out").parent().parent().attr("data-tippy-content", "Logout")
summonTippy(".ME-Tooltips.ME-EasyLoad", tippyDropdownValues);

// Wait for slow loaders separately
elementReady("#side-menu>.dropdown>.dropdown-menu>li>a>.fa-envelope").then(
	(elementsAreLoaded) => {
		$("#side-menu>.dropdown>.dropdown-menu>li>a>.fa-envelope").parent().parent().attr("class", "ME-tooltips ME-Email") // Email button
		$("#side-menu>.dropdown>.dropdown-menu>li>a>.fa-envelope").parent().parent().attr("data-tippy-content", "E-Mail Center")
		summonTippy(".ME-tooltips.ME-Email", tippyDropdownValues);
	});

elementReady("#side-menu>.dropdown>.dropdown-menu>li>a>.fa-ticket").then(
	(elementsAreLoaded) => {
		$("#side-menu>.dropdown>.dropdown-menu>li>a>.fa-ticket").parent().parent().attr("class", "ME-tooltips ME-Invite") // Invite button
		$("#side-menu>.dropdown>.dropdown-menu>li>a>.fa-ticket").parent().parent().attr("data-tippy-content", "Manage Invites")
		summonTippy(".ME-tooltips.ME-Invite", tippyDropdownValues);
	});

elementReady("#side-menu>.dropdown>.dropdown-menu>li>a>.mdi-bug").then(
	(elementsAreLoaded) => {
		$("#side-menu>.dropdown>.dropdown-menu>li>a>.mdi-bug").parent().parent().attr("class", "ME-tooltips ME-Debug") // Debug button
		$("#side-menu>.dropdown>.dropdown-menu>li>a>.mdi-bug").parent().parent().attr("data-tippy-content", "Debug Area")
		summonTippy(".ME-tooltips.ME-Debug", tippyDropdownValues);
	});

elementReady("#side-menu>.dropdown>.dropdown-menu>li>a>.fa-rocket").then(
	(elementsAreLoaded) => {
		$("#side-menu>.dropdown>.dropdown-menu>li>a>.fa-rocket").parent().parent().attr("class", "ME-tooltips ME-Speedtest") // Speedtest button
		$("#side-menu>.dropdown>.dropdown-menu>li>a>.fa-rocket").parent().parent().attr("data-tippy-content", "Test Server Speed")
		summonTippy(".ME-tooltips.ME-Speedtest", tippyDropdownValues);
	});

elementReady("#side-menu>.dropdown>.dropdown-menu>li>a>.fa-comments-o").then(
	(elementsAreLoaded) => {
		$("#side-menu>.dropdown>.dropdown-menu>li>a>.fa-comments-o").parent().parent().attr("class", "ME-tooltips ME-Chat") // Chat button
		$("#side-menu>.dropdown>.dropdown-menu>li>a>.fa-comments-o").parent().parent().attr("data-tippy-content", "Chat")
		summonTippy(".ME-tooltips.ME-Chat", tippyDropdownValues);
	});