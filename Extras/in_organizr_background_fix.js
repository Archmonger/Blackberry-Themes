if (window.location == window.parent.location) {
    // Change BG image if outside an iFrame
    document.getElementsByTagName("html")[0].style.background = getComputedStyle(document.documentElement).getPropertyValue('--bg-light');
}