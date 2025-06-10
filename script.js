// RedditNAV: Arrow key navigation for Reddit image galleries with shadow DOM support and debug logging

function findButtonInLightbox(label) {
    // Get the lightbox host
    const lightbox = document.querySelector('#shreddit-media-lightbox');
    if (!lightbox) {
        console.log('RedditNAV: lightbox not found');
        return null;
    }
    // Select div[data-testid="lightbox-template"] as a direct child
    const template = lightbox.querySelector('div[data-testid="lightbox-template"]');
    if (!template) {
        console.log('RedditNAV: div[data-testid="lightbox-template"] not found as child of #shreddit-media-lightbox');
        // Log all direct children of #shreddit-media-lightbox
        Array.from(lightbox.children).forEach(child => {
            console.log('RedditNAV: lightbox child:', child.tagName, child.getAttributeNames().reduce((acc, name) => { acc[name] = child.getAttribute(name); return acc; }, {}));
        });
        return null;
    }
    // Find <gallery-carousel>
    const carousel = template.querySelector('gallery-carousel');
    if (!carousel || !carousel.shadowRoot) {
        console.log('RedditNAV: <gallery-carousel> not found in template or has no shadowRoot');
        return null;
    }
    // Log all descendants inside the shadow root of <gallery-carousel>
    Array.from(carousel.shadowRoot.querySelectorAll('*')).forEach(el => {
        console.log('RedditNAV: <gallery-carousel> shadowRoot descendant:', el.tagName, el.getAttributeNames().reduce((acc, name) => { acc[name] = el.getAttribute(name); return acc; }, {}));
    });
    return carousel.shadowRoot.querySelector(`button[aria-label="${label}"]`);
}

document.addEventListener("keydown", function(k) {
    if (k.key === "ArrowRight") {
        const nextBtn = findButtonInLightbox("Next page");
        if (nextBtn) {
            nextBtn.click();
            console.log('RedditNAV: Next button clicked');
        } else {
            console.log('RedditNAV: Next button not found');
        }
    }
    if (k.key === "ArrowLeft") {
        const prevBtn = findButtonInLightbox("Previous page");
        if (prevBtn) {
            prevBtn.click();
            console.log('RedditNAV: Previous button clicked');
        } else {
            console.log('RedditNAV: Previous button not found');
        }
    }
});