// ==UserScript==
// @name        anonymous-reddit-mobile
// @namespace   youngryan.com
// @description Hides the forced login banner on mobile Reddit.
// @run-at      document-body
// @match       https://reddit.com/*
// @match       https://www.reddit.com/*
// @author      Ryan Young
// ==/UserScript==

(function () {
'use strict';

function deleteGetTheApp() {
  const card = document.querySelector("#configured-xpromo-global_direct_blocking, #configured-xpromo-global_non_direct_blocking");
  if (card !== null) {
    card.remove();
  }
  const {
    classList
  } = document.body;
  // Removing is a performance-intensive operation, so always test first.
  if (classList.contains("rpl-scroll-lock")) {
    classList.remove("rpl-scroll-lock");
  }
}
new MutationObserver(() => setTimeout(deleteGetTheApp, 500)).observe(document.body, {
  attributes: true,
  attributeFilter: ["class"]
});
deleteGetTheApp();

})();
