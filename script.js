function func(label) {
    const light = document.querySelector('#shreddit-media-lightbox');
    if (!light) return null;
    const temp = light.querySelector('div[data-testid="lightbox-template"]');
    if (!temp) return null;
    const carousel = temp.querySelector('gallery-carousel');
    if (!carousel || !carousel.shadowRoot) return null;
    return carousel.shadowRoot.querySelector(`button[aria-label="${label}"]`);
}

document.addEventListener("keydown", function(k) {
    if (k.key === "ArrowRight") {
        const nextBtn = func("Next page");
        if (nextBtn) {
            nextBtn.click();
        }
    }
    if (k.key === "ArrowLeft") {
        const prevBtn = func("Previous page");
        if (prevBtn) {
            prevBtn.click();
        }
    }
});

//it worked woohoo.
