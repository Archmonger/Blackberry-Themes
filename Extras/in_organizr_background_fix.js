/* Created by Blackberry Themes */
// Check if window is open in an iFrame
if (window.location !== window.parent.location) {
	// Change BG image if outside an iFrame
	document.getElementsByTagName("html")[0].style.background = "var(--bg-light) !important";
}