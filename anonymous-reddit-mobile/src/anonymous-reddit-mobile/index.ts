import './meta.js?userscript-metadata';

function deleteGetTheApp() {
    const card = document.querySelector(".configured-xpromo-bottom-sheet");
    if (card !== null) {
        card.remove();
    }

    const { classList } = document.body;
    // Removing is a performance-intensive operation, so always test first.
    if (classList.contains("rpl-scroll-lock")) {
        classList.remove("rpl-scroll-lock");
    }
}

new MutationObserver(() => setTimeout(deleteGetTheApp, 500))
    .observe(document.body, { attributes: true, attributeFilter: ["class"] });
deleteGetTheApp();
