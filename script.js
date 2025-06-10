function findButtonInLightbox(label) {
    const lightbox = document.querySelector('#shreddit-media-lightbox');
    if (!lightbox) return null;
    const template = lightbox.querySelector('div[data-testid="lightbox-template"]');
    if (!template) return null;
    //this waste a lot of time to be honest.
    const carousel = template.querySelector('gallery-carousel');
    if (!carousel || !carousel.shadowRoot) return null;
    return carousel.shadowRoot.querySelector(`button[aria-label="${label}"]`);
}
//i really need a job.

document.addEventListener("keydown", function(k) {
    if (k.key === "ArrowRight") {
        const nextBtn = findButtonInLightbox("Next page");
        if (nextBtn) {
            nextBtn.click();
        }
    }
    if (k.key === "ArrowLeft") {
        const prevBtn = findButtonInLightbox("Previous page");
        if (prevBtn) {
            prevBtn.click();
        }
    }
});

//it worked woohoo.
//if you are reading this code please upvote or star whatever we called this thing in github.