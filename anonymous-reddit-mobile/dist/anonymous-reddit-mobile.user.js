// ==UserScript==
// @name        anonymous-reddit-mobile
// @namespace   youngryan.com
// @description Hides the forced login banner on mobile Reddit.
// @match       https://reddit.com/*
// @match       https://www.reddit.com/*
// @author      Ryan Young
// ==/UserScript==

(function () {
'use strict';

// Hides the "Get the app" card.
new MutationObserver(records => {
  records.map(({
    addedNodes
  }) => Array.from(addedNodes)).flat().filter(({
    nodeType
  }) => nodeType === Node.ELEMENT_NODE).forEach(node => {
    const el = node;
    switch (el.getAttribute("id")) {
      case "configured-xpromo-global_direct_blocking":
      case "configured-xpromo-global_non_direct_blocking":
        el.remove();
        break;
    }
  });
}).observe(document.querySelector("shreddit-app"), {
  childList: true,
  subtree: false
});

// Removes the page scroll lock.
new MutationObserver(() => {
  const {
    classList
  } = document.body;
  if (classList.contains("rpl-scroll-lock")) {
    classList.remove("rpl-scroll-lock");
  }
}).observe(document.body, {
  attributes: true,
  attributeFilter: ["class"]
});

})();
