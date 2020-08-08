// Special thanks to jwilson8767 on Github for this function.
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

elementReady(".ti-close.ti-menu.fa-fw").then(
    (changeBtn) => {
        $(".ti-close.ti-menu.fa-fw").attr("class", "ti-close ti-layout-grid2-alt fa-fw");
    });
