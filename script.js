function func(label) {
    const light = document.querySelector('#shreddit-media-lightbox');
    if (!light) return null;
    const temp = light.querySelector('div[data-testid="lightbox-template"]');
    if (!temp) return null;
    const carousel = temp.querySelector('gallery-carousel');
    if (!carousel || !carousel.shadowRoot) return null;
    const btn = carousel.shadowRoot.querySelector(`button[aria-label="${label}"]`);
    if (btn && btn.getAttribute('aria-disabled') === 'true') return null;
    return btn;
}

document.addEventListener("keydown", function (k) {
    // Ignore key presses
    const active = document.activeElement;
    if (active && (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA' || active.isContentEditable)) {
        return;
    }

    // Ignore key repeat events from holding down the key
    if (k.repeat) return;

    if (k.key === "ArrowRight") {
        const nextBtn = func("Next page");
        if (nextBtn) {
            k.preventDefault();
            k.stopPropagation();
            k.stopImmediatePropagation();
            nextBtn.click();
        }
    } else if (k.key === "ArrowLeft") {
        const prevBtn = func("Previous page");
        if (prevBtn) {
            k.preventDefault();
            k.stopPropagation();
            k.stopImmediatePropagation();
            prevBtn.click();
        }
    }
}, true);

