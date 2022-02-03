(function () {
  window.addEventListener("load", () => {
    const interstitial = window.document.querySelector(
      '*[class^="desktop_app_interstitial"]'
    );

    if (interstitial) {
      chrome.runtime.sendMessage({ closeFigmaTab: true });
    }
  });
})();
