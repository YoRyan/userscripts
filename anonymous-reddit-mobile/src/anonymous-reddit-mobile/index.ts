import './meta.js?userscript-metadata';

// Hides the "Get the app" card.
new MutationObserver(records => {
    records
        .map(({ addedNodes }) => Array.from(addedNodes))
        .flat()
        .filter(({ nodeType }) => nodeType === Node.ELEMENT_NODE)
        .forEach(node => {
            const el = node as Element;
            switch (el.getAttribute("id")) {
                case "configured-xpromo-global_direct_blocking":
                case "configured-xpromo-global_non_direct_blocking":
                    el.remove();
                    break;
                default:
                    break;
            }
        });
}).observe(
    document.querySelector("shreddit-app") as Element,
    { childList: true, subtree: false }
);

// Removes the page scroll lock.
new MutationObserver(() => {
    const { classList } = document.body;
    if (classList.contains("rpl-scroll-lock")) {
        classList.remove("rpl-scroll-lock");
    }
}).observe(document.body, { attributes: true, attributeFilter: ["class"] });
