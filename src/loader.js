s = document.createElement("script");
s.src = chrome.extension.getURL("src/youtubedl.js");

s.onload = function () {
    this.remove();
};
window.addEventListener("load", function () { (document.head || document.documentElement).appendChild(s) });
;


